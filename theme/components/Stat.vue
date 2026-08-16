<script setup>
// Um número com rótulo. O número é o argumento; o rótulo diz do que ele fala.
//
// O valor fica cru no `value` e o símbolo vai no `unit` — separados, o tema
// pode dar ao símbolo um tamanho e uma cor próprios em vez de deixá-lo
// competindo de igual para igual com o algarismo.
const SIZES = ['sm', 'md', 'lg', 'xl']
const TONES = ['accent', 'good', 'warn', 'bad', 'info', 'muted']

defineProps({
  value: { type: [String, Number], required: true },
  unit: { type: String, default: '' },
  label: { type: String, default: '' },
  size: { type: String, default: 'xl' },
  icon: { type: String, default: '' },
  tone: { type: String, default: '' },
  /** Pinta o número na cor do tema. Desligado, o número fica em tinta preta. */
  accent: { type: Boolean, default: true },
})
</script>

<template>
  <div
    class="stat"
    :class="[
      `stat-${SIZES.includes(size) ? size : 'xl'}`,
      tone && TONES.includes(tone) ? `tone-${tone}` : null,
      { plain: !accent },
    ]"
  >
    <div class="stat-value num">
      <Icon v-if="icon" :name="icon" class="stat-icon" />{{ value }}<span v-if="unit" class="num-unit">{{ unit }}</span>
    </div>
    <div v-if="label" class="num-label" v-html="label" />
  </div>
</template>
