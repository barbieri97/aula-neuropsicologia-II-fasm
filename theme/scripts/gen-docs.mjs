#!/usr/bin/env node
// Gera docs/fasm.md a partir de theme/layouts.json.
//
//   npm run docs
//
// A tabela de layouts, os campos e a lista de componentes NÃO são escritos à
// mão: eles saem do mesmo arquivo que o fasm-lint valida. Assim documentação e
// validação não podem divergir — que é o modo clássico de a documentação de um
// tema virar mentira.
//
// O que é escrito à mão são as REGRAS de autoria, aqui embaixo: elas são
// julgamento, não estrutura, e não dá para derivá-las de um JSON.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const themeDir = resolve(import.meta.dirname, '..')
const root = resolve(themeDir, '..')
const contract = JSON.parse(readFileSync(join(themeDir, 'layouts.json'), 'utf-8'))

const RULES = `## Regras

1. **Escolha o layout que tem a forma do conteúdo** e preencha o frontmatter dele. Definição →
   \`define\`; comparação → \`vs\`; números → \`stats\`; processo → \`steps\`; estrutura ou fluxo →
   \`diagram\`.
2. **Nada de CSS, \`<style>\`, grid ou HTML de layout.** O tema desenha; você escreve. Se um slide
   parece precisar de CSS, quase sempre é o layout errado.
3. **Uma ideia por slide.** No máximo ~7 marcadores, escritos como frases curtas. O que não couber
   vai para as notas do apresentador — o \`fasm-lint\` avisa quando o slide virou documento.
4. **Todo frontmatter é cercado por \`---\` em cima e embaixo.** Entre dois slides sem corpo você vê
   duas linhas \`---\` seguidas: está certo. Compartilhar um \`---\` entre dois blocos faz o Slidev
   imprimir \`layout:\` como texto no meio do slide — o lint pega isso.
5. **O bloco de abertura é headmatter E frontmatter do primeiro slide ao mesmo tempo.** Não repita
   \`title:\` nele: chave duplicada em YAML quebra o deck inteiro.
6. **Ênfase nos títulos:** \`<em>palavra</em>\` sai em itálico na cor do tema; \`<span
   class="accent2">palavra</span>\` sai na cor, sem itálico. Nada mais precisa de HTML.
7. **Componha componentes no corpo** de \`default\`, \`statement\` e \`two-cols\`. É o que faz um deck
   parecer feito para a aula em vez de preenchido num formulário.
8. **Números crus, símbolo à parte:** \`value: 80\`, \`unit: "%"\`. O tema dá ao símbolo tamanho e cor
   próprios; junto no mesmo campo ele compete com o algarismo.
9. **Dentro de \`{ ... }\`, aspas em qualquer valor com vírgula ou dois-pontos** (\`before: "1,8 mi"\`).
10. **Notas do apresentador** são um comentário HTML como ÚLTIMO bloco do corpo do slide:
    \`<!-- o que você vai dizer -->\`. Nunca aparecem no slide.
11. **Revele por etapas quando isso ensina:** \`<v-clicks>\` em volta da lista, ou \`v-click\` num
    elemento. O PDF exporta o estado final, então nada se perde no material de estudo.
12. **Marque tangentes com \`aside:\`** (\`aside: "vinheta clínica"\`): régua de acento e etiqueta no
    canto dizem à turma que aquilo é desvio, não a espinha do argumento.
13. **Agrupe a aula em 3 a 6 \`section\`.** A trilha de progresso no topo aparece sozinha e passa a
    mostrar em que parte a turma está.
14. **Título, subtítulo e legenda são injetados como HTML.** Isso é o que permite \`<em>\`, mas também
    significa que um sinal de menor literal desaparece: \`&lt;Grid&gt;\` volta a ser \`<Grid>\`, que o
    navegador lê como tag desconhecida e engole. Se precisar mostrar \`<algo>\` num título, escreva
    \`&amp;lt;algo&amp;gt;\` — ou, melhor, escreva o nome sem os sinais.
15. **Antes de terminar, rode \`npm run lint\`.** Ele pega layout inexistente, campo obrigatório que
    faltou, tom e ícone inválidos, slide vazio e o erro do \`---\` compartilhado.

## Sobre este tema

Claro, um visual só, sem variantes e sem modo escuro. Serifada (Source Serif 4) nos títulos, sem
serifa (Source Sans 3) no corpo, um azul de destaque, régua de cabelo no lugar de caixas. As fontes
são servidas do próprio repositório: o slide renderiza igual em qualquer máquina, offline, e o PDF
sai idêntico à tela.

Cor é sinal, não enfeite: o azul marca hierarquia (kicker, numeral, ênfase) e os quatro tons
funcionais (\`good\`, \`warn\`, \`bad\`, \`info\`) marcam significado. Todos os pares de texto e fundo
passam de 4.5:1 de contraste, e os de texto corrido passam de 7:1 — o público lê isso projetado, de
longe, numa sala que quase nunca está escura.

Para mudar a aparência do tema inteiro, mexa em \`theme/styles/tokens.css\`. É o único arquivo com
valores literais; layouts e componentes só consomem \`var()\`.
`

const lines = []

lines.push('<!--')
lines.push('  GERADO por theme/scripts/gen-docs.mjs a partir de theme/layouts.json.')
lines.push('  Não edite à mão: rode `npm run docs` depois de mexer no contrato do tema.')
lines.push('-->')
lines.push('')
lines.push('# slidev-theme-fasm — contrato de autoria')
lines.push('')
lines.push('O tema das aulas. Você escolhe um `layout:` por slide e preenche o frontmatter dele; o tema')
lines.push('desenha kicker, título, rodapé, paginação, cor, tipo, espaçamento e movimento.')
lines.push('')
lines.push(RULES)
lines.push('')

// ------------------------------------------------------------ cabeçalho do deck
lines.push('## Abertura de um deck')
lines.push('')
lines.push('```yaml')
lines.push('---')
lines.push('theme: slidev-theme-fasm')
lines.push('title: "Envelhecimento normal"        # vira o título do site e o rótulo do rodapé')
lines.push('info: Corpo, cérebro e mundo social   # uma linha; alimenta a landing page')
lines.push('date: "2026-08-18"                    # YYYY-MM-DD; idem')
lines.push('author: FASM · Neuropsicologia II')
lines.push('download: true                        # gera o PDF no build e liga o botão de download')
lines.push('exportFilename: aula-02-envelhecimento-normal')
lines.push('themeConfig:')
lines.push('  lang: pt-BR                         # hifenização e caixa alta corretas em português')
lines.push('layout: lead                          # o primeiro slide começa aqui mesmo')
lines.push('index: "02"')
lines.push('kicker: Neuropsicologia II · FASM')
lines.push('subtitle: O que muda no corpo e no sistema nervoso.')
lines.push('---')
lines.push('```')
lines.push('')

// -------------------------------------------------------------- campos universais
lines.push('## Campos válidos em qualquer slide')
lines.push('')
lines.push('| campo | tipo | o que faz |')
lines.push('|---|---|---|')
for (const f of contract.universal) {
  lines.push(`| \`${f.name}\` | ${f.type} | ${f.desc} |`)
}
lines.push('')

// --------------------------------------------------------------------- layouts
lines.push('## Layouts')
lines.push('')
lines.push('| layout | para que serve | campos |')
lines.push('|---|---|---|')
for (const [name, spec] of Object.entries(contract.layouts)) {
  const fields = spec.fields
    .map((f) => (f.required ? `**${f.name}**` : f.name))
    .join(', ')
  lines.push(`| \`${name}\` | ${spec.use} | ${fields || '—'} |`)
}
lines.push('')
lines.push('*Campos em negrito são obrigatórios.*')
lines.push('')

// -------------------------------------------------------------- detalhe de cada um
lines.push('## Os campos de cada layout')
lines.push('')
for (const [name, spec] of Object.entries(contract.layouts)) {
  lines.push(`### \`${name}\``)
  lines.push('')
  lines.push(spec.use)
  lines.push('')
  for (const f of spec.fields) {
    const bits = [`\`${f.name}\``, `(${f.type}${f.required ? ', **obrigatório**' : ''})`]
    if (f.enum) bits.push(`— um de: \`${f.enum.join(' | ')}\``)
    if (f.items) bits.push(`— itens: \`${f.items}\``)
    if (f.desc) bits.push(`— ${f.desc}`)
    lines.push(`- ${bits.join(' ')}`)
  }
  lines.push('')
}

// ------------------------------------------------------------------ componentes
lines.push('## Componentes')
lines.push('')
lines.push('Componha-os no corpo de `default`, `statement` e `two-cols` — e em qualquer layout que')
lines.push('aceite corpo. São eles que dão textura a um deck que, só com campos de layout, sairia')
lines.push('igual a todos os outros.')
lines.push('')
lines.push('> Ao passar um binding `:prop="…"`, lembre que o valor é um atributo HTML e HTML não tem')
lines.push('> escape com barra invertida: use aspas simples por dentro e `&quot;` para aspas duplas')
lines.push('> literais. Um `\\"` ali dentro quebra o build do deck inteiro, não só daquele slide.')
lines.push('')
for (const [name, c] of Object.entries(contract.components)) {
  lines.push(`### \`<${name}>\``)
  lines.push('')
  lines.push(c.use)
  lines.push('')
  lines.push(`**props:** ${c.props}`)
  lines.push('')
  lines.push('```html')
  lines.push(c.example)
  lines.push('```')
  lines.push('')
}

const outDir = join(root, 'docs')
mkdirSync(outDir, { recursive: true })
const outFile = join(outDir, 'fasm.md')
writeFileSync(outFile, `${lines.join('\n')}\n`, 'utf-8')

const layouts = Object.keys(contract.layouts).length
const components = Object.keys(contract.components).length
console.log(`✓ docs/fasm.md — ${layouts} layouts, ${components} componentes`)
