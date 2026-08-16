<script setup>
// Vídeo ou iframe. O vídeo não toca sozinho: numa aula, quem decide a hora de
// começar é quem está falando.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <SlideFrame>
    <div class="l-embed">
      <video v-if="fm.video" class="embed-frame" :src="fm.video" controls playsinline />
      <iframe
        v-else-if="fm.iframe"
        class="embed-frame"
        :src="fm.iframe"
        allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
        allowfullscreen
      />
      <slot />
    </div>
  </SlideFrame>
</template>
