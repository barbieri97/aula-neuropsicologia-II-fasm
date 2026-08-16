<script setup>
// Fechamento. Centrado, com uma régua curta acima do título — o espelho da capa.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <div class="slidev-layout">
    <SlideBg />
    <div class="frame opener l-end">
      <Reveal class="frame-body">
        <Fit>
          <div class="end-rule" />
          <h1 class="t-display" v-html="fm.title || 'Obrigado'" />
          <div v-if="fm.subtitle" class="t-sub" v-html="fm.subtitle" />
          <div v-if="fm.contact" class="end-contact">{{ fm.contact }}</div>
          <slot />
        </Fit>
      </Reveal>
      <Foot />
    </div>
  </div>
</template>
