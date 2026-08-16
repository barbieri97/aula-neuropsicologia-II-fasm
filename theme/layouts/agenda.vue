<script setup>
// O roteiro do encontro. Diferente de `steps`: ali a ordem é causal (uma etapa
// depende da anterior), aqui é só o caminho do dia — por isso os itens vêm
// separados por régua, sem fio de ligação.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const items = computed(() => fm.items ?? [])
const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <SlideFrame>
    <Fit>
      <ol class="l-agenda">
        <li v-for="(item, i) in items" :key="i" class="agenda-item">
          <span class="agenda-num num">{{ pad(i + 1) }}</span>
          <span class="agenda-text">
            <span class="agenda-topic" v-html="item.topic" />
            <span v-if="item.desc" class="agenda-desc" v-html="item.desc" />
          </span>
        </li>
      </ol>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
