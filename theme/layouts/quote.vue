<script setup>
// Citação. As aspas gigantes são desenhadas, não digitadas: assim a marca de
// abertura fica fora da coluna de texto e a primeira linha continua alinhada
// com o resto — que é a diferença entre uma citação composta e uma centrada no
// olho.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <div class="slidev-layout">
    <SlideBg />
    <SectionRail />
    <div class="frame l-quote" :class="{ 'is-aside': fm.aside }">
      <div v-if="fm.aside" class="aside-tag">{{ typeof fm.aside === 'string' ? fm.aside : 'aprofundamento' }}</div>
      <Reveal class="frame-body">
        <Fit>
          <blockquote class="quote-mark">
            <p class="quote-text" v-html="fm.quote" />
            <footer v-if="fm.author" class="quote-author" v-html="fm.author" />
          </blockquote>
          <slot />
        </Fit>
      </Reveal>
      <Foot />
    </div>
  </div>
</template>
