<script setup>
// Apelido histórico de <Plot>. Existe para que um deck que escreveu <BarChart>
// continue renderizando; em texto novo, prefira <Plot>, que diz o que o
// componente realmente faz (não é só barra).
</script>

<template>
  <Plot v-bind="$attrs" />
</template>
