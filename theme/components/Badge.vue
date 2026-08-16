<script setup>
// Selo em linha, para um estado curto no meio do texto ("consenso", "em disputa").
const TONES = ['accent', 'good', 'warn', 'bad', 'info', 'muted']

defineProps({
  tone: { type: String, default: 'accent' },
})
</script>

<template>
  <span class="badge" :class="`tone-${TONES.includes(tone) ? tone : 'accent'}`"><slot /></span>
</template>
