<script setup>
// Encolhe o conteúdo até caber no quadro. Nunca amplia — um slide curto fica no
// tamanho de projeto; um slide longo só diminui o suficiente para não vazar.
//
// A escala é `transform`, que não participa do layout: o scrollHeight continua
// dizendo a altura real do conteúdo, então não existe laço de realimentação
// (encolher → caber → crescer → não caber → …).
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Abaixo disto o texto deixa de ser legível projetado. Chegar aqui não é um bug
// do tema, é um slide que precisa ser dividido — e o aviso abaixo diz isso.
const FLOOR = 0.5

const outer = ref(null)
const inner = ref(null)
const scale = ref(1)
const spills = ref(false)
let ro = null
let warned = false

/** Altura disponível de verdade, em px de layout. */
function avail () {
  // O caminho normal: o próprio elemento já tem altura definida, porque é o item
  // flexível do quadro (.frame-body cresce, cabeçalho e rodapé não).
  const own = outer.value.clientHeight
  if (own > 0) return own

  // Caminho de emergência, para o caso em que a cadeia de alturas percentuais
  // não resolve (acontece em host de exportação de um disparo só) e o
  // clientHeight vem zerado. Reconstruímos a altura a partir do quadro visível,
  // que tem altura definida: o que sobra é o quadro menos o que está acima da
  // área de conteúdo, menos o rodapé, menos o respiro de baixo.
  //
  // Nota para quem for mexer: NÃO troque isto por "quadro menos duas vezes o
  // recuo do topo". Só funcionaria se o cabeçalho e o rodapé tivessem a mesma
  // altura, o que não é o caso aqui — e o erro aparece como um slide encolhido
  // sem motivo, difícil de rastrear porque o texto continua legível.
  const frame = outer.value.closest('.slidev-layout')
  if (!frame) return 0

  let top = 0
  let el = outer.value
  while (el && el !== frame) {
    top += el.offsetTop
    el = el.offsetParent
  }
  const foot = frame.querySelector('.frame-foot')
  const padBottom = parseFloat(getComputedStyle(frame).paddingBottom) || 0
  return Math.max(0, frame.clientHeight - top - (foot?.offsetHeight ?? 0) - padBottom)
}

function fit () {
  if (!outer.value || !inner.value) return
  const av = avail()
  const h = inner.value.scrollHeight
  if (!av || !h) return // slide inativo / ainda sem layout — outro sinal chama de novo
  const ideal = av / h
  scale.value = h > av + 1 ? Math.max(FLOOR, ideal) : 1
  spills.value = ideal < FLOOR
  if (spills.value && !warned) {
    warned = true
    console.warn(
      `[fasm] o conteúdo vaza o slide mesmo na escala mínima (${FLOOR}): ` +
      `${Math.round(h)}px de conteúdo num quadro de ${Math.round(av)}px. Divida este slide.`,
    )
  }
}

onMounted(() => {
  fit()
  ro = new ResizeObserver(fit)
  ro.observe(inner.value)
  ro.observe(outer.value)
  requestAnimationFrame(fit) // depois do primeiro layout
  // As fontes entram depois da montagem e refluem o texto; sem esta remedição a
  // exportação pode fotografar o estado anterior à troca, já com a fonte final.
  if (typeof document !== 'undefined' && document.fonts) document.fonts.ready.then(fit)
})

onBeforeUnmount(() => ro?.disconnect())
</script>

<template>
  <!-- Ao encolher, alinhamos ao topo: a origem da transformação é o topo, então
       o conteúdo reduzido precisa crescer a partir da borda de cima em vez de
       se centrar na caixa antiga (mais alta) e sangrar para fora. -->
  <div
    ref="outer"
    class="fit"
    :data-spills="spills || null"
    :style="{ justifyContent: scale < 1 ? 'flex-start' : null }"
  >
    <div ref="inner" class="fit-inner" :style="{ transform: `scale(${scale})` }">
      <slot />
    </div>
  </div>
</template>
