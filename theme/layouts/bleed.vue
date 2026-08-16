<script setup>
// Imagem em sangria com texto sobreposto. O único layout do tema que sai do
// papel branco — por isso ele carrega um véu obrigatório sobre a foto: sem ele,
// a legibilidade do título dependeria da imagem que o autor escolheu.
//
// `duotone` (padrão ligado) dessatura a imagem e a puxa para o azul do tema, o
// que resolve de uma vez o ruído de uma foto colorida atrás de texto.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <div class="slidev-layout l-bleed">
    <div
      class="bleed-image"
      :class="{ duotone: fm.duotone !== false }"
      :style="{ backgroundImage: `url(${fm.image})` }"
      aria-hidden="true"
    />
    <div class="bleed-veil" aria-hidden="true" />
    <SectionRail />
    <div class="frame opener">
      <Reveal class="frame-body">
        <Fit>
          <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
          <div v-if="fm.stat" class="bleed-stat num">{{ fm.stat }}</div>
          <h2 v-if="fm.title" class="t-section" v-html="fm.title" />
          <div v-if="fm.subtitle" class="t-sub" v-html="fm.subtitle" />
          <slot />
        </Fit>
      </Reveal>
      <Foot />
    </div>
  </div>
</template>
