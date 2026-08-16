<script setup>
// Folha de consulta: pares termo → descrição, opcionalmente agrupados.
// Num curso, é o slide de glossário e o de bibliografia — o que a turma
// fotografa.
//
// Aceita `groups` (com título por bloco) OU `items` (lista corrida).
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()

// Uma lista solta é tratada como um grupo sem título: assim o template tem um
// caminho só, em vez de dois ramos que precisam ser mantidos em paralelo.
const groups = computed(() => (
  fm.groups?.length ? fm.groups : [{ title: null, items: fm.items ?? [] }]
))
</script>

<template>
  <SlideFrame>
    <Fit>
      <div class="l-reference" :class="{ grouped: groups.length > 1 }">
        <section v-for="(group, i) in groups" :key="i" class="ref-group">
          <h3 v-if="group.title" class="ref-group-title" v-html="group.title" />
          <dl class="ref-list">
            <template v-for="(item, j) in group.items ?? []" :key="j">
              <dt class="ref-term" v-html="item.term" />
              <dd class="ref-desc" v-html="item.desc" />
            </template>
          </dl>
        </section>
      </div>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
