<script setup>
// Código à esquerda, notas numeradas à direita. As notas acompanham as etapas do
// realce de linhas do bloco (```ts {1|2|3}```) quando ele tem etapas; num bloco
// estático, todas aparecem juntas.
//
// A sincronia usa o contador de cliques do Slidev: a nota da vez acende, as
// outras apagam. Sem etapas no bloco, `$clicks` fica em 0 e nada apaga — que é
// exatamente o comportamento desejado para um slide de referência.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm, $clicks } = useSlideContext()

const notes = computed(() => fm.notes ?? [])
const stepped = computed(() => notes.value.length > 1 && Number($clicks?.value ?? $clicks ?? 0) > 0)
const current = computed(() => Number($clicks?.value ?? $clicks ?? 0))
</script>

<template>
  <SlideFrame>
    <div class="l-code-explain">
      <div class="ce-code copy wide"><slot /></div>
      <ol class="ce-notes">
        <li
          v-for="(note, i) in notes"
          :key="i"
          class="ce-note"
          :class="{ dim: stepped && current !== i + 1 }"
        >
          <span class="ce-num num">{{ i + 1 }}</span>
          <span v-html="note" />
        </li>
      </ol>
    </div>
  </SlideFrame>
</template>
