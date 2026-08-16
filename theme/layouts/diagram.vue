<script setup>
// Palco emoldurado para um visual: um Mermaid, uma <Figure>, um <Grid>.
// As cores e a fonte do Mermaid vêm de setup/mermaid.ts, que lê os mesmos tokens
// do resto do tema.
//
// Este componente resolve as duas coisas que os `themeVariables` do Mermaid não
// alcançam:
//
//   1. TAMANHO. O Mermaid emite um SVG com `max-width` do tamanho natural do
//      desenho, então um fluxograma pequeno fica minúsculo no meio do palco.
//      Como o SVG tem viewBox, basta soltar esse limite e mandar ocupar 100% —
//      o preserveAspectRatio do próprio SVG cuida de não distorcer.
//   2. DESTAQUE. `highlight` acentua um subconjunto de nós e apaga o resto, que
//      é o que faz o diagrama ter uma tese em vez de mostrar tudo com o mesmo
//      peso.
//
// As duas exigem alcançar dentro do shadow root em que o Slidev renderiza o
// Mermaid — o CSS do documento não entra lá. Por isso injetamos uma folha de
// estilo dentro dele e marcamos os nós por atributo.
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const stage = ref(null)
let stop = null

const highlight = computed(() => (Array.isArray(fm.highlight) ? fm.highlight.map(String) : []))

/**
 * O id que o Mermaid gera é `<hash>-flowchart-<Nome>-<n>`; queremos o <Nome>,
 * que é o que o autor escreveu no diagrama.
 */
function nodeName (id) {
  const m = /(?:^|-)flowchart-(.+)-\d+$/.exec(id || '')
  return m ? m[1] : id || ''
}

function decorate () {
  const host = stage.value?.querySelector('.mermaid')
  const root = host?.shadowRoot
  const svg = root?.querySelector('svg')
  if (!svg) return false

  // --- tamanho ---------------------------------------------------------
  if (!root.querySelector('#fasm-diagram-style')) {
    const style = document.createElement('style')
    style.id = 'fasm-diagram-style'
    style.textContent = `
      svg {
        max-width: none !important;
        width: 100% !important;
        height: 100% !important;
      }
      g.node[data-fasm="off"] { opacity: .3; }
      path[data-fasm="off"] { opacity: .25; }
      g.node[data-fasm="on"] > rect,
      g.node[data-fasm="on"] > polygon,
      g.node[data-fasm="on"] > circle,
      g.node[data-fasm="on"] > path { stroke-width: 2.5px; }
    `
    root.appendChild(style)
  }

  // --- destaque --------------------------------------------------------
  if (!highlight.value.length) return true

  const wanted = new Set(highlight.value)
  const nodes = svg.querySelectorAll('g.node')
  if (!nodes.length) return false

  nodes.forEach((node) => {
    node.setAttribute('data-fasm', wanted.has(nodeName(node.id)) ? 'on' : 'off')
  })

  // A aresta entre dois nós destacados também acende — senão o caminho fica
  // aceso mas interrompido, que lê pior do que não destacar nada.
  svg.querySelectorAll('path.flowchart-link, .edgePaths path').forEach((edge) => {
    // O Mermaid identifica a aresta por id (`L_A_B_0`) ou por classe
    // (`LS-A LE-B`); nem toda versão emite as duas, então tentamos as duas.
    const cls = edge.getAttribute('class') || ''
    const from = /LS-([^\s]+)/.exec(cls)?.[1]
    const to = /LE-([^\s]+)/.exec(cls)?.[1]
    const byId = /^L_(.+?)_(.+?)_\d+$/.exec(edge.id || '')
    const a = from ?? byId?.[1]
    const b = to ?? byId?.[2]
    const lit = a && b && wanted.has(a) && wanted.has(b)
    edge.setAttribute('data-fasm', lit ? 'on' : 'off')
  })

  return true
}

// O Mermaid resolve de forma assíncrona e o momento exato varia com o tamanho do
// diagrama. Em vez de cravar um tempo de espera, tentamos até dar certo, com um
// teto — assim funciona tanto no dev quanto na exportação, que é mais lenta.
function schedule () {
  let tries = 0
  const tick = () => {
    if (decorate() || ++tries > 40) return
    stop = setTimeout(tick, 100)
  }
  tick()
}

onMounted(schedule)
watch(highlight, schedule)
onBeforeUnmount(() => clearTimeout(stop))
</script>

<template>
  <SlideFrame>
    <div class="l-diagram" :class="{ 'is-build': fm.build }">
      <div ref="stage" class="diagram-stage"><slot /></div>
      <p v-if="fm.note" class="diagram-note" v-html="fm.note" />
    </div>
  </SlideFrame>
</template>
