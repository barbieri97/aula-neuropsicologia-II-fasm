<!--
  GERADO por theme/scripts/gen-docs.mjs a partir de theme/layouts.json.
  Não edite à mão: rode `npm run docs` depois de mexer no contrato do tema.
-->

# slidev-theme-fasm — contrato de autoria

O tema das aulas. Você escolhe um `layout:` por slide e preenche o frontmatter dele; o tema
desenha kicker, título, rodapé, paginação, cor, tipo, espaçamento e movimento.

## Regras

1. **Escolha o layout que tem a forma do conteúdo** e preencha o frontmatter dele. Definição →
   `define`; comparação → `vs`; números → `stats`; processo → `steps`; estrutura ou fluxo →
   `diagram`.
2. **Nada de CSS, `<style>`, grid ou HTML de layout.** O tema desenha; você escreve. Se um slide
   parece precisar de CSS, quase sempre é o layout errado.
3. **Uma ideia por slide.** No máximo ~7 marcadores, escritos como frases curtas. O que não couber
   vai para as notas do apresentador — o `fasm-lint` avisa quando o slide virou documento.
4. **Todo frontmatter é cercado por `---` em cima e embaixo.** Entre dois slides sem corpo você vê
   duas linhas `---` seguidas: está certo. Compartilhar um `---` entre dois blocos faz o Slidev
   imprimir `layout:` como texto no meio do slide — o lint pega isso.
5. **O bloco de abertura é headmatter E frontmatter do primeiro slide ao mesmo tempo.** Não repita
   `title:` nele: chave duplicada em YAML quebra o deck inteiro.
6. **Ênfase nos títulos:** `<em>palavra</em>` sai em itálico na cor do tema; `<span
   class="accent2">palavra</span>` sai na cor, sem itálico. Nada mais precisa de HTML.
7. **Componha componentes no corpo** de `default`, `statement` e `two-cols`. É o que faz um deck
   parecer feito para a aula em vez de preenchido num formulário.
8. **Números crus, símbolo à parte:** `value: 80`, `unit: "%"`. O tema dá ao símbolo tamanho e cor
   próprios; junto no mesmo campo ele compete com o algarismo.
9. **Dentro de `{ ... }`, aspas em qualquer valor com vírgula ou dois-pontos** (`before: "1,8 mi"`).
10. **Notas do apresentador** são um comentário HTML como ÚLTIMO bloco do corpo do slide:
    `<!-- o que você vai dizer -->`. Nunca aparecem no slide.
11. **Revele por etapas quando isso ensina:** `<v-clicks>` em volta da lista, ou `v-click` num
    elemento. O PDF exporta o estado final, então nada se perde no material de estudo.
12. **Marque tangentes com `aside:`** (`aside: "vinheta clínica"`): régua de acento e etiqueta no
    canto dizem à turma que aquilo é desvio, não a espinha do argumento.
13. **Agrupe a aula em 3 a 6 `section`.** A trilha de progresso no topo aparece sozinha e passa a
    mostrar em que parte a turma está.
14. **Título, subtítulo e legenda são injetados como HTML.** Isso é o que permite `<em>`, mas também
    significa que um sinal de menor literal desaparece: `&lt;Grid&gt;` volta a ser `<Grid>`, que o
    navegador lê como tag desconhecida e engole. Se precisar mostrar `<algo>` num título, escreva
    `&amp;lt;algo&amp;gt;` — ou, melhor, escreva o nome sem os sinais.
15. **Antes de terminar, rode `npm run lint`.** Ele pega layout inexistente, campo obrigatório que
    faltou, tom e ícone inválidos, slide vazio e o erro do `---` compartilhado.

## Sobre este tema

Claro, um visual só, sem variantes e sem modo escuro. Serifada (Source Serif 4) nos títulos, sem
serifa (Source Sans 3) no corpo, um azul de destaque, régua de cabelo no lugar de caixas. As fontes
são servidas do próprio repositório: o slide renderiza igual em qualquer máquina, offline, e o PDF
sai idêntico à tela.

Cor é sinal, não enfeite: o azul marca hierarquia (kicker, numeral, ênfase) e os quatro tons
funcionais (`good`, `warn`, `bad`, `info`) marcam significado. Todos os pares de texto e fundo
passam de 4.5:1 de contraste, e os de texto corrido passam de 7:1 — o público lê isso projetado, de
longe, numa sala que quase nunca está escura.

Para mudar a aparência do tema inteiro, mexa em `theme/styles/tokens.css`. É o único arquivo com
valores literais; layouts e componentes só consomem `var()`.


## Abertura de um deck

```yaml
---
theme: slidev-theme-fasm
title: "Envelhecimento normal"        # vira o título do site e o rótulo do rodapé
info: Corpo, cérebro e mundo social   # uma linha; alimenta a landing page
date: "2026-08-18"                    # YYYY-MM-DD; idem
author: FASM · Neuropsicologia II
download: true                        # gera o PDF no build e liga o botão de download
exportFilename: aula-02-envelhecimento-normal
themeConfig:
  lang: pt-BR                         # hifenização e caixa alta corretas em português
layout: lead                          # o primeiro slide começa aqui mesmo
index: "02"
kicker: Neuropsicologia II · FASM
subtitle: O que muda no corpo e no sistema nervoso.
---
```

## Campos válidos em qualquer slide

| campo | tipo | o que faz |
|---|---|---|
| `bg` | string | Fundo do slide: mesh | aurora | grain | dots | grid, ou um caminho/URL de imagem (que recebe um véu automático de legibilidade). |
| `ghost` | string | Glifo gigante e apagado ao fundo. Textura, não informação. |
| `foot` | string | Substitui o rótulo do rodapé neste slide (o padrão é o título do deck). |
| `aside` | string|boolean | Marca o slide como tangente/aprofundamento: régua de acento à esquerda e etiqueta no canto. `true` usa 'aprofundamento'; uma string define o texto. |
| `class` | string | Classe extra no slide. A única prevista pelo tema é `dropcap`, que dá capitular ao primeiro parágrafo de um `default`. |
| `wide` | boolean | Solta a medida de leitura do corpo (por padrão o texto é limitado a ~64 caracteres por linha). |

## Layouts

| layout | para que serve | campos |
|---|---|---|
| `cover` | Capa: kicker, título e subtítulo centrados. | kicker, **title**, subtitle |
| `lead` | Abertura assimétrica: título ancorado embaixo à esquerda, muito espaço em branco. A alternativa dramática à capa. | kicker, **title**, subtitle, index |
| `section` | Divisória de parte. Também é o que alimenta a trilha de progresso no topo dos slides seguintes. | index, kicker, **title**, subtitle |
| `end` | Fechamento. | title, subtitle, contact |
| `statement` | Uma frase grande e centrada. O slide de pausa. | kicker, **title** |
| `bigtype` | Tipo em sangria: uma frase preenche o slide. Momento de pontuação, para virar a página do argumento. | kicker, **title**, subtitle |
| `quote` | Citação com atribuição. | **quote**, author |
| `default` | Uso geral: o markdown do autor no corpo. A tela em branco do tema — é aqui que se compõem os componentes. | kicker, title |
| `define` | Termo + definição. O slide 'o que é X'. | kicker, **term**, definition, points |
| `columns` | Duas ou três colunas com cabeça própria, para listas que se leem em paralelo. | kicker, title, **columns** |
| `panels` | De 2 a 4 subtemas em cartões. Cada cartão é uma unidade fechada (diferente de `columns`, em que as listas se comparam). | kicker, title, **panels** |
| `vs` | Confronto A × B: dois painéis simétricos e um divisor. | kicker, title, **left**, **right**, label |
| `steps` | Um processo em etapas, ligadas por um fio vertical. | kicker, title, **steps** |
| `agenda` | O roteiro do encontro. | kicker, title, **items** |
| `reference` | Folha de consulta: pares termo → descrição. Glossário, bibliografia, atalhos. | kicker, title, groups, items |
| `timeline` | Sequência datada na horizontal. Conta ordem, não duração. | kicker, title, **events** |
| `stats` | De 2 a 4 números em destaque. | kicker, title, columns, **stats** |
| `metric` | Um número só, assimétrico: algarismo gigante de um lado, contexto do outro. | **value**, unit, kicker, label |
| `fact` | Um número gigante, centrado. O irmão simétrico do `metric`. | kicker, **value**, unit, label |
| `feature` | Células de ícone + título + descrição, sem cartão. Para 3 a 6 razões ou atributos. | kicker, title, columns, **features** |
| `chart` | Gráfico (ECharts) com nota de rodapé. | kicker, title, note, **chart** |
| `diagram` | Palco emoldurado para um visual: Mermaid, <Figure> ou <Grid>. Prefira-o sempre que a ideia for uma estrutura ou um fluxo. | kicker, title, note, highlight, build |
| `compare` | Tabela antes/depois. | kicker, title, columns, **rows** |
| `two-cols` | Divisão genérica: o corpo à esquerda, o que vem depois de `::right::` à direita. | kicker, title |
| `image` | Texto + imagem lado a lado. O markdown do corpo é a coluna de texto. | kicker, title, **image**, side, alt |
| `showcase` | Herói assimétrico (43/57): a imagem é o assunto e o texto é a legenda dela. | kicker, title, subtitle, **image**, side, alt |
| `bleed` | Imagem em sangria com texto sobreposto. O texto sempre recebe um véu de legibilidade. | **image**, kicker, stat, title, subtitle, duotone |
| `embed` | Vídeo ou iframe. | kicker, title, video, iframe |
| `logos` | Parede de marcas ou instituições (num contexto acadêmico: as fontes de um dado). | kicker, title, columns, **logos** |
| `code` | Código. O corpo é um bloco cercado (aceita magic-move). | kicker, title |
| `code-explain` | Código + notas numeradas ao lado. Com realce por etapas (```ts {1|2|3}```), cada nota acende na sua vez. | kicker, title, **notes** |

*Campos em negrito são obrigatórios.*

## Os campos de cada layout

### `cover`

Capa: kicker, título e subtítulo centrados.

- `kicker` (string)
- `title` (string, **obrigatório**) — Aceita <em>ênfase</em> e <span class="accent2">destaque</span>.
- `subtitle` (string)

### `lead`

Abertura assimétrica: título ancorado embaixo à esquerda, muito espaço em branco. A alternativa dramática à capa.

- `kicker` (string)
- `title` (string, **obrigatório**)
- `subtitle` (string)
- `index` (string) — Numeral gigante e apagado no espaço negativo.

### `section`

Divisória de parte. Também é o que alimenta a trilha de progresso no topo dos slides seguintes.

- `index` (string) — Numeral da parte, em destaque e ao fundo.
- `kicker` (string)
- `title` (string, **obrigatório**)
- `subtitle` (string)

### `end`

Fechamento.

- `title` (string)
- `subtitle` (string)
- `contact` (string)

### `statement`

Uma frase grande e centrada. O slide de pausa.

- `kicker` (string)
- `title` (string, **obrigatório**)

### `bigtype`

Tipo em sangria: uma frase preenche o slide. Momento de pontuação, para virar a página do argumento.

- `kicker` (string)
- `title` (string, **obrigatório**)
- `subtitle` (string)

### `quote`

Citação com atribuição.

- `quote` (string, **obrigatório**)
- `author` (string)

### `default`

Uso geral: o markdown do autor no corpo. A tela em branco do tema — é aqui que se compõem os componentes.

- `kicker` (string)
- `title` (string)

### `define`

Termo + definição. O slide 'o que é X'.

- `kicker` (string)
- `term` (string, **obrigatório**)
- `definition` (string)
- `points` (array) — Lista de strings de apoio.

### `columns`

Duas ou três colunas com cabeça própria, para listas que se leem em paralelo.

- `kicker` (string)
- `title` (string)
- `columns` (array, **obrigatório**) — itens: `title: string, items: string[], body: string (HTML, alternativo a items)`

### `panels`

De 2 a 4 subtemas em cartões. Cada cartão é uma unidade fechada (diferente de `columns`, em que as listas se comparam).

- `kicker` (string)
- `title` (string)
- `panels` (array, **obrigatório**) — itens: `title: string, icon: string (lucide:*), items: string[], body: string`

### `vs`

Confronto A × B: dois painéis simétricos e um divisor.

- `kicker` (string)
- `title` (string)
- `left` (object, **obrigatório**) — itens: `title: string, items: string[]`
- `right` (object, **obrigatório**) — itens: `title: string, items: string[]`
- `label` (string) — Texto do divisor (padrão 'vs').

### `steps`

Um processo em etapas, ligadas por um fio vertical.

- `kicker` (string)
- `title` (string)
- `steps` (array, **obrigatório**) — itens: `title: string, desc: string, icon: string (lucide:*)`

### `agenda`

O roteiro do encontro.

- `kicker` (string)
- `title` (string)
- `items` (array, **obrigatório**) — itens: `topic: string, desc: string`

### `reference`

Folha de consulta: pares termo → descrição. Glossário, bibliografia, atalhos.

- `kicker` (string)
- `title` (string)
- `groups` (array) — itens: `title: string, items: [{ term, desc }]` — Use `groups` OU `items`.
- `items` (array) — itens: `term: string, desc: string`

### `timeline`

Sequência datada na horizontal. Conta ordem, não duração.

- `kicker` (string)
- `title` (string)
- `events` (array, **obrigatório**) — itens: `date: string, title: string, desc: string`

### `stats`

De 2 a 4 números em destaque.

- `kicker` (string)
- `title` (string)
- `columns` (number)
- `stats` (array, **obrigatório**) — itens: `value: string|number, unit: string, label: string, icon: string, tone: good|warn|bad|info`

### `metric`

Um número só, assimétrico: algarismo gigante de um lado, contexto do outro.

- `value` (string|number, **obrigatório**) — Deixe o número cru; o símbolo vai em `unit`.
- `unit` (string)
- `kicker` (string)
- `label` (string) — Linha de contexto; aceita HTML.

### `fact`

Um número gigante, centrado. O irmão simétrico do `metric`.

- `kicker` (string)
- `value` (string|number, **obrigatório**)
- `unit` (string)
- `label` (string)

### `feature`

Células de ícone + título + descrição, sem cartão. Para 3 a 6 razões ou atributos.

- `kicker` (string)
- `title` (string)
- `columns` (number)
- `features` (array, **obrigatório**) — itens: `icon: string (lucide:*), title: string, desc: string`

### `chart`

Gráfico (ECharts) com nota de rodapé.

- `kicker` (string)
- `title` (string)
- `note` (string) — Legenda sob o gráfico; é onde se diz a fonte — ou que o traçado é esquemático.
- `chart` (object, **obrigatório**) — itens: `type: bar|line|area|donut, unit: string, categories: array, series: [{ name, data[] }], horizontal: boolean, height: string`

### `diagram`

Palco emoldurado para um visual: Mermaid, <Figure> ou <Grid>. Prefira-o sempre que a ideia for uma estrutura ou um fluxo.

- `kicker` (string)
- `title` (string)
- `note` (string)
- `highlight` (array) — Só fluxograma: ids dos nós a acentuar; o resto apaga. Use os ids do seu mermaid, sem sublinhado.
- `build` (boolean) — Faz o diagrama entrar em cascata. Use quando a montagem em si ensina.

### `compare`

Tabela antes/depois.

- `kicker` (string)
- `title` (string)
- `columns` (array) — Cabeçalhos; padrão [Medida, Antes, Depois, Δ].
- `rows` (array, **obrigatório**) — itens: `metric: string, before: string, after: string, delta: string`

### `two-cols`

Divisão genérica: o corpo à esquerda, o que vem depois de `::right::` à direita.

- `kicker` (string)
- `title` (string)

### `image`

Texto + imagem lado a lado. O markdown do corpo é a coluna de texto.

- `kicker` (string)
- `title` (string)
- `image` (string, **obrigatório**) — Caminho em aulas/public/, p.ex. /figura.png.
- `side` (string) — um de: `left | right`
- `alt` (string)

### `showcase`

Herói assimétrico (43/57): a imagem é o assunto e o texto é a legenda dela.

- `kicker` (string)
- `title` (string)
- `subtitle` (string)
- `image` (string, **obrigatório**)
- `side` (string) — um de: `left | right`
- `alt` (string)

### `bleed`

Imagem em sangria com texto sobreposto. O texto sempre recebe um véu de legibilidade.

- `image` (string, **obrigatório**)
- `kicker` (string)
- `stat` (string) — Um algarismo gigante sobreposto.
- `title` (string)
- `subtitle` (string)
- `duotone` (boolean) — Dessatura a imagem e a puxa para o azul do tema (padrão: ligado).

### `embed`

Vídeo ou iframe.

- `kicker` (string)
- `title` (string)
- `video` (string)
- `iframe` (string)

### `logos`

Parede de marcas ou instituições (num contexto acadêmico: as fontes de um dado).

- `kicker` (string)
- `title` (string)
- `columns` (number)
- `logos` (array, **obrigatório**) — itens: `icon: string (lucide:*), text: string`

### `code`

Código. O corpo é um bloco cercado (aceita magic-move).

- `kicker` (string)
- `title` (string)

### `code-explain`

Código + notas numeradas ao lado. Com realce por etapas (```ts {1|2|3}```), cada nota acende na sua vez.

- `kicker` (string)
- `title` (string)
- `notes` (array, **obrigatório**) — Uma nota por etapa, em ordem; aceita HTML.

## Componentes

Componha-os no corpo de `default`, `statement` e `two-cols` — e em qualquer layout que
aceite corpo. São eles que dão textura a um deck que, só com campos de layout, sairia
igual a todos os outros.

> Ao passar um binding `:prop="…"`, lembre que o valor é um atributo HTML e HTML não tem
> escape com barra invertida: use aspas simples por dentro e `&quot;` para aspas duplas
> literais. Um `\"` ali dentro quebra o build do deck inteiro, não só daquele slide.

### `<Callout>`

Aparte destacado: a ressalva, o aviso.

**props:** icon (padrão lucide:info), tone (accent|good|warn|bad|info|muted)

```html
<Callout tone="warn" icon="lucide:triangle-alert">A correspondência é <strong>aproximada</strong>.</Callout>
```

### `<Grid>`

A tabela quando ela é o argumento.

**props:** data (array 2D, HTML permitido), head (boolean), highlight ("row:3" | "col:2" | "cell:3,2", base 1 sobre `data` inteiro)

```html
<Grid :data="[['Sistema','Mecanismo'],['Renal','menor depuração']]" head highlight="row:2" />
```

### `<Stat>`

Um número com rótulo.

**props:** value, unit, label, size (sm|md|lg|xl), icon, tone, accent

```html
<Stat value="1,8" unit=" mi" label="recrutas testados" />
```

### `<StatCard>`

O número dentro de um cartão, para vários lado a lado.

**props:** os mesmos de Stat (padrão size=md, accent=false)

```html
<StatCard value="38" unit="%" label="prevalência" />
```

### `<Tags>`

Fileira de termos curtos que não merece virar bullets.

**props:** items (array de strings)

```html
<Tags :items="['exaustão', 'fraqueza de preensão', 'lentidão da marcha']" />
```

### `<Badge>`

Selo em linha, para um estado curto no meio do texto.

**props:** tone

```html
consenso <Badge tone="good">estabelecido</Badge>
```

### `<Meter>`

Barra de proporção: quando a fração importa mais que a grandeza.

**props:** value, max (padrão 100), label, display, tone

```html
<Meter :value="38" label="Cobertura" />
```

### `<Icon>`

Ícone, embutido no bundle (funciona offline e no PDF).

**props:** name (lucide:*), size

```html
<Icon name="lucide:brain" />
```

### `<Figure>`

Imagem ou diagrama com legenda — numa aula, a figura sem legenda é enfeite.

**props:** src, alt, caption, credit

```html
<Figure src="/corte.png" caption="Atrofia cortical" credit="Adaptado de …" />
```

### `<Person>`

Atribuir uma teoria a quem a formulou, sem gastar um slide.

**props:** name, role, photo

```html
<Person name="Paul Baltes" role="lifespan" />
```

### `<Kbd>`

Tecla, para atalhos.

**props:** —

```html
<Kbd>o</Kbd> mostra todos os slides
```

### `<Terminal>`

Sessão de terminal.

**props:** lines ([{cmd}|{out}]), title

```html
<Terminal :lines="[{cmd:'npm run dev'}]" />
```

### `<FileTree>`

Árvore de arquivos.

**props:** items ([{name, children}])

```html
<FileTree :items="[{name:'aulas', children:[{name:'aula-01.md'}]}]" />
```

### `<Plot>`

Gráfico solto dentro de um corpo de slide.

**props:** type, categories, series, unit, height, horizontal (apelido: BarChart)

```html
<Plot type="line" :categories="['20','40','60']" :series="[{name:'Volume',data:[100,96,90]}]" />
```

### `<Fit>`

Encolhe o conteúdo para caber (os layouts já o aplicam).

**props:** —

```html
<Fit>conteúdo longo</Fit>
```

### `<Ghost>`

Glifo gigante ao fundo.

**props:** text

```html
<Ghost text="03" />
```

### `<Reveal>`

Entrada padrão do tema para conteúdo extra.

**props:** delay

```html
<Reveal :delay="120">entra depois</Reveal>
```

