<script setup>
// O mesmo número do <Stat>, dentro de um cartão. Serve quando há vários lado a
// lado e o olho precisa de uma borda para saber onde um termina e o outro começa.
defineProps({
  value: { type: [String, Number], required: true },
  unit: { type: String, default: '' },
  label: { type: String, default: '' },
  size: { type: String, default: 'md' },
  icon: { type: String, default: '' },
  tone: { type: String, default: '' },
  accent: { type: Boolean, default: false },
})
</script>

<template>
  <div class="card statcard">
    <Stat :value="value" :unit="unit" :label="label" :size="size" :icon="icon" :tone="tone" :accent="accent" />
  </div>
</template>
