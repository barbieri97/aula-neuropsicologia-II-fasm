# Aulas — Psicologia Comportamental (FASM)

Um repositório de decks [Slidev](https://sli.dev/) com tema próprio, `slidev-theme-fasm`, que mora
aqui mesmo em [`theme/`](theme/). **Uma aula por arquivo `.md`**, publicadas no GitHub Pages, cada
uma na sua própria URL, com PDF para download.

## Antes de escrever ou editar qualquer deck

**Leia [`docs/fasm.md`](docs/fasm.md).** É o contrato do tema: a lista de layouts, os campos de
cada um, os componentes e as regras de autoria. Sem ele você escreve markdown que o tema ignora.

Para ver os layouts renderizados em vez de lidos, `npm run ref` abre
[`referencia-fasm.md`](referencia-fasm.md) — um deck de bancada na raiz com um slide por layout
e por componente, e a situação recomendada de cada um nas notas. Fica **fora** de `aulas/`, então
o build nunca o publica.

As três regras que mais quebram deck:

- **Nada de CSS, `<style>`, grid ou HTML de layout.** Escolha o `layout:` que casa com a forma do
  conteúdo e preencha o frontmatter dele. O tema desenha o resto.
- **Todo frontmatter é cercado por `---` em cima e embaixo.** Entre dois slides sem corpo você vê
  duas linhas `---` seguidas — isso está certo. Compartilhar um `---` entre dois blocos faz o
  Slidev imprimir `layout:` como texto no meio do slide.
- **Não repita `title:` no bloco de abertura.** Ele é headmatter **e** frontmatter do primeiro
  slide ao mesmo tempo; chave duplicada em YAML quebra o arquivo inteiro.

`npm run lint` pega as três, com arquivo e linha. Rode antes de commitar.

Uma quarta que não quebra, só sai errada: **`**negrito**` não funciona dentro do frontmatter.**
Os `items:` de `columns`/`panels`, os `desc:` e os títulos são injetados com `v-html`, então o
markdown aparece literal na tela — `**Conduta:**` sai com os asteriscos. Use `<strong>` e `<em>`.

## O que vai na tela e o que fica na sua boca

Todo primeiro rascunho de aula sai escrito como texto: o título argumenta, o marcador se defende,
a figura carrega a metodologia junto. A revisão da aula 06 cortou sete slides e reescreveu uma
dúzia de títulos **sem tirar uma ideia do lugar** — era tudo moldura. O que ela fixou:

**Título e subtítulo nomeiam o slide; não o defendem.** `subtitle: Antes de perguntar o que a idade
faz com elas, é preciso dizer o que elas são — e o que elas não são` virou `Definição e
componentes.`; `O que exatamente está sendo segurado?` virou `Três formas de inibição.`; o
subtítulo de abertura da aula inteira virou `O gerente do cérebro.` Nada de pergunta retórica, nada
de "antes de X é preciso Y", nada de oração subordinada depois do travessão. Título com vírgula e
travessão está fazendo o trabalho que é seu, ao vivo.

**O marcador afirma uma coisa e para.** "Falha aqui aparece como impulsividade, **não como
esquecimento**"; "Manter sem manipular é memória de curto prazo **— outra coisa**". A cauda de
contraste saiu de todos. A turma lê o que está projetado enquanto você fala: duas orações por
marcador é uma a mais. O contraste ("e não aquilo") é fala sua — vai para as notas, se for para
algum lugar. E prefira a afirmação positiva: "Não são um conteúdo, são um controle" virou "Gerencia
e organiza os demais processos cognitivos."

**Kicker nomeia assunto, não posição no roteiro.** `kicker: A transição do bloco` e `kicker: Fecho
do bloco um` saíram. A turma não precisa da arquitetura do deck, precisa saber do que é o slide.
Sem assunto para nomear, omita o kicker.

**`statement` fica só com a frase.** Dois `statement` tinham parágrafo e `<Tags>` embaixo e foram
esvaziados. O layout existe para uma frase sozinha no meio da tela; o que se escreve sob ela
compete com ela.

**O `note:` de uma figura é a leitura da figura.** No `chart` de tamanhos de efeito o `note:` era a
metodologia ("g de Hedges, jovens de 18 a 35 anos… Maldonado et al. (2020), 438 amostras
independentes") e o slide seguinte, `Lendo o gráfico`, dizia o que o gráfico mostrava. Os dois
viraram um: o `note:` passou a ser a frase que a turma deve tirar do gráfico e o slide de leitura
foi apagado. Corolário: **citação não vai para a tela.** Autor e ano ficam nas notas do
apresentador; o PDF fica em `referencias/aula-NN/`.

**Corte a ressalva.** As maiores exclusões foram todas do mesmo tipo: a meta-análise com g por
condição, a comparação verbal × não verbal, a tabela de titulação, o slide sobre por que disfunção
executiva não é sinônimo de lesão frontal. É material verdadeiro, interessante e para outra
plateia. Em aula de graduação "parte da vantagem pode ser de método" é frase falada, não slide — e
`g = 0,604` não é para ninguém ler projetado.

**O termo técnico quando é o termo que está sendo ensinado; a palavra comum no resto.** "a resposta
mais fácil precisa ser *segurada*" virou "precisa ser *inibida*" — é o nome da função, e a aula é
sobre ela. Na direção oposta: "desinibição franca" virou "desinibição clara" e "a capacidade de se
conduzir" virou "a capacidade de controlar o seu comportamento".

**Concretize o caso com quem está nele.** "Foi encaminhado para avaliar o frontal" ganhou "pelo
neurologista"; quem pediu, quem reclamou, quem trouxe. A vinheta fica mais clínica com a mesma
quantidade de texto. Nas tabelas de queixa da família, cada fala tem que ser a queixa **daquela**
função: "repete a mesma história no mesmo dia" descrevia memória na linha da flexibilidade
cognitiva, e virou "está muito teimoso, não aceita mudar".

**Cortou uma fixação, renumere as outras.** As perguntas são numeradas no kicker (`Fixação ·
pergunta 2`); apagar a do meio deixa a turma vendo 1, 2, 4.

## Slides com figura

O lint não pega nada disto — só o olho, num slide renderizado. A aula 03 chegou a ter cinco slides
com os cinco defeitos ao mesmo tempo.

**`layout: image` só comporta um corpo curto.** Parágrafo de abertura + três marcadores +
`<Callout>` não cabem na meia-coluna: o texto transborda *para cima*, atravessa o título e o
`<Callout>` cai fora do slide. Nada avisa — o Slidev não corta, só deixa vazar. Use `image` quando
o texto for de duas ou três linhas. **Quando a figura é o assunto do slide — e o título costuma
denunciar isso ("o fluxo tem três saídas", "a linha do tempo…") — o layout certo é `diagram` com
um `<Figure>` no corpo**, o argumento em uma linha no `note:` e o resto nas notas do apresentador.

**Desenhe o SVG na proporção do palco em que ele vai cair.** No `diagram` o palco é largo e baixo,
perto de **2,8:1**; em `image` é quase quadrado. Um SVG de 960×620 jogado numa meia-coluna
renderiza a ~430px de largura e o rótulo de 13px vira 6px na projeção. Como regra: um rótulo
precisa de ~17px no viewBox para ser lido do fundo da sala, e o viewBox deve ter mais ou menos a
largura em que a figura será exibida.

**`font-family` sem aspas em SVG derruba a fonte inteira.** `font-family="Source Sans 3, Segoe UI,
…"` é valor CSS inválido (o `3` sozinho não é identificador), e num atributo de apresentação do SVG
o valor inválido invalida o atributo — o texto volta para a serifa padrão do navegador. Escreva
sempre `font-family="'Source Sans 3','Segoe UI',system-ui,sans-serif"`.

**Um SVG referenciado por `src` é um documento à parte** e não enxerga as `@font-face` do tema.
Ele vai cair no fallback do sistema (Segoe UI no Windows, outra coisa no runner do CI), então deixe
folga nas larguras de texto e não conte com a métrica do Source Sans.

**Não repita na figura o que o slide vizinho já diz.** Foi a origem de metade do excesso: as quatro
perguntas dentro do fluxograma eram as mesmas do `vs` anterior; a caixa de rodapé do SVG da GDS
repetia o `<Callout>` do próprio slide. Figura que recapitula um slide anterior mostra só a forma
do argumento — os nomes, não as descrições.

**Uma figura faz uma afirmação: a do título.** O SVG das funções complexas era três colunas, cada
uma com a sua lista de dependências — e "memória operacional" aparecia nas três. Isso é tabela, não
figura. Virou dois blocos: as três básicas numa fundação larga, as três complexas apoiadas em cima,
com as divisões desalinhadas de propósito, porque a base sustenta o conjunto e não uma função de
cada vez. A nuance que se perdeu (cada complexa se apoia em núcleos diferentes) é fala do
apresentador.

**A figura não se legenda.** As faixas de rodapé em versalete — `DE QUE NÚCLEO CADA UMA DEPENDE`,
`SISTEMAS CRISTALIZADOS, DE LONGO PRAZO` — saíram: quem intitula a figura é o `title:` do slide, e
o que a faixa dizia ou já está no desenho (o sistema de longo prazo em caixa tracejada basta) ou é
fala. Sobrevive só o que o olho não deduz: orientação (`ANTERIOR À ESQUERDA EM AMBAS AS VISTAS`) e
legenda de cor.

**Copie a figura canônica quando ela existe.** O modelo de Baddeley foi redesenhado para bater com
a figura publicada: a ordem dos subsistemas (esboço visuoespacial, buffer episódico, alça
fonológica), setas de **mão dupla** — para cima e para baixo — em vez de fios, e a fileira
cristalizada em caixa tracejada, categoria visual própria. A turma vai reencontrar essa figura no
livro; desenhá-la "melhor" custa o reconhecimento.

**Quando o assunto é anatomia, a figura tem que ser anatômica.** A silhueta esquemática do encéfalo
foi trocada por um atlas de Brodmann de verdade. E se a estrutura não aparece na vista que você
desenhou, **acrescente a vista** em vez de escrever um aviso: o cingulado anterior rendia um rótulo
`NA FACE MEDIAL DO LOBO` grudado na legenda, e agora há uma vista medial ao lado da lateral. A
figura dobrou de viewBox (1400×500) e continuou na proporção do palco do `diagram`.

**Refez a figura? Reescreva o `aria-label` e o `alt` junto.** São o mesmo texto e descrevem o
desenho que existe agora — o `alt` do `<Figure>` no deck é fácil de esquecer e fica mentindo. É
também onde o detalhe cortado do desenho ainda cabe: é texto, ninguém lê da terceira fileira.

**Os assets de origem não moram em `aulas/public/`.** O `public/` é publicado inteiro. O atlas de
onde saíram as duas vistas do encéfalo ficou em `referencias/aula-06/`, junto dos PDFs; para
`public/` vai só o SVG que algum slide referencia.

Para conferir um slide sem abrir o navegador, exporte só ele em PNG e olhe:

```bash
node node_modules/@slidev/cli/bin/slidev.mjs export aulas/<aula>.md \
  --format png --range 16-19 --output .tmp-export
```

Peça um intervalo com folga em volta do slide de interesse: intervalos curtos às vezes terminam
sem gravar arquivo nenhum, e repetir com um intervalo maior resolve. Apague o diretório depois.

## Antes de mexer no tema

O visual inteiro sai de [`theme/styles/tokens.css`](theme/styles/tokens.css) — é o único arquivo
com valores literais de cor, tipo e ritmo. Layouts e componentes só consomem `var()`. Para mudar a
cara das aulas, mude os tokens; para mudar a forma de um slide, mexa no layout correspondente.

Ao criar uma classe CSS no tema, **não use um nome de utilitária do UnoCSS**
(`grid`, `prose`, `flex`, `container`, `block`…). O Slidev roda UnoCSS, que gera a utilitária assim
que vê o nome no código; as duas regras passam a coexistir e brigar em silêncio — nada quebra, o
slide só fica sutilmente errado. Foi o que obrigou a renomear `.prose` para `.copy` e a tabela do
`<Grid>` para `.datagrid`. Para conferir um nome novo, procure-o no CSS final
(`dist/<aula>/assets/index-*.css`): se aparecer em duas regras, colidiu.

[`theme/layouts.json`](theme/layouts.json) é a fonte única do contrato: o `fasm-lint` valida contra
ele e o `docs/fasm.md` é **gerado** dele. Layout ou componente novo se descreve ali e depois roda
`npm run docs` — senão o lint acusa layout inexistente e a documentação mente.

## Convenções

| | |
|---|---|
| Decks | `aulas/aula-NN-slug-descritivo.md` |
| URL | o nome do arquivo (sem `.md`) vira o caminho: `/<repo>/aula-NN-slug-descritivo/` |
| Tema | `slidev-theme-fasm` — claro, um visual só, sem variantes e sem modo escuro |
| Idioma | `themeConfig.lang: pt-BR`; conteúdo em português |
| Imagens | `aulas/public/` — **não** na raiz do repo (veja "Por que `aulas/public/`" abaixo) |
| Headmatter | além de `theme`/`title`/`themeConfig`, cada aula traz `info:` (ementa de uma linha) e `date:` (`YYYY-MM-DD`), que alimentam a landing, e `download: true` + `exportFilename:`, que geram o PDF |
| Identidade do curso | `site.config.json` na raiz (`title`, `institution`, `description`, `intro`) — o único lugar com o nome da disciplina; nada de texto de identidade chumbado nos scripts |

## Comandos

```bash
npm run dev                                  # abre a primeira aula de aulas/ com hot reload
npm run dev -- 03                            # abre a aula cujo nome contém "03"
npm run ref                                  # abre o catálogo de layouts/componentes (raiz)
npm run lint                                 # fasm-lint em todos os decks
npm run build                                # builda tudo em dist/ (roda o lint antes) e gera os PDFs
npm run docs                                 # regenera docs/fasm.md a partir de theme/layouts.json
npm run fonts                                # rebaixa as fontes do tema para theme/styles/fonts/
```

Para adicionar uma aula nova: crie o `.md` em `aulas/`, commit, push. O workflow builda e publica —
nenhuma config precisa ser tocada.

## O PDF de cada aula

Cada deck traz `download: true` e `exportFilename:` no headmatter. Com isso o `slidev build`
exporta o PDF ao final e o deck publicado ganha o botão de download apontando para ele.

A exportação é feita pelo Playwright. Localmente basta o `npm install` (o `playwright-chromium` é
devDependency e baixa o navegador no postinstall); no CI o workflow ainda roda
`npx playwright install --with-deps chromium`, porque as bibliotecas de sistema que o Chromium
carrega não vêm no runner. `scripts/build-site.mjs` confere que o PDF existe e **falha o build** se
não existir — sem isso o site subiria com um botão de download apontando para um 404.

## Por que `aulas/public/`

O Slidev define `userRoot = dirname(<arquivo do deck>)` e roda o Vite com `root: userRoot` e
`publicDir: <userRoot>/public`. Ou seja: `public/`, `components/`, `layouts/`, `setup/` e `styles/`
**seus** são procurados dentro da pasta do deck, não na raiz do repo.

O tema é a exceção — ele é resolvido por resolução de pacote Node a partir do arquivo `.md`, que
sobe os diretórios pai até achar o `node_modules/` da raiz. É por isso que `theme/` é declarado
como **workspace npm** no `package.json`: o npm cria o link `node_modules/slidev-theme-fasm`, e
daí um deck em `aulas/` o resolve exatamente como resolveria um tema publicado no registro. Deck em
subpasta funciona com o tema, mas não funcionaria com layouts locais colocados na raiz.

### O caminho absoluto e a `--base`

Escreva os caminhos com `/` na frente (`/figura.svg`) — o `public/` do deck é servido na raiz da
base dele. Mas atenção a **quem** resolve esse caminho: o Vite reescreve `/figura.svg` com a
`--base` do build só quando ele está **estático no template** (`<img src="/figura.svg">`). Chegando
como *prop* — `<Figure src="/figura.svg" />`, `image:` no frontmatter — o caminho é só uma string
em tempo de execução, e o Vite não a toca. Local, com base `/`, não dá diferença; no GitHub Pages,
onde cada aula é servida de `/<repo>/<aula>/`, o navegador pede o arquivo na raiz do domínio e leva
404 — a figura some **só no site publicado**.

Por isso todo caminho de asset do tema passa por [`theme/utils/asset.js`](theme/utils/asset.js),
que prefixa `import.meta.env.BASE_URL`. Componente ou layout novo que aceite caminho de arquivo
(`src`, `image`, `photo`, `bg`, `video`, `iframe`) precisa chamar `assetUrl()` — senão repete o bug.

## Build e deploy

`scripts/build-site.mjs` roda um `slidev build` **por aula** (cada uma precisa do seu próprio
`--base`, que é único por invocação do CLI), com `--router-mode hash` — o modo que o Slidev
documenta para deploy em subdiretório como o GitHub Pages. Depois gera a landing `dist/index.html`
lendo o headmatter de cada deck.

A publicação é pelo **artefato do Actions**: o job `build` empacota o `dist/` com
`upload-pages-artifact` e o job `deploy` o entrega ao Pages com `deploy-pages` (OIDC — daí
`pages: write` + `id-token: write` e o `environment: github-pages`). Exige **Settings → Pages →
Source: `GitHub Actions`**; com a fonte em `Deploy from a branch` o `configure-pages` falha.
Detalhes no README.

`scripts/lib.mjs` concentra o que os scripts compartilham: onde ficam as aulas (`deckFiles()`), como
achar binários de `node_modules` sem npx (`binOf()`) e como ler o `site.config.json` (`siteConfig()`).
Nenhum script tem nome de arquivo de aula fixo — `npm run dev` descobre a primeira aula sozinho.

O `--base` vem da env `SITE_BASE` (`/` local; no CI, o output `base_path` do `configure-pages`, que
é o caminho da URL real do site). **O nome do repositório no GitHub faz parte das URLs** — renomear
o repo muda todos os links e exige rodar o workflow de novo.

> Ao rodar o CLI do Slidev à mão no Git Bash, cuidado com `--base /`: o MSYS converte a barra
> solitária em `C:/Program Files/Git/` e o build sai com os caminhos de asset errados. Use os
> scripts do `package.json`, que chamam os binários pelo Node sem shell.
