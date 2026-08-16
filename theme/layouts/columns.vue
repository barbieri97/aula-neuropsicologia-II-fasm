<script setup>
// Duas ou três colunas com cabeça própria. Para listas paralelas que se leem
// lado a lado (o que muda / o que permanece; sintomas / sinais).
//
// Cada coluna aceita `items` (bullets) ou `body` (HTML) — nunca os dois; se
// vierem os dois, `items` manda, porque é a forma mais escaneável.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const cols = computed(() => fm.columns ?? [])
</script>

<template>
  <SlideFrame>
    <Fit>
      <div class="l-columns" :style="{ '--cols': cols.length || 1 }">
        <div v-for="(col, i) in cols" :key="i" class="column">
          <h3 v-if="col.title" class="column-title" v-html="col.title" />
          <ul v-if="col.items?.length" class="column-items">
            <li v-for="(item, j) in col.items" :key="j" v-html="item" />
          </ul>
          <div v-else-if="col.body" class="column-body" v-html="col.body" />
        </div>
      </div>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
