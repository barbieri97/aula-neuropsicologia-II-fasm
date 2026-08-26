<script setup>
// Imagem (ou diagrama no slot) com legenda e crédito. A legenda é parte do
// argumento — numa aula, a figura sem legenda vira enfeite.
import { assetUrl } from '../utils/asset.js'
defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  caption: { type: String, default: '' },
  credit: { type: String, default: '' },
})
</script>

<template>
  <figure class="figure">
    <div class="figure-media">
      <img v-if="src" :src="assetUrl(src)" :alt="alt || caption" >
      <slot v-else />
    </div>
    <figcaption v-if="caption || credit" class="figure-caption">
      <span v-if="caption" v-html="caption" />
      <span v-if="credit" class="figure-credit" v-html="credit" />
    </figcaption>
  </figure>
</template>
