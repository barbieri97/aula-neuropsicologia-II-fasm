<script setup>
// Retrato + nome + papel. Num deck de aula o uso natural é atribuir uma teoria
// a quem a formulou (Baltes, Erikson, Neugarten) sem gastar um slide nisso.
import { computed } from 'vue'
import { assetUrl } from '../utils/asset.js'

const props = defineProps({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  photo: { type: String, default: '' },
})

// Sem foto, as iniciais. Quase nenhum autor clássico tem retrato livre de
// direitos à mão, então este é o caminho comum, não a exceção.
const initials = computed(() => props.name
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((w) => w[0])
  .join('')
  .toUpperCase())
</script>

<template>
  <div class="person">
    <img v-if="photo" class="person-photo" :src="assetUrl(photo)" :alt="name" >
    <span v-else class="person-photo person-initials" aria-hidden="true">{{ initials }}</span>
    <span class="person-text">
      <span class="person-name">{{ name }}</span>
      <span v-if="role" class="person-role" v-html="role" />
    </span>
  </div>
</template>
