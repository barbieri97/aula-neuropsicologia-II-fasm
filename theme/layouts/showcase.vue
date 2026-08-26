<script setup>
// Herói assimétrico: imagem grande de um lado, título e subtítulo do outro,
// na proporção fixa 43/57. Diferente de `image`, aqui a imagem é o assunto e o
// texto é a legenda dela.
import { useSlideContext } from '@slidev/client'
import { assetUrl } from '../utils/asset.js'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <div class="slidev-layout">
    <SlideBg />
    <SectionRail />
    <div class="frame l-showcase" :class="`show-${fm.side === 'left' ? 'left' : 'right'}`">
      <Reveal class="showcase-text">
        <Fit>
          <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
          <h2 class="t-section" v-html="fm.title" />
          <div v-if="fm.subtitle" class="t-sub" v-html="fm.subtitle" />
          <slot />
        </Fit>
      </Reveal>
      <div class="showcase-media">
        <img :src="assetUrl(fm.image)" :alt="fm.alt ?? fm.title ?? ''" >
      </div>
    </div>
  </div>
</template>
