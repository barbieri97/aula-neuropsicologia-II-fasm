import { defineMermaidSetup } from '@slidev/types'

// Deixa os diagramas Mermaid com a cara do tema.
//
// O Slidev renderiza o Mermaid dentro de um shadow root, então o CSS do
// documento não alcança o SVG. A alavanca suportada são os `themeVariables` do
// próprio Mermaid — e é isso que fazemos aqui: lemos os MESMOS tokens que todo
// o resto do tema lê e os traduzimos para o vocabulário do Mermaid. Resultado:
// um diagrama acompanha o deck sem nenhuma configuração por diagrama.
//
// Detalhe que exige o truque da sonda: uma custom property do CSS é devolvida
// como o texto que está escrito nela (`var(--x)`, `color-mix(...)`), não como
// cor resolvida — e a biblioteca de cor do Mermaid não sabe manipular isso.
// Pintar a expressão num elemento invisível e ler de volta o `color` computado
// devolve sempre um `rgb()` concreto.
export default defineMermaidSetup(() => {
  if (typeof document === 'undefined') return { theme: 'base' }

  const root = document.documentElement
  const probe = document.createElement('span')
  probe.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;pointer-events:none'
  root.appendChild(probe)

  const resolve = (expr: string, fallback: string) => {
    probe.style.color = ''
    probe.style.color = expr
    const c = getComputedStyle(probe).color
    return c && c !== 'rgba(0, 0, 0, 0)' ? c : fallback
  }
  const token = (name: string, fallback: string) => resolve(`var(${name})`, fallback)

  const paper = token('--paper', '#fdfdfb')
  const wash = token('--wash', '#f5f4ee')
  const wash2 = token('--wash-2', '#edece4')
  const ink = token('--ink', '#1b1b19')
  const ink2 = token('--ink-2', '#4a4a45')
  const ink3 = token('--ink-3', '#6b6b63')
  const line = token('--line', '#dcdbd3')
  const accent = token('--accent', '#1d3e6e')
  const accentSoft = token('--accent-soft', '#e7ecf3')
  const font = getComputedStyle(root).getPropertyValue('--font-body').trim() || 'inherit'

  root.removeChild(probe)

  return {
    theme: 'base',
    themeVariables: {
      darkMode: false,
      fontFamily: font,
      fontSize: '15px',

      // comum
      background: paper,
      mainBkg: wash,
      primaryColor: wash,
      primaryBorderColor: accent,
      primaryTextColor: ink,
      secondaryColor: wash2,
      secondaryBorderColor: line,
      secondaryTextColor: ink,
      tertiaryColor: paper,
      tertiaryBorderColor: line,
      tertiaryTextColor: ink,
      lineColor: ink3,
      textColor: ink,
      titleColor: ink,
      nodeBorder: accent,
      nodeTextColor: ink,
      edgeLabelBackground: paper,
      clusterBkg: paper,
      clusterBorder: line,
      defaultLinkColor: ink3,

      // sequência
      actorBkg: wash,
      actorBorder: accent,
      actorTextColor: ink,
      actorLineColor: line,
      signalColor: ink2,
      signalTextColor: ink,
      labelBoxBkgColor: wash,
      labelBoxBorderColor: accent,
      labelTextColor: ink,
      loopTextColor: ink2,
      noteBkgColor: accentSoft,
      noteTextColor: ink,
      noteBorderColor: accent,
      activationBkgColor: accentSoft,
      activationBorderColor: accent,
      sequenceNumberColor: paper,

      // estado / classe
      classText: ink,
    },
  }
})
