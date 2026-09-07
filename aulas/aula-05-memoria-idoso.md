---
theme: slidev-theme-fasm
title: "Avaliação da memória no idoso"
info: Taxonomia, processos e neuroanatomia da memória; o que o envelhecimento
  muda em cada sistema; aplicação, correção e interpretação da Memória Lógica
date: "2026-09-08"
author: FASM · Neuropsicologia II
# Gera o PDF no build (via playwright-chromium) e liga o botão de download no deck.
download: true
exportFilename: aula-05-memoria-idoso
themeConfig:
  lang: pt-BR
layout: lead
index: "05"
kicker: Neuropsicologia II · FASM
subtitle: O que a memória é, o que muda nela com a idade e como se mede essa
  mudança na clínica.
---

<!--
- **MLP / MCP** — memória de longo prazo e memória de curto prazo.
- **EC** — envelhecimento cognitivo, a sigla usada pelo capítulo de referência.
- **ET / EL** — estudos transversais e estudos longitudinais.
- **Capítulo de referência** — Abrisqueta-Gomez, J. Memória e envelhecimento cognitivo saudável. In: Malloy-Diniz, Fuentes & Cosenza (orgs.), *Neuropsicologia do Envelhecimento*. Porto Alegre: Artmed, cap. 10, p. 171-196.
- Estrutura do encontro: 1 h de exposição, 30 min de intervalo, 1 h 30 de vinheta em grupo.
-->

---
layout: agenda
kicker: Aula 05 · o caminho de hoje
title: Três blocos e uma dinâmica
items:
  - {
      topic: "A memória",
      desc: "taxonomia, processos e neuroanatomia — o vocabulário do resto da aula"
    }
  - {
      topic: "A memória no envelhecimento",
      desc: "qual sistema cai, qual se mantém, e o que a pesquisa ainda não decidiu"
    }
  - {
      topic: "Avaliação da memória",
      desc: "a Memória Lógica: aplicação, correção e interpretação"
    }
  - {
      topic: "Vinheta clínica",
      desc: "dois protocolos de Memória Lógica para corrigir e interpretar em grupo"
    }
---

<!--
- Os três primeiros blocos reaparecem adiante como slides de seção, numerados de 01 a 03. A trilha no topo mostra em qual deles a turma está.
- A dinâmica não tem slides: as duas fichas são entregues em papel depois do intervalo.
-->

---
layout: section
index: "01"
kicker: Parte um
title: A memória
subtitle: Antes de perguntar o que a idade faz com a memória, é preciso dizer de
  qual memória se está falando.
---

---
layout: define
kicker: O que se está chamando de memória
term: Memória
definition: A capacidade de <em>adquirir</em>, <em>reter</em> e <em>recuperar</em>
  informação — e de usá-la depois para orientar o comportamento.
points:
  - "<strong>Não é uma função só.</strong> É um conjunto de sistemas, com
    substratos, regras e prazos diferentes"
  - "Cada sistema envelhece de um jeito próprio — por isso não existe <em>a
    memória do idoso</em> no singular"
  - "A divisão em sistemas não é teórica: veio da clínica, de lesões que derrubam
    um e poupam o outro"
---

<!--
- Vale marcar desde já a diferença entre **queixa** e **desempenho**: o idoso se queixa de "memória" como categoria única, e o trabalho da avaliação é justamente desdobrar essa palavra.
- O capítulo de referência trata a memória como "módulos taxonômicos hierárquicos", em que **a duração da retenção** e **o tipo de informação** são os dois eixos que organizam tudo.
-->

---
layout: diagram
kicker: Bloco 1 · em uma figura
title: Dois ramos, não uma função só
note: A divisão vem de uma dupla dissociação clínica — a lesão que derruba o ramo
  de cima deixa o de baixo intacto. Adaptado de Squire (2004).
---

<Figure src="/taxonomia-memoria.svg" alt="A memória de longo prazo dividida em declarativa, com os ramos episódico e semântico, e não declarativa, com procedimental, pré-ativação, condicionamento e aprendizagem não associativa, cada um com a estrutura cerebral correspondente" />

<!--
- **Dupla dissociação** — quando a lesão A prejudica a função 1 e poupa a 2, e a lesão B faz o contrário. É o argumento mais forte de que 1 e 2 são sistemas separados.
- A árvore é de **Squire**: começou como a dicotomia declarativa/não declarativa nos anos 1980 e foi ganhando ramos conforme cada estrutura foi sendo isolada.
- Repare que os ramos de baixo têm substratos **subcorticais** — estriado, cerebelo, amígdala. É por isso que sobrevivem à amnésia hipocampal.
-->

---
layout: columns
kicker: A primeira divisão
title: O que se declara e o que só aparece no desempenho
columns:
  - {
      title: "Declarativa (explícita)",
      items: [
        "Acessível à consciência: dá para dizer que se lembra",
        "Instala-se com <strong>uma</strong> exposição",
        "Depende do lobo temporal medial enquanto é nova",
        "É o que a queixa do idoso costuma nomear"
      ]
    }
  - {
      title: "Não declarativa (implícita)",
      items: [
        "Aparece no <strong>desempenho</strong>, não no relato",
        "Costuma exigir repetição para se instalar",
        "Sobrevive à amnésia densa do lobo temporal medial",
        "Hábito, pré-ativação, condicionamento"
      ]
    }
---

<!--
- O teste clínico da distinção: peça para alguém explicar **como** amarra o sapato. A execução é perfeita e a descrição é ruim — porque o conteúdo não está num formato declarável.
- Na prática da avaliação, quase todo instrumento de memória mede o ramo **declarativo**. O ramo implícito raramente é testado, e é justamente o que mais se preserva.
-->

---
layout: vs
kicker: Dentro da declarativa
title: Dois modos de saber
label: e
left:
  title: Episódica
  items:
    - "Eventos, com o <em>quando</em> e o <em>onde</em> colados"
    - "Responde a: o que, onde e quando"
    - "Recuperada com a sensação de reviver"
    - "É o sistema que mais declina com a idade"
right:
  title: Semântica
  items:
    - "Fatos e conceitos, sem o contexto em que se aprendeu"
    - "Sabe-se sem lembrar de ter aprendido"
    - "Acumula-se ao longo da vida inteira"
    - "Praticamente estável no envelhecimento normal"
---

<!--
- O exemplo do capítulo: quando se fala em **11 de setembro**, lembrar do atentado é semântico; lembrar de **onde você estava** naquele dia é episódico.
- Os dois interagem — a episódica usa componentes semânticos para situar a lembrança no tempo. A separação é funcional, não estanque.
- **Guarde este par.** Ele volta no bloco 2 como o contraste central do capítulo, e no bloco 3 como o que a Memória Lógica mede.
-->

---
layout: diagram
kicker: O outro corte
title: Quanto tempo cada coisa dura
note: "O corte por <em>duração</em> é independente do corte por <em>conteúdo</em>:
  uma informação semântica também passa pela janela de curto prazo antes de ficar."
---

<Figure src="/duracao-memoria.svg" alt="Três janelas de duração: sensorial em 250 a 500 milissegundos, curto prazo e operacional em segundos a um minuto, e longo prazo de minutos a décadas, cada uma com sua capacidade" />

<!--
- A dicotomia clássica curto prazo × longo prazo é de **Atkinson e Shiffrin**; o capítulo a resume citando Bueno (2001).
- A **memória sensorial** quase nunca é avaliada na clínica, mas explica por que um déficit auditivo derruba escore de memória: se não chegou ao registro, não há o que codificar.
- O **7 ± 2** é de Miller (1956) e é o que o dígito-span mede. Volte a este número no bloco 2: ele é dos poucos que **não** cai no envelhecimento normal.
-->

---
layout: define
kicker: O conceito que substituiu o depósito passivo
term: Memória operacional
definition: Sistema que <em>mantém</em> e <em>manipula</em> informação por
  segundos, enquanto uma tarefa cognitiva acontece.
points:
  - "Proposta por <strong>Baddeley e Hitch (1974)</strong>: o modelo passivo de
    depósito não explicava o que se faz com o conteúdo depois de adquirido"
  - "Curto prazo é o <strong>depósito</strong>; operacional é o depósito
    <strong>mais</strong> o processamento"
  - "Repetir sete dígitos na ordem é curto prazo. Repeti-los de trás para frente
    é operacional"
---

<!--
- É por isso que o capítulo trata **curto prazo** e **operacional** como duas linhas separadas na Tabela 10.1: uma se mantém e a outra cai.
- Baddeley (2012) é a revisão que o capítulo indica para quem quiser o modelo inteiro.
- Na prática clínica: dígitos na ordem direta = curto prazo; ordem inversa e sequenciamento = operacional.
-->

---
layout: diagram
kicker: O modelo, por dentro
title: Uma central e três subsistemas
note: A <em>central executiva</em> é o gargalo — tem capacidade limitada, e é ela
  que decide para onde a atenção vai. Segundo Baddeley (2012).
---

<Figure src="/modelo-baddeley.svg" alt="A central executiva no topo controlando alça fonológica, buffer episódico e esboço visuoespacial, e abaixo de cada um o sistema de longo prazo correspondente" />

<!--
- **Alça fonológica** — mantém e recicla informação fonética por poucos segundos, através da alça articulatória (a repetição subvocal).
- **Esboço visuoespacial** — o mesmo, para imagem e posição no espaço.
- **Buffer episódico** — acrescentado depois; é onde os códigos de modalidades diferentes se juntam num episódio único e ganham ligação com a memória de longo prazo.
- Guarde a **central executiva**: no bloco 2 ela reaparece como a peça cuja eficiência cai com a idade, por redução do funcionamento do lobo frontal.
-->

---
layout: default
kicker: Fixação · pergunta 1
title: Um homem com amnésia densa aprende a desenhar no espelho
---

Lesão bilateral do lobo temporal medial. A cada sessão ele **melhora** o traçado — e a cada
sessão nega ter feito o exercício antes. O que o achado demonstra?

<v-clicks>

- **A.** Que a amnésia é fingida: houve aprendizagem, logo houve memória consciente
- **B.** Que a memória de procedimento não depende do lobo temporal medial
- **C.** Que a memória semântica dele está preservada
- **D.** Que a lesão poupou o hipocampo de um dos lados

</v-clicks>

<!--
- Deixe a turma responder antes de virar o slide. O caso é o de **H.M.**, descrito por Brenda Milner — a demonstração fundadora da distinção declarativa/não declarativa.
- Se alguém escolher A, é o erro mais interessante da lista: pergunte o que exatamente se está chamando de "lembrar".
-->

---
layout: default
kicker: Fixação · resposta 1
title: A resposta é <span class="accent2">B</span>
---

<Grid head highlight="row:3" :data="[
  ['', 'Alternativa', 'Por que erra — ou por que acerta'],
  ['A', 'A amnésia é fingida', 'exige consciência para aceitar que houve memória; a aprendizagem implícita existe sem relato'],
  ['B', 'A procedimental não depende do LTM', '<b>correta</b> — a habilidade se instala pelo estriado e pelo cerebelo, poupados na lesão'],
  ['C', 'A semântica está preservada', 'troca não declarativa por semântica; a semântica é declarativa, e o que é novo nela também cai'],
  ['D', 'A lesão poupou um lado', 'atribui a dissociação a lesão incompleta; ela aparece mesmo com lesão bilateral completa'],
]" />

<!--
- O ponto que fica: **aprendizagem sem lembrança** é possível, e é o que o ramo de baixo da taxonomia descreve.
- Consequência clínica direta: um paciente com transtorno neurocognitivo pode continuar aprendendo rotinas motoras, e é nisso que a reabilitação se apoia.
-->

---
layout: steps
kicker: As três fases do processamento
title: Três coisas precisam acontecer para haver lembrança
steps:
  - {
      icon: "lucide:log-in",
      title: "Codificação",
      desc: "A informação é registrada num formato que a memória possa guardar.
        Depende de <strong>atenção</strong> e da profundidade do processamento"
    }
  - {
      icon: "lucide:archive",
      title: "Armazenamento",
      desc: "O traço se mantém disponível ao longo do tempo — é aqui que a
        <em>consolidação</em> o estabiliza"
    }
  - {
      icon: "lucide:search",
      title: "Recuperação",
      desc: "A busca encontra o traço — espontaneamente, com pista, ou apenas o
        reconhece entre distratores"
    }
---

<!--
- São as **três fases** que o capítulo usa: codificação, armazenamento e recuperação (Abrisqueta-Gomez, cap. 10, p. 177, citando Brickman e Stern, 2009).
- O capítulo trata **aquisição** como sinônimo de codificação e **evocação** como sinônimo de recuperação. Vale avisar a turma: os dois pares aparecem trocados na literatura o tempo todo.
- O achado que interessa: os idosos apresentam **maior declínio na aquisição do que na recuperação**. Guarde isso para o bloco 3 — é o que explica um escore imediato baixo com retenção preservada.
- Esta é a sequência que a avaliação tenta desmontar. Um mesmo escore baixo pode ter nascido em qualquer uma das três fases, e o instrumento sozinho não diz em qual.
-->

---
layout: diagram
kicker: Bloco 1 · em uma figura
title: Onde a falha aparece decide o que ela é
note: "Esta figura é o método do bloco 3 inteiro: o padrão de erro localiza o
  processo, e o processo restringe a hipótese."
---

<Figure src="/processos-memoria.svg" alt="As três fases em cadeia — codificação, armazenamento e recuperação — e sob cada uma o sinal clínico de que a falha aconteceu ali" />

<!--
- Leia a figura da esquerda para a direita como um algoritmo: a repetição imediata testa a **codificação**; o intervalo põe à prova o **armazenamento**; a pista e o reconhecimento testam a **recuperação**.
- O par mais confundido é o das duas últimas caixas. **Armazenamento**: nem a pista recupera, porque não há traço. **Recuperação**: a pista recupera, porque o traço está lá e só a busca falhou.
- Este é o argumento inteiro do slide da evocação com dica, que volta no bloco 3.
-->

---
layout: define
kicker: Dentro do armazenamento
term: Consolidação
definition: "<strong>Não é uma quarta fase</strong>: é o mecanismo que faz o
  armazenamento durar — a estabilização progressiva do traço depois de
  codificado."
points:
  - "<strong>Sináptica</strong>: minutos a horas, local, e acontece em toda
    estrutura que aprende"
  - "<strong>Sistêmica</strong>: meses a anos; o traço vai deixando de depender
    do hipocampo e passa a se sustentar no neocórtex"
  - "Reativar uma memória volta a torná-la lábil: ela precisa ser
    <em>reconsolidada</em> (Dudai, 2004; 2012)"
---

<!--
- Este slide existe porque é a consolidação que dá sentido ao **intervalo de 30 minutos** da Memória Lógica, no bloco 3. Sem ela, o intervalo pareceria arbitrário.
- Mas ela **não** entra na conta das fases: o capítulo de referência trabalha com três — codificação, armazenamento e recuperação — e a consolidação é o que acontece dentro da segunda.
- A consolidação sistêmica explica a **amnésia retrógrada com gradiente temporal**: na lesão hipocampal, as memórias antigas resistem e as recentes se perdem, porque as antigas já migraram.
- Squire e Zola (1996) mostraram que uma lesão limitada à formação hipocampal produz amnésia anterógrada grave e amnésia retrógrada cobrindo até 25 anos.
- **Reconsolidação** — o achado que quebrou a ideia de que a consolidação começa e termina uma única vez para cada item.
-->

---
layout: diagram
kicker: A neuroanatomia
title: Cada ramo da taxonomia tem endereço
note: A figura é esquemática — as estruturas estão em posição aproximada, não em
  escala nem em corte anatômico real.
---

<Figure src="/neuroanatomia-memoria.svg" alt="Encéfalo em vista lateral com hipocampo, amígdala, estriado, cerebelo e córtex pré-frontal numerados, e a lista do tipo de memória que cada estrutura sustenta" />

<!--
- O **lobo temporal medial** não é só o hipocampo: inclui os córtices entorrinal, perirrinal e para-hipocampal, e todos fazem parte do sistema da memória declarativa (Squire e Zola, 1996).
- O **córtex pré-frontal** não guarda conteúdo: ele organiza a codificação e conduz a busca. É por isso que a disfunção frontal produz queixa de memória sem amnésia.
- Guarde o par **frontoestriatal × temporal medial**: o capítulo o usa para separar o idoso saudável, com falha executiva, do idoso em fase inicial de doença de Alzheimer, com falha declarativa.
-->

---
layout: image
kicker: A origem clínica da distinção
title: O caso que separou os dois ramos
image: /brenda-milner.jpg
side: right
alt: Retrato de Brenda Milner, neuropsicóloga canadense que descreveu o caso H.M.
---

**Brenda Milner** descreveu, a partir de 1957, o paciente **H.M.** — amnésia anterógrada densa
após ressecção bilateral do lobo temporal medial.

Ele não retinha nenhum episódio novo e, ainda assim, **aprendia habilidades motoras** de uma
sessão para a outra.

<!--
- Foto: Brenda Milner, Wikimedia Commons, CC BY 2.0.
- H.M. foi operado em 1953 para tratar epilepsia refratária. A ressecção incluiu hipocampo, amígdala e córtex entorrinal dos dois lados.
- O que o caso fixou: memória **não é** uma função unitária, e **não é** a mesma coisa que inteligência ou linguagem — as duas ficaram intactas nele.
- O trabalho de Milner com H.M. é o ponto de partida de toda a taxonomia do primeiro slide deste bloco.
-->

---
layout: vs
kicker: O vocabulário da amnésia
title: Duas direções no tempo
left:
  title: Anterógrada
  items:
    - "Não se formam memórias <strong>novas</strong> a partir da lesão"
    - "É a marca da lesão do lobo temporal medial"
    - "No teste: o registro imediato pode ir bem, a evocação tardia não"
    - "É o padrão que a avaliação da memória procura"
right:
  title: Retrógrada
  items:
    - "Perdem-se memórias <strong>anteriores</strong> à lesão"
    - "Costuma ter gradiente: o antigo resiste, o recente cai"
    - "É o gradiente que denuncia a consolidação sistêmica"
    - "Avalia-se por entrevista, não por teste padronizado"
---

<!--
- As duas coexistem na maioria dos quadros; a proporção entre elas é que muda.
- O **gradiente de Ribot** (o antigo mais preservado que o recente) é a assinatura clínica da consolidação sistêmica descrita no slide anterior.
- Na doença de Alzheimer o gradiente aparece cedo, e é por isso que a família relata "lembra da infância inteira e não lembra do almoço".
-->

---
layout: default
kicker: Fixação · pergunta 2
title: Ela repete as três palavras. Trinta minutos depois, nada.
---

Registro imediato correto na primeira tentativa. Na evocação tardia não recupera nenhuma das
três — e **também não** recupera com pista categórica nem no reconhecimento. Onde está a falha?

<v-clicks>

- **A.** Na codificação: a informação nunca chegou a entrar
- **B.** Na atenção sustentada durante o intervalo
- **C.** No armazenamento: entrou, e não ficou
- **D.** Na evocação: está lá, e a busca não encontra

</v-clicks>

<!--
- Peça que justifiquem usando a figura das três fases. A informação que decide está no enunciado: pista e reconhecimento **não** ajudaram.
-->

---
layout: default
kicker: Fixação · resposta 2
title: A resposta é <span class="accent2">C</span>
---

<Grid head highlight="row:4" :data="[
  ['', 'Alternativa', 'Por que erra — ou por que acerta'],
  ['A', 'Codificação', 'a repetição imediata correta já prova que a informação entrou'],
  ['B', 'Atenção sustentada', 'com desatenção o registro imediato também teria falhado'],
  ['C', 'Armazenamento', '<b>correta</b> — nem pista nem reconhecimento recuperam: não há traço a encontrar'],
  ['D', 'Evocação', 'falha de busca melhora com pista, e melhora ainda mais no reconhecimento; aqui nada melhorou'],
]" />

<!--
- Este é **o** raciocínio do bloco 3, antecipado: a diferença entre C e D não sai do escore, sai do que acontece quando você dá a pista.
- O padrão de C — evocação tardia zerada e sem benefício de pista — é o perfil amnéstico de tipo hipocampal, o que se espera na doença de Alzheimer inicial.
- O padrão de D — ganho grande na pista e no reconhecimento — é o perfil frontal ou disexecutivo, e aparece na depressão, na disfunção frontoestriatal e no envelhecimento normal.
-->

---
layout: section
index: "02"
kicker: Parte dois
title: A memória no envelhecimento
subtitle: A pergunta do capítulo não é se a memória muda, e sim qual sistema muda
  — e quanto disso é envelhecimento e quanto já é doença.
---

---
layout: statement
kicker: Bloco 2 · o ponto de partida do capítulo
title: O significado de envelhecimento cognitivo <em>saudável</em> ainda não está
  estabelecido.
---

A maior parte da pesquisa se voltou para os **distúrbios cerebrais do idoso** — em especial a
doença de Alzheimer. Ao idoso que mostra pouco ou nenhum declínio, coube pouca atenção.

<Callout tone="info" icon="lucide:info">
A consequência prática: a linha de base contra a qual se julga um paciente é
<strong>menos conhecida</strong> do que a doença que se procura nele.
</Callout>

<!--
- Fonte: Abrisqueta-Gomez, cap. 10, seção "Conceitos básicos que norteiam o estudo da memória no idoso".
- O capítulo dá duas razões para a lacuna: o interesse concentrado na patologia e as **dificuldades metodológicas** de projetar estudos populacionais com idosos sem declínio.
- Isto é o oposto do que a turma costuma esperar. Vale demorar aqui trinta segundos: dizer que um escore é "normal para a idade" é uma afirmação mais frágil do que parece.
-->

---
layout: steps
kicker: Kester, Benjamin, Castel e Craik (2002)
title: Quatro enfoques para explicar a queda
steps:
  - {
      icon: "lucide:gauge",
      title: "Declínio na velocidade de processamento",
      desc: "A lentidão do comportamento na velhice é bem documentada. O
        rebaixamento não seria da memória <em>per se</em>, e sim de uma
        deficiência generalizada de velocidade"
    }
  - {
      icon: "lucide:battery-low",
      title: "Recursos reduzidos no processamento",
      desc: "Menos recursos atencionais disponíveis. Tarefas difíceis exigem mais
        atenção — e são elas que caem primeiro"
    }
  - {
      icon: "lucide:filter",
      title: "Déficits inibitórios",
      desc: "Menor eficiência para inibir o irrelevante: controla o acesso à
        memória operacional, suprime o excesso e contém respostas inadequadas"
    }
  - {
      icon: "lucide:sliders-horizontal",
      title: "Diminuição no controle cognitivo",
      desc: "A combinação dos dois anteriores: deficiência no controle executivo
        do processamento"
    }
---

<!--
- Os quatro não são hipóteses rivais e excludentes: o capítulo os apresenta como enfoques que podem, cada um, explicar parte do papel da idade.
- Cruzamento útil com o bloco 1: **processamento automático** (pouca demanda atencional, sem intenção) é assumido como **imune** ao envelhecimento; **processamento controlado** é o que declina.
- Isso já antecipa o padrão da Tabela 10.1: o que é automático e implícito se mantém; o que exige esforço e controle cai.
-->

---
layout: default
kicker: Tabela 10.1 · condensada
title: O padrão de memória no envelhecimento
---

<Grid head :data="[
  ['Subtipo de memória', 'Condição', 'O que se observa'],
  ['Longo prazo declarativa <b>episódica</b>', '<b>rebaixada</b>', 'cai na recordação livre; favorece-se de pistas e de reconhecimento'],
  ['Longo prazo declarativa <b>semântica</b>', 'mantida, com ressalvas', 'conhecimento geral preservado; discreta queda em vocabulário; ponta da língua'],
  ['<b>Implícita</b>', 'mantida, com ressalvas', 'pré-ativação perceptual preservada; certo declínio na conceitual'],
  ['<b>Operacional</b>', '<b>rebaixada</b>', 'cai quando memória e execução andam juntas; vulnerável à interferência'],
  ['<b>Curto prazo</b>', 'mantida, com ressalvas', 'amplitude de dígitos mantida; rebaixada para conteúdo visual'],
  ['<b>Prospectiva</b>', 'em estudo', 'pior em tarefas por tempo; mais preservada no cotidiano que no laboratório'],
]" />

<!--
- Esta tabela é a espinha do capítulo, e o resto do bloco 2 é o detalhamento linha por linha.
- A legenda original usa símbolos: seta para baixo = rebaixada; seta dupla com exclamação = mantida com ressalvas; interrogação = em estudo. Traduzi para palavras.
- **A leitura que interessa**: nem todos os sistemas de memória são igualmente afetados pela idade (Nyberg et al., 2012). Quem diz "a memória do idoso é ruim" está descrevendo duas linhas desta tabela e ignorando quatro.
-->

---
layout: diagram
kicker: Bloco 2 · em uma figura
title: O que cai e o que fica
note: A posição no eixo é a da Tabela 10.1 — é uma ordenação qualitativa do
  capítulo, não uma medida de magnitude.
---

<Figure src="/perfil-memoria-envelhecimento.svg" alt="Os subtipos de memória distribuídos entre um extremo mantido e um extremo rebaixado, com a memória prospectiva marcada como ainda em estudo" />

<!--
- Duas coisas para apontar na figura. A primeira: **curto prazo e operacional caem em lados opostos** — é a distinção do bloco 1 aparecendo como fato empírico.
- A segunda: os dois sistemas rebaixados são os que **mais exigem controle executivo**. Os mantidos são os automáticos e os cristalizados.
- A prospectiva está solta de propósito: o construto ainda vinha sendo elaborado quando o capítulo foi escrito.
-->

---
layout: default
kicker: Fixação · pergunta 3
title: Qual destes sistemas é o mais estável no envelhecimento normal?
---

Um idoso de 78 anos, sem doença neurológica, escolaridade média. Segundo o padrão da Tabela 10.1,
qual sistema você espera encontrar praticamente **inalterado**?

<v-clicks>

- **A.** Memória episódica de longo prazo
- **B.** Memória operacional
- **C.** Memória semântica
- **D.** Memória prospectiva baseada no tempo

</v-clicks>

<!--
- Vale perguntar antes: quantos esperavam que a resposta fosse "nenhum"? A expectativa de declínio global é justamente o preconceito que o capítulo desmonta.
-->

---
layout: default
kicker: Fixação · resposta 3
title: A resposta é <span class="accent2">C</span>
---

<Grid head highlight="row:4" :data="[
  ['', 'Alternativa', 'Por que erra — ou por que acerta'],
  ['A', 'Episódica de longo prazo', 'é justamente a que mais declina — o capítulo a trata como a linha rebaixada principal'],
  ['B', 'Operacional', 'rebaixada: cai sempre que a tarefa exige reter e executar ao mesmo tempo'],
  ['C', 'Semântica', '<b>correta</b> — inteligência cristalizada, acumula-se pela vida e é quase impermeável ao EC normal'],
  ['D', 'Prospectiva por tempo', 'é a condição em que o idoso mais falha; o construto ainda está sob estudo'],
]" />

<!--
- Cuidado com o excesso: semântica "estável" não quer dizer intacta. Há **quedas mínimas de vocabulário** e o fenômeno da ponta da língua fica mais frequente — é o que o próximo slide trata.
- Se alguém marcou A porque "todo mundo sabe que memória de idoso é ruim", esse é exatamente o ponto: a queda existe, mas está localizada num sistema, não em todos.
-->

---
layout: define
kicker: Linha 2 da Tabela 10.1
term: Memória semântica no idoso
definition: Um dos sistemas mais estáveis — pode ser mantido por toda a vida, por
  ser um tipo de inteligência <em>cristalizada</em>.
points:
  - "No estudo longitudinal de Canberra, com idosos acima de 70 anos, as
    habilidades cristalizadas permaneceram estáveis por cerca de oito anos"
  - "Num estudo transversal de 20 a 92 anos, o conhecimento verbal
    <strong>aumentou</strong> por faixa etária — os mais velhos foram os mais
    favorecidos"
  - "A queixa subjetiva é comum e o desempenho objetivo não a acompanha"
---

<!--
- Fontes citadas no capítulo: Brickman e Stern (2009); Christensen et al. (1997); Maylor (1997).
- **Cristalizada** — o acúmulo de conhecimento adquirido ao longo do tempo, por oposição à inteligência **fluida**, que é a capacidade de lidar com o novo. A primeira se mantém, a segunda declina.
- Um achado contraintuitivo do capítulo: Christensen et al. (1997) compararam professores universitários com operários e **não** encontraram taxa de declínio mais lenta nos de capacidade acadêmica elevada. Os dois grupos declinaram proporcionalmente ao que tinham. Isso volta no slide da reserva cognitiva.
-->

---
layout: default
kicker: A queixa mais comum, e a mais benigna
title: A palavra que não vem
---

O fenômeno da **ponta da língua**: a pessoa tem o sentimento de que conhece a resposta e não
consegue trazê-la explicitamente. Acontece em qualquer idade, e fica mais frequente com o avanço
dos anos — sobretudo com **nomes próprios**.

<Callout tone="good" icon="lucide:key">
A explicação é de <strong>acesso</strong>, não de perda: a falha é seletiva no código fonológico.
Por isso <strong>pistas fonológicas</strong> resolvem o bloqueio — e resolvem igualmente bem em
adultos e em idosos.
</Callout>

<!--
- Fontes: Maylor (1997) para a frequência com a idade; James e Burke (2000) para o benefício da pista fonológica.
- Este é o slide para desfazer um susto de família. A ponta da língua **não** é sinal de doença: é o representante mais visível de um problema de acesso léxico-semântico.
- Contraste que vale explicitar: na anomia da doença de Alzheimer a pista fonológica ajuda pouco e o conceito também se perde. Aqui o conceito está inteiro — falta só a etiqueta.
-->

---
layout: chart
kicker: Recordação livre de uma lista de palavras
title: A curva de posição serial
note: Traçado <em>esquemático</em>, para mostrar a forma das duas curvas — não são
  dados de um estudo. O jovem faz um <em>U</em>; o idoso saudável, um <em>J</em>.
chart:
  type: line
  unit: "%"
  height: "300px"
  categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  series:
    - { name: "Adulto jovem", data: [80, 66, 55, 48, 44, 44, 48, 56, 70, 86] }
    - { name: "Idoso saudável", data: [38, 34, 31, 30, 30, 32, 37, 48, 66, 86] }
---

<!--
- **Como se aplica**: lê-se uma lista de palavras e pede-se, ao fim, que ele diga quantas lembrar, em qualquer ordem. A ordem em que as palavras saem gera a curva.
- No eixo horizontal, a **posição da palavra na lista**; no vertical, a proporção de vezes em que ela é recordada.
- No Brasil, a linha de pesquisa de recordação livre foi conduzida por Bueno e colaboradores, no Departamento de Psicobiologia da Unifesp.
-->

---
layout: columns
kicker: Como se lê a curva
title: As duas pontas medem sistemas diferentes
columns:
  - {
      title: "Efeito de primazia — as primeiras",
      items: [
        "Já saíram do depósito imediato: foram <strong>ensaiadas</strong> e transferidas",
        "Correspondem à memória de <strong>longo prazo</strong>",
        "É a ponta que <strong>cai</strong> no idoso — o que transforma o U em J",
        "Na doença de Alzheimer inicial, cai ainda mais"
      ]
    }
  - {
      title: "Efeito de recência — as últimas",
      items: [
        "Ainda estão disponíveis no momento da resposta",
        "Associadas à memória de <strong>curto prazo</strong> — hoje se discute a operacional",
        "É a ponta que <strong>se mantém</strong>",
        "Mantém-se até na doença de Alzheimer inicial"
      ]
    }
---

<!--
- O J é a assinatura gráfica da linha 1 da Tabela 10.1: rebaixamento da MLP com curto prazo preservado.
- Bueno, Bertolucci, Oliveira e Abrisqueta-Gomez (2008) mostraram que, na DA inicial, a primazia está mais rebaixada que a do idoso normal, a recência se mantém e há discreto benefício de estratégias de recordação.
- Consequência para a prática: **a forma da curva informa mais que o total de palavras**. Dois pacientes com o mesmo total podem ter curvas de sentidos opostos.
-->

---
layout: panels
kicker: Linha 3 da Tabela 10.1
title: A memória implícita quase não sente a idade
panels:
  - {
      icon: "lucide:eye",
      title: "Pré-ativação perceptual",
      body: "Preservada. No estudo de complementação de fragmentos de palavras,
        adultos e idosos completaram igualmente com os estímulos vistos antes."
    }
  - {
      icon: "lucide:lightbulb",
      title: "Pré-ativação conceitual",
      body: "Certo declínio — é a que depende do <strong>significado</strong> do
        objeto, e não só da sua forma."
    }
  - {
      icon: "lucide:hand",
      title: "Memória de procedimento",
      body: "Habilidade mantida, execução mais lenta. Em pianistas e datilógrafos
        especialistas, o desempenho se manteve apesar da lentidão."
    }
---

<!--
- Fontes: Light e Singh (1987) para a pré-ativação; Krampe e Ericsson (1996) para os especialistas; Rybash (1996), que descreve cinco tipos de pré-ativação.
- Ressalva metodológica do capítulo: os estudos de memória procedural são **poucos e inconclusivos**, e parte da divergência vem do desenho — alguns mediram velocidade de resposta motora, outros capacidade cognitiva.
- Ao ler lentidão num idoso, o capítulo pede que se distinga se ela é de processamento **perceptual** ou **motor**. São coisas diferentes com o mesmo sintoma.
- **A preservação da implícita é um ativo clínico**: é sobre ela que se apoia a projeção de intervenções.
-->

---
layout: columns
kicker: Linhas 4 e 5 da Tabela 10.1
title: O depósito se mantém; o processamento, não
columns:
  - {
      title: "O que se mantém",
      items: [
        "A amplitude de dígitos na ordem direta permanece",
        "Cerca de sete itens, com variação de dois para mais ou para menos",
        "O perfil de recuperação imediata é igual ao do adulto jovem",
        "Alça fonológica e esboço visuoespacial: decréscimo apenas leve"
      ]
    }
  - {
      title: "O que cai",
      items: [
        "Reter <strong>e</strong> executar outra tarefa ao mesmo tempo",
        "Resistir a distratores: no paradigma de Brown-Peterson, esquecem mais rápido",
        "Resistir à interferência proativa no <em>span</em> de leitura",
        "A tarefa <strong>secundária</strong> é a que mais se degrada na atenção dividida"
      ]
    }
---

<!--
- Fontes: Floden, Stuss e Craik (2000) para Brown-Peterson; May, Hasher e Kane (1999) para o span de leitura; Nyberg et al. (2012) para a atenção dividida.
- O achado mais elegante é o de May e colaboradores: quando se **reduz a demanda** — uma pausa entre as listas, ou apresentar a lista maior primeiro — o idoso melhora. Isso mostra que o gargalo é a **inibição proativa**, e não a capacidade.
- **Paradigma de Brown-Peterson** — apresenta-se uma tríade de consoantes e pede-se a recuperação depois de 0 a 60 segundos preenchidos com distratores.
- O capítulo atribui essas falhas ao déficit de inibição e à queda de eficiência do componente executivo central, por redução do funcionamento do lobo frontal (Kester et al., 2002).
- Cuidado metodológico que o capítulo levanta: a **acuidade auditiva** diminuída pode comprometer os resultados dessas tarefas.
-->

---
layout: default
kicker: Fixação · pergunta 4
title: Sete dígitos, sim. Sete dígitos e mais uma tarefa, não.
---

Um homem de 76 anos repete sete dígitos na ordem direta sem erro. Quando precisa repeti-los
enquanto acompanha um segundo estímulo, o desempenho despenca — **e o da tarefa secundária
despenca mais ainda**. O achado é típico de quê?

<v-clicks>

- **A.** Déficit de memória de curto prazo
- **B.** Rebaixamento da memória operacional
- **C.** Amnésia anterógrada incipiente
- **D.** Déficit de memória semântica

</v-clicks>

<!--
- Se a turma hesitar entre A e B, volte ao slide de definição do bloco 1: repetir na ordem é depósito; fazer duas coisas ao mesmo tempo é processamento.
-->

---
layout: default
kicker: Fixação · resposta 4
title: A resposta é <span class="accent2">B</span>
---

<Grid head highlight="row:3" :data="[
  ['', 'Alternativa', 'Por que erra — ou por que acerta'],
  ['A', 'Curto prazo', 'a amplitude de dígitos está preservada — é exatamente o que o enunciado diz'],
  ['B', 'Operacional', '<b>correta</b> — a queda aparece só quando reter e executar competem; e é a tarefa secundária que mais cai'],
  ['C', 'Amnésia anterógrada', 'não há nada aqui sobre reter informação por minutos; nem se testou evocação tardia'],
  ['D', 'Semântica', 'nenhum item avaliou conhecimento de fatos, conceitos ou vocabulário'],
]" />

<!--
- Este é o par que a Tabela 10.1 separa em duas linhas de propósito: **curto prazo mantido, operacional rebaixada**.
- É também o achado que mais gera falso alarme na família: "ele não consegue mais fazer duas coisas ao mesmo tempo" é uma descrição de envelhecimento normal, não de demência.
-->

---
layout: stats
kicker: Cherry e LeCompte (1999) · 100 participantes de 35 a 80 anos
title: Lembrar de fazer, depois
columns: 2
stats:
  - {
      value: 61,
      unit: "%",
      label: "entre 35 e 45 anos lembraram a tarefa combinada",
      icon: "lucide:check",
      tone: "good"
    }
  - {
      value: 25,
      unit: "%",
      label: "entre 70 e 80 anos lembraram",
      icon: "lucide:x",
      tone: "bad"
    }
---

<!--
- A tarefa era simples: **pedir ao avaliador para assinar uma folha de autorização ao final da sessão**. Nada de difícil — só era preciso lembrar de fazer.
- Os comentários dos autores associam as falhas à idade **e** ao nível da capacidade intelectual do sujeito.
- Por que isso importa fora do laboratório: as falhas prospectivas são as de consequência mais grave no cotidiano — esquecer o medicamento, esquecer de fechar a porta, esquecer de desligar o fogão.
- **Memória prospectiva** — a intenção de realizar uma ação em algum momento futuro, e a lembrança de levá-la a cabo.
-->

---
layout: vs
kicker: Linha 6 da Tabela 10.1
title: Duas maneiras de disparar a intenção
left:
  title: Baseada no tempo
  items:
    - "Telefonar às 16h30"
    - "Nada no ambiente avisa: a lembrança é <strong>autoiniciada</strong>"
    - "É a condição em que o idoso mais falha"
    - "Depende dos recursos atencionais, que estão reduzidos"
right:
  title: Baseada no evento
  items:
    - "Ao sair do atendimento, agendar a próxima consulta"
    - "O ambiente traz a <strong>pista</strong> que dispara a intenção"
    - "Também cai, mas menos"
    - "Auxílios externos compensam bem esta condição"
---

<Callout tone="warn" icon="lucide:flip-horizontal-2">
No <em>laboratório</em> o idoso vai pior que o jovem. Na <em>vida real</em>, melhor — usa auxílios
externos com mais eficiência e supera o jovem em motivação e adesão.
</Callout>

<!--
- Fontes: Park et al. (1997) para tempo × evento; Craik e Ken (1996) para os "lapsos momentâneos de intenção"; Rendell e Craik (2000) para o contraste laboratório × vida real, no jogo de tabuleiro "Semana Virtual".
- A justificativa proposta para o paradoxo: o idoso costuma ter uma vida **mais estruturada e organizada** do que a do jovem de 20 anos.
- Isto tem consequência direta na avaliação: um desempenho ruim numa tarefa prospectiva de consultório **não** autoriza a conclusão de que ele falha em casa. Pergunte ao informante.
- O capítulo observa ainda que prospectiva e episódica tendem a **não** se correlacionar, provavelmente por dependerem de regiões pré-frontais diferentes.
-->

---
layout: panels
kicker: Dois fatores que reforçam a memória do idoso sadio
title: Metamemória e memória emocional
panels:
  - {
      icon: "lucide:brain-circuit",
      title: "Metamemória",
      body: "O conhecimento sobre como a própria memória funciona. Parte das
        queixas subjetivas vem de uma <strong>inferência sobre a expectativa de
        declínio na velhice</strong>, e não de uma avaliação do próprio
        desempenho."
    }
  - {
      icon: "lucide:heart",
      title: "Memória emocional",
      body: "A amígdala facilita as operações de memória no hipocampo e no córtex
        pré-frontal. Idosos se beneficiam mais de estímulos com conteúdo
        emocional que de neutros — igual a adultos jovens."
    }
---

<Callout tone="info" icon="lucide:info">
As queixas de memória do idoso estão, em geral, <strong>mais associadas ao humor depressivo</strong>
que ao desempenho em avaliações formais.
</Callout>

<!--
- Fontes: Kester et al. (2002) e Pansky et al. (2009) para a metamemória; Abrisqueta-Gomez et al. (2002) e Emery e Hess (2008) para a emocional; Nyberg et al. (2012) para a relação queixa/humor.
- **Por que a autoeficácia importa**: quem tem visão sombria da própria memória estabelece metas mais baixas, evita desafios e passa a operar **abaixo da capacidade real**. Isso torna a metamemória um alvo de intervenção, não só um viés a descontar.
- O treino de estratégias melhora o desempenho do idoso, e o benefício foi observado **até três anos ou mais** depois do treino.
- Detalhe do achado emocional: idosos tendem a lembrar melhor de estímulos com carga emocional **desagradável**.
- Ligação com a aula 03: a queixa de memória é item da Escala de Depressão Geriátrica justamente porque acompanha o humor.
-->

---
layout: default
kicker: As limitações metodológicas
title: Por que dois estudos discordam sobre quando o declínio começa
---

<Grid head :data="[
  ['', 'Transversais (ET)', 'Longitudinais (EL)'],
  ['O que fazem', 'comparam jovens e idosos num só momento', 'acompanham as mesmas pessoas ao longo do tempo'],
  ['Quando dizem que começa', 'deterioração linear já a partir dos 20 anos', 'estável até cerca de 60 a 65, e então acelera'],
  ['O que os distorce', 'viés de coorte: as gerações diferem em escolaridade', 'efeito de prática e efeito de abandono'],
]" />

<Callout tone="warn" icon="lucide:triangle-alert">
Quando idade <strong>e</strong> escolaridade são controladas estatisticamente, o declínio da
memória episódica aparece <strong>muito mais tarde</strong>.
</Callout>

<!--
- Fonte: Abrisqueta-Gomez, cap. 10, seção "Principais limitações nos estudos de memória do idoso".
- É o argumento mais importante do capítulo para a prática clínica: **a idade cronológica explica menos do que parece**, e boa parte do que se atribui a ela é escolaridade e coorte.
- Vale lembrar o dado do começo do capítulo: alguns indivíduos mantêm funcionamento adequado até os 80 anos ou mais, com apenas leves dificuldades em tarefas que demandam atenção — enquanto outros apresentam deficiências severas. A **variabilidade** é o achado, não a média.
-->

---
layout: default
kicker: Tabela 10.3 · bateria NEUROPSI, média e desvio
title: Ninguém escapa do efeito de prática
---

<Grid head highlight="col:4" :data="[
  ['Grupo', 'T1', 'T2', 'T3'],
  ['GA — três vezes no mesmo dia, 90 min de intervalo', '105,6 (8,9)', '114,1 (7,5)', '118,3 (6,1)'],
  ['GB — três dias consecutivos', '109,1 (5,0)', '119,6 (5,0)', '122,7 (3,7)'],
  ['GC — reteste dois anos depois', '103,8 (8,9)', '107,8 (7,5)', '—'],
]" />

<Callout tone="bad" icon="lucide:trending-up">
Todos os grupos melhoraram — <strong>inclusive o retestado dois anos depois</strong>. O maior salto
foi sempre entre a primeira e a segunda avaliação.
</Callout>

<!--
- Estudo dos próprios autores do capítulo (Abrisqueta-Gomez et al., 2006), com 93 participantes, dos quais os 69 idosos saudáveis compõem estes três grupos.
- Idade média de 67,7 a 68,5 anos; escolaridade de 10,7 a 12,9 anos; MEEM de 28,2 a 29,3. Nenhum participante atingiu a pontuação máxima da bateria, que é 130.
- **Por que isso é grave na clínica**: num paciente com doença de Alzheimer inicial, uma melhora do primeiro para o segundo exame **não pode** ser atribuída ao medicamento sem antes descontar o efeito de prática.
- O que se recomenda: verificar a confiabilidade teste-reteste do instrumento e usar **formas paralelas**. Ainda assim, Beglinger et al. (2005) mostraram que o efeito de prática persiste, reduzido, mesmo com versões alternativas.
- O **efeito de abandono** age no sentido oposto: quem sai cedo do estudo tem pior saúde, menor escolaridade e pior posição socioeconômica — o que vai elitizando a amostra e mascarando o declínio real.
-->

---
layout: feature
kicker: Moderadores e mediadores
title: O que explica a variabilidade entre dois idosos da mesma idade
columns: 2
features:
  - {
      icon: "lucide:heart-pulse",
      title: "Risco cardiovascular",
      desc: "Pressão elevada, diabetes e hiperlipidemia rebaixam velocidade
        psicomotora, visuoconstrução, aprendizagem, memória e executivas"
    }
  - {
      icon: "lucide:box",
      title: "Reserva cerebral",
      desc: "Modelo de limiar <em>passivo</em>: o volume do cérebro intacto —
        tamanho, número de neurônios, densidade sináptica"
    }
  - {
      icon: "lucide:network",
      title: "Reserva cognitiva",
      desc: "Conceito <em>ativo</em>: escolaridade, ocupação, rotinas e
        passatempos permitem processar por vias já existentes ou recrutar redes
        compensatórias"
    }
  - {
      icon: "lucide:shield",
      title: "Manutenção cerebral",
      desc: "Não é lidar com a patologia: é a relativa <strong>ausência</strong>
        ou o adiamento das alterações cerebrais"
    }
---

<!--
- Fontes: Brickman e Stern (2009) para o risco cardiovascular; Nyberg et al. (2012) para as três reservas.
- A diferença que a turma mais confunde: **reserva cerebral é hardware** (só quando os recursos caem abaixo de um limiar a patologia domina o comportamento); **reserva cognitiva é software** (o cérebro lida ativamente com a patologia).
- Achado prático de Brickman e Stern (2009): idosos com **pouco hábito de leitura** declinaram mais na memória declarativa que os de hábito contínuo — <em>independentemente do nível de escolaridade</em>. É um argumento contra usar escolaridade sozinha como marcador de reserva, sobretudo em classes menos favorecidas.
- E a ressalva do capítulo: é pouco provável que um fator isolado seja o segredo da manutenção da memória.
-->

---
layout: quote
quote: A minimização das mudanças cerebrais relacionadas ao envelhecimento e a
  ausência de patologia são os melhores preditores do funcionamento bem-sucedido
  da memória na velhice.
author: Hipótese da manutenção cerebral — Nyberg e colaboradores (2012), citados no cap. 10
---

<!--
- É o fecho conceitual do bloco 2, e vale dito devagar: enquanto a **reserva** explica por que alguém funciona bem *apesar* da patologia, a **manutenção** trata de por que a patologia simplesmente não aparece.
- A frase muda o alvo da prevenção: não é só construir reserva, é adiar a lesão.
- Passe daqui para o bloco 3 com uma pergunta: se a variabilidade entre idosos saudáveis é essa toda, o que exatamente um teste de memória está medindo quando o aplicamos num deles?
-->

---
layout: section
index: "03"
kicker: Parte três
title: Avaliação da memória
subtitle: Do que a queixa diz ao que o protocolo mostra — e o subteste de Memória
  Lógica, do começo ao fim.
---

---
layout: default
kicker: Antes do instrumento
title: O que a avaliação precisa separar
---

<Grid head :data="[
  ['O que se apresenta', 'O que precisa ser separado disso'],
  ['A queixa de memória', 'humor deprimido — a queixa acompanha o humor mais que o desempenho'],
  ['Um escore baixo', 'escolaridade, letramento e cultura, antes de virar déficit'],
  ['Uma piora entre dois exames', 'ou uma melhora: o efeito de prática age nos dois sentidos'],
  ['Falha na evocação', 'codificação, armazenamento e recuperação — três origens, um só sintoma'],
  ['Desempenho ruim no consultório', 'o funcionamento em casa, que se pergunta ao informante'],
]" />

<!--
- Cada linha desta tabela é um slide do bloco 2 virado do avesso. Vale percorrer devagar: é o resumo operacional da aula.
- Última linha, relembrando a memória prospectiva: o idoso perfila **melhor** na vida real do que no laboratório. Um desempenho ruim aqui não autoriza a conclusão sobre a casa dele.
- Antes de qualquer teste: **rastreie o sensorial**. Déficit auditivo transforma-se em erro de memória no papel, e a história de vida transforma escolaridade em déficit.
-->

---
layout: diagram
kicker: A manobra que separa armazenamento de busca
title: Livre, com pista, reconhecimento
note: A pergunta não é quantos itens ele recuperou. É <em>o que acontece</em>
  quando você oferece a pista.
---

<Figure src="/memoria-com-dica.svg" alt="Duas curvas de recuperação: em uma o paciente melhora muito da evocação livre para a evocação com pista e o reconhecimento; na outra permanece baixo nas três condições" />

<!--
- A curva que **sobe** com a pista: o traço existe e a falha é de busca — perfil frontal ou disexecutivo. Aparece na depressão, na disfunção frontoestriatal e no envelhecimento normal.
- A curva que **não sobe**: não há traço a encontrar — perfil amnéstico, de tipo hipocampal. É o que se espera na doença de Alzheimer inicial.
- Esta figura já apareceu na aula 04. Aqui ela deixa de ser um esquema e vira o critério de leitura do protocolo que vem a seguir.
- Um cuidado do capítulo: idosos saudáveis se beneficiam de pistas e de reconhecimento — **e** produzem mais falsos positivos, dizendo reconhecer distratores que nunca viram.
-->

---
layout: define
kicker: O instrumento de hoje
term: Memória Lógica
definition: "Subteste de <em>recordação de prosa</em> da Escala de Memória
  Wechsler: duas histórias curtas lidas em voz alta, recuperadas na hora e depois
  de meia hora."
points:
  - "Cada história é decomposta em <strong>25 unidades de ideia</strong>; o
    escore é a soma das unidades recuperadas"
  - "Mede memória episódica verbal com material <em>com sentido</em> — mais
    próximo do cotidiano que uma lista de palavras"
  - "É um dos instrumentos mais usados no mundo para avaliar memória verbal, em
    pesquisa e em clínica"
---

<!--
- **Recordação de prosa** — material organizado em narrativa, com enredo. Difere da lista de palavras justamente por permitir que a pessoa se apoie no sentido, e é por isso que a Memória Lógica e a lista de palavras não medem exatamente a mesma coisa.
- No Brasil circulam duas histórias em tradução livre, conhecidas pelos nomes dos personagens (Camargo e colaboradores). **Não há tradução oficial nem validação na população brasileira** — Bolognani et al. (2015) registram isso explicitamente.
- Rabin et al. (2009) mostraram que acrescentar a evocação tardia de uma história ao CVLT-II elevou a acurácia da classificação entre idoso normal e CCL amnéstico para 92% de sensibilidade e 95% de especificidade.
- O material do teste é de uso restrito ao profissional habilitado: as histórias não vão para o slide, vão para a ficha da dinâmica.
-->

---
layout: steps
kicker: A aplicação
title: As regras que decidem o escore
steps:
  - {
      icon: "lucide:volume-2",
      title: "Leia a história em voz alta, num ritmo constante",
      desc: "O paciente não lê nem vê o texto. Ritmo e entonação alterados mudam
        o quanto entra"
    }
  - {
      icon: "lucide:mic",
      title: "Peça a lembrança imediatamente, e registre <em>verbatim</em>",
      desc: "Anote o que ele disse, com as palavras dele. Corrigir depende do
        registro literal, não do seu resumo"
    }
  - {
      icon: "lucide:timer",
      title: "Trinta minutos de intervalo, preenchido",
      desc: "Com tarefas <strong>não verbais</strong>, para não interferir. O
        intervalo é parte do teste, não pausa"
    }
  - {
      icon: "lucide:repeat",
      title: "Não avise que vai pedir de novo",
      desc: "Se avisar, ele ensaia durante o intervalo — e você deixa de medir
        retenção espontânea"
    }
  - {
      icon: "lucide:rotate-ccw",
      title: "Peça a evocação tardia sem reler nada",
      desc: "As duas histórias de novo, sem nenhuma reapresentação e sem pista"
    }
---

<!--
- O registro **verbatim** é a regra mais desobedecida e a mais cara: sem ele não dá para distinguir omissão de distorção, nem contar intrusões.
- Sobre não avisar: a instrução padrão descreve a tarefa imediata sem anunciar a tardia. Se o paciente perguntar, não confirme nem negue.
- As **versões mais recentes** da escala acrescentam uma etapa de **reconhecimento** ao final, com perguntas de sim/não sobre o conteúdo — é ela que separa armazenamento de busca dentro do próprio subteste.
- **Efeito de prática**: se for reavaliar, use uma versão alternativa. Bolognani et al. (2015) publicaram três histórias alternativas equivalentes para cada uma das brasileiras, com os mesmos 25 itens e legibilidade equiparada.
-->

---
layout: diagram
kicker: Bloco 3 · em uma figura
title: A linha do tempo do subteste
note: O intervalo é o elemento ativo do procedimento — sem ele, o teste mede
  apenas quanto entrou.
---

<Figure src="/memoria-logica-fluxo.svg" alt="A linha do tempo da Memória Lógica: evocação imediata das duas histórias, intervalo de vinte e cinco a trinta e cinco minutos preenchido com tarefas não verbais, e evocação tardia seguida de reconhecimento" />

<!--
- Compare com a figura das três fases do bloco 1: a fase I mede **codificação**; o intervalo põe à prova o **armazenamento**; a fase II e o reconhecimento distinguem **armazenamento de recuperação**.
- É o mesmo desenho do registro e da evocação do MEEM, que a turma viu na aula 04 — só que com material extenso e com trinta minutos em vez de três.
-->

---
layout: default
kicker: A correção
title: Como se conta uma unidade de ideia
---

<Grid head :data="[
  ['Situação', 'Como se pontua'],
  ['Reproduziu a unidade com as palavras da história', '1 ponto'],
  ['Usou um sinônimo previsto no critério', '1 ponto — a lista de sinônimos aceitos vem com o protocolo'],
  ['Trocou por algo do mesmo tipo, mas diferente', '0 — trocar o nome do personagem por outro nome não pontua'],
  ['Lembrou o tema, sem o detalhe', '0 na contagem principal; pontua na contagem por <b>temas gerais</b>'],
  ['Acrescentou algo que não estava na história', '0 — e anote: é uma <b>intrusão</b>, e ela informa'],
]" />

<!--
- Fonte do padrão de critérios: o apêndice de Bolognani et al. (2015), que traz, para cada unidade, os sinônimos que pontuam e os exemplos que não pontuam.
- A **contagem por temas gerais** (*gist*) foi introduzida nas versões mais recentes da escala. Ela pergunta se a pessoa reteve a estrutura do enredo mesmo perdendo o detalhe, e é uma informação clínica diferente da contagem principal.
- Palavras que se repetem na história pontuam **uma vez só**.
- **Por que anotar intrusões**: omissão é perda de informação; intrusão é informação criada. A distinção separa perfis, e é o que o estudo de Araújo, Silva e Caixeta (2025) usou para comparar idosos de área rural e urbana.
-->

---
layout: metric
kicker: A medida que o escore bruto esconde
value: 17
unit: "%"
label: "<strong>Retenção = tardia ÷ imediata × 100.</strong> Ele recuperou 18
  unidades na hora e 3 depois de meia hora. O escore imediato parecia bom; a
  retenção diz outra coisa."
---

<!--
- Este é o índice que separa **quanto entrou** de **quanto ficou** — e é o que o escore bruto sozinho não mostra.
- O contraste que vale mostrar em seguida: 8 na imediata e 6 na tardia dá 75% de retenção. O escore bruto é menor e o perfil é melhor.
- Leitura clínica: retenção muito baixa aponta para **armazenamento** (perfil hipocampal); retenção preservada com escore bruto baixo aponta para **codificação ou recuperação** (perfil frontal, lentificação, humor).
- É exatamente essa dissociação que Araújo, Silva e Caixeta (2025) encontraram entre idosos de área rural e urbana no Brasil: boa evocação imediata e déficit de retenção após o intervalo.
-->

---
layout: default
kicker: Oliveira et al. (2017) · 334 idosos brasileiros
title: Contra qual média se compara
---

<Grid head :data="[
  ['Grupo', 'Evocação imediata — M (DP)', 'Evocação tardia — M (DP)'],
  ['60 a 69 anos', '15,04 (6,25)', '9,82 (6,33)'],
  ['70 a 79 anos', '14,22 (5,63)', '7,87 (6,35)'],
  ['80 anos ou mais', '11,25 (4,95)', '4,31 (2,89)'],
  ['Analfabetos', '14,07 (4,91)', '3,71 (4,41)'],
  ['1 a 4 anos de estudo', '12,71 (5,74)', '5,74 (5,71)'],
  ['5 a 8 anos de estudo', '15,30 (5,67)', '9,99 (6,41)'],
  ['9 anos ou mais', '17,77 (6,59)', '12,03 (6,26)'],
]" />

<Callout tone="warn" icon="lucide:triangle-alert">
<strong>⚠︎ verificar</strong> — o artigo descreve o escore de cada etapa como indo de 0 a 25,
enquanto o material de referência descreve 25 unidades <em>por história</em>. Confira qual
convenção o seu protocolo usa antes de comparar um paciente com esta tabela.
</Callout>

<!--
- Fonte: Oliveira, C. R. et al. (2017), *Avaliação Psicológica*, 16(1), 11-18. Amostra de 334 idosos; as linhas por idade e escolaridade excluem quem pontuou 6 ou mais na GDS-15.
- **As quatro variáveis que a regressão isolou**: escolaridade (o maior impacto), idade, sexo e sintomas depressivos. Mulheres pontuaram mais que homens nas duas etapas.
- O achado que amarra esta aula à aula 03: **sintomas depressivos rebaixaram significativamente as duas etapas**. A evocação imediata sozinha classificou corretamente 56% dos participantes quanto a ter ou não sintomas depressivos.
- Repare no salto por escolaridade na **tardia**: de 3,71 no analfabeto a 12,03 em quem tem 9 anos ou mais. Corrigir sem olhar a escolaridade é produzir diagnóstico.
- A ambiguidade da escala de pontuação é real e está no texto publicado — por isso a marca no slide. Resolva-a contra a folha de protocolo que você usa, não contra a memória.
-->

---
layout: columns
kicker: A interpretação
title: Três perfis, e o que cada um sugere
columns:
  - {
      title: "Falha de codificação",
      items: [
        "Imediata baixa",
        "Retenção percentual <strong>preservada</strong>",
        "Reconhecimento ajuda pouco: entrou pouco",
        "Lentificação, atenção, humor, baixa escolaridade"
      ]
    }
  - {
      title: "Falha de armazenamento",
      items: [
        "Imediata razoável",
        "Retenção percentual <strong>muito baixa</strong>",
        "Nem pista nem reconhecimento recuperam",
        "Perfil amnéstico, de tipo hipocampal"
      ]
    }
  - {
      title: "Falha de recuperação",
      items: [
        "Imediata e tardia baixas",
        "Retenção percentual razoável",
        "Pista e reconhecimento <strong>recuperam bem</strong>",
        "Perfil frontal ou disexecutivo"
      ]
    }
---

<!--
- Estes três perfis são a figura das três fases do bloco 1, aplicada a um protocolo real. Vale voltar a ela na projeção, se der tempo.
- Nenhum deles é diagnóstico. São **hipóteses de mecanismo**, que restringem o que investigar em seguida — e é assim que a avaliação neuropsicológica trabalha.
- O perfil de armazenamento é o que mais preocupa, e é também o menos frequente numa clínica-escola. O de codificação, associado a humor e escolaridade, é o mais comum.
- Um mesmo paciente pode ter mais de um: é comum haver componente de codificação **e** de armazenamento na doença de Alzheimer inicial.
-->

---
layout: default
kicker: Fixação · pergunta 5
title: Dois protocolos, dois desenhos diferentes
---

Paciente 1: evocação imediata **18**, tardia **3**. Paciente 2: imediata **8**, tardia **6**.
Qual afirmação está correta?

<v-clicks>

- **A.** O paciente 2 tem o quadro mais grave, porque o escore bruto é menor
- **B.** O paciente 1 tem perfil de armazenamento; o 2, de codificação
- **C.** Os dois têm o mesmo perfil, com gravidades diferentes
- **D.** O paciente 1 está dentro do esperado, porque a evocação imediata foi alta

</v-clicks>

<!--
- Peça a conta antes da resposta: 3 ÷ 18 = 17%; 6 ÷ 8 = 75%.
- Se a turma travar, devolva a pergunta assim: qual dos dois **perdeu** o que já tinha?
-->

---
layout: default
kicker: Fixação · resposta 5
title: A resposta é <span class="accent2">B</span>
---

<Grid head highlight="row:3" :data="[
  ['', 'Alternativa', 'Por que erra — ou por que acerta'],
  ['A', 'O 2 é mais grave', 'lê só o escore bruto; o paciente 2 reteve 75% do que codificou'],
  ['B', '1 armazenamento, 2 codificação', '<b>correta</b> — 3 de 18 é 17% de retenção; 6 de 8 é 75%. O que muda é a forma, não a magnitude'],
  ['C', 'Mesmo perfil, gravidades diferentes', 'as curvas têm sentidos opostos: um perde o que tinha, o outro guarda o pouco que entrou'],
  ['D', 'O 1 está dentro do esperado', 'toma a imediata como suficiente; é justamente o intervalo que revela o problema'],
]" />

<!--
- O paciente 1 é o desenho amnéstico: entrou bem e não ficou. É ele que merece investigação de transtorno neurocognitivo.
- O paciente 2 tem escore bruto baixo com retenção normal — compatível com baixa escolaridade, lentificação, atenção ou humor deprimido. É onde mais se produz falso-positivo.
- **A frase para levar**: o escore bruto diz quanto; a retenção diz o quê.
-->

---
layout: panels
kicker: Os limites
title: Três coisas que este teste não resolve
panels:
  - {
      icon: "lucide:graduation-cap",
      title: "Escolaridade e cultura",
      body: "É a variável de maior impacto no desempenho. E o próprio conteúdo
        das histórias supõe um repertório urbano — o que muda o resultado de
        quem vem de outro contexto."
    }
  - {
      icon: "lucide:repeat",
      title: "Efeito de prática",
      body: "Reaplicar a mesma história infla o escore. Formas alternativas
        reduzem o efeito, mas <strong>não o eliminam</strong>."
    }
  - {
      icon: "lucide:list-checks",
      title: "Funcionalidade",
      body: "Nenhum item aqui mede independência nas atividades da vida diária —
        e é ela que separa transtorno neurocognitivo leve de maior."
    }
---

<!--
- Sobre cultura: Araújo, Silva e Caixeta (2025) compararam idosos normais de área rural e de metrópole no Brasil. Os do interior tiveram boa evocação imediata e déficit de retenção após o intervalo; os urbanos erraram por **omissão**, não por comissão, na imediata. Os autores atribuem os erros a controle atencional, e não à memória em si.
- Sobre prática: Beglinger et al. (2005), citados no cap. 10, mostraram que o efeito persiste em forma reduzida mesmo com versões alternativas.
- Sobre funcionalidade: é o critério B do DSM-5, que a aula 04 tratou. Ele não sai de nenhum teste — sai da entrevista com o informante.
-->

---
layout: embed
kicker: Para revisar depois
title: Tipos de memória, em vídeo
iframe: https://www.youtube.com/embed/SMeJBBL5Wbk
---

<!--
- "Tipos de Memória — Memória e Neuropsicologia, Aula 2", do canal do Prof. Gustavo Siquara. Cobre a taxonomia do bloco 1 com outro vocabulário; serve como revisão para quem quiser rever antes da prova.
- **O iframe não sobrevive ao export em PDF.** Nada de essencial está aqui: tudo o que o vídeo cobre já foi dado nos slides do bloco 1.
- Se a projeção estiver sem internet, pule o slide.
-->

---
layout: statement
kicker: Dinâmica em grupo
title: Duas fichas. Corrijam a Memória Lógica, calculem a retenção e digam
  <em>qual processo</em> falhou.
---

Em grupos de quatro ou cinco. Cada grupo recebe **uma** das duas fichas, conta as unidades das
quatro transcrições, calcula a porcentagem de retenção e escreve o parágrafo de conclusão.

<Tags :items="['1 · conte as unidades', '2 · some cada etapa', '3 · calcule a retenção', '4 · qual perfil?', '5 · o que investigar depois?']" />

<!--
GABARITO — para você, não para eles. As fichas e a chave completa estão em `referencias/aula-05/`.

**Ficha 1 · Dona Lourdes, 74 anos, 4 anos de escolaridade.**
Imediata 17 (A 9 + B 8); tardia 3 (A 2 + B 1). Retenção **18%**.
Aparecem **intrusões** na tardia — conteúdo que não estava na história.
→ Falha de **armazenamento**. Perfil amnéstico. O escore imediato está acima da média da faixa
de escolaridade dela; é a retenção que denuncia.

**Ficha 2 · Sr. Heitor, 71 anos, ensino superior.**
Imediata 11 (A 6 + B 5); tardia 8 (A 4 + B 4). Retenção **73%**.
Sem intrusões; omissões, com o enredo preservado.
→ Falha de **codificação**, com armazenamento preservado. O escore bruto está bem abaixo do
esperado para a escolaridade dele — e mesmo assim o perfil é o mais benigno dos dois.

O CONTRASTE QUE INTERESSA
- Dona Lourdes tem o **maior** escore imediato e o **pior** prognóstico. Quem ordenar os dois
  pelo escore bruto inverte a gravidade.
- Nenhum dos dois perfis se decidiu pelo total. Decidiu-se pela **razão entre as duas etapas** e
  pelo tipo de erro.
- Se algum grupo fechar diagnóstico: a ficha não traz neuroimagem, marcador nem entrevista
  completa com informante. Dá para levantar hipótese de mecanismo, não para cravar etiologia —
  e a funcionalidade, que decide leve × maior, está descrita de propósito de forma incompleta.
-->

---
layout: panels
kicker: Para levar
title: Três coisas que ficam
panels:
  - {
      icon: "lucide:git-fork",
      title: "Memória não é uma função",
      body: "São sistemas, e eles envelhecem em ritmos diferentes. Episódica e
        operacional caem; semântica, implícita e curto prazo se mantêm."
    }
  - {
      icon: "lucide:graduation-cap",
      title: "Escolaridade pesa mais que idade",
      body: "É a variável de maior impacto no desempenho. E quando idade e
        escolaridade são controladas, o declínio aparece <strong>muito mais
        tarde</strong>."
    }
  - {
      icon: "lucide:percent",
      title: "O escore bruto diz quanto",
      body: "A <strong>retenção</strong> diz o quê. Dois pacientes com o mesmo
        total podem ter perfis de sentidos opostos."
    }
---

---
layout: reference
kicker: Referências · 1 de 2
title: Base primária e conceitos de memória
items:
  - {
      term: "Abrisqueta-Gomez, cap. 10",
      desc: "Memória e envelhecimento cognitivo saudável. In: Malloy-Diniz,
        Fuentes &amp; Cosenza (orgs.), <em>Neuropsicologia do Envelhecimento</em>.
        Porto Alegre: Artmed, p. 171-196 — <strong>base primária desta
        aula</strong>."
    }
  - {
      term: "Squire, 2004",
      desc: "Memory systems of the brain: a brief history and current
        perspective. <em>Neurobiology of Learning and Memory</em>, 82(3),
        171-177. doi:10.1016/j.nlm.2004.06.005"
    }
  - {
      term: "Squire e Zola, 1996",
      desc: "Structure and function of declarative and nondeclarative memory
        systems. <em>PNAS</em>, 93(24), 13515-13522.
        doi:10.1073/pnas.93.24.13515"
    }
  - {
      term: "Dudai, 2004; 2012",
      desc: "The neurobiology of consolidations. <em>Annual Review of
        Psychology</em>, 55, 51-86; e The restless engram. <em>Annual Review of
        Neuroscience</em>, 35, 227-247.
        doi:10.1146/annurev.psych.55.090902.142050 ·
        doi:10.1146/annurev-neuro-062111-150500"
    }
  - {
      term: "Baddeley, 2012",
      desc: "Working memory: theories, models, and controversies. <em>Annual
        Review of Psychology</em>, 63, 1-29 — citado no cap. 10."
    }
---

<!--
- O retrato de Brenda Milner vem do Wikimedia Commons, licença CC BY 2.0. Todos os esquemas da aula são autorais.
- As demais fontes citadas em nota (Kester et al., 2002; Nyberg et al., 2012; Brickman e Stern, 2009; Cherry e LeCompte, 1999; Light e Singh, 1987; May et al., 1999; Floden et al., 2000; Rendell e Craik, 2000; Bueno et al., 2008) estão todas na bibliografia do cap. 10.
-->

---
layout: reference
kicker: Referências · 2 de 2
title: A Memória Lógica
items:
  - {
      term: "Bolognani et al., 2015",
      desc: "Development of alternative versions of the Logical Memory subtest of
        the WMS-R for use in Brazil. <em>Dementia &amp; Neuropsychologia</em>,
        9(2), 136-148. doi:10.1590/1980-57642015DN92000008 — as histórias
        brasileiras, as versões alternativas e os critérios de correção."
    }
  - {
      term: "Oliveira et al., 2017",
      desc: "Dados normativos de idosos brasileiros no subteste Memória Lógica da
        WMS-R. <em>Avaliação Psicológica</em>, 16(1), 11-18.
        doi:10.15689/ap.2017.1601.02"
    }
  - {
      term: "Araújo, Silva e Caixeta, 2025",
      desc: "Comparative discourse analysis of logical memory recall in normal
        elderly from rural and urban areas. <em>Dementia &amp;
        Neuropsychologia</em>, 19, e20240164.
        doi:10.1590/1980-5764-DN-2024-0164"
    }
  - {
      term: "Rabin et al., 2009",
      desc: "Differential memory test sensitivity for diagnosing amnestic mild
        cognitive impairment. <em>Aging, Neuropsychology and Cognition</em>,
        16(3), 357-376. doi:10.1080/13825580902825220"
    }
  - {
      term: "Strauss, Sherman e Spreen, 2006",
      desc: "<em>A Compendium of Neuropsychological Tests</em>. New York: Oxford
        University Press — as propriedades psicométricas do subteste."
    }
---

<!--
- As três primeiras são de **acesso aberto**. Bolognani et al. (o apêndice com os critérios) e Oliveira et al. estão salvos em `referencias/aula-05/`; Araújo et al. está no PMC, em PMC11790069.
- **doi** — identificador digital de objeto, o endereço permanente de um artigo científico.
- O material do teste em si (histórias e folha de correção) é de uso restrito ao profissional habilitado. Ele está nas fichas da dinâmica, não neste deck.
-->

---
layout: end
title: Até a próxima
subtitle: A memória é um conjunto de sistemas. A avaliação é o trabalho de dizer
  qual deles falhou, e por quê.
contact: FASM · Neuropsicologia II
---
