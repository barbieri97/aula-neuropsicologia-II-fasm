<script setup>
// Uma frase grande, centrada. O slide de pausa: nada compete com a afirmação.
// O corpo é opcional e serve para uma linha de apoio ou um componente solto.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <div class="slidev-layout">
    <SlideBg />
    <SectionRail />
    <Ghost :text="fm.ghost ?? ''" />
    <div class="frame l-statement" :class="{ 'is-aside': fm.aside }">
      <div v-if="fm.aside" class="aside-tag">{{ typeof fm.aside === 'string' ? fm.aside : 'aprofundamento' }}</div>
      <Reveal class="frame-body">
        <Fit>
          <div v-if="fm.kicker" class="kicker bare">{{ fm.kicker }}</div>
          <h2 class="t-display statement-title" v-html="fm.title" />
          <div class="copy statement-body"><slot /></div>
        </Fit>
      </Reveal>
      <Foot />
    </div>
  </div>
</template>
