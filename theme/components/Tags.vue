<script setup>
// Fileira de etiquetas: uma lista de termos curtos que não merece virar bullets
// (autores de uma corrente, domínios avaliados numa bateria, sistemas afetados).
defineProps({
  items: { type: Array, default: () => [] },
})
</script>

<template>
  <div class="tags">
    <span v-for="(item, i) in items" :key="i" class="tag" v-html="item" />
  </div>
</template>
