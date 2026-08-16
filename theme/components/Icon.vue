<script setup>
import { Icon as Iconify, addCollection } from '@iconify/vue'
import lucide from '@iconify-json/lucide/icons.json'

// A coleção inteira vai no bundle de propósito: assim o ícone é desenhado sem
// nenhuma chamada de rede. Isso importa duas vezes aqui — na exportação do PDF
// (que roda num navegador headless, sem garantia de rede) e na sala de aula
// (onde o wi-fi da faculdade não é premissa de projeto).
addCollection(lucide)

defineProps({
  /** Nome no formato do iconify, p.ex. "lucide:brain". */
  name: { type: String, required: true },
  size: { type: String, default: '1em' },
})
</script>

<template>
  <Iconify :icon="name" :width="size" :height="size" class="icon" />
</template>
