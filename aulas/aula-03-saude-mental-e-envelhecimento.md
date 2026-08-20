---
theme: slidev-theme-fasm
title: "Saúde mental e envelhecimento"
info: Transtornos de humor e transtornos psicóticos no idoso, suas repercussões
  neuropsicológicas e a aplicação da Escala de Depressão Geriátrica
date: "2026-08-25"
author: FASM · Neuropsicologia II
# Gera o PDF no build (via playwright-chromium) e liga o botão de download no deck.
download: true
exportFilename: aula-03-saude-mental-e-envelhecimento
themeConfig:
  lang: pt-BR
layout: lead
index: "03"
kicker: Neuropsicologia II · FASM
subtitle: O que os quadros afetivos e psicóticos fazem com a cognição do idoso —
  e o que uma escala de rastreio pode e não pode dizer.
---

---
layout: agenda
kicker: Aula 03 · capítulo 6
title: O caminho de hoje
items:
  - {
      topic: "Psicopatologia e envelhecimento",
      desc: "por que o quadro no idoso não é o quadro do adulto jovem"
    }
  - {
      topic: "Transtornos de humor",
      desc: "depressão e transtorno bipolar: quadro, especificidades e cognição"
    }
  - {
      topic: "Intervalo",
      desc: "quinze minutos"
    }
  - {
      topic: "Transtornos psicóticos",
      desc: "esquizofrenia, início tardio e o diferencial com o transtorno neurocognitivo"
    }
  - {
      topic: "A Escala de Depressão Geriátrica",
      desc: "aplicação, correção, interpretação e limites — com dinâmica em grupo"
    }
---

<!--
Diga o desenho da noite antes de começar: dois blocos de conteúdo, intervalo, um terceiro bloco curto e a última hora inteira dedicada a um instrumento. Avise que a GDS será aplicada por eles, em grupo, sobre vinhetas — quem já sabe que vai usar presta outra atenção nas duas horas anteriores.
-->

---
layout: section
index: "01"
kicker: Parte um
title: Psicopatologia e envelhecimento
subtitle: Por que o mesmo diagnóstico não descreve o mesmo quadro
---

---
layout: default
kicker: As perguntas do capítulo
title: Três perguntas que ficam abertas até o fim da aula
---

O capítulo de referência abre com perguntas que a literatura ainda não fechou. Guarde-as: voltamos a elas no último slide.

<v-clicks>

- Quadros que **começam cedo** comprometem mais a cognição do que quadros que começam tarde?
- Ou os quadros tardios são **manifestações precoces** de um processo demencial?
- Fatores neurobiológicos do envelhecimento **particularizam** a apresentação neuropsicológica?

</v-clicks>

<v-click>

<Callout tone="muted" icon="lucide:help-circle">
Nicolato e Alvarenga (2010) formulam as três e as deixam abertas. Não são retóricas: cada uma tem um programa de pesquisa em andamento e nenhuma tem resposta consensual.
</Callout>

</v-click>

<!--
Leia as três em voz alta e peça que anotem. Não comente ainda. O objetivo é que a turma passe a aula ouvindo os dados como material para responder — e perceba, no fim, que a resposta honesta a duas delas é "ainda não se sabe". Isso é conteúdo, não lacuna.
-->

---
layout: define
kicker: Delimitando o objeto
term: Psicopatologia
definition: O estudo sistemático dos <em>sinais e sintomas</em> mentais — sua
  descrição, sua organização em síndromes e os critérios que permitem
  reconhecê-las de forma reprodutível.
points:
  - "Descreve e classifica; não explica a causa nem prescreve o tratamento"
  - "Trabalha com critérios operacionais — o que torna o diagnóstico comunicável entre profissionais"
  - "Não é sinônimo de doença: um sintoma isolado não constitui quadro psicopatológico"
  - "No idoso, os mesmos critérios foram construídos e validados em adultos jovens"
---

<!--
Insista no último ponto: é a chave de toda a aula. Os critérios do DSM não foram derivados de amostras geriátricas. Isso não os invalida, mas explica por que o quadro do idoso frequentemente fica na borda do critério — e por que o capítulo diz, com todas as letras, que não há critérios diagnósticos específicos para depressão ou qualquer outro quadro no idoso.
-->

---
layout: feature
kicker: O problema central da aula
title: Por que o quadro no idoso <em>não</em> é o do adulto jovem
columns: 2
features:
  - {
      icon: "lucide:eye-off",
      title: "Apresentação",
      desc: "Queixas somáticas inespecíficas, sintomas ansiosos, desamparo, queixa de memória e irritabilidade tomam o lugar da tristeza relatada (Gallo e Rabins, 1999)"
    }
  - {
      icon: "lucide:layers",
      title: "Comorbidade clínica",
      desc: "Insônia, dor, perda de apetite e fadiga têm várias causas simultâneas; o sintoma é creditado à doença de base e não ao humor"
    }
  - {
      icon: "lucide:pill",
      title: "Iatrogenia",
      desc: "Anti-hipertensivos, antiparkinsonianos e corticosteroides produzem quadros depressivos; fármacos com carga anticolinérgica rebaixam o desempenho nos testes"
    }
  - {
      icon: "lucide:file-question",
      title: "Subdiagnóstico",
      desc: "Casos de depressão são frequentemente subdiagnosticados e subtratados — inclusive dentro do hospital, onde a prevalência é maior"
    }
---

<!--
Quatro razões, quatro consequências diretas para a nossa prática. A primeira muda a anamnese; a segunda muda o que perguntamos ao médico assistente; a terceira muda o que pedimos antes de agendar a testagem; a quarta muda o que fazemos com um encaminhamento que veio com hipótese de demência. Peça um exemplo de cada da experiência de estágio deles.
-->

---
layout: image
side: right
image: /filtros-diagnostico-idoso.svg
alt: Funil com quatro filtros entre o quadro psiquiátrico presente no idoso e o
  diagnóstico efetivamente registrado
kicker: O mesmo problema, em uma figura
title: Quatro filtros entre o quadro e o diagnóstico
---

O idoso que chega à avaliação neuropsicológica já passou por todos os quatro.

- Cada filtro **retém** parte dos casos
- O que sobra é a base sobre a qual se calcula a prevalência
- O motivo do encaminhamento raramente coincide com o diagnóstico

<Callout tone="warn" icon="lucide:triangle-alert">
Consequência prática: hipótese de demência no encaminhamento não dispensa investigar humor. Frequentemente é o inverso do que está escrito na guia.
</Callout>

<!--
Use a figura para fixar a direção do argumento: a subestimação é cumulativa, não pontual. E chame atenção para a conclusão prática — em quase todo serviço, a hipótese que chega escrita na guia é "investigar demência", e a nossa primeira tarefa é decidir se aquilo é humor. Vamos passar a segunda parte da aula exatamente nisso.
-->

---
layout: stats
kicker: O tamanho do problema
title: Onde a depressão no idoso se concentra
columns: 3
stats:
  - {
      value: "20–33",
      unit: "%",
      label: "dos pacientes internados em hospital geral — é o transtorno psiquiátrico mais prevalente em interconsulta",
      icon: "lucide:bed",
      tone: "bad"
    }
  - {
      value: "38,5",
      unit: "%",
      label: "de sintomas depressivos em idosos da comunidade, pela GHQ-12, em Minas Gerais (Castro-Costa et al., 2008)",
      icon: "lucide:home",
      tone: "warn"
    }
  - {
      value: "7",
      unit: "%",
      label: "de depressão maior em 15.491 idosos brasileiros — contra 26% de sintomatologia significativa (Barcelos-Ferreira et al., 2010)",
      icon: "lucide:users",
      tone: "info"
    }
---

<!--
Três números que não se contradizem: medem coisas diferentes. O primeiro é ambiente hospitalar; o segundo é rastreio por escala na comunidade; o terceiro separa diagnóstico de sintomatologia. Adiante o que vamos ver no gráfico do bloco dois: em depressão geriátrica, o número que alguém cita diz mais sobre a definição de caso adotada do que sobre a população estudada.
-->

---
layout: default
kicker: Questão 1 · introdução
title: Homem de 78 anos, insuficiência cardíaca em acompanhamento
---

Procura o clínico com cansaço, insônia e dores difusas há três meses. Nega tristeza quando perguntado diretamente. Qual afirmação descreve melhor o principal risco diagnóstico?

- **a)** O quadro é típico de depressão maior no idoso e dispensa investigação clínica adicional
- **b)** Como o paciente nega tristeza, o diagnóstico de depressão está descartado
- **c)** Os sintomas físicos tendem a ser creditados à insuficiência cardíaca, e a depressão fica subdiagnosticada
- **d)** Sintomas somáticos em idosos são inespecíficos e não devem entrar na avaliação de humor

<!--
Dê noventa segundos. Peça voto por levantar de mão nas quatro alternativas antes de revelar — o valor pedagógico está na distribuição dos votos, não no acerto. A alternativa b costuma ser a segunda mais votada, e é exatamente o erro que a aula precisa desfazer.
-->

---
layout: default
kicker: Questão 1 · resposta
title: Alternativa <span class="accent2">c</span>
---

<Callout tone="good" icon="lucide:check">
<strong>c)</strong> É o filtro da comorbidade clínica. Os sintomas existem, são reais e têm duas explicações possíveis simultâneas — e a explicação cardiológica é a que já está sobre a mesa.
</Callout>

- **a)** inverte o problema: a insuficiência cardíaca produz fadiga e insônia por si só — nada aqui dispensa investigação clínica
- **b)** é o erro mais comum na prática: o critério exige humor deprimido **ou** perda de interesse — anedonia sem tristeza basta
- **d)** inverte a lógica do rastreio: é por serem pouco específicos que existe uma escala que os evita — a GDS, na última parte

<!--
Detenha-se na b. É o ponto em que a maioria erra na prática, não na prova: o paciente diz "não estou triste" e o profissional encerra a linha de investigação. Anedonia é a outra porta de entrada do critério, e no idoso ela costuma se apresentar como abandono de atividades, não como queixa de perda de prazer.
-->

---
layout: section
index: "02"
kicker: Parte dois
title: Transtornos de humor
subtitle: Depressão e transtorno bipolar — quadro, idoso e cognição
---

---
layout: define
kicker: A família
term: Transtornos do humor
definition: Quadros em que a alteração <em>primária</em> é do afeto e do nível de
  atividade, com repercussão cognitiva, psicomotora e vegetativa que persiste
  por um período definido.
points:
  - "Unipolares: episódio depressivo maior e transtorno depressivo persistente (distimia)"
  - "Bipolares: tipo I, com pelo menos um episódio maníaco; tipo II, com hipomania e depressão"
  - "A alteração é episódica e há retorno ao funcionamento anterior — o que os separa dos quadros degenerativos"
  - "Déficits cognitivos são característica do quadro, não complicação dele"
---

<!--
O último ponto é o que interessa à disciplina e é onde o capítulo é explícito: déficits cognitivos constituem característica importante do quadro depressivo maior, sobretudo em atenção, memória e velocidade psicomotora, com referência ao trabalho de Beekman. Não estamos falando de um efeito colateral do sofrimento — estamos falando de parte da definição do quadro.
-->

---
layout: bigtype
kicker: Primeiro quadro
title: Depressão
subtitle: O transtorno psiquiátrico mais prevalente em hospitais gerais e o mais subdiagnosticado na atenção primária.
---

<!--
Marque a virada de assunto e a ordem fixa que vamos seguir em cada quadro daqui em diante: caracterização, especificidades no idoso, alterações cognitivas. É a mesma sequência para o bipolar e para a esquizofrenia, e é assim que eles devem organizar o estudo.
-->

---
layout: columns
kicker: Caracterização do quadro · 1 de 2
title: Episódio depressivo maior — o critério nuclear
columns:
  - title: "A porta de entrada"
    items:
      - "Cinco ou mais sintomas no mesmo período de duas semanas"
      - "Representando mudança em relação ao funcionamento anterior"
      - "Ao menos um deles é humor deprimido OU perda de interesse e prazer"
  - title: "Os nove sintomas"
    items:
      - "Humor deprimido na maior parte do dia"
      - "Redução acentuada de interesse ou prazer"
      - "Alteração de peso ou apetite"
      - "Insônia ou hipersonia"
      - "Agitação ou retardo psicomotor observáveis"
      - "Fadiga ou perda de energia"
      - "Sentimento de inutilidade ou culpa excessiva"
  - title: "E ainda"
    items:
      - "Capacidade diminuída de pensar, concentrar-se ou decidir"
      - "Pensamentos recorrentes de morte, ideação ou plano suicida"
      - "Síntese parafraseada do DSM-5-TR — a redação oficial é da APA"
---

<!--
Síntese parafraseada dos critérios do DSM-5-TR (conforme reproduzidos em Nursing: Mental Health and Community Concepts, NCBI Bookshelf, 2024). Chame atenção para os dois últimos sintomas da terceira coluna: são os dois que interessam diretamente a esta disciplina, e são os que o paciente idoso relata como "memória ruim". Não é memória: é atenção, iniciativa e decisão.
-->

---
layout: default
kicker: Caracterização do quadro · 2 de 2
title: Os critérios que fecham o diagnóstico
---

<Grid :data="[['Critério', 'O que exige', 'Por que importa no idoso'], ['Prejuízo', 'Sofrimento clinicamente significativo ou prejuízo social, ocupacional ou funcional', 'Aposentadoria e viuvez reduzem as demandas externas — o prejuízo fica menos visível'], ['Exclusão orgânica', 'Não atribuível a substância ou a outra condição médica', 'É o critério mais trabalhoso na geriatria: hipotireoidismo, fármacos, anemia, neoplasia'], ['Exclusão de mania', 'Nunca houve episódio maníaco ou hipomaníaco', 'Muda o tratamento inteiro: antidepressivo isolado no bipolar arrisca virada'], ['Luto', 'O DSM-5 retirou a exclusão por luto que existia no DSM-IV-TR', 'Viuvez é evento frequente após os 70 — e luto e depressão maior podem coexistir']]" head highlight="row:5" />

<!--
A linha destacada é uma mudança de manual com consequência clínica direta na população que estudamos. No DSM-IV-TR, sintomas depressivos após a perda de um ente querido só fechavam diagnóstico se persistissem mais de dois meses ou tivessem marcadores de gravidade. O DSM-5 retirou essa exclusão, com a justificativa de que o luto é um estressor grave que pode precipitar um episódio em pessoas vulneráveis — e de que dois meses não descrevem a duração normal do luto. Foi a mudança mais controversa do DSM-5; vale dizer isso à turma.
-->

---
layout: chart
kicker: Especificidades no idoso · prevalência
title: O número depende da <em>definição de caso</em>
note: "Fontes: Beekman, Copeland e Prince (1999), revisão de prevalência
  comunitária; Barcelos-Ferreira et al. (2010), meta-análise com 15.491 idosos
  brasileiros; Castro-Costa et al. (2008), estudo de Bambuí com a GHQ-12."
chart:
  type: bar
  unit: "%"
  horizontal: true
  height: "340px"
  categories:
    - "Depressão maior · comunidade internacional"
    - "Depressão maior · Brasil"
    - "Distimia · Brasil"
    - "Depressão menor · comunidade internacional"
    - "Sintomatologia significativa · comunidade internacional"
    - "Sintomatologia significativa · Brasil"
    - "Sintomas depressivos por rastreio · Bambuí"
  series:
    - name: "Prevalência"
      data: [1.8, 7.0, 3.3, 9.8, 13.5, 26.0, 38.5]
---

<!--
Um dado só: a barra cresce conforme a definição de caso afrouxa, não conforme a população piora. Peça que reparem na distância entre a primeira e a última barra — vinte vezes, na mesma faixa etária. Quando alguém citar "a prevalência de depressão no idoso", a primeira pergunta é qual instrumento e qual critério. Esse raciocínio vai reaparecer inteiro no bloco da GDS.
-->

---
layout: panels
kicker: Especificidades no idoso · apresentação
title: A depressão que não se apresenta como tristeza
panels:
  - {
      icon: "lucide:activity",
      title: "Queixa somática",
      items: ["Sintomas físicos inespecíficos como porta de entrada", "Preocupações excessivas e sintomas ansiosos", "Mimetiza e é mimetizada por doença clínico-cirúrgica"]
    }
  - {
      icon: "lucide:brain",
      title: "Queixa cognitiva",
      items: ["Queixa de memória espontânea e enfática", "Lentificação motora observável", "É o motivo mais comum de encaminhamento para nós"]
    }
  - {
      icon: "lucide:cloud-drizzle",
      title: "Quadros subsindrômicos",
      items: ["Sintomas significativos que não fecham critério", "Depressão menor: entre 2 e 5 sintomas", "Fator de risco para depressão maior e para agravo cardiovascular"]
    }
  - {
      icon: "lucide:heart-pulse",
      title: "Relação bidirecional",
      items: ["Deprimidos têm mais coronariopatia", "Coronariopatas deprimidos pós-infarto têm maior mortalidade", "A depressão predispõe e agrava doença crônica"]
    }
---

<!--
O terceiro painel é o que mais muda conduta. Os conceitos de depressão menor e subsindrômica não são oficialmente aceitos como categorias diagnósticas, mas descrevem a maior parte do que encontramos: o idoso que sofre, funciona pior e não fecha critério. Barcelos-Ferreira encontrou 26% de sintomatologia significativa contra 7% de depressão maior — quase quatro vezes mais gente na zona cinzenta do que na categoria fechada.
-->

---
layout: image
side: left
image: /depressao-vascular-circuito.svg
alt: Esquema do circuito frontoestriatal-límbico com lesões de substância branca
  marcadas sobre a alça
kicker: Especificidades no idoso · início tardio
title: Depressão de início tardio e o conceito de depressão vascular
---

Alexopoulos e colaboradores (1997) descreveram um quadro depressivo geriátrico associado a doença isquêmica subcortical silenciosa.

- Hiperintensidades de substância branca à ressonância, mais frequentes em idosos deprimidos
- Alteração cognitiva mais proeminente e **menor** história familiar de depressão
- Início tardio associa-se a comprometimento clínico; início precoce, a comorbidade psiquiátrica

<Callout icon="lucide:route">
A lesão não está no córtex: está na fiação que liga o pré-frontal ao estriado. Daí o perfil disexecutivo e a lentificação, e não um perfil amnéstico.
</Callout>

<!--
Explique a figura pela alça: pré-frontal para estriado, para pálido, para tálamo e de volta ao pré-frontal. Lesões de pequenos vasos na substância branca interrompem o circuito em pontos que a atrofia cortical não atingiria. É por isso que o perfil neuropsicológico da depressão vascular se parece com o de uma síndrome frontal e não com o do início de uma doença de Alzheimer. Essa distinção é o que vamos operacionalizar dois slides adiante.
-->

---
layout: columns
kicker: Alterações cognitivas esperadas
title: O que esperar na folha de respostas
columns:
  - title: "Domínios afetados"
    items:
      - "Atenção sustentada e dividida"
      - "Velocidade psicomotora e de processamento"
      - "Funções executivas: pensamento abstrato, flexibilidade, planejamento"
      - "Memória episódica — por falha de codificação e de recuperação"
      - "Fluência verbal semântica"
  - title: "Padrão típico"
    items:
      - "Desempenho melhora com pista e com reconhecimento"
      - "Curva de aprendizagem achatada, sem esquecimento acelerado"
      - "Erros de omissão e respostas 'não sei'"
      - "Esforço variável ao longo da sessão"
      - "Reconhecimento preservado é o achado mais discriminativo"
  - title: "O que isso prediz"
    items:
      - "Vilalta-Franch et al. (2012): desempenho inferior em abstração, teste do relógio, fluência semântica e atenção, pela CAMDEX"
      - "Deprimidos idosos com alterações frontais têm maior chance de evoluir para quadro demencial"
      - "Dotson et al. (2010): o número de episódios aumenta a chance de progressão"
---

<!--
A terceira coluna é a que sustenta a conduta: não basta descrever o perfil, é preciso dizer o que ele prediz. Deixe explícito o que isso significa para o laudo — perfil frontal em um idoso deprimido não é achado tranquilizador, é indicação de reavaliação seriada. O capítulo é direto nisso: esses pacientes requerem melhor acompanhamento clínico e neuropsicológico.
-->

---
layout: default
kicker: Questão 2 · depressão
title: Mulher de 72 anos, primeiro episódio depressivo aos 70
---

Ressonância com hiperintensidades de substância branca periventricular. Encaminhada para avaliação neuropsicológica por queixa de memória. Qual perfil é o **mais esperado**?

- **a)** Prejuízo desproporcional em evocação tardia, sem benefício de pista, com nomeação preservada
- **b)** Lentificação psicomotora e prejuízo atencional e executivo, com memória que melhora com pista
- **c)** Preservação global, já que a depressão não altera o desempenho cognitivo
- **d)** Comprometimento global e progressivo, o que confirmaria o diagnóstico de pseudodemência

<!--
Deixe que discutam em duplas por dois minutos antes de votar. A alternativa d é a que mais interessa: quem a marcar está tratando "pseudodemência" como categoria diagnóstica, que é exatamente o que os três próximos slides vão desmontar.
-->

---
layout: default
kicker: Questão 2 · resposta
title: Alternativa <span class="accent2">b</span>
---

<Callout tone="good" icon="lucide:check">
<strong>b)</strong> Início tardio com marcadores vasculares aponta comprometimento da alça frontoestriatal: lentificação, disfunção executiva e falha de recuperação — não de armazenamento.
</Callout>

- **a)** descreve o perfil amnéstico da doença de Alzheimer: falha de armazenamento, sem nenhum benefício de pista
- **c)** contradiz a definição do quadro: déficit cognitivo é característica da depressão maior, não complicação dela
- **d)** trata "pseudodemência" como diagnóstico e erra o curso: quadro depressivo não é progressivo por definição

<!--
Use a alternativa a como ponte: a diferença entre falha de recuperação e falha de armazenamento é o mesmo conceito que eles viram na aula 02, agora aplicado ao diferencial mais importante da geriatria. Faça a ponte explicitamente — reforça a aula anterior e prepara o próximo slide.
-->

---
layout: vs
kicker: Diagnóstico diferencial
title: Depressão × transtorno neurocognitivo maior
label: "×"
left:
  title: "Aponta para depressão"
  items:
    - "Instalação em semanas, com data reconhecível"
    - "Queixa trazida pelo próprio paciente, de forma enfática"
    - "Responde 'não sei' e desiste da tarefa"
    - "Desempenho melhora com pista e reconhecimento"
    - "Alteração do humor precede a do desempenho"
    - "Consciência preservada do próprio déficit"
right:
  title: "Aponta para transtorno neurocognitivo"
  items:
    - "Instalação insidiosa, ao longo de meses"
    - "Queixa trazida pelo acompanhante"
    - "Tenta responder, erra por aproximação, confabula"
    - "Pista não melhora o desempenho"
    - "Declínio funcional precede a alteração do humor"
    - "Minimiza ou desconhece o próprio déficit"
---

<!--
Passe coluna por coluna, mas termine com a ressalva que vale mais que a tabela: nenhum desses sinais isolado decide, e o cenário mais comum na clínica geriátrica é a coexistência. A tabela orienta hipótese, não fecha diagnóstico. É por isso que a figura do próximo slide termina em três caixas e não em duas.
-->

---
layout: image
side: right
image: /fluxo-depressao-tnc.svg
alt: Fluxograma de decisão diante de queixa cognitiva no idoso, com três
  desfechos possíveis
kicker: Diagnóstico diferencial
title: O fluxo de decisão tem <em>três</em> saídas, não duas
---

Quatro perguntas antes de qualquer escore — e três desfechos possíveis.

- O desfecho do meio é o mais frequente na clínica geriátrica
- O tratamento adequado do humor é a única prova diagnóstica disponível
- Quem não recupera desempenho após remitir o humor tem, provavelmente, os dois quadros

<Callout tone="warn" icon="lucide:clock">
Reavaliação em 6 a 12 semanas não é protelação: é o desenho que separa reversível de irreversível.
</Callout>

<!--
Marque o intervalo de reavaliação como conduta concreta e defensável em laudo. Alexopoulos e colaboradores (2002) acompanharam por três anos pacientes deprimidos com sintomas demenciais aparentemente reversíveis: o risco de desenvolver demência irreversível foi quase cinco vezes maior entre eles do que entre deprimidos sem sintomas cognitivos. Reavaliação seriada não é excesso de zelo, é o que a evidência recomenda.
-->

---
layout: default
kicker: Um termo em revisão
title: Por que "pseudodemência" é um termo problemático
---

O termo descreve um quadro cognitivo que imita demência e seria reversível com o tratamento do transtorno psiquiátrico de base. A objeção não é semântica.

<v-clicks>

- **O prefixo é falso.** O déficit é real, mensurável e funcionalmente incapacitante — não é "pseudo" nada
- **A reversibilidade não se sustenta.** Em 18 estudos, 33% dos casos evoluíram para demência irreversível (Connors et al., 2018)
- **A dicotomia é falsa.** Sugere que o paciente tem ou um quadro orgânico ou um funcional; a maioria tem componentes dos dois
- **É descrição, não categoria.** Não consta do DSM-5-TR nem da CID como diagnóstico

</v-clicks>

<v-click>

<Callout tone="warn" icon="lucide:scale">
Há quem defenda mantê-lo: Brodaty e Connors (2020) argumentam que o termo continua útil por sinalizar um grupo de pacientes em risco de erro diagnóstico. A crítica ao rótulo não é unânime — a exigência de reavaliação, sim.
</Callout>

</v-click>

<!--
Traga o dado que mais impressiona: Sáez-Fonseca e colaboradores (2007) acompanharam por cinco a sete anos deprimidos internados; 71,4% dos que tinham comprometimento cognitivo dito reversível converteram para demência, contra 18,2% dos deprimidos cognitivamente íntegros. Mukku e colaboradores (2021) resumem a posição atual: o conceito hoje é histórico. Escreva "comprometimento cognitivo associado a episódio depressivo" no laudo, com a conduta de reavaliação — é preciso e é defensável.
-->

---
layout: bigtype
kicker: Segundo quadro
title: Transtorno bipolar
subtitle: Uma patologia espectral, hoje reconhecida em uma faixa etária em que por muito tempo se supôs que não existisse.
---

<!--
Segunda virada. Diga de saída que a literatura sobre bipolar no idoso é bem mais escassa e mais controversa do que a de depressão — e que isso vai aparecer na quantidade de "não há consenso" dos próximos slides. Não é lacuna da aula: é o estado do campo.
-->

---
layout: columns
kicker: Caracterização do quadro
title: Episódio maníaco e episódio hipomaníaco
columns:
  - title: "Episódio maníaco"
    items:
      - "Humor elevado, expansivo ou irritável E aumento de atividade ou energia"
      - "Pelo menos 7 dias, ou qualquer duração se exigir hospitalização"
      - "Três ou mais sintomas — quatro, se o humor for apenas irritável"
      - "Prejuízo acentuado no funcionamento, ou hospitalização, ou sintomas psicóticos"
  - title: "Episódio hipomaníaco"
    items:
      - "Mesmo quadro de humor e atividade, por pelo menos 4 dias consecutivos"
      - "Mesmo limiar de três (ou quatro) sintomas"
      - "Mudança inequívoca e perceptível por terceiros"
      - "Sem prejuízo acentuado, sem hospitalização e sem psicose"
  - title: "Os sete sintomas"
    items:
      - "Autoestima inflada ou grandiosidade"
      - "Redução da necessidade de sono"
      - "Pressão para falar"
      - "Fuga de ideias"
      - "Distratibilidade"
      - "Aumento da atividade dirigida a objetivos ou agitação"
      - "Envolvimento em atividades de alto potencial de consequência dolorosa"
---

<!--
Síntese parafraseada do DSM-5-TR conforme Jain e Mitra (StatPearls, 2023). Destaque a mudança do DSM-IV para o DSM-5 no critério nuclear: antes bastava a alteração de humor; agora é exigido também aumento anormal e persistente de atividade ou energia. Isso reduz falso-positivo em idosos irritáveis por dor, insônia ou delirium — e é uma mudança que favorece a nossa população. Bipolar tipo I exige ao menos um episódio maníaco; tipo II exige hipomania mais episódio depressivo, e nenhum episódio maníaco.
-->

---
layout: stats
kicker: Especificidades no idoso
title: O transtorno bipolar depois dos 60
columns: 3
stats:
  - {
      value: "1,1",
      unit: "%",
      label: "de prevalência de transtorno bipolar I em pessoas com mais de 64 anos, em amostra de mais de 8 mil idosos norte-americanos (NESARC)",
      icon: "lucide:users",
      tone: "info"
    }
  - {
      value: "17",
      unit: " anos",
      label: "de latência entre o primeiro episódio depressivo e o primeiro de mania nos idosos — contra 3 anos nos jovens (Laks, 2009)",
      icon: "lucide:hourglass",
      tone: "warn"
    }
  - {
      value: "2",
      unit: "×",
      label: "mais chance de evoluir para demência do que pacientes com outras doenças crônicas (Kessing e Nilsson, 2003)",
      icon: "lucide:trending-up",
      tone: "bad"
    }
---

<!--
O número do meio é o mais útil clinicamente. Dezessete anos de latência significa que um idoso que abre mania aos 70 pode ter tido o primeiro episódio depressivo aos 53 — e passou quase duas décadas tratado como unipolar. Quando encontrarmos história de depressão recorrente de longa data em um idoso que agora está irritável e hiperativo, a hipótese de virada precisa estar na mesa antes de pensarmos em quadro demencial.
-->

---
layout: panels
kicker: Especificidades no idoso
title: O que muda no bipolar do idoso
panels:
  - {
      icon: "lucide:venus",
      title: "Distribuição e curso",
      items: ["A razão mulheres–homens sobe de 1/1,5 para 2/3", "Episódios mais longos, intervalos menores", "Só uma pequena parte evolui com recuperação clínica significativa"]
    }
  - {
      icon: "lucide:flame",
      title: "Apresentação da mania",
      items: ["Sintomas de menor intensidade que no jovem", "Mais irritabilidade, hostilidade e sintomas mistos", "Retardo psicomotor é característica marcante"]
    }
  - {
      icon: "lucide:stethoscope",
      title: "Comorbidade e diferencial",
      items: ["Hipotireoidismo, hipertensão, deficiências vitamínicas, diabetes", "Demências, lesão traumática, epilepsia, deficiência de B12", "A associação com doença cerebrovascular é menos forte do que se supôs (Almeida e Fenner, 2002)"]
    }
  - {
      icon: "lucide:alert-triangle",
      title: "Riscos do tratamento",
      items: ["Antidepressivo isolado, sem estabilizador, arrisca virada para mania", "Mortalidade maior que na população geral", "Resposta aos psicofármacos é mais pobre"]
    }
---

<!--
O terceiro painel corrige uma crença difundida. Há muitos estudos associando mania tardia a etiologia orgânica quase inexoravelmente; Almeida e Fenner argumentam que, se a associação fosse tão forte, a mania em idosos seria muito mais frequente do que é. A leitura correta é intermediária: descartar causa orgânica por neuroimagem, exames bioquímicos e avaliação neuropsicológica, sem assumir que ela está sempre lá.
-->

---
layout: default
kicker: Alterações cognitivas · e o efeito dos fármacos
title: O que o transtorno bipolar e seu tratamento fazem com os testes
---

<Grid :data="[['O que atua', 'Efeito sobre o desempenho', 'Conduta na avaliação'], ['O próprio transtorno', 'Idosos bipolares eutímicos apresentam sintomas extrapiramidais, lentificação, prejuízo de memória verbal e de funções executivas (Martino et al., 2008); quase 50% alteram o relógio ou o MEEM (Tsai et al., 2007)', 'Eutimia não autoriza esperar desempenho normal — a maioria dos idosos eutímicos exibe comprometimento (Gildengers et al., 2004)'], ['Lítio', 'Meta-análise de 12 estudos: prejuízo pequeno em aprendizagem verbal imediata (TE 0,24); nos pacientes, prejuízo maior em desempenho psicomotor (TE 0,62). Memória tardia, atenção e executivo não afetados (Wingo et al., 2009)', 'Registrar litemia e função tireoidiana. O efeito é pequeno e não justifica atribuir a ele um perfil francamente rebaixado'], ['Carga anticolinérgica', 'Exposição a fármacos anticolinérgicos associa-se a chance 45% maior de comprometimento cognitivo em idosos (OR 1,45; Ruxton et al., 2015). Uso de anticolinérgicos definidos piora MEEM, FAB e RBANS (Dyer et al., 2021)', 'Levantar a lista completa de medicamentos antes de testar — inclusive os que o paciente não considera remédio']]" head highlight="row:4" />

<!--
A linha destacada é a que mais muda conduta imediata. Não existe teste neuropsicológico que descubra sozinho carga anticolinérgica: ela precisa ser levantada na anamnese. Antidepressivos tricíclicos, anti-histamínicos, antiespasmódicos urinários e alguns antipsicóticos entram na conta. Peça a lista com as caixas, não de memória.
-->

---
layout: default
kicker: Questão 3 · transtorno bipolar
title: Sobre o transtorno bipolar no idoso, assinale a alternativa correta
---

- **a)** A mania de início após os 60 anos é, na quase totalidade dos casos, secundária a doença cerebrovascular
- **b)** Idosos bipolares em eutimia apresentam desempenho cognitivo equivalente ao de idosos sem o transtorno
- **c)** O período de latência entre o primeiro episódio depressivo e o primeiro de mania é mais longo nos idosos do que nos jovens
- **d)** Diante de queixa cognitiva em paciente em uso de lítio, a conduta é suspender o fármaco, por ser a causa mais provável

<!--
Esta é a questão mais difícil das cinco, porque as quatro alternativas circulam como verdadeiras na prática. Dê dois minutos e peça que justifiquem a escolha em uma frase antes de votar.
-->

---
layout: default
kicker: Questão 3 · resposta
title: Alternativa <span class="accent2">c</span>
---

<Callout tone="good" icon="lucide:check">
<strong>c)</strong> Dezessete anos no idoso contra três nos jovens (Laks, 2009). É por isso que a virada tardia surpreende: o paciente passou décadas classificado como unipolar.
</Callout>

- **a)** é a crença que Almeida e Fenner (2002) desfizeram: se a associação fosse tão forte, a mania em idosos seria bem mais frequente
- **b)** contraria Martino et al. (2008): mesmo em eutimia há lentificação e prejuízo de memória verbal e de funções executivas
- **d)** o efeito do lítio é pequeno e circunscrito (Wingo et al., 2009). Verifique antes litemia, função tireoidiana e o humor

<!--
Sobre a d, complemente com a orientação de Honig e colaboradores (1999): se litemia, tireoide e humor estiverem dentro dos limites e a queixa persistir, aí sim discute-se redução de dose ou troca de estabilizador — decisão médica, não nossa. O nosso papel é documentar o perfil e sinalizar a hipótese.
-->

---
layout: statement
kicker: Intervalo
title: Quinze minutos.
---

<!--
Peça que voltem no horário: a segunda metade tem um bloco curto e uma atividade em grupo que precisa de tempo. Se alguém quiser conversar sobre caso próprio, este é o momento — não durante a dinâmica.
-->

---
layout: section
index: "03"
kicker: Parte três
title: Transtornos psicóticos
subtitle: Esquizofrenia, início tardio e o diferencial com o transtorno neurocognitivo
---

---
layout: define
kicker: A família
term: Transtornos psicóticos
definition: Quadros definidos por perda de contato com a realidade compartilhada,
  expressa em cinco domínios sintomáticos — dos quais <em>delírio</em>,
  <em>alucinação</em> e <em>discurso desorganizado</em> são os nucleares.
points:
  - "Delírios: crenças fixas, não corrigíveis por evidência contrária"
  - "Alucinações: percepções sem objeto, vívidas e involuntárias"
  - "Discurso desorganizado: descarrilamento, incoerência"
  - "Comportamento amplamente desorganizado ou catatônico"
  - "Sintomas negativos: expressão emocional diminuída, avolição, alogia"
  - "No idoso, a maior parte dos quadros psicóticos NÃO é esquizofrenia — é secundária"
---

<!--
O último ponto reorienta o bloco inteiro. Depois dos 60, sintomas psicóticos aparecem com muito mais frequência em doença de Alzheimer, doença de Parkinson, demência com corpos de Lewy, delirium, alterações metabólicas e efeito de fármacos do que em esquizofrenia primária. A pergunta clínica quase nunca é "que tipo de esquizofrenia é" — é "o que está causando essa psicose".
-->

---
layout: bigtype
kicker: O quadro do bloco
title: Esquizofrenia
subtitle: Kraepelin a chamou de demência precoce; a literatura neuropsicológica contemporânea mostra alterações estáticas, e não degenerativas.
---

<!--
A tensão do bloco está nessa frase. O legado do nome "demência precoce" aponta para condição neurodegenerativa; os estudos que vamos ver indicam comprometimento de neurodesenvolvimento, com perfil que não progride como o da doença de Alzheimer.
-->

---
layout: columns
kicker: Caracterização do quadro
title: Esquizofrenia — o que o diagnóstico exige
columns:
  - title: "Sintomas e duração"
    items:
      - "Dois ou mais sintomas do critério A, por porção significativa de um mês"
      - "Ao menos um deles precisa ser delírio, alucinação ou discurso desorganizado"
      - "Sinais contínuos por pelo menos 6 meses, incluindo 1 mês de fase ativa"
      - "O período de 6 meses pode incluir fases prodrômica e residual"
  - title: "Prejuízo e exclusões"
    items:
      - "Declínio acentuado em trabalho, relações ou autocuidado"
      - "Excluídos transtorno esquizoafetivo e transtornos do humor com sintomas psicóticos"
      - "Não atribuível a substância, medicamento ou outra condição médica"
      - "Se há transtorno do neurodesenvolvimento, exige-se 1 mês de delírio ou alucinação proeminentes"
  - title: "O que mudou do DSM-IV-TR"
    items:
      - "Caiu a regra que permitia diagnóstico com um único sintoma quando o delírio era bizarro"
      - "Agora são sempre necessários dois sintomas do critério A"
      - "Os subtipos (paranoide, desorganizado, catatônico) foram eliminados"
      - "Síntese parafraseada do DSM-5-TR — a redação oficial é da APA"
---

<!--
Síntese parafraseada do DSM-5-TR conforme Hany e Rizvi (StatPearls, 2024). A terceira coluna importa porque o capítulo de referência reproduz o Quadro 6.4 com os critérios do DSM-IV-TR, e a turma vai ler aquele quadro. Diga explicitamente onde a versão do livro está desatualizada — os subtipos saíram porque não tinham estabilidade ao longo do tempo nem valor preditivo de resposta ao tratamento.
-->

---
layout: image
side: left
image: /linha-tempo-inicio.svg
alt: Linha do tempo comparando a idade de início da esquizofrenia, do transtorno
  bipolar, da depressão e do transtorno neurocognitivo
kicker: Especificidades no idoso · nomenclatura
title: Precoce, tardio e <em>muito</em> tardio
---

O consenso internacional de Howard, Rabins, Seeman e Jeste (2000) fixou dois cortes que a literatura passou a usar.

- **Esquizofrenia de início tardio** — após os 40 anos
- **Psicose esquizofreniforme de início muito tardio** — após os 60 anos
- Bleuler (1978) já dividia em precoce e tardio, com corte aos 40

<Callout icon="lucide:target">
Os cortes são convenção operacional, não fronteira biológica. Servem para tornar comparáveis estudos que antes misturavam populações muito diferentes.
</Callout>

<!--
A figura existe para mostrar a faixa em que os quatro quadros se sobrepõem — dos 60 anos em diante. É nessa faixa que o diferencial deixa de ser exercício acadêmico. Um paciente de 68 anos com delírio persecutório pode estar abrindo psicose muito tardia, pode estar no pródromo de uma demência, pode ter mania com sintomas psicóticos ou depressão psicótica. Os quatro caminhos levam a condutas diferentes.
-->

---
layout: stats
kicker: Especificidades no idoso · epidemiologia
title: A esquizofrenia depois dos 60, em números
columns: 3
stats:
  - {
      value: "0,71",
      unit: "%",
      label: "de prevalência em um ano para todo o espectro em maiores de 60 anos, em área de captação em Amsterdã (Meesters et al., 2010)",
      icon: "lucide:users",
      tone: "info"
    }
  - {
      value: "0,05",
      unit: "%",
      label: "cabe especificamente à psicose esquizofreniforme de início muito tardio — contra 0,35% de início precoce",
      icon: "lucide:calendar-clock",
      tone: "info"
    }
  - {
      value: "7,5",
      unit: "/100 mil",
      label: "de incidência anual de esquizofrenia após os 65 anos, em meta-análise de 41 estudos (Stafford et al., 2017)",
      icon: "lucide:trending-up",
      tone: "warn"
    }
---

<!--
O contraste entre a primeira e a segunda barra é o dado a fixar: a maior parte dos idosos com esquizofrenia envelheceu com a doença, não a adquiriu tarde. Isso muda o que esperamos encontrar — décadas de tratamento, de institucionalização e de exposição a antipsicóticos, todas variáveis que entram na interpretação do desempenho. E note que a prevalência em idosos está dentro da faixa relatada para populações mais jovens.
-->

---
layout: panels
kicker: Especificidades no idoso
title: O que caracteriza os quadros de início tardio
panels:
  - {
      icon: "lucide:venus",
      title: "Distribuição",
      items: ["Predomínio feminino marcado nos quadros de início tardio", "Após os 45 anos, novos diagnósticos são mais frequentes em mulheres", "Menor participação de fatores genéticos que no início precoce"]
    }
  - {
      icon: "lucide:layers-3",
      title: "Dois subgrupos",
      items: ["Tipo A: sintomas psicóticos mais floridos, alterações compatíveis apenas com disfunção frontal", "Tipo B: sintomas menos floridos, mais sinais neurológicos, comprometimento cognitivo generalizado (Almeida et al., 1995)"]
    }
  - {
      icon: "lucide:ear-off",
      title: "Fatores associados",
      items: ["Isolamento social, ausência de parceiro ou de filhos", "Menor renda", "Condição de migrante (Stafford et al., 2018)"]
    }
  - {
      icon: "lucide:search",
      title: "O diferencial obrigatório",
      items: ["Hipertireoidismo, deficiência de B12, neurossífilis", "Delirium, epilepsia, tumor, neurocisticercose", "Delírio somático de parasitose associado a doença clínica (síndrome de Ekbom)"]
    }
---

<!--
O terceiro painel merece um comentário: os fatores associados são majoritariamente sociais, não biológicos. Isolamento e privação sensorial aparecem de forma consistente na literatura de psicose muito tardia. Isso tem consequência prática direta — parte do manejo é social, não farmacológico, e o relatório neuropsicológico pode e deve registrar essas condições.
-->

---
layout: columns
kicker: Alterações cognitivas esperadas
title: O perfil da esquizofrenia é <em>estático</em>
columns:
  - title: "Domínios afetados"
    items:
      - "Funções executivas — o domínio mais comprometido"
      - "Memória episódica verbal e visual"
      - "Velocidade de processamento"
      - "Atenção sustentada"
      - "Cognição social"
  - title: "O padrão e o curso"
    items:
      - "Mocker, Riordan e Sharma (1997): ausência de deterioração associada à faixa etária"
      - "Harvey (2001): há comprometimento em esquizofrenia crônica, mas o declínio não é o da doença de Alzheimer"
      - "Sachdev et al. (1999): prejuízo executivo e de memória frente a saudáveis, sem diferença entre início precoce e tardio"
  - title: "O que isso significa"
    items:
      - "Palmer et al. (2003): grupo psicótico se assemelha a voluntários sadios e difere do grupo com demência"
      - "Alterações estáticas, diferentes da neurodegeneração demencial"
      - "Reforça a hipótese de comprometimento de neurodesenvolvimento (Heyman e Murray, 1992)"
---

<!--
Esta é a conclusão que mais surpreende a turma: a esquizofrenia crônica compromete a cognição, mas o desempenho não desaba com a idade como desabaria numa demência. A implicação prática é sobre a linha de base — para interpretar o desempenho de um idoso com esquizofrenia de longa data, precisamos saber como ele funcionava antes, e não comparar ao normativo geral e concluir demência.
-->

---
layout: vs
kicker: Diagnóstico diferencial
title: Psicose tardia × sintomas psicóticos no transtorno neurocognitivo
label: "×"
left:
  title: "Psicose de início tardio ou muito tardio"
  items:
    - "Delírio estruturado, sistematizado, frequentemente persecutório"
    - "Mais alteração em memória de curto prazo"
    - "Funcionalidade preservada fora do âmbito do delírio"
    - "Perfil cognitivo estático ao longo do seguimento"
    - "Sem sinais de neurodegeneração à neuroimagem"
right:
  title: "Sintomas psicóticos no transtorno neurocognitivo"
  items:
    - "Delírio pouco estruturado, mutável, frequentemente de roubo ou de intrusão"
    - "Mais alteração em evocação tardia"
    - "Declínio funcional global, precedendo ou acompanhando a psicose"
    - "Perfil cognitivo progressivo"
    - "Atrofia ou lesão compatível à neuroimagem"
---

<!--
Lagodka e Robert (2009), em revisão, encontraram que psicose tardia e psicose muito tardia não diferem entre si em termos neuropsicológicos, mas diferem da doença de Alzheimer: a psicose tardia cursa com mais alteração em memória de curto prazo, e a doença de Alzheimer com mais alteração na evocação tardia. Acrescente a ressalva: uma parte dos pacientes com psicose tardia evoluiu para demência ao longo de dez anos de observação, o que mantém a questão aberta.
-->

---
layout: default
kicker: O efeito dos fármacos
title: Antipsicóticos e o desempenho em testes
---

<Grid :data="[['Evidência', 'O que foi encontrado', 'O que fazer com isso'], ['CATIE-AD — ensaio randomizado com 421 pacientes com doença de Alzheimer e psicose ou agitação (Vigen et al., 2011)', 'Olanzapina, quetiapina e risperidona associaram-se a piora cognitiva de magnitude equivalente a um ano de deterioração, frente a placebo, em 36 semanas', 'Em idoso com demência sob antipsicótico, parte do declínio observado entre duas avaliações pode ser do fármaco — registre dose e data de início'], ['Meta-análise em rede de 54 ensaios, 5.866 pacientes com transtornos psicóticos (Baldez et al., 2021)', 'O efeito varia muito entre fármacos: haloperidol ficou em último lugar em todos os domínios; clozapina teve pior desempenho em executivo e aprendizagem verbal', 'Não existe um efeito único de antipsicótico. Anote qual, não a classe'], ['Revisão sistemática de psicotrópicos em idosos (Chandramouleeshwaran et al., 2023)', 'Antipsicóticos e combinações de psicotrópicos associam-se a declínio cognitivo em idosos', 'Polifarmácia psicotrópica é variável de confusão maior que a maioria das que controlamos']]" head highlight="row:2" />

<!--
A linha destacada é o achado que mais surpreende, porque vem de um ensaio randomizado e não de estudo observacional. Isso não significa que o antipsicótico não deva ser prescrito — significa que o efeito cognitivo é um risco adicional a ser pesado, e que nós, ao comparar duas avaliações, temos de saber o que mudou na prescrição entre elas. Sem essa informação, a curva que interpretamos como progressão pode ser farmacológica.
-->

---
layout: default
kicker: Questão 4 · transtornos psicóticos
title: Homem de 68 anos, sem história psiquiátrica prévia
---

Há oito meses desenvolveu delírio persecutório estruturado envolvendo os vizinhos, com alucinações auditivas. Memória preservada, sem declínio funcional além do decorrente do delírio. Qual leitura é a correta?

- **a)** Trata-se de psicose esquizofreniforme de início muito tardio; a avaliação documenta o perfil e permite monitorar progressão
- **b)** O diagnóstico mais provável é transtorno neurocognitivo maior, pois psicose que se inicia após os 60 anos é sempre demencial
- **c)** Como a esquizofrenia se inicia na adolescência, o quadro não pode pertencer ao espectro esquizofrênico
- **d)** Antipsicóticos não interferem no desempenho em testes, então a avaliação pode ser feita a qualquer momento

<!--
Dê noventa segundos. Antes de revelar, pergunte quem marcou b — é a resposta mais defensável entre as erradas, e discutir por que ela é insuficiente vale mais que anunciar a certa.
-->

---
layout: default
kicker: Questão 4 · resposta
title: Alternativa <span class="accent2">a</span>
---

<Callout tone="good" icon="lucide:check">
<strong>a)</strong> Início após os 60, delírio estruturado, cognição e funcionalidade preservadas: é a descrição da psicose esquizofreniforme de início muito tardio (Howard et al., 2000).
</Callout>

- **b)** exagera uma preocupação legítima: parte converte, e o seguimento é obrigatório — mas memória e funcionalidade estão preservadas
- **c)** ignora o consenso internacional, que reconheceu formalmente as categorias de início tardio (após 40) e muito tardio (após 60)
- **d)** contraria o CATIE-AD e a meta-análise de Baldez: o efeito existe, varia por fármaco e precisa ser registrado no laudo

<!--
Feche o bloco com a conduta: nesse caso o pedido de avaliação neuropsicológica não é para "confirmar demência" — é para estabelecer linha de base. Sem linha de base, a reavaliação daqui a um ano não tem com o que comparar, e a pergunta sobre progressão fica sem resposta.
-->

---
layout: section
index: "04"
kicker: Parte quatro
title: A Escala de Depressão Geriátrica
subtitle: O que a GDS-15 mede, como se aplica, como se corrige e onde ela falha
---

---
layout: define
kicker: O instrumento
term: Escala de Depressão Geriátrica
definition: Instrumento de <em>rastreio</em> de sintomas depressivos em idosos,
  com resposta dicotômica e itens formulados para evitar a esfera das queixas
  somáticas.
points:
  - "Descrita por Yesavage et al. (1983), com 30 itens"
  - "A versão de 15 itens foi elaborada por Sheikh e Yesavage (1986) a partir dos itens que mais se correlacionavam com o diagnóstico"
  - "Perguntas fáceis de entender, pouca variação nas respostas possíveis"
  - "Pode ser autoaplicada ou aplicada por entrevistador treinado"
  - "Uso livre — o que permite reproduzi-la na ficha impressa que vocês vão usar hoje"
---

<!--
Distribua a ficha impressa agora, antes de detalhar. Deixe que folheiem enquanto você fala: eles vão acompanhar melhor a discussão dos itens com o papel na mão. Avise que a dinâmica no fim da aula usa essa mesma folha.
-->

---
layout: vs
kicker: Antes de qualquer coisa
title: O que a escala mede × o que ela não mede
label: "×"
left:
  title: "Mede"
  items:
    - "Intensidade de sintomas depressivos autorrelatados"
    - "Humor, satisfação com a vida e autoavaliação"
    - "Retraimento e abandono de atividades"
    - "Desesperança e comparação social desfavorável"
    - "Uma probabilidade — a de que valha a pena investigar"
right:
  title: "Não mede"
  items:
    - "Diagnóstico de episódio depressivo maior"
    - "Gravidade clínica ou risco de suicídio"
    - "Presença ou ausência de transtorno neurocognitivo"
    - "Resposta ao tratamento, isoladamente"
    - "Sintomas somáticos — e isso é intencional"
---

<!--
A última linha das duas colunas é o eixo do bloco. Do lado esquerdo, a escala entrega uma probabilidade, não um diagnóstico; do lado direito, a ausência de itens somáticos é escolha de projeto, não omissão. Os dois pontos voltam nos slides de interpretação e de limites.
-->

---
layout: image
side: right
image: /gds-itens-somaticos.svg
alt: Comparação entre os itens somáticos que a GDS deixou de fora e o que a
  GDS-15 efetivamente pergunta
kicker: Por que existe escala específica para o idoso
title: O problema dos itens somáticos
---

Inventários de depressão para adultos pontuam insônia, perda de apetite, perda de peso e fadiga.

- No idoso, esses sintomas têm **várias causas simultâneas** — e quase nunca só o humor
- Um instrumento que os pontue produz falso-positivo sistemático nessa faixa etária
- A GDS foi construída com perguntas que **evitam** a esfera somática

<Callout tone="warn" icon="lucide:eye">
Dois itens sobreviveram assim mesmo: energia (item 13) e memória (item 10). São os dois a interpretar com mais cautela.
</Callout>

<!--
O item 10 é o mais interessante para nós: "acha que tem mais problemas de memória que outras pessoas?". Ele pontua igual em quem está deprimido e em quem tem déficit cognitivo verdadeiro. Numa amostra de memory clinic, esse item sozinho puxa o escore para cima e ajuda a explicar por que a acurácia da escala cai quando há comprometimento cognitivo — assunto de dois slides adiante.
-->

---
layout: timeline
kicker: As versões
title: Da GDS-30 à GDS-15 — e às versões ainda mais curtas
events:
  - {
      date: "1983",
      title: "GDS-30",
      desc: "Yesavage e colaboradores descrevem a escala original, com 30 itens, desenvolvida especificamente para rastreio de transtornos do humor em idosos"
    }
  - {
      date: "1986",
      title: "GDS-15",
      desc: "Sheikh e Yesavage reduzem a escala aos itens de maior correlação com o diagnóstico, com sensibilidade, especificidade e confiabilidade adequadas"
    }
  - {
      date: "1999",
      title: "Validação brasileira",
      desc: "Almeida e Almeida estudam a validade das versões curtas em 64 idosos de ambulatório psiquiátrico em São Paulo, contra critérios da CID-10 e do DSM-IV"
    }
  - {
      date: "2005",
      title: "Ambulatório geral",
      desc: "Paradela, Lourenço e Veras replicam o estudo em 302 idosos de policlínica no Rio de Janeiro — o cenário mais próximo do serviço público brasileiro"
    }
---

<!--
Sobre a GDS-4, que às vezes aparece como rastreio ultrabreve: Almeida e Almeida publicaram dois artigos em 1999, e é preciso distinguir. O de validade, no International Journal of Geriatric Psychiatry, traz os pontos de corte. O de confiabilidade, nos Arquivos de Neuro-Psiquiatria, testou o reteste em 48 a 72 horas e concluiu que as versões de 1 e de 4 itens são inconfiáveis para a prática clínica, enquanto as de 10 e 15 produzem resultados consistentes. Ou seja: a GDS-4 existe, mas não a use para decisão clínica individual.
-->

---
layout: steps
kicker: Aplicação
title: Como se aplica
steps:
  - {
      icon: "lucide:user-check",
      title: "Escolha a forma de aplicação",
      desc: "Autoaplicação exige leitura fluente e visão corrigida. Na dúvida, heteroaplique — na população que atendemos, a heteroaplicação é o padrão"
    }
  - {
      icon: "lucide:door-closed",
      title: "Aplique com o idoso sozinho",
      desc: "Paradela et al. pediam que o acompanhante saísse da sala, justamente para evitar interferência e modificação das respostas"
    }
  - {
      icon: "lucide:message-square",
      title: "Leia a pergunta como está escrita",
      desc: "Se não for compreendida, repita mais devagar — sem interpretar nem parafrasear as palavras. Até três tentativas por item"
    }
  - {
      icon: "lucide:timer",
      title: "Reserve o tempo necessário",
      desc: "⚠︎ verificar — não localizei fonte primária citável para o tempo médio de aplicação da GDS-15. Na prática, poucos minutos"
    }
  - {
      icon: "lucide:calendar",
      title: "Ancore no período",
      desc: "As perguntas se referem à última semana. Diga isso ao paciente antes de começar, e repita se ele derivar para o passado remoto"
    }
---

<!--
O segundo passo costuma ser ignorado e é o que mais contamina o resultado. Filho ou cuidador presente responde no lugar, corrige, minimiza ou dramatiza. Se não houver como afastar o acompanhante, registre isso no laudo como limitação da aplicação.
-->

---
layout: panels
kicker: Aplicação
title: O que invalida — ou compromete — a aplicação
panels:
  - {
      icon: "lucide:ear-off",
      title: "Déficit sensorial não corrigido",
      items: ["Critério de exclusão explícito em Paradela et al. (2005)", "Deficiência auditiva leve ou aparelho bem adaptado não impedem", "Visão é pré-requisito apenas na autoaplicação"]
    }
  - {
      icon: "lucide:brain-circuit",
      title: "Comprometimento cognitivo importante",
      items: ["Almeida e Almeida excluíram MEEM abaixo de 10", "Paradela excluiu estágios avançados de distúrbio cognitivo", "Grau leve a moderado não impede — mas muda a interpretação"]
    }
  - {
      icon: "lucide:languages",
      title: "Barreira de compreensão",
      items: ["Afasia", "Quadro confusional agudo em curso", "Item não compreendido após três tentativas"]
    }
  - {
      icon: "lucide:user-x",
      title: "Recusa e omissão",
      items: ["Item recusado não deve ser inferido nem preenchido pelo avaliador", "Registre quantos itens ficaram sem resposta", "Escore incompleto perde comparabilidade com o ponto de corte"]
    }
---

<!--
No estudo de Paradela, um único idoso recusou-se a responder a uma pergunta e foi excluído da amostra — mas recebeu consulta médica e os encaminhamentos necessários. Vale o comentário ético: rastreio incompleto não anula a responsabilidade clínica de quem aplicou. Se o idoso não terminou a escala mas disse algo preocupante no meio dela, isso vai para o relatório.
-->

---
layout: default
kicker: Correção
title: A chave de pontuação
---

<Grid :data="[['Itens', 'Redação', 'Pontua 1 ponto quando a resposta é'], ['1, 5, 7, 11, 12, 13, 14', 'Perguntas em sentido positivo — satisfação, bem-estar, alegria, valor de viver, energia, esperança', '<strong>NÃO</strong>'], ['2, 3, 4, 6, 8, 9, 10, 15', 'Perguntas em sentido negativo — abandono de atividades, vazio, aborrecimento, medo, desamparo, retraimento, queixa de memória, comparação', '<strong>SIM</strong>'], ['Total', 'Soma simples, sem pesos', 'Escore de 0 a 15']]" head highlight="row:4" />

<Callout icon="lucide:printer">
Na ficha impressa, a coluna sombreada é sempre a que pontua. Basta contar quantas marcações caíram nela.
</Callout>

<!--
Chame atenção para o desenho da folha: a alternância entre itens de sentido positivo e negativo não é decorativa. Serve para quebrar o padrão de resposta automática — o idoso que responde "sim" a tudo produz um escore intermediário, não máximo, e o padrão fica visível para quem aplicou. Peça que confiram isso na folha antes de seguir.
-->

---
layout: stats
kicker: Interpretação
title: O ponto de corte
columns: 3
stats:
  - {
      value: "5/6",
      unit: "",
      label: "o ponto de corte adotado: escore de 6 ou mais é rastreamento positivo (Paradela, Lourenço e Veras, 2005)",
      icon: "lucide:scissors",
      tone: "info"
    }
  - {
      value: "0,85",
      unit: "",
      label: "área sob a curva ROC nesse ponto de corte, IC 95% de 0,79 a 0,91, em 302 idosos de ambulatório geral no Rio de Janeiro",
      icon: "lucide:chart-line",
      tone: "good"
    }
  - {
      value: "16,9",
      unit: "%",
      label: "de transtorno de humor naquela amostra: 5,3% de depressão maior e 11,6% de distimia, por entrevista estruturada",
      icon: "lucide:users",
      tone: "warn"
    }
---

<!--
Diga por que 5/6 e não 6/7. No estudo de Paradela, o melhor equilíbrio entre sensibilidade e especificidade estava em 6/7 — e mesmo assim os autores recomendaram 5/6, privilegiando sensibilidade. A justificativa é de organização de serviço: em sistema hierarquizado, é preferível que mais portadores da condição avancem para o nível especializado, ainda que ao custo de alguns falso-positivos. O ponto de corte é decisão clínica e de serviço, não propriedade fixa da escala.
-->

---
layout: chart
kicker: Interpretação
title: O que se ganha e o que se perde em cada corte
note: "Paradela, Lourenço e Veras (2005), Tabela 2 — 302 idosos de ambulatório
  geral, Rio de Janeiro. Diagnóstico de referência: entrevista de geriatra com
  apoio da SCID-I, critérios do DSM-IV, cego ao resultado da escala."
chart:
  type: bar
  unit: "%"
  height: "320px"
  categories: ["Corte 4/5", "Corte 5/6", "Corte 6/7"]
  series:
    - name: "Sensibilidade"
      data: [86.5, 81.1, 73.0]
    - name: "Especificidade"
      data: [63.3, 71.1, 78.3]
---

<!--
As duas linhas se cruzam: toda sensibilidade ganha é especificidade perdida. Peça que decidam, em voz alta, qual corte usariam numa UBS e qual usariam num ambulatório de neuropsicologia com fila de espera de seis meses — e que justifiquem. Não há resposta certa; há decisão explicitada. É isso que precisa constar no laudo.
-->

---
layout: panels
kicker: Limites
title: O que a escala não autoriza concluir
panels:
  - {
      icon: "lucide:file-x",
      title: "Não é instrumento diagnóstico",
      items: ["Escore acima do corte indica investigar, não diagnosticar", "O diagnóstico exige entrevista clínica contra critérios", "Nos estudos de validação, o padrão de referência é sempre a entrevista"]
    }
  - {
      icon: "lucide:trending-down",
      title: "A acurácia é boa, mas não é alta",
      items: ["Meta-análise de 31 estudos, 8.897 idosos: sensibilidade 0,80 e especificidade 0,79, AUC 0,89 (Park, 2020)", "Um em cada cinco casos escapa"]
    }
  - {
      icon: "lucide:brain",
      title: "Cai com déficit cognitivo",
      items: ["A mesma meta-análise: sensibilidade e especificidade menores em idosos com comprometimento cognitivo", "Burke et al. (1989): na doença de Alzheimer leve, AUC de 0,66 — não diferente do acaso"]
    }
  - {
      icon: "lucide:ruler",
      title: "Não é medida de gravidade",
      items: ["A faixa impressa na ficha (0–5, 6–10, 11–15) é convenção de uso", "⚠︎ verificar: não localizei estudo de validação brasileiro para essa graduação em três faixas"]
    }
---

<!--
O último painel exige honestidade com a turma. A ficha que circula no Brasil traz a interpretação em três faixas, e é assim que muita gente usa. Mas o que os estudos de validação testaram foi o ponto de corte binário, não a graduação. Ensine a usar o corte para decidir conduta e a tratar a faixa como descrição aproximada da intensidade — nunca como estadiamento.
-->

---
layout: steps
kicker: Limites
title: Quando o idoso tem comprometimento cognitivo
steps:
  - {
      icon: "lucide:gauge",
      title: "Grau leve a moderado: pode aplicar",
      desc: "Estudo com 24.674 idosos americanos não encontrou viés relevante da GDS-15 nos grupos com comprometimento questionável, leve ou moderado (Bennett et al., 2024)"
    }
  - {
      icon: "lucide:octagon-x",
      title: "Grau grave: não use",
      desc: "No mesmo estudo, o grupo com comprometimento grave respondeu de forma inconsistente, com viés de tamanho de efeito pequeno a médio"
    }
  - {
      icon: "lucide:users",
      title: "Troque de instrumento",
      desc: "Na demência, a Cornell Scale for Depression in Dementia é a escala com mais evidência: combina observação direta e entrevista com informante (Goodarzi et al., 2017; Atchison et al., 2024)"
    }
  - {
      icon: "lucide:notebook-pen",
      title: "Registre o que sustentou a escolha",
      desc: "Escreva no laudo o instrumento usado, o motivo da escolha e o grau de comprometimento cognitivo do avaliado. É isso que torna o escore interpretável por quem ler depois"
    }
---

<!--
Este é o slide mais aplicável da aula ao estágio deles. A pergunta "posso aplicar a GDS neste paciente?" tem resposta operacional: até comprometimento moderado, sim, com cautela na leitura do item 10; em comprometimento grave, não — vá para a Cornell, que não depende do autorrelato. E em qualquer caso, o laudo diz por quê.
-->

---
layout: statement
kicker: Dinâmica
title: Três vinhetas. Pontuem a GDS-15 na ficha, decidam a conduta e justifiquem em uma frase.
---

<!--
Organize grupos de quatro a cinco. Quinze minutos para as três vinhetas, cinco minutos de discussão por vinheta no gabarito. Peça que anotem o escore na folha impressa, e não só mentalmente: a discussão fica muito melhor quando há um número escrito para defender. Avise que os três casos têm armadilhas diferentes.
-->

---
layout: default
kicker: Vinheta 1
aside: "vinheta clínica"
title: Dona Ivone, 71 anos, viúva há oito meses
---

Três anos de escolaridade, hipertensa, sem outras comorbidades. Encaminhada pela equipe da UBS por "desânimo". MEEM 27.

<Grid :data="[['Item', 'Resposta', 'Item', 'Resposta'], ['1. Satisfeita com a vida?', 'Não', '9. Prefere ficar em casa?', 'Não'], ['2. Interrompeu atividades?', 'Sim', '10. Mais problemas de memória?', 'Não'], ['3. Acha a vida vazia?', 'Sim', '11. Maravilhoso estar viva?', 'Sim'], ['4. Aborrece-se com frequência?', 'Sim', '12. Vale a pena viver assim?', 'Sim'], ['5. De bem com a vida?', 'Sim', '13. Cheia de energia?', 'Não'], ['6. Teme que algo ruim aconteça?', 'Sim', '14. Situação tem solução?', 'Sim'], ['7. Alegre a maior parte do tempo?', 'Não', '15. Muita gente em situação melhor?', 'Sim'], ['8. Sente-se desamparada?', 'Sim', '', '']]" head />

<!--
Deixe que contem. Se algum grupo perguntar sobre o luto, não responda ainda — é exatamente o ponto do gabarito. Circule pelos grupos e observe se alguém está pontuando pelo sentido literal da resposta em vez de pela coluna que pontua; é o erro de correção mais comum.
-->

---
layout: default
kicker: Vinheta 2
aside: "vinheta clínica"
title: Sr. Aparecido, 79 anos, DPOC e insuficiência cardíaca
---

Oito anos de escolaridade, casado, mora com a esposa. Encaminhado pela pneumologia por "possível depressão". Dispneia aos mínimos esforços. MEEM 28.

<Grid :data="[['Item', 'Resposta', 'Item', 'Resposta'], ['1. Satisfeito com a vida?', 'Sim', '9. Prefere ficar em casa?', 'Sim'], ['2. Interrompeu atividades?', 'Sim', '10. Mais problemas de memória?', 'Não'], ['3. Acha a vida vazia?', 'Não', '11. Maravilhoso estar vivo?', 'Sim'], ['4. Aborrece-se com frequência?', 'Não', '12. Vale a pena viver assim?', 'Sim'], ['5. De bem com a vida?', 'Sim', '13. Cheio de energia?', 'Não'], ['6. Teme que algo ruim aconteça?', 'Não', '14. Situação tem solução?', 'Sim'], ['7. Alegre a maior parte do tempo?', 'Sim', '15. Muita gente em situação melhor?', 'Sim'], ['8. Sente-se desamparado?', 'Não', '', '']]" head />

<!--
Este é o caso que testa se entenderam para que serve o desenho da escala. O escore vai dar baixo, e a pergunta interessante é: o rastreio negativo encerra a investigação? Deixe a pergunta no ar até o gabarito.
-->

---
layout: default
kicker: Vinheta 3
aside: "vinheta clínica"
title: Dona Terezinha, 83 anos, transtorno neurocognitivo maior
---

Dois anos de escolaridade, mora com a filha. MEEM 19, com diagnóstico de doença de Alzheimer há dois anos. A filha relata apatia, choro fácil e recusa alimentar. Heteroaplicação; em duas perguntas a resposta mudou quando repetida.

<Grid :data="[['Item', 'Resposta', 'Item', 'Resposta'], ['1. Satisfeita com a vida?', 'Não', '9. Prefere ficar em casa?', 'Sim'], ['2. Interrompeu atividades?', 'Sim', '10. Mais problemas de memória?', 'Sim'], ['3. Acha a vida vazia?', 'Não sabe', '11. Maravilhoso estar viva?', 'Sim'], ['4. Aborrece-se com frequência?', 'Sim', '12. Vale a pena viver assim?', 'Sim'], ['5. De bem com a vida?', 'Sim', '13. Cheia de energia?', 'Não'], ['6. Teme que algo ruim aconteça?', 'Não', '14. Situação tem solução?', 'Não'], ['7. Alegre a maior parte do tempo?', 'Sim', '15. Muita gente em situação melhor?', 'Não sabe'], ['8. Sente-se desamparada?', 'Sim', '', '']]" head />

<!--
Aqui há dois itens sem resposta e duas respostas que mudaram na repetição. Alguns grupos vão inventar um valor para completar; é justamente o que não se deve fazer. Observe quem faz isso e traga no gabarito, sem constranger ninguém.
-->

---
layout: columns
kicker: Gabarito · vinheta 1
title: Dona Ivone — escore <span class="accent2">8</span>
columns:
  - title: "O escore"
    items:
      - "Pontuam os itens 1, 2, 3, 4, 6, 7, 8 e 13"
      - "Total 8 — acima do corte 5/6"
      - "Rastreamento positivo"
  - title: "A armadilha é o luto"
    items:
      - "Viúva há oito meses, com escore alto"
      - "Muitos concluiriam: é luto, não é depressão"
      - "O DSM-5 retirou a exclusão por luto que existia no DSM-IV-TR"
      - "Luto e episódio depressivo maior podem coexistir"
  - title: "Conduta"
    items:
      - "Encaminhar para avaliação diagnóstica"
      - "Não descartar por causa da perda recente"
      - "A GDS não tem item de ideação suicida — isso se pergunta na entrevista"
---

<!--
O último ponto é o mais importante da vinheta e vale para toda escala de rastreio: a GDS-15 não tem item de ideação suicida. Um escore alto não informa risco, e um escore baixo não o descarta. Risco se investiga perguntando diretamente, na entrevista — e isso é conteúdo de estágio supervisionado, não de escala.
-->

---
layout: columns
kicker: Gabarito · vinheta 2
title: Sr. Aparecido — escore <span class="accent2">4</span>
columns:
  - title: "O escore"
    items:
      - "Pontuam os itens 2, 9, 13 e 15"
      - "Total 4 — abaixo do corte 5/6"
      - "Rastreamento negativo"
  - title: "A escala funcionou como projetada"
    items:
      - "Abandono de atividades, retraimento e falta de energia têm explicação cardiorrespiratória"
      - "Se o instrumento pontuasse sono, apetite e dispneia, ele atingiria o corte"
      - "Seria falso-positivo por doença clínica"
  - title: "Conduta"
    items:
      - "Rastreio negativo reduz a probabilidade; não a zera"
      - "Devolver à pneumologia com o escore e com a ressalva"
      - "Reavaliar se o quadro clínico mudar"
---

<!--
Retome aqui o quadro do bloco um sobre a relação entre depressão e doença clínico-cirúrgica. As duas direções valem: sintomas físicos de depressão mimetizam doença clínica, e sintomas de doença clínica mimetizam depressão. A GDS resolve o segundo problema, não o primeiro — é para isso que serve a entrevista.
-->

---
layout: panels
kicker: Gabarito · vinheta 3
title: Dona Terezinha — escore <span class="accent2">7</span>, não interpretável
panels:
  - {
      icon: "lucide:calculator",
      title: "O escore",
      items: ["Pontuam os itens 1, 2, 4, 8, 9, 10, 13 e 14", "Dois itens sem resposta; duas respostas mudaram na repetição", "Registre 7 pontos em 13 itens — e não invente o resto"]
    }
  - {
      icon: "lucide:shuffle",
      title: "Por que não é medida",
      items: ["Resposta que muda quando a pergunta se repete não é medida", "O item 10 pontuou por déficit real, não por autoavaliação depressiva"]
    }
  - {
      icon: "lucide:trending-down",
      title: "A acurácia já era baixa",
      items: ["Com MEEM 19, a GDS perde acurácia", "Burke et al. (1989): AUC de 0,66 na doença de Alzheimer leve — não diferente do acaso"]
    }
  - {
      icon: "lucide:replace",
      title: "Conduta",
      items: ["Trocar de instrumento: Cornell Scale for Depression in Dementia", "Usa observação direta e informante — e a filha já trouxe apatia, choro e recusa alimentar"]
    }
---

<!--
Feche a dinâmica com o ponto que atravessa as três vinhetas: em nenhuma delas o número decidiu a conduta sozinho. Na primeira, o contexto quase levou a descartar um positivo verdadeiro; na segunda, um negativo correto não encerrou a investigação; na terceira, o instrumento estava errado desde o início. É isso que separa aplicar uma escala de avaliar uma pessoa.
-->

---
layout: default
kicker: Questão 5 · GDS
title: Idosa de 74 anos, quatro anos de escolaridade, MEEM 26
---

Obtém 8 pontos na GDS-15, aplicada por entrevistador treinado, com o acompanhante fora da sala. Qual é a interpretação correta?

- **a)** O escore fecha o diagnóstico de episódio depressivo maior
- **b)** O escore está acima do ponto de corte 5/6: rastreamento positivo, que exige avaliação diagnóstica
- **c)** O escore está dentro da normalidade, já que o ponto de corte é 11
- **d)** A escala não pode ser usada, pois o MEEM de 26 indica comprometimento cognitivo incompatível com autorrelato

<!--
Última questão da noite. Sessenta segundos. É a mais direta das cinco de propósito — serve para verificar se o essencial do bloco ficou, não para diferenciar quem estudou mais.
-->

---
layout: default
kicker: Questão 5 · resposta
title: Alternativa <span class="accent2">b</span>
---

<Callout tone="good" icon="lucide:check">
<strong>b)</strong> Oito pontos superam o corte 5/6. Rastreamento positivo significa uma coisa só: investigar com entrevista clínica contra critérios diagnósticos.
</Callout>

- **a)** confunde rastreio com diagnóstico: em todo estudo de validação o padrão de referência é a entrevista, que a escala não substitui
- **c)** confunde o corte com o limite da faixa de "depressão leve" impressa na ficha. O corte validado é 5/6; 11 é outra coisa
- **d)** interpreta mal o MEEM: 26 com quatro anos de escolaridade não impede a aplicação, e déficit leve a moderado tampouco impede

<!--
A alternativa c é a que mais gente marca na prática profissional, não na prova — porque a ficha impressa mostra as três faixas em destaque e o ponto de corte não aparece nela. Peça que anotem o corte 5/6 na própria folha, agora, à caneta. É a intervenção mais útil que esta aula pode fazer no dia a dia deles.
-->

---
layout: default
kicker: Fechando
title: As três perguntas do começo
---

<Grid :data="[['A pergunta', 'O que a aula permite responder'], ['Quadros de início precoce comprometem mais a cognição que os de início tardio?', 'Não há consenso. Na esquizofrenia, Sachdev et al. (1999) e Palmer et al. (2003) não encontraram diferença entre início precoce e tardio. Na depressão e no bipolar, os dados divergem, e escolaridade, cronicidade e comorbidade confundem a comparação'], ['Os quadros tardios são manifestação precoce de processo demencial?', 'Em parte, e em uma parte dos casos. Depressão maior é fator de risco para demência vascular e para doença de Alzheimer; 33% dos casos ditos de pseudodemência converteram no seguimento. Mas a maioria não converte'], ['A neurobiologia do envelhecimento particulariza a apresentação neuropsicológica?', 'A hipótese com mais sustentação é a vascular: lesão de substância branca na alça frontoestriatal explica o perfil disexecutivo da depressão de início tardio. Fora dela, o campo permanece aberto']]" head />

<!--
Termine dizendo que "não há consenso" é uma resposta legítima e que reconhecê-la é parte do trabalho. O capítulo fecha exatamente assim: os estudos ainda são pouco conclusivos quanto à instalação tardia ou precoce, e deve-se repensar a noção de que esses quadros seriam apenas funcionais. Quem escreve laudo precisa saber onde a literatura é firme e onde ela não é — e escrever de acordo.
-->

---
layout: reference
kicker: Referências · 1 de 2
title: Base e transtornos de humor
groups:
  - title: "Base primária"
    items:
      - { term: "Nicolato, R. e Alvarenga, J. (2010)", desc: "Saúde mental e envelhecimento. In: Malloy-Diniz, L. F., Fuentes, D. e Cosenza, R. M. (orgs.). Neuropsicologia do envelhecimento: uma abordagem multidimensional. Porto Alegre: Artmed, p. 115-126" }
      - { term: "American Psychiatric Association (2022)", desc: "Diagnostic and Statistical Manual of Mental Disorders, 5th ed., Text Revision (DSM-5-TR). Critérios parafraseados a partir de NCBI Bookshelf NBK617010 (2024), Jain e Mitra (NBK558998, 2023) e Hany e Rizvi (NBK539864, 2024)" }
  - title: "Epidemiologia da depressão"
    items:
      - { term: "Beekman, A. T., Copeland, J. R. e Prince, M. J. (1999)", desc: "Review of community prevalence of depression in later life. British Journal of Psychiatry, 174, 307-311" }
      - { term: "Barcelos-Ferreira, R. et al. (2010)", desc: "Depressive morbidity and gender in community-dwelling Brazilian elderly: systematic review and meta-analysis. International Psychogeriatrics, 22(5), 712-726" }
      - { term: "Castro-Costa, E. et al. (2008)", desc: "Factors associated with depressive symptoms measured by the 12-item General Health Questionnaire in community-dwelling older adults (Bambuí Health Aging Study). Revista Brasileira de Psiquiatria, 30(2), 104-109" }
  - title: "Depressão, curso e diferencial"
    items:
      - { term: "Alexopoulos, G. S. et al. (1997)", desc: "Clinically defined vascular depression. American Journal of Psychiatry, 154(4), 562-565" }
      - { term: "Alexopoulos, G. S. (2005)", desc: "Depression in the elderly. Lancet, 365(9475), 1961-1970" }
      - { term: "Gallo, J. J. e Rabins, P. V. (1999)", desc: "Depression without sadness: alternative presentations of depression in late life. American Family Physician, 60(3), 820-826" }
      - { term: "Vilalta-Franch, J. et al. (2012)", desc: "Comprometimento frontal em depressão maior aferido pela CAMDEX, conforme citado em Nicolato e Alvarenga (2010)" }
      - { term: "Dotson, V. M., Beydoun, M. A. e Zonderman, A. B. (2010)", desc: "Recurrent depressive symptoms and the incidence of dementia and mild cognitive impairment. Neurology, 75(1), 27-34" }
      - { term: "Connors, M. H. et al. (2018)", desc: "Longitudinal outcomes of patients with pseudodementia: a systematic review. Psychological Medicine, 48(5), 1-11" }
      - { term: "Sáez-Fonseca, J. A. et al. (2007)", desc: "Long-term outcome of depressive pseudodementia in the elderly. European Psychiatry, 22, S1-S2" }
      - { term: "Mukku, S. et al. (2021)", desc: "Geriatric depression and cognitive impairment — an update. Indian Journal of Psychological Medicine, 43(4), 286-293" }
      - { term: "Brodaty, H. e Connors, M. H. (2020)", desc: "Pseudodementia, pseudo-pseudodementia, and pseudodepression. Alzheimer's & Dementia: DADM, 12(1), e12027" }
  - title: "Transtorno bipolar e fármacos"
    items:
      - { term: "Laks, J. (2009)", desc: "Diferenças clínicas do transtorno bipolar no idoso, conforme citado em Nicolato e Alvarenga (2010)" }
      - { term: "Almeida, O. P. e Fenner, S. (2002)", desc: "Bipolar disorder: similarities and differences between patients with illness onset before and after 65 years of age. International Psychogeriatrics, 14(3), 311-322" }
      - { term: "Martino, D. J. et al. (2008)", desc: "Comprometimento de memória verbal e de funções executivas em idosos bipolares eutímicos, conforme citado em Nicolato e Alvarenga (2010)" }
      - { term: "Kessing, L. V. e Nilsson, F. M. (2003)", desc: "Increased risk of developing dementia in patients with major affective disorders, conforme citado em Nicolato e Alvarenga (2010)" }
      - { term: "Wingo, A. P. et al. (2009)", desc: "Effects of lithium on cognitive performance: a meta-analysis. Journal of Clinical Psychiatry, 70(11), 1588-1597" }
      - { term: "Ruxton, K., Woodman, R. J. e Mangoni, A. A. (2015)", desc: "Drugs with anticholinergic effects and cognitive impairment, falls and all-cause mortality in older adults: a systematic review and meta-analysis. British Journal of Clinical Pharmacology, 80(2), 209-220" }
      - { term: "Taylor-Rowan, M. et al. (2022)", desc: "Anticholinergic burden for prediction of cognitive decline or neuropsychiatric symptoms in older adults with mild cognitive impairment or dementia. Cochrane Database of Systematic Reviews, 8, CD015196" }
---

<!--
Diga que a bibliografia está publicada junto com o deck e que o PDF baixável traz estas duas páginas. Para a prova, o que cai é o capítulo; o resto está aqui para quem for escrever trabalho de conclusão sobre o tema.
-->

---
layout: reference
kicker: Referências · 2 de 2
title: Transtornos psicóticos e a Escala de Depressão Geriátrica
groups:
  - title: "Transtornos psicóticos"
    items:
      - { term: "Howard, R., Rabins, P. V., Seeman, M. V. e Jeste, D. V. (2000)", desc: "Late-onset schizophrenia and very-late-onset schizophrenia-like psychosis: an international consensus. American Journal of Psychiatry, 157(2), 172-178" }
      - { term: "Meesters, P. D. et al. (2010)", desc: "Schizophrenia spectrum disorders in later life: prevalence and distribution of age at onset and sex in a Dutch catchment area. American Journal of Geriatric Psychiatry, 20(1), 18-28" }
      - { term: "Stafford, J. et al. (2017)", desc: "The incidence of very late-onset psychotic disorders: a systematic review and meta-analysis, 1960-2016. Psychological Medicine, 48(11), 1775-1786" }
      - { term: "Stafford, J. et al. (2018)", desc: "The incidence of nonaffective, nonorganic psychotic disorders in older people: a population-based cohort study of 3 million people in Sweden. Schizophrenia Bulletin, 45(5), 1152-1160" }
      - { term: "Almeida, O. P. et al. (1995)", desc: "Clinical and cognitive diversity of psychotic states arising in late life (late paraphrenia). Psychological Medicine, 25(4), 699-714" }
      - { term: "Palmer, B. W. et al. (2003)", desc: "Comparação neuropsicológica entre cinco grupos de idosos com psicose e demência, conforme citado em Nicolato e Alvarenga (2010)" }
      - { term: "Bleuler, M. (1978)", desc: "The schizophrenic disorders: long-term patient and family studies. New Haven: Yale University Press — origem da divisão entre início precoce e tardio, com corte aos 40 anos" }
      - { term: "Mocker, Riordan e Sharma (1997)", desc: "Ausência de deterioração cognitiva associada à faixa etária na esquizofrenia, aferida por WAIS-R, NART e Rivermead, conforme citado em Nicolato e Alvarenga (2010)" }
      - { term: "Sachdev, P., Brodaty, H., Rose, N. e Cathcart, S. (1999)", desc: "Comparação entre esquizofrenia de início tardio, de início precoce e voluntários saudáveis, conforme citado em Nicolato e Alvarenga (2010)" }
      - { term: "Harvey, P. D. (2001)", desc: "Seguimento de 30 meses mostrando que o declínio cognitivo da esquizofrenia crônica difere do da doença de Alzheimer, conforme citado em Nicolato e Alvarenga (2010)" }
      - { term: "Vigen, C. L. P. et al. (2011)", desc: "Cognitive effects of atypical antipsychotic medications in patients with Alzheimer's disease: outcomes from CATIE-AD. American Journal of Psychiatry, 168(8), 831-839" }
      - { term: "Baldez, D. P. et al. (2021)", desc: "The effect of antipsychotics on the cognitive performance of individuals with psychotic disorders: network meta-analyses of randomized controlled trials. Neuroscience and Biobehavioral Reviews, 126, 265-275" }
      - { term: "Chandramouleeshwaran, S. et al. (2023)", desc: "Impact of psychotropic medications on cognition among older adults: a systematic review. International Psychogeriatrics, 35(11), 1-16" }
  - title: "A Escala de Depressão Geriátrica"
    items:
      - { term: "Yesavage, J. A. et al. (1983)", desc: "Development and validation of a geriatric depression screening scale: a preliminary report. Journal of Psychiatric Research, 17(1), 37-49" }
      - { term: "Sheikh, J. I. e Yesavage, J. A. (1986)", desc: "Geriatric Depression Scale (GDS): recent evidence and development of a shorter version. Clinical Gerontologist, 5, 165-173" }
      - { term: "Almeida, O. P. e Almeida, S. A. (1999a)", desc: "Short versions of the geriatric depression scale: a study of their validity for the diagnosis of a major depressive episode according to ICD-10 and DSM-IV. International Journal of Geriatric Psychiatry, 14(10), 858-865 — é o estudo dos pontos de corte" }
      - { term: "Almeida, O. P. e Almeida, S. A. (1999b)", desc: "Confiabilidade da versão brasileira da escala de depressão em geriatria (GDS) versão reduzida. Arquivos de Neuro-Psiquiatria, 57(2B), 421-426 — é o estudo de teste-reteste, que considerou as versões de 1 e 4 itens inconfiáveis" }
      - { term: "Paradela, E. M. P., Lourenço, R. A. e Veras, R. P. (2005)", desc: "Validação da escala de depressão geriátrica em um ambulatório geral. Revista de Saúde Pública, 39(6), 918-923" }
      - { term: "Park, S.-H. (2020)", desc: "Performance of the Geriatric Depression Scale-15 with older adults aged over 65 years: an updated review 2000-2019. Clinical Gerontologist, 44(2), 83-96" }
      - { term: "Burke, W. J. et al. (1989)", desc: "Use of the Geriatric Depression Scale in dementia of the Alzheimer type. Journal of the American Geriatrics Society, 37(9), 856-860" }
      - { term: "Bennett, A. V. et al. (2024)", desc: "Mild to moderate cognitive impairment does not bias the Geriatric Depression Scale in a large U.S. sample of older adults. Quality of Life Research, 33, 2437-2449" }
      - { term: "Goodarzi, Z. et al. (2017)", desc: "Depression case finding in individuals with dementia: a systematic review and meta-analysis. Journal of the American Geriatrics Society, 65(5), 937-948" }
      - { term: "Atchison, K. et al. (2024)", desc: "Depression detection in dementia: a diagnostic accuracy systematic review and meta-analysis update. Health Science Reports, 7(7), e2249" }
---

<!--
As entradas marcadas como "conforme citado em Nicolato e Alvarenga" são citações de segunda mão: o capítulo as referencia, eu não tive acesso ao original. Diga isso à turma — é exatamente o cuidado de citação que vocês vão cobrar deles no TCC.
-->

---
layout: end
title: Até a próxima
subtitle: "Aula 04 — Avaliação neuropsicológica do idoso."
contact: Traga a ficha da GDS-15 preenchida das três vinhetas.
---
