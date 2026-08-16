<script setup>
// Termo + definição. O slide "o que é X" — e, num curso que passa três horas
// distinguindo senescência de senilidade, o layout mais usado do deck.
//
// A composição é hierárquica de propósito: o termo grande em serifada, a
// definição em corpo generoso logo abaixo, e os pontos de apoio menores. Quem
// olha de longe lê o termo; quem acompanha lê a definição; quem anota lê os
// pontos.
import { useSlideContext } from '@slidev/client'
const { $frontmatter: fm } = useSlideContext()
</script>

<template>
  <SlideFrame :head="false" center>
    <Fit>
      <div class="l-define">
        <div v-if="fm.kicker" class="kicker">{{ fm.kicker }}</div>
        <h2 class="define-term" v-html="fm.term" />
        <div v-if="fm.definition" class="define-body" v-html="fm.definition" />
        <ul v-if="fm.points?.length" class="define-points">
          <li v-for="(p, i) in fm.points" :key="i" v-html="p" />
        </ul>
        <div class="copy define-slot"><slot /></div>
      </div>
    </Fit>
  </SlideFrame>
</template>
