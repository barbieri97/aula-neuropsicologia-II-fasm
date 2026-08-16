<script setup>
// Glifo gigante e quase invisível ao fundo (`ghost:` no frontmatter). Textura,
// não informação: se some, nada se perde — por isso fica fora da árvore de leitura.
defineProps({ text: { type: [String, Number], default: '' } })
</script>

<template>
  <div v-if="text !== '' && text != null" class="ghost" aria-hidden="true">{{ text }}</div>
</template>
