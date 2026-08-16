<script setup>
// Aplica o idioma do deck no <html>.
//
// Não é detalhe cosmético: o `lang` é o que faz o navegador hifenizar em
// português, escolher as aspas certas e aplicar a caixa alta correta nos
// kickers. Um deck em pt-BR renderizado como se fosse inglês erra as três coisas
// de forma sutil o bastante para ninguém notar — e ler pior mesmo assim.
//
// Este é o único componente global do tema. Não há variante nem cor de marca
// para injetar: o visual é um só, e mora todo em tokens.css.
import { onMounted, watchEffect } from 'vue'
import { useSlideContext } from '@slidev/client'

const ctx = useSlideContext()

function apply () {
  if (typeof document === 'undefined') return
  const configs = ctx.$slidev?.configs ?? {}
  const lang = configs.themeConfig?.lang ?? 'pt-BR'
  if (lang) document.documentElement.lang = lang
}

onMounted(apply)
watchEffect(apply)
</script>

<template>
  <span style="display:none" />
</template>
