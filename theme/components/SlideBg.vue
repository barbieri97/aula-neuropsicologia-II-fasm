<script setup>
// Fundo opcional do slide (`bg:` no frontmatter). Aceita as palavras do contrato
// (mesh | aurora | grain | dots | grid) ou um caminho/URL de imagem.
//
// Neste tema os fundos gerados são de propósito quase imperceptíveis — textura
// de papel, não gradiente. E imagem de fundo sempre recebe um véu do papel por
// cima: sem ele, a legibilidade do texto passa a depender da foto que o autor
// escolheu, o que é uma aposta ruim numa sala de aula.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const KINDS = ['mesh', 'aurora', 'grain', 'dots', 'grid']

const { $frontmatter } = useSlideContext()

const bg = computed(() => $frontmatter.bg)
const isImage = computed(() => typeof bg.value === 'string' && !KINDS.includes(bg.value))
</script>

<template>
  <div
    v-if="bg"
    class="slide-bg"
    :class="isImage ? 'bg-image' : `bg-${bg}`"
    :style="isImage ? { backgroundImage: `url(${bg})` } : null"
    aria-hidden="true"
  />
</template>
