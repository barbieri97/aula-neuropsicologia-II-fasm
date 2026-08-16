<script setup>
// Sequência datada, na horizontal. O eixo é uma régua contínua com um marcador
// por evento — a distância entre marcadores é igual, então ela conta ordem, não
// duração. Para durações desiguais o honesto é um gráfico, não esta linha.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const events = computed(() => fm.events ?? [])
</script>

<template>
  <SlideFrame>
    <Fit>
      <ol class="l-timeline" :style="{ '--n': events.length || 1 }">
        <li v-for="(event, i) in events" :key="i" class="tl-event">
          <span class="tl-date">{{ event.date }}</span>
          <span class="tl-dot" aria-hidden="true" />
          <span class="tl-title" v-html="event.title" />
          <span v-if="event.desc" class="tl-desc" v-html="event.desc" />
        </li>
      </ol>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
