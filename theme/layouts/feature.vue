<script setup>
// Células de ícone + título + descrição. Mais leve que `panels`: sem cartão,
// separadas só pelo espaço. Boa para 3 a 6 razões, atributos ou critérios que
// se leem de relance.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const features = computed(() => fm.features ?? [])
const cols = computed(() => fm.columns ?? Math.min(features.value.length || 1, 3))
</script>

<template>
  <SlideFrame>
    <Fit>
      <div class="l-feature" :style="{ '--cols': cols }">
        <div v-for="(feature, i) in features" :key="i" class="feature">
          <Icon v-if="feature.icon" :name="feature.icon" class="feature-icon" />
          <h3 class="feature-title" v-html="feature.title" />
          <p v-if="feature.desc" class="feature-desc" v-html="feature.desc" />
        </div>
      </div>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
