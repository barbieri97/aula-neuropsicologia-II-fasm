<script setup>
// Abertura assimétrica: o título ancorado embaixo à esquerda, o resto da página
// deixado em branco de propósito. É a alternativa dramática à capa — o vazio faz
// o trabalho que na capa a centralização faz.
//
// `index` vira o numeral gigante e apagado que ocupa o espaço negativo.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <div class="slidev-layout">
    <SlideBg />
    <Ghost :text="fm.index ?? ''" />
    <div class="frame opener l-lead">
      <!-- O corpo vazio empurra o título para a base: o espaço em branco é o
           elemento de composição, não sobra. -->
      <div class="frame-body" />
      <Reveal class="lead-block">
        <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
        <h1 class="t-display" v-html="fm.title" />
        <div v-if="fm.subtitle" class="t-sub" v-html="fm.subtitle" />
        <slot />
      </Reveal>
      <Foot />
    </div>
  </div>
</template>
