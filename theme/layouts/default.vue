<script setup>
// O layout de uso geral: cabeçalho opcional e o markdown do autor no corpo.
// É a tela em branco do tema — é aqui que <Callout>, <Grid>, <Stat> e companhia
// são compostos quando nenhum layout fechado descreve o conteúdo.
//
// `class: dropcap` no frontmatter dá capitular ao primeiro parágrafo.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <SlideFrame>
    <Fit>
      <div class="copy" :class="{ wide: fm.wide }"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
