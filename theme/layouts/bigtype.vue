<script setup>
// Tipo em sangria: uma frase que preenche o slide. Momento de pontuação, para
// virar a página do argumento. O <Fit> garante que a frase caiba sem que o autor
// precise contar caracteres.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <div class="slidev-layout">
    <SlideBg />
    <SectionRail />
    <div class="frame l-bigtype">
      <Reveal class="frame-body">
        <Fit>
          <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
          <h2 class="t-bigtype" v-html="fm.title" />
          <div v-if="fm.subtitle" class="t-sub" v-html="fm.subtitle" />
          <slot />
        </Fit>
      </Reveal>
      <Foot />
    </div>
  </div>
</template>
