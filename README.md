# Psicologia Comportamental · FASM

Slides das aulas do semestre. Uma aula por arquivo em [`aulas/`](aulas/), feitas com
[Slidev](https://sli.dev/) e o tema próprio [`slidev-theme-fasm`](theme/), publicadas no GitHub
Pages — cada aula na sua própria URL, com PDF para download.

```
https://barbieri97.github.io/template-aulas/                    ← índice
https://barbieri97.github.io/template-aulas/aula-01-fundamentos-do-behaviorismo/
```

> **O nome do repositório é o prefixo de todas as URLs.** Renomeá-lo troca todos os links do site
> (foi o que aconteceu quando este repo virou `template-aulas`). Nenhuma configuração precisa ser
> tocada — o workflow lê o nome do próprio repositório —, mas links antigos param de valer.

## Uso diário

```bash
npm install                                   # uma vez
npm run dev                                   # abre a primeira aula com hot reload
npm run dev -- 03                             # abre a aula cujo nome contém "03"
npm run ref                                   # catálogo de layouts e componentes do tema
npm run lint                                  # valida os decks
npm run build                                 # gera dist/ igual ao que vai pro ar (com os PDFs)
npm run docs                                  # regenera docs/fasm.md do contrato do tema
```

**Para criar uma aula nova:** copie um `.md` de `aulas/`, renomeie para
`aula-NN-titulo-em-slug.md`, edite, commit, push. O workflow builda e publica sozinho — o índice se
atualiza a partir do `title` / `info` / `date` do topo do arquivo. O nome do arquivo vira a URL.

Antes de escrever slides, leia [`docs/fasm.md`](docs/fasm.md) — é o contrato do tema (layouts,
campos, componentes). Resumo das convenções em [`CLAUDE.md`](CLAUDE.md).

> O `npm run lint` separa **erros** de **avisos**: erro (layout inexistente, campo obrigatório
> ausente, slide vazio) aborta o build; aviso (slide denso, campo desconhecido) só aparece.

## O tema

O tema mora em [`theme/`](theme/) e é declarado como workspace npm, então um deck em `aulas/` o
resolve como resolveria um pacote publicado. É claro, com um visual só — sem variantes e sem modo
escuro —, serifada nos títulos e sem serifa no corpo, com as fontes servidas do próprio
repositório para que o slide saia igual em qualquer máquina e no PDF.

Todo valor visual está em [`theme/styles/tokens.css`](theme/styles/tokens.css); é o único arquivo
que se edita para mudar a aparência das aulas. O contrato de layouts e campos está em
[`theme/layouts.json`](theme/layouts.json), que alimenta tanto o `fasm-lint` quanto o
`docs/fasm.md` — depois de mexer nele, rode `npm run docs`.

## Primeira publicação

Este repositório já está publicado. Num repo novo (criado do zero ou a partir deste template),
uma vez só:

1. Crie o repositório em github.com — público, sem README/gitignore/licença.
   **O nome importa:** ele vira o prefixo de todas as URLs do site.
2. **Settings → Pages → Build and deployment → Source: `GitHub Actions`.**
   Este passo vem **antes** do primeiro push: com a fonte em `Deploy from a branch`, o passo
   `configure-pages` do workflow falha logo no início.
3. Conecte e envie:
   ```bash
   git remote add origin https://github.com/<usuario>/<nome-do-repo>.git
   git push -u origin main
   ```
4. Aba **Actions** → a run "Publicar aulas no GitHub Pages" fica verde. A URL publicada aparece
   no job `deploy` (e em Settings → Pages).

Daí em diante, todo push na `main` republica.

> Se você **renomear** o repositório, atualize o remote local
> (`git remote set-url origin https://github.com/<usuario>/<novo-nome>.git`) e rode o workflow de
> novo — o `--base` dos decks é gravado no build, então o site precisa ser reconstruído com o
> nome novo.

## Usar este repositório como template para outra disciplina

Nada aqui tem o nome do repositório ou da disciplina chumbado no código: o `--base` sai do nome do
repositório no CI, e a identidade do curso mora em [`site.config.json`](site.config.json). Criando
um repo novo **a partir do template**:

1. Edite `site.config.json` — quatro campos, é o único arquivo de identidade:
   ```json
   {
     "title": "Nome da disciplina",
     "institution": "SIGLA",
     "description": "Uma linha para buscadores e prévia de link",
     "intro": "O parágrafo abaixo do título na página inicial (aceita HTML)"
   }
   ```
2. Apague as aulas de exemplo em `aulas/` e escreva a primeira. **O build falha de propósito com
   `aulas/` vazio** — não deixe o repo sem nenhuma aula esperando o CI ficar verde.
3. **Settings → Pages → Source: `GitHub Actions`.** Configuração de repositório não vem do
   template — este passo é sempre manual, e precisa vir antes do primeiro push.
4. Faça o push na `main` e espere a run terminar.

O `README.md` e o título deste arquivo continuam sendo texto seu — troque quando quiser.

### Como a publicação chega no Pages

O GitHub tem dois jeitos de publicar Pages: mandar um artefato pelo Actions
(`configure-pages` + `upload-pages-artifact` + `deploy-pages`) ou servir um branch. Este
repositório usa o **artefato**.

O workflow tem dois jobs. O `build` roda `scripts/build-site.mjs` e empacota o `dist/` como
artefato do Pages; o `deploy` recebe esse artefato e publica, autenticando por OIDC — daí as
permissões `pages: write` e `id-token: write`, e o `environment: github-pages` no job de deploy.

O `--base` de cada deck sai do output `base_path` do `configure-pages`, que é o caminho da URL
real do site (`/<nome-do-repo>` num repo comum, `/` num repo `<usuario>.github.io`). Por isso o
nome do repositório não aparece em lugar nenhum do código.

> Uma versão anterior deste repositório publicava por branch `gh-pages`, depois de o caminho por
> artefato ter ficado preso em `deployment_queued` até o timeout. Se isso voltar a acontecer, o
> sintoma é o job `deploy` pendurado sem erro: cheque em Settings → Pages se a fonte é mesmo
> `GitHub Actions` e se não há implantação anterior travada.

## Como funciona o build

`scripts/build-site.mjs`:

1. lê o topo (headmatter) de cada `aulas/*.md` para pegar título, ementa e data;
2. roda `fasm-lint` em todos — erro aqui aborta o build;
3. roda **um `slidev build` por aula**, cada uma com o seu `--base` e `--router-mode hash`
   (necessário porque o Pages serve tudo sob `/<repo>/` e só tem um `404.html`, na raiz);
4. exporta o **PDF** de cada aula (o headmatter traz `download: true`) e confere que ele existe —
   se faltar, o build falha, para o site não subir com um botão de download quebrado;
5. gera a landing `dist/index.html` listando as aulas, com título e ementa vindos de
   `site.config.json`.

A exportação do PDF é feita pelo Playwright. Local: o `npm install` já baixa o Chromium. No CI: o
workflow roda `npx playwright install --with-deps chromium`, porque o runner não traz as
bibliotecas de sistema que o navegador carrega.

O `--base` vem da variável `SITE_BASE` (`/` local, `/<repo>/` no CI).

`scripts/lib.mjs` guarda o que os scripts compartilham (onde ficam as aulas, como achar os binários,
como ler o `site.config.json`) — é lá que se mexe para mudar essas convenções.

Detalhe que costuma quebrar deck em subpasta: o Slidev trata a **pasta do arquivo `.md`** como raiz
do projeto (`root`/`publicDir` do Vite). Por isso as **imagens vão em `aulas/public/`** e referências
a elas nos slides usam caminho absoluto (`/foto.png`). O tema, por ser um pacote npm, é resolvido
subindo até o `node_modules/` da raiz — e por isso funciona normalmente com os decks em `aulas/`.
