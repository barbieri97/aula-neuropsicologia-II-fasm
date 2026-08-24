<script setup>
// Folha de consulta: pares termo → descrição, opcionalmente agrupados.
// Num curso, é o slide de glossário e o de bibliografia — o que a turma
// fotografa.
//
// Aceita `groups` (com título por bloco) OU `items` (lista corrida).
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()

// Uma lista solta é tratada como um grupo sem título: assim o template tem um
// caminho só, em vez de dois ramos que precisam ser mantidos em paralelo.
const groups = computed(() => (
  fm.groups?.length ? fm.groups : [{ title: null, items: fm.items ?? [] }]
))

// Uma coluna por grupo, para o olho varrer um assunto de cima a baixo. Acima de
// três colunas a medida fica curta demais para uma referência; com quatro
// grupos, duas colunas de dois dão uma grade mais limpa que 3 + 1 órfão.
const cols = computed(() => (
  groups.value.length === 4 ? 2 : Math.min(groups.value.length, 3)
))

// Quanto texto esta folha carrega, em caracteres.
const load = computed(() => groups.value.reduce((n, g) => (
  n + (g.items ?? []).reduce((m, it) => m + `${it.term ?? ''}${it.desc ?? ''}`.length, 0)
), 0))

// O corpo da lista cai com a densidade. Isto existe porque o <Fit> resolve o
// excesso com `transform: scale`, e escala uniforme encolhe a LARGURA junto: um
// glossário de oito verbetes fica em corpo de slide, mas uma bibliografia de
// quarenta referências desceria ao piso da escala e se espremeria na metade
// esquerda do palco, com o resto vazio. Reduzir a fonte refluí o texto e usa o
// palco inteiro — que é o que uma folha de consulta quer.
//
// A raiz quadrada vem da geometria: texto ocupa ÁREA, que cresce com o quadrado
// do corpo. Dobrar o número de caracteres pede corpo 1/√2 para caber no mesmo
// quadro. A constante foi calibrada exportando as folhas mais cheias do curso e
// medindo quanto o <Fit> ainda precisava encolher: com 620 ele fica em 1.
const ratio = computed(() => {
  if (!load.value) return 1
  return Math.min(1, Math.max(0.5, Math.sqrt(620 / load.value)))
})

// Abaixo deste corpo a folha já é bibliografia, não glossário — e aí a chave
// corre junto da referência em vez de ocupar uma coluna (veja o CSS).
const flowing = computed(() => ratio.value < 0.8)
</script>

<template>
  <SlideFrame>
    <Fit>
      <div
        class="l-reference"
        :class="{ grouped: groups.length > 1, flowing }"
        :style="{ '--ref-cols': cols, '--ref-ratio': ratio }"
      >
        <section v-for="(group, i) in groups" :key="i" class="ref-group">
          <h3 v-if="group.title" class="ref-group-title" v-html="group.title" />
          <dl class="ref-list">
            <template v-for="(item, j) in group.items ?? []" :key="j">
              <dt class="ref-term" v-html="item.term" />
              <dd class="ref-desc" v-html="item.desc" />
            </template>
          </dl>
        </section>
      </div>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
