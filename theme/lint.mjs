#!/usr/bin/env node
// fasm-lint — confere um deck contra o contrato do tema antes de ele virar site.
//
//   npx fasm-lint aulas/*.md
//
// A razão de existir: quase todo erro de deck é silencioso. Um layout com nome
// errado renderiza como `default` e ninguém percebe; um campo obrigatório que
// faltou vira um espaço em branco; um `---` compartilhado entre dois blocos faz
// o Slidev imprimir `layout:` como texto no meio do slide. Nenhum desses quebra
// o build — todos quebram a aula. O lint transforma esse silêncio em mensagem.
//
// O contrato vem de layouts.json, que é a fonte única: layout novo se descreve
// lá, e o lint e a documentação passam a conhecê-lo juntos.
//
// Saída: erros fazem sair com código 1 (o build para); avisos só aparecem.
import { readFileSync } from 'node:fs'
import { relative, resolve } from 'node:path'
import { parse } from '@slidev/parser'

const contract = JSON.parse(readFileSync(new URL('./layouts.json', import.meta.url), 'utf-8'))
const LAYOUTS = contract.layouts
const UNIVERSAL = new Set(contract.universal.map((f) => f.name))

// Campos que o Slidev entende sozinho — o tema não os define, mas eles são
// legítimos em qualquer slide e não devem virar aviso de "campo desconhecido".
const SLIDEV_FIELDS = new Set([
  'layout', 'theme', 'title', 'titleTemplate', 'info', 'author', 'keywords', 'date',
  'transition', 'clicks', 'clicksStart', 'preload', 'hide', 'hideInToc', 'level',
  'src', 'zoom', 'dragPos', 'download', 'exportFilename', 'export', 'routeAlias',
  'themeConfig', 'fonts', 'colorSchema', 'lineNumbers', 'monaco', 'highlighter',
  'record', 'selectable', 'drawings', 'mdc', 'seoMeta', 'favicon', 'canvasWidth',
  'aspectRatio', 'defaults', 'addons', 'contextMenu', 'wakeLock', 'remoteAssets',
  'css', 'presenter', 'browserExporter', 'htmlAttrs', 'editor', 'plantUmlServer',
])

const TONES = new Set(['accent', 'good', 'warn', 'bad', 'info', 'muted'])

// Limiares dos avisos de densidade. Não são regras de estilo arbitrárias: um
// slide com mais de 7 marcadores, ou com marcador de mais de 140 caracteres,
// deixou de ser projeção e virou documento — e o texto que ninguém lê de longe
// é pior do que o texto que não está lá.
const MAX_BULLETS = 7
const MAX_BULLET_CHARS = 140

const files = process.argv.slice(2)
if (!files.length) {
  console.error('uso: fasm-lint <arquivo.md> [...]')
  process.exit(2)
}

let errors = 0
let warnings = 0

const red = (s) => `\x1b[31m${s}\x1b[0m`
const yellow = (s) => `\x1b[33m${s}\x1b[0m`
const dim = (s) => `\x1b[2m${s}\x1b[0m`

function report (kind, where, message, hint) {
  const tag = kind === 'erro' ? red('erro ') : yellow('aviso')
  console.log(`${tag} ${dim(where)}  ${message}`)
  if (hint) console.log(`      ${dim(`↳ ${hint}`)}`)
  if (kind === 'erro') errors++
  else warnings++
}

/** Um valor "preenchido": string não vazia, número, booleano, array/objeto com conteúdo. */
function present (v) {
  if (v == null) return false
  if (typeof v === 'string') return v.trim() !== ''
  if (Array.isArray(v)) return v.length > 0
  if (typeof v === 'object') return Object.keys(v).length > 0
  return true
}

for (const file of files) {
  const path = resolve(file)
  const label = relative(process.cwd(), path).replace(/\\/g, '/')
  let deck

  try {
    deck = await parse(readFileSync(path, 'utf-8'), path)
  } catch (err) {
    report('erro', label, `não deu para ler o deck: ${err.message}`,
      'quase sempre é YAML inválido no frontmatter — confira aspas e indentação.')
    continue
  }

  // ---------------------------------------------------------------- headmatter
  const head = deck.slides[0]?.frontmatter ?? {}
  if (head.theme && head.theme !== 'slidev-theme-fasm') {
    report('erro', `${label}:1`, `o deck declara \`theme: ${head.theme}\``,
      'este lint valida o contrato do slidev-theme-fasm.')
  }

  let previous = []

  deck.slides.forEach((slide, i) => {
    const n = i + 1
    const where = `${label}:${(slide.start ?? 0) + 1}`
    const fm = slide.frontmatter ?? {}
    const layout = fm.layout ?? 'default'
    const body = (slide.content ?? '').trim()
    const spec = LAYOUTS[layout]

    // ------------------------------------------------------------- layout
    if (!spec) {
      const known = Object.keys(LAYOUTS)
      // Sugere o mais parecido: erro de layout costuma ser digitação, e a
      // mensagem só ajuda de verdade se disser qual era a intenção provável.
      const near = known.filter((k) => k.startsWith(layout.slice(0, 3)) || layout.startsWith(k.slice(0, 3)))
      report('erro', where, `slide ${n}: layout \`${layout}\` não existe neste tema`,
        near.length ? `você quis dizer: ${near.join(', ')}?` : `layouts: ${known.join(', ')}`)
      return
    }

    const fields = new Map(spec.fields.map((f) => [f.name, f]))

    // ------------------------------------------- campos obrigatórios e enums
    for (const field of spec.fields) {
      if (field.required && !present(fm[field.name])) {
        report('erro', where, `slide ${n} (${layout}): falta o campo obrigatório \`${field.name}\``,
          field.desc ?? spec.use)
      }
      if (field.enum && present(fm[field.name]) && !field.enum.includes(fm[field.name])) {
        report('erro', where, `slide ${n} (${layout}): \`${field.name}: ${fm[field.name]}\` não é um valor válido`,
          `use um de: ${field.enum.join(' | ')}`)
      }
    }

    // ------------------------------------------------- campos desconhecidos
    for (const key of Object.keys(fm)) {
      if (fields.has(key) || UNIVERSAL.has(key) || SLIDEV_FIELDS.has(key)) continue
      report('aviso', where, `slide ${n} (${layout}): campo \`${key}\` não é usado por este layout`,
        `campos de ${layout}: ${spec.fields.map((f) => f.name).join(', ')}`)
    }

    // ------------------------------------------------------- slide vazio
    // "Vazio" = sem corpo e sem nenhum campo que renderize alguma coisa. Um
    // slide assim aparece na apresentação como uma página em branco.
    const hasField = spec.fields.some((f) => present(fm[f.name]))
    if (!body && !hasField && !present(fm.ghost)) {
      report('erro', where, `slide ${n} (${layout}): está vazio`,
        'preencha os campos do layout ou apague o slide.')
    }

    // ------------------------------- o erro do `---` compartilhado
    // Quando dois blocos de frontmatter dividem um `---`, o Slidev não falha:
    // ele passa a tratar as chaves do segundo bloco como texto do slide. O
    // sintoma é um corpo que começa com linhas `chave: valor`.
    const firstLine = body.split('\n')[0] ?? ''
    if (/^(layout|title|kicker|term|quote|value|image|index|subtitle):\s/.test(firstLine)) {
      report('erro', where, `slide ${n}: o corpo começa com \`${firstLine.slice(0, 40)}\``,
        'quase certamente dois frontmatters estão dividindo o mesmo `---`. Cada bloco precisa do seu `---` de abertura e de fechamento.')
    }

    // ------------------------------------------------- checagens por layout
    if (layout === 'diagram' && !body) {
      report('aviso', where, `slide ${n}: \`diagram\` sem nada no corpo`,
        'o corpo é onde vai o mermaid, a <Figure> ou o <Grid>.')
    }

    if (layout === 'chart' && !fm.chart?.series?.length) {
      report('erro', where, `slide ${n}: \`chart\` sem \`series\``, 'chart.series: [{ name, data: [...] }]')
    }

    // Tons: valem em stats e em qualquer item com `tone`.
    for (const item of [].concat(fm.stats ?? [], fm.features ?? [])) {
      if (item?.tone && !TONES.has(item.tone)) {
        report('erro', where, `slide ${n}: \`tone: ${item.tone}\` não existe`,
          `use um de: ${[...TONES].join(' | ')}`)
      }
    }

    // Ícones: o tema só embute a coleção lucide, então um nome de outra
    // coleção simplesmente não desenha nada — em silêncio.
    const icons = [].concat(fm.stats ?? [], fm.steps ?? [], fm.features ?? [], fm.panels ?? [], fm.logos ?? [])
      .map((it) => it?.icon)
      .filter(Boolean)
    for (const icon of icons) {
      if (!String(icon).startsWith('lucide:')) {
        report('erro', where, `slide ${n}: ícone \`${icon}\` não é da coleção lucide`,
          'só a lucide vai embutida no tema; use lucide:<nome>.')
      }
    }

    // -------------------------------------------------------- densidade
    const bullets = body.split('\n').filter((l) => /^\s*[-*]\s+\S/.test(l))
    if (bullets.length > MAX_BULLETS) {
      report('aviso', where, `slide ${n}: ${bullets.length} marcadores`,
        `acima de ${MAX_BULLETS} o slide vira documento. Divida-o, ou troque por um layout que estrutura (panels, columns, steps).`)
    }
    const longest = bullets.reduce((max, l) => Math.max(max, l.trim().length), 0)
    if (longest > MAX_BULLET_CHARS) {
      report('aviso', where, `slide ${n}: marcador de ${longest} caracteres`,
        'marcador é frase curta, não parágrafo. O que não cabe vai para as notas do apresentador.')
    }

    // ------------------------------------------- o mesmo layout três vezes
    previous.push(layout)
    if (previous.length > 3) previous.shift()
    if (previous.length === 3 && new Set(previous).size === 1 && layout !== 'default') {
      report('aviso', where, `slide ${n}: terceiro \`${layout}\` seguido`,
        'variar a composição é o que mantém a turma acordada; veja se um deles não é outra coisa.')
    }
  })
}

// ------------------------------------------------------------------ resumo

const plural = (n, s, p) => `${n} ${n === 1 ? s : p}`

if (errors || warnings) {
  console.log()
  console.log(`${errors ? red(plural(errors, 'erro', 'erros')) : plural(0, 'erro', 'erros')} · ${warnings ? yellow(plural(warnings, 'aviso', 'avisos')) : plural(0, 'aviso', 'avisos')}`)
} else {
  console.log(`✓ ${plural(files.length, 'deck', 'decks')} sem problemas`)
}

process.exit(errors ? 1 : 0)
