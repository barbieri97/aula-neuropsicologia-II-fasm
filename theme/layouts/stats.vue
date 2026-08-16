<script setup>
// De 2 a 4 números em destaque. O número é o argumento; o rótulo diz do que ele
// fala. `columns` força a quantidade de colunas quando o padrão (uma por número)
// não é o que se quer.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const stats = computed(() => fm.stats ?? [])
const cols = computed(() => fm.columns ?? Math.min(stats.value.length || 1, 4))
// Com quatro números o tamanho cai um degrau: quatro algarismos gigantes lado a
// lado não cabem sem o <Fit> encolher tudo, e o rótulo é a primeira vítima.
const size = computed(() => (cols.value >= 4 ? 'lg' : 'xl'))
</script>

<template>
  <SlideFrame>
    <Fit>
      <div class="l-stats" :style="{ '--cols': cols }">
        <Stat
          v-for="(stat, i) in stats"
          :key="i"
          :value="stat.value"
          :unit="stat.unit"
          :label="stat.label"
          :icon="stat.icon"
          :tone="stat.tone"
          :size="size"
        />
      </div>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
