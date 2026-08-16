<script setup>
// Janela de terminal (comando + saída). Faz parte do contrato do tema; num
// curso de neuropsicologia é raro, mas é o que se usa quando a aula mostra uma
// ferramenta.
//
// Cada item de `lines` é { cmd } ou { out }.
defineProps({
  lines: { type: Array, default: () => [] },
  title: { type: String, default: '' },
})
</script>

<template>
  <div class="terminal">
    <div v-if="title" class="terminal-title">{{ title }}</div>
    <pre class="terminal-body"><template v-for="(line, i) in lines" :key="i"><span v-if="line.cmd" class="terminal-cmd"><span class="terminal-prompt">$</span> {{ line.cmd }}
</span><span v-else class="terminal-out">{{ line.out }}
</span></template></pre>
  </div>
</template>
