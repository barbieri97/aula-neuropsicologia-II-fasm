<script setup>
// Abertura clássica: kicker, título, subtítulo, centrados na página.
// Sem rodapé — a capa não é uma unidade de conteúdo, é a porta.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <div class="slidev-layout">
    <SlideBg />
    <div class="frame opener l-cover">
      <Reveal class="frame-body">
        <Fit>
          <div v-if="fm.kicker" class="kicker bare">{{ fm.kicker }}</div>
          <h1 class="t-display" v-html="fm.title" />
          <!-- A régua sob o título é a assinatura do tema; na capa ela vem
               inteira, e nos slides de conteúdo vira o fio de cabelo do .t-title. -->
          <div class="cover-rule" />
          <div v-if="fm.subtitle" class="t-sub" v-html="fm.subtitle" />
          <slot />
        </Fit>
      </Reveal>
      <Foot />
    </div>
  </div>
</template>
