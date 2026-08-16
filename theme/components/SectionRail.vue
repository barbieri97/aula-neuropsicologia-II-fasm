<script setup>
// Trilha das partes: a barra segmentada no topo do slide que mostra em qual
// parte da aula a turma está. As partes são delimitadas pelos slides
// `layout: section` (o que vem antes do primeiro é o segmento de abertura).
//
// É calculada por slide, a partir de $page, e não da navegação global: na
// exportação o Slidev renderiza todos os quadros de uma vez com a navegação
// parada no slide 1, e uma trilha lida do $nav sairia igual em todas as páginas
// do PDF.
//
// Some sozinha num deck sem seções — não há o que mapear.
import { computed, toValue } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $page, $nav, $slidev } = useSlideContext()

const slides = computed(() => toValue($nav?.slides) || toValue($slidev?.nav?.slides) || [])
const page = computed(() => Number(toValue($page)) || 1)

/** [{ start, count }] — um item por parte, com o tamanho em slides. */
const sections = computed(() => {
  const out = []
  slides.value.forEach((slide, i) => {
    const layout = slide?.meta?.slide?.frontmatter?.layout
    if (layout === 'section' || out.length === 0) out.push({ start: i + 1, count: 1 })
    else out[out.length - 1].count++
  })
  return out
})

const current = computed(() => {
  let idx = 0
  sections.value.forEach((s, i) => { if (page.value >= s.start) idx = i })
  return idx
})

const show = computed(() => sections.value.length >= 2)
</script>

<template>
  <div v-if="show" class="section-rail" aria-hidden="true">
    <!-- flexGrow proporcional ao tamanho da parte: a barra vira o mapa real do
         encontro, não uma régua de segmentos iguais. -->
    <span
      v-for="(s, i) in sections"
      :key="i"
      :class="{ done: i < current, now: i === current }"
      :style="{ flexGrow: s.count }"
    />
  </div>
</template>
