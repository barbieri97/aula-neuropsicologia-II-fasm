<script setup>
// Entrada padrão do tema: um fade curto com 8px de subida. `delay` escalona
// elementos irmãos (cabeçalho, depois corpo) sem virar coreografia.
// A animação em si mora em index.css (.reveal) e some na impressão.
defineProps({ delay: { type: [Number, String], default: 0 } })
</script>

<template>
  <div class="reveal" :style="{ animationDelay: `${delay}ms` }">
    <slot />
  </div>
</template>
