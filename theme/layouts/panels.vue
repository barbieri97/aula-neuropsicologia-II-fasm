<script setup>
// De 2 a 4 subtemas em cartões. Diferente de `columns`: ali as listas se leem em
// paralelo, aqui cada cartão é uma unidade fechada que se lê sozinha.
//
// A grade se ajusta à quantidade — 2 lado a lado, 3 em fila, 4 em dois por dois —
// para que o autor não precise pensar em disposição.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const panels = computed(() => fm.panels ?? [])
</script>

<template>
  <SlideFrame>
    <Fit>
      <div class="l-panels" :class="`panels-${Math.min(panels.length, 4)}`">
        <div v-for="(panel, i) in panels" :key="i" class="card panel">
          <h3 v-if="panel.title" class="card-title">
            <Icon v-if="panel.icon" :name="panel.icon" class="panel-icon" />
            <span v-html="panel.title" />
          </h3>
          <ul v-if="panel.items?.length" class="panel-items">
            <li v-for="(item, j) in panel.items" :key="j" v-html="item" />
          </ul>
          <div v-else-if="panel.body" class="panel-body" v-html="panel.body" />
        </div>
      </div>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
