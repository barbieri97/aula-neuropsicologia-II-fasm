<script setup>
// Divisão genérica: o corpo vai à esquerda, o que vem depois de `::right::` vai
// à direita. As duas colunas são tela livre — compõe-se componentes em qualquer
// uma delas.
</script>

<template>
  <SlideFrame>
    <Fit>
      <div class="l-two-cols">
        <div class="copy"><slot /></div>
        <div class="copy"><slot name="right" /></div>
      </div>
    </Fit>
  </SlideFrame>
</template>
