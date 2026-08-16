<script setup>
// Grade de células — a tabela quando ela é o argumento, e não um anexo.
// Serve para as comparações que o Mermaid desenha mal: uma matriz 2×2, um
// quadro de sistema × repercussão, um contraste linha a linha.
//
// `data` é um array 2D (HTML permitido em cada célula). `head` transforma a
// primeira linha em cabeçalho. `highlight` acentua uma linha, uma coluna ou uma
// célula — é o que faz a grade ter um ponto em vez de ser só um monte de texto
// alinhado.
//
// Os índices de `highlight` são de base 1 e contam sobre `data` inteiro, com o
// cabeçalho incluído: "row:1" com `head` é a própria linha de cabeçalho.
import { computed } from 'vue'

const props = defineProps({
  data: { type: Array, default: () => [] },
  head: { type: Boolean, default: false },
  /** "row:3" | "col:2" | "cell:3,2" */
  highlight: { type: String, default: '' },
})

const mark = computed(() => {
  const m = /^(row|col|cell):\s*(\d+)(?:\s*,\s*(\d+))?$/.exec(String(props.highlight).trim())
  if (!m) return null
  return { kind: m[1], a: Number(m[2]), b: m[3] ? Number(m[3]) : null }
})

/** r e c são de base 1 sobre `data`. */
function isMarked (r, c) {
  const m = mark.value
  if (!m) return false
  if (m.kind === 'row') return r === m.a
  if (m.kind === 'col') return c === m.a
  return r === m.a && c === m.b
}
</script>

<template>
  <div class="datagrid-wrap">
    <table class="datagrid">
      <tbody>
        <tr v-for="(row, r) in data" :key="r" :class="{ 'is-head': head && r === 0 }">
          <component
            :is="head && r === 0 ? 'th' : 'td'"
            v-for="(cell, c) in row"
            :key="c"
            :class="{ 'is-marked': isMarked(r + 1, c + 1) }"
            v-html="cell"
          />
        </tr>
      </tbody>
    </table>
  </div>
</template>
