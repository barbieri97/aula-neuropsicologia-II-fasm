<script setup>
// Rodapé: à esquerda o nome da aula, à direita a paginação. O rótulo vem do
// título do deck e pode ser trocado por slide com `foot:`.
import { computed, toValue } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter, $page, $nav, $slidev } = useSlideContext()

// O título pode trazer marcação de ênfase (<em>, <span class="accent2">); o
// rodapé é texto simples, então tiramos as tags em vez de imprimi-las cruas.
const strip = (s) => String(s ?? '').replace(/<[^>]*>/g, '')

const label = computed(() => strip($frontmatter.foot ?? $slidev?.configs?.title ?? ''))
const total = computed(() => toValue($nav?.total) ?? '')
</script>

<template>
  <div class="frame-foot">
    <span>{{ label }}</span>
    <span class="foot-num">{{ $page }}<span v-if="total"> / {{ total }}</span></span>
  </div>
</template>
