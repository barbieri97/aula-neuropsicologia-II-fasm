// Resolve um caminho de asset contra a base do deck.
//
// Por que isto existe: o Vite reescreve `/foo.svg` com a `--base` do build só
// quando o caminho está estático no template (`<img src="/foo.svg">`). Quando o
// caminho chega como *prop* — `<Figure src="/foo.svg" />`, `image:` no
// frontmatter — ele é só uma string em tempo de execução, e o Vite não a toca.
// Local (base `/`) não dá diferença; no GitHub Pages, onde cada aula é servida
// de `/<repo>/<aula>/`, o navegador pede `/foo.svg` na raiz do domínio e leva
// 404. Daí todo caminho de asset do tema passar por aqui.
export function assetUrl (path) {
  if (typeof path !== 'string' || path === '') return path
  // URL absoluta (http:, data:, blob:) ou protocolo-relativa: já está resolvida.
  if (/^([a-z][a-z0-9+.-]*:|\/\/)/i.test(path)) return path
  // Caminho relativo: resolve sozinho contra a página, não mexemos.
  if (path[0] !== '/') return path
  const base = import.meta.env.BASE_URL ?? '/'
  return base.replace(/\/$/, '') + path
}
