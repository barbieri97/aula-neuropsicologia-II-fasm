<script setup>
// Um número gigante, centrado. O irmão simétrico do `metric`: aqui o algarismo
// é a página inteira e o rótulo é uma linha curta abaixo dele.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <SlideFrame :head="false" center>
    <Fit>
      <div class="l-fact">
        <div v-if="fm.kicker" class="kicker bare">{{ fm.kicker }}</div>
        <div class="fact-figure num">
          {{ fm.value }}<span v-if="fm.unit" class="num-unit">{{ fm.unit }}</span>
        </div>
        <div v-if="fm.label" class="fact-label" v-html="fm.label" />
        <div class="copy"><slot /></div>
      </div>
    </Fit>
  </SlideFrame>
</template>
