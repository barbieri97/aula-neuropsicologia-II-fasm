<script setup>
// Gráfico com legenda de rodapé. A `note` fica embaixo e é parte do argumento:
// num deck de aula é ali que se diz de onde vêm os dados — ou que o traçado é
// esquemático, o que é honestidade obrigatória quando a curva é didática.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const chart = computed(() => fm.chart ?? {})
</script>

<template>
  <SlideFrame>
    <div class="l-chart">
      <Plot
        :type="chart.type ?? 'bar'"
        :categories="chart.categories ?? []"
        :series="chart.series ?? []"
        :unit="chart.unit ?? ''"
        :height="chart.height ?? '300px'"
        :horizontal="chart.horizontal ?? true"
      />
      <p v-if="fm.note" class="chart-note" v-html="fm.note" />
      <div class="copy"><slot /></div>
    </div>
  </SlideFrame>
</template>
