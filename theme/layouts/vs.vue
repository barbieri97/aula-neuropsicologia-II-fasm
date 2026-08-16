<script setup>
// Confronto A × B: dois painéis e um divisor no meio. O contraste é o conteúdo,
// então os dois lados são graficamente idênticos — dar mais peso a um deles
// responderia a pergunta antes da turma.
//
// `label` troca o texto do divisor ("vs", "→", "×").
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <SlideFrame>
    <Fit>
      <div class="l-vs">
        <div class="vs-side">
          <h3 class="vs-title" v-html="fm.left?.title" />
          <ul v-if="fm.left?.items?.length" class="vs-items">
            <li v-for="(item, i) in fm.left.items" :key="i" v-html="item" />
          </ul>
        </div>

        <div class="vs-divider" aria-hidden="true">
          <span class="vs-label">{{ fm.label ?? 'vs' }}</span>
        </div>

        <div class="vs-side">
          <h3 class="vs-title" v-html="fm.right?.title" />
          <ul v-if="fm.right?.items?.length" class="vs-items">
            <li v-for="(item, i) in fm.right.items" :key="i" v-html="item" />
          </ul>
        </div>
      </div>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
