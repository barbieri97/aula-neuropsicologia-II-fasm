<script setup>
// Divisória de parte. Além de anunciar o bloco, ela é o que alimenta a trilha
// de progresso no topo dos slides seguintes — um deck com 3 a 6 `section` ganha
// um mapa de graça, e a turma sabe o tempo todo em que parte está.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <div class="slidev-layout l-section">
    <SlideBg />
    <SectionRail />
    <Ghost :text="fm.index ?? ''" />
    <div class="frame opener">
      <Reveal class="frame-body">
        <Fit>
          <div v-if="fm.index" class="section-index num">{{ fm.index }}</div>
          <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
          <h1 class="t-section" v-html="fm.title" />
          <div v-if="fm.subtitle" class="t-sub" v-html="fm.subtitle" />
          <slot />
        </Fit>
      </Reveal>
      <Foot />
    </div>
  </div>
</template>
