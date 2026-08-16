#!/usr/bin/env node
// Baixa as fontes do tema para theme/styles/fonts/ e gera o theme/styles/fonts.css.
//
//   npm run fonts
//
// As fontes ficam versionadas no repositório de propósito: o deck precisa renderizar igual
// em qualquer máquina e no runner que gera o PDF, sem depender de CDN em tempo de build.
// Este script existe para tornar essa cópia reproduzível — rode-o de novo se quiser trocar
// de família ou atualizar a versão do arquivo.
//
// Duas famílias, uma pra cada papel, do mesmo desenhista (Paul D. Hunt / Adobe) — por isso
// casam de origem:
//   Source Serif 4  — títulos (o tom acadêmico)
//   Source Sans 3   — corpo (o que a turma lê de longe)
// Ambas SIL Open Font License 1.1. Mono não é baixada: o curso não tem slide de código,
// então a pilha do sistema resolve (veja --font-mono em tokens.css).
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'

const stylesDir = resolve(import.meta.dirname, '..', 'styles')
const fontsDir = join(stylesDir, 'fonts')

// O Google Fonts serve arquivos diferentes conforme o User-Agent. Um UA de Chrome moderno
// devolve woff2 variável (um arquivo cobre 400–700), que é o menor e o mais flexível.
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

// Só latin e latin-ext. O português cabe em latin (U+00C0–00FF pega ã, ç, õ, ê…);
// latin-ext entra porque é barato e cobre travessão, aspas curvas e símbolos soltos.
const SUBSETS = new Set(['latin', 'latin-ext'])

const FAMILIES = [
  { css: 'Source Serif 4', slug: 'source-serif-4', query: 'Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..700' },
  { css: 'Source Sans 3', slug: 'source-sans-3', query: 'Source+Sans+3:ital,wght@0,400..700;1,400..700' },
]

/** Quebra o CSS do Google em blocos { subset, family, style, weight, url }. */
function parseFontFaces (css) {
  const faces = []
  // Cada @font-face vem precedido de um comentário com o nome do subset.
  const re = /\/\*\s*([\w-]+)\s*\*\/\s*@font-face\s*\{([^}]*)\}/g
  for (const [, subset, block] of css.matchAll(re)) {
    const pick = (name) => (block.match(new RegExp(`${name}:\\s*([^;]+);`)) ?? [])[1]?.trim()
    const url = (block.match(/url\((https:[^)]+)\)/) ?? [])[1]
    if (!url) continue
    faces.push({
      subset,
      family: pick('font-family')?.replace(/['"]/g, ''),
      style: pick('font-style') ?? 'normal',
      weight: pick('font-weight') ?? '400',
      unicodeRange: pick('unicode-range'),
      url,
    })
  }
  return faces
}

async function get (url, as = 'text') {
  const res = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`)
  return as === 'text' ? res.text() : Buffer.from(await res.arrayBuffer())
}

mkdirSync(fontsDir, { recursive: true })

const out = [
  '/* GERADO por theme/scripts/fetch-fonts.mjs — não edite à mão. */',
  '/* Source Serif 4 e Source Sans 3, SIL Open Font License 1.1 (Adobe). */',
  '',
]
let total = 0

for (const family of FAMILIES) {
  const css = await get(`https://fonts.googleapis.com/css2?family=${family.query}&display=swap`)
  const faces = parseFontFaces(css).filter((f) => SUBSETS.has(f.subset))
  if (!faces.length) throw new Error(`${family.css}: nenhum @font-face nos subsets ${[...SUBSETS].join(', ')}`)

  for (const face of faces) {
    const name = `${family.slug}-${face.subset}-${face.style}.woff2`
    const bytes = await get(face.url, 'buffer')
    writeFileSync(join(fontsDir, name), bytes)
    total += bytes.length
    console.log(`  ${name.padEnd(40)} ${(bytes.length / 1024).toFixed(0)} KB`)

    out.push(
      '@font-face {',
      `  font-family: '${family.css}';`,
      `  font-style: ${face.style};`,
      `  font-weight: ${face.weight};`,
      '  font-display: swap;',
      `  src: url('./fonts/${name}') format('woff2');`,
      ...(face.unicodeRange ? [`  unicode-range: ${face.unicodeRange};`] : []),
      '}',
      '',
    )
  }
}

writeFileSync(join(stylesDir, 'fonts.css'), out.join('\n'), 'utf-8')
console.log(`\n✓ ${(total / 1024).toFixed(0)} KB em ${dirname(fontsDir).split(/[\\/]/).slice(-2).join('/')}/fonts/ + fonts.css`)
