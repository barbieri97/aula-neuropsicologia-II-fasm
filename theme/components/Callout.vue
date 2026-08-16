<script setup>
// Aparte destacado dentro de um corpo de slide: a ressalva, o aviso, o "atenção
// que aqui a literatura diverge". Uma régua na cor do tom + fundo lavado.
//
// É o componente mais usado das aulas, então ele é deliberadamente discreto:
// se um aparte gritasse, trinta apartes cansariam.
const TONES = ['accent', 'good', 'warn', 'bad', 'info', 'muted']

const props = defineProps({
  icon: { type: String, default: 'lucide:info' },
  /** accent | good | warn | bad | info | muted */
  tone: { type: String, default: 'accent' },
})
</script>

<template>
  <div class="callout" :class="`tone-${TONES.includes(tone) ? tone : 'accent'}`">
    <Icon v-if="icon" :name="icon" class="callout-icon" />
    <div class="callout-body"><slot /></div>
  </div>
</template>
