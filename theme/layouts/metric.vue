<script setup>
// Um número só, assimétrico: o algarismo gigante de um lado, o contexto do
// outro. É a alternativa ao `fact` centrado — a assimetria dá ao texto de apoio
// espaço para ser uma frase, e não uma etiqueta.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <SlideFrame :head="false" center>
    <Fit>
      <div class="l-metric">
        <div class="metric-figure num">
          {{ fm.value }}<span v-if="fm.unit" class="num-unit">{{ fm.unit }}</span>
        </div>
        <div class="metric-context">
          <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
          <div v-if="fm.label" class="metric-label" v-html="fm.label" />
          <div class="copy"><slot /></div>
        </div>
      </div>
    </Fit>
  </SlideFrame>
</template>
