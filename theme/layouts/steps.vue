<script setup>
// Um processo em etapas. Os numerais ficam numa coluna própria, ligados por um
// fio vertical: é o fio que diz "isto é uma sequência" — sem ele seriam bullets
// numerados, e a ordem viraria decoração.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const steps = computed(() => fm.steps ?? [])
</script>

<template>
  <SlideFrame>
    <Fit>
      <ol class="l-steps">
        <li v-for="(step, i) in steps" :key="i" class="step">
          <span class="step-num num">{{ i + 1 }}</span>
          <span class="step-text">
            <span class="step-title">
              <Icon v-if="step.icon" :name="step.icon" class="step-icon" />
              <span v-html="step.title" />
            </span>
            <span v-if="step.desc" class="step-desc" v-html="step.desc" />
          </span>
        </li>
      </ol>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
