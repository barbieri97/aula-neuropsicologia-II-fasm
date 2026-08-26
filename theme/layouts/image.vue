<script setup>
// Texto + imagem lado a lado. O markdown do corpo é a coluna de texto;
// `side` decide de que lado fica a imagem (padrão: direita).
import { useSlideContext } from '@slidev/client'
import { assetUrl } from '../utils/asset.js'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <SlideFrame>
    <div class="l-image" :class="`img-${fm.side === 'left' ? 'left' : 'right'}`">
      <div class="image-text">
        <Fit><div class="copy"><slot /></div></Fit>
      </div>
      <div class="image-media">
        <img :src="assetUrl(fm.image)" :alt="fm.alt ?? fm.title ?? ''" >
      </div>
    </div>
  </SlideFrame>
</template>
