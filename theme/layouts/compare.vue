<script setup>
// Tabela antes/depois. Cabeçalhos padrão em português; `columns` os substitui.
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $frontmatter: fm } = useSlideContext()
const heads = computed(() => fm.columns ?? ['Medida', 'Antes', 'Depois', 'Δ'])
const rows = computed(() => fm.rows ?? [])
// A coluna do delta é opcional: se nenhuma linha traz um, ela some em vez de
// ficar como uma faixa vazia à direita.
const hasDelta = computed(() => rows.value.some((r) => r.delta != null && r.delta !== ''))
</script>

<template>
  <SlideFrame>
    <Fit>
      <table class="l-compare">
        <thead>
          <tr>
            <th v-for="(head, i) in heads.slice(0, hasDelta ? 4 : 3)" :key="i" v-html="head" />
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in rows" :key="i">
            <td class="cmp-metric" v-html="row.metric" />
            <td class="cmp-before" v-html="row.before" />
            <td class="cmp-after" v-html="row.after" />
            <td v-if="hasDelta" class="cmp-delta" v-html="row.delta ?? ''" />
          </tr>
        </tbody>
      </table>
      <div class="copy"><slot /></div>
    </Fit>
  </SlideFrame>
</template>
