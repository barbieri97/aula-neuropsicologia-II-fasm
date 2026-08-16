<script setup>
// Parede de marcas / instituições. Num contexto acadêmico, o uso é a lista de
// fontes institucionais de um dado (IBGE, OMS, Ministério da Saúde).
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const logos = computed(() => fm.logos ?? [])
const cols = computed(() => fm.columns ?? Math.min(logos.value.length || 1, 4))
</script>

<template>
  <SlideFrame>
    <Fit>
      <div class="l-logos" :style="{ '--cols': cols }">
        <div v-for="(logo, i) in logos" :key="i" class="logo">
          <Icon v-if="logo.icon" :name="logo.icon" class="logo-icon" />
          <span class="logo-text" v-html="logo.text" />
        </div>
      </div>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
