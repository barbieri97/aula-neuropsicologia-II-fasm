<script setup>
// Barra de proporção com rótulo. Boa para "quanto de X", onde a grandeza
// importa menos que a fração — prevalência, cobertura, parcela de uma população.
import { computed } from 'vue'

const TONES = ['accent', 'good', 'warn', 'bad', 'info', 'muted']

const props = defineProps({
  value: { type: [Number, String], required: true },
  max: { type: [Number, String], default: 100 },
  label: { type: String, default: '' },
  /** Texto à direita. Sem ele, mostra a porcentagem calculada. */
  display: { type: String, default: '' },
  tone: { type: String, default: 'accent' },
})

const pct = computed(() => {
  const v = Number(props.value)
  const m = Number(props.max) || 100
  if (!Number.isFinite(v) || !m) return 0
  return Math.max(0, Math.min(100, (v / m) * 100))
})

const readout = computed(() => props.display || `${Math.round(pct.value)}%`)
</script>

<template>
  <div class="meter" :class="`tone-${TONES.includes(tone) ? tone : 'accent'}`">
    <div class="meter-head">
      <span v-if="label" class="meter-label" v-html="label" />
      <span class="meter-value">{{ readout }}</span>
    </div>
    <!-- role/aria: a barra é a informação, então ela precisa ser legível também
         para quem lê o deck publicado com leitor de tela. -->
    <div class="meter-track" role="meter" :aria-valuenow="Number(value)" :aria-valuemax="Number(max)" :aria-label="label || readout">
      <div class="meter-fill" :style="{ width: `${pct}%` }" />
    </div>
  </div>
</template>
