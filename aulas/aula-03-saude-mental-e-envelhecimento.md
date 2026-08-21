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
      topic: "Transtornos psicóticos",
      desc: "esquizofrenia, início tardio e o diferencial com o transtorno
        neurocognitivo"
    }
  - {
      topic: "A Escala de Depressão Geriátrica",
      desc: "aplicação, correção, interpretação e limites — com dinâmica em grupo"
    }
---

<!--
D
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

<!--
L
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
  - "Trabalha com critérios operacionais — o que torna o diagnóstico comunicável
    entre profissionais"
  - "Não é sinônimo de doença: um sintoma isolado não constitui quadro
    psicopatológico"
  - "No idoso, os mesmos critérios foram construídos e validados em adultos
    jovens"
---

<!--
I
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
      desc: "Queixas somáticas inespecíficas, sintomas ansiosos, desamparo, queixa de
        memória e irritabilidade tomam o lugar da tristeza relatada (Gallo e
        Rabins, 1999)"
    }
  - {
      icon: "lucide:layers",
      title: "Comorbidade clínica",
      desc: "Insônia, dor, perda de apetite e fadiga têm várias causas simultâneas; o
        sintoma é creditado à doença de base e não ao humor"
    }
  - {
      icon: "lucide:pill",
      title: "Iatrogenia",
      desc: "Anti-hipertensivos, antiparkinsonianos e corticosteroides produzem
        quadros depressivos; fármacos com carga anticolinérgica rebaixam o
        desempenho nos testes"
    }
  - {
      icon: "lucide:file-question",
      title: "Subdiagnóstico",
      desc: "Casos de depressão são frequentemente subdiagnosticados e subtratados —
        inclusive dentro do hospital, onde a prevalência é maior"
    }
---

<!--
Q
-->

---
layout: diagram
kicker: O mesmo problema, em uma figura
title: Quatro filtros entre o quadro e o diagnóstico
note: Hipótese de demência no encaminhamento <em>não</em> dispensa investigar
  humor — frequentemente é o inverso do que está escrito na guia.
---

<Figure src="/filtros-diagnostico-idoso.svg" alt="Funil em quatro degraus: entre o quadro psiquiátrico que o idoso de fato tem e o que chega a ser diagnosticado há quatro filtros — apresentação atípica, comorbidade clínica, iatrogenia e subdiagnóstico" />

<!--
Uma frase por filtro, sem repetir o slide anterior: o ponto aqui é a forma do funil. Cada filtro retém parte dos casos, então a subestimação é cumulativa, não pontual — e o que sobra na ponta direita é justamente a base sobre a qual a literatura calcula prevalência. O idoso que chega à avaliação neuropsicológica já atravessou os quatro. Daí a conclusão prática do rodapé: em quase todo serviço a hipótese que chega escrita na guia é "investigar demência", e a nossa primeira tarefa é decidir se aquilo é humor. Vamos passar a segunda parte da aula exatamente nisso.
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
D
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

<Grid :data="[['Critério', 'O que exige', 'Por que importa no idoso'], ['Prejuízo', 'Sofrimento clinicamente significativo ou prejuízo social, ocupacional ou funcional', 'Aposentadoria e viuvez reduzem as demandas externas — o prejuízo fica menos visível'], ['Exclusão orgânica', 'Não atribuível a substância ou a outra condição médica', 'É o critério mais trabalhoso na geriatria: hipotireoidismo, fármacos, anemia, neoplasia'], ['Exclusão de mania', 'Nunca houve episódio maníaco ou hipomaníaco', 'Muda o tratamento inteiro: antidepressivo isolado no bipolar arrisca virada']]" head highlight="row:5" />

<!--
A
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
layout: default
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
Os três marcadores são o que sustenta o conceito: achado de imagem, perfil cognitivo e ausência de carga familiar. Depois de enunciá-los, passe para a figura — ela mostra onde exatamente a lesão age.
-->

---
layout: diagram
kicker: Especificidades no idoso · início tardio
title: Onde a lesão age — a alça frontoestriatal
note: A doença de pequenos vasos interrompe o circuito em pontos que a atrofia
  cortical não atingiria. Daí um perfil de síndrome frontal, e <em>não</em> o
  perfil amnéstico do início de uma doença de Alzheimer.
---

<Figure src="/depressao-vascular-circuito.svg" alt="A alça frontoestriatal desenhada como um circuito fechado — pré-frontal dorsolateral, caudado, globo pálido e tálamo, com o retorno ao pré-frontal — e marcas de hiperintensidade de substância branca sobre as conexões entre as estruturas" />

<!--
hiperintensidades da substância branca = são áreas brilhantes ou "manchas brancas" vistas em exames de ressonância magnética (nas sequências T2 e FLAIR). Elas indicam alterações nos tecidos cerebrais causadas por acúmulo de líquido, pequenas cicatrizes (gliose), perda de mielina (desmielinização) ou alterações vasculares
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
      - "Reconhecimento preservado"
  - title: "O que isso prediz"
    items:
      - "Vilalta-Franch et al. (2012): desempenho inferior em abstração, teste
        do relógio, fluência semântica e atenção, pela CAMDEX"
      - "Deprimidos idosos com alterações frontais têm maior chance de evoluir
        para quadro demencial"
      - "Dotson et al. (2010): o número de episódios aumenta a chance de
        progressão"
---

<!--
A
-->

---
layout: default
kicker: Questão 2 · depressão
title: Mulher de 72 anos, primeiro episódio depressivo aos 70
---

Ressonância indica diminuição de substância branca. Encaminhada para avaliação neuropsicológica por queixa de memória. Qual perfil é o **mais esperado**?

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
P
-->

---
layout: diagram
kicker: Diagnóstico diferencial
title: O fluxo de decisão tem <em>três</em> saídas
note: O tratamento adequado do humor é a única prova diagnóstica disponível —
  quem não recupera desempenho depois de remitir o humor tem, provavelmente, os
  dois quadros.
---

<Figure src="/fluxo-depressao-tnc.svg" alt="Diante de queixa cognitiva no idoso o fluxo abre em três desfechos: quadro depressivo provável, os dois quadros ao mesmo tempo, e transtorno neurocognitivo provável" />

<!--
Os discriminadores da caixa do meio são os do slide anterior — não os repita, aponte para eles. O que este slide acrescenta é a terceira saída: o desfecho do meio é o mais frequente na clínica geriátrica, e é justamente o que um fluxo de duas saídas obriga a arredondar para um lado. Marque o intervalo de reavaliação como conduta concreta e defensável em laudo: Alexopoulos e colaboradores (2002) acompanharam por três anos pacientes deprimidos com sintomas demenciais aparentemente reversíveis, e o risco de demência irreversível foi quase cinco vezes maior entre eles do que entre deprimidos sem sintomas cognitivos. Reavaliação em 6 a 12 semanas não é protelação nem excesso de zelo: é o desenho que separa reversível de irreversível.
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
layout: columns
kicker: Alterações cognitivas · e o efeito dos fármacos
title: O que o transtorno bipolar e seu tratamento fazem com os testes
columns:
  - title: "O próprio transtorno"
    items:
      - "Mesmo em eutimia: lentificação, memória verbal e executivo (Martino, 2008)"
      - "≈ 50% alteram o relógio ou o MEEM (Tsai, 2007)"
      - "<strong>Conduta:</strong> eutimia não autoriza esperar desempenho normal"
  - title: "Lítio"
    items:
      - "Pequeno e circunscrito: TE 0,24 em aprendizagem verbal (Wingo, 2009)"
      - "Maior no psicomotor (TE 0,62); memória tardia e executivo intactos"
      - "<strong>Conduta:</strong> registrar litemia e função tireoidiana"
  - title: "Carga anticolinérgica"
    items:
      - "<strong>+45%</strong> de chance de comprometimento — OR 1,45 (Ruxton, 2015)"
      - "Piora MEEM, FAB e RBANS (Dyer, 2021)"
      - "<strong>Conduta:</strong> levantar toda a lista de medicamentos antes de testar"
---

<!--
A ordem das colunas é a ordem do tamanho do efeito, e a terceira é a que mais muda conduta imediata: nenhum teste detecta carga anticolinérgica sozinho, ela sai da anamnese. Entram na conta tricíclicos, anti-histamínicos, antiespasmódicos urinários e alguns antipsicóticos — peça a lista com as caixas, não de memória. Insista na primeira coluna: Gildengers e colaboradores (2004) mostram que a maioria dos idosos bipolares eutímicos exibe comprometimento — eutimia é critério de humor, não prognóstico cognitivo. E desfaça o reflexo da segunda coluna: o efeito do lítio é pequeno e circunscrito, não serve para explicar um perfil francamente rebaixado. Se o desempenho despencou, procure outra coisa — provavelmente a terceira coluna, que é a única invisível ao teste.
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
S
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
definition: Quadros definidos por perda de contato com a realidade
  compartilhada, expressa em cinco domínios sintomáticos — dos quais
  <em>delírio</em>, <em>alucinação</em> e <em>discurso desorganizado</em> são os
  nucleares.
points:
  - "Comportamento amplamente desorganizado ou catatônico"
  - "Sintomas negativos: expressão emocional diminuída, avolição, alogia"
  - "No idoso, a maior parte dos quadros psicóticos NÃO é esquizofrenia — é
    secundária"
---

<!--
**Avolição** = perda total de motivação para iniciar ou terminar tarefas

Alogia = pobreza da fala e do pensamento, com respostas curtas e vazias
-->

---
layout: bigtype
kicker: O quadro do bloco
title: Esquizofrenia
subtitle:
---

<!--
A
-->

---
layout: columns
kicker: Caracterização do quadro
title: Esquizofrenia — o que o diagnóstico exige
columns:
  - title: "Critério A — os cinco sintomas"
    items:
      - "<strong>1. Delírios</strong>"
      - "<strong>2. Alucinações</strong>"
      - "<strong>3. Discurso desorganizado</strong> — descarrilamento, incoerência"
      - "4. Comportamento grosseiramente desorganizado ou catatônico"
      - "5. Sintomas negativos — expressão emocional diminuída, avolia"
  - title: "Quantos, e por quanto tempo"
    items:
      - "<strong>Dois ou mais</strong> do critério A, por porção significativa de
        um mês"
      - "Ao menos um deles entre os <strong>três primeiros</strong> — delírio,
        alucinação ou discurso desorganizado"
      - "Sinais contínuos por pelo menos 6 meses, incluindo 1 mês de fase ativa"
      - "Os 6 meses podem incluir fases prodrômica e residual"
  - title: "Prejuízo e exclusões"
    items:
      - "Declínio acentuado em trabalho, relações ou autocuidado"
      - "Excluídos transtorno esquizoafetivo e transtornos do humor com sintomas
        psicóticos"
      - "Não atribuível a substância, medicamento ou outra condição médica"
      - "Se há transtorno do neurodesenvolvimento, exige-se 1 mês de delírio ou
        alucinação proeminentes"
---

<!--
Síntese parafraseada do DSM-5-TR conforme Hany e Rizvi (StatPearls, 2024). Leia os cinco da primeira coluna em voz alta e marque a assimetria: os três primeiros são sintomas psicóticos positivos e qualquer diagnóstico precisa de pelo menos um deles — não se fecha esquizofrenia só com desorganização motora e sintomas negativos. Os dois últimos são justamente os que mais nos interessam na avaliação, porque avolia e embotamento se confundem com apatia de quadro depressivo e com a lentificação do idoso. Avise ainda que o capítulo de referência reproduz o Quadro 6.4 com os critérios do DSM-IV-TR, e a turma vai ler aquele quadro: diga explicitamente onde o livro está desatualizado — os subtipos saíram porque não tinham estabilidade ao longo do tempo nem valor preditivo de resposta ao tratamento.
-->

---
layout: diagram
kicker: Especificidades no idoso · nomenclatura
title: Precoce, tardio e <em>muito</em> tardio
note: Os cortes são convenção operacional, não fronteira biológica. Servem para tornar
  comparáveis estudos que antes misturavam populações muito diferentes.
---

<Figure src="/linha-tempo-inicio.svg" alt="Linha do tempo da idade de início da esquizofrenia, do transtorno bipolar, da depressão e do transtorno neurocognitivo, com os cortes dos 40 e dos 60 anos e a faixa em que os quatro se sobrepõem" />

<!--
Leia os dois cortes na figura: esquizofrenia de início tardio depois dos 40, psicose esquizofreniforme de início muito tardio depois dos 60 — o consenso de Howard, Rabins, Seeman e Jeste (2000). Bleuler (1978) já dividia em precoce e tardio com corte aos 40, então o corte dos 40 não é novo; o dos 60 é. Mas o que a figura foi feita para mostrar é a faixa sombreada: dos 60 em diante os quatro quadros convivem, e é aí que o diferencial deixa de ser exercício acadêmico. Um paciente de 68 anos com delírio persecutório pode estar abrindo psicose muito tardia, pode estar no pródromo de uma demência, pode ter mania com sintomas psicóticos ou depressão psicótica. Os quatro caminhos levam a condutas diferentes.
-->



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

<Grid :data="[['Evidência', 'O que foi encontrado', 'O que fazer com isso'], ['<strong>CATIE-AD</strong> — ensaio randomizado, 421 pacientes com doença de Alzheimer (Vigen, 2011)', 'Piora cognitiva equivalente a <strong>um ano</strong> de deterioração, em 36 semanas, frente a placebo', 'Parte do declínio entre duas avaliações pode ser do fármaco'], ['<strong>Meta-análise em rede</strong> — 54 ensaios, 5.866 pacientes (Baldez, 2021)', 'O efeito varia entre fármacos: haloperidol é o pior em todos os domínios', 'Anote qual antipsicótico, não a classe'], ['<strong>Revisão sistemática</strong> em idosos (Chandramouleeshwaran, 2023)', 'Polifarmácia psicotrópica associa-se a declínio cognitivo', 'Registre a lista inteira, não só o antipsicótico']]" head highlight="row:2" />

<Callout tone="warn" icon="lucide:calendar-clock">
Ao comparar duas avaliações, é preciso saber o que mudou na prescrição entre elas. Sem isso, a curva que se lê como progressão pode ser farmacológica.
</Callout>

<!--
A linha destacada é o achado que mais surpreende, porque vem de um ensaio randomizado e não de estudo observacional: olanzapina, quetiapina e risperidona pioraram o desempenho frente a placebo. Isso não significa que o antipsicótico não deva ser prescrito — significa que o efeito cognitivo é um risco adicional a ser pesado. Na segunda linha, o ponto é que não existe "efeito de antipsicótico": clozapina teve o pior desempenho em executivo e aprendizagem verbal, haloperidol em todos os domínios. Registrar a classe não serve para nada; registre o fármaco, a dose e a data de início.
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
layout: diagram
kicker: Por que existe escala específica para o idoso
title: O problema dos itens somáticos
note: No idoso, insônia, apetite, peso e fadiga têm <em>várias causas simultâneas</em> —
  um instrumento que os pontue produz falso-positivo sistemático nessa faixa etária.
---

<Figure src="/gds-itens-somaticos.svg" alt="À esquerda, os sintomas somáticos que os inventários para adultos pontuam e a GDS deixou de fora; à direita, os quinze itens da GDS-15, com memória e energia destacados por ainda tangenciarem o somático" />

<!--
A coluna da esquerda é o que a escala se recusou a perguntar, e a decisão é de projeto, não omissão: no idoso esses sintomas quase nunca vêm só do humor. À direita, repare que o alvo é humor, autoavaliação e retraimento. Os dois itens em ocre sobreviveram assim mesmo e são os que exigem leitura crítica. O item 10 é o mais interessante para nós: "acha que tem mais problemas de memória que outras pessoas?". Ele pontua igual em quem está deprimido e em quem tem déficit cognitivo verdadeiro. Numa amostra de memory clinic esse item sozinho puxa o escore para cima e ajuda a explicar por que a acurácia da escala cai quando há comprometimento cognitivo — assunto de dois slides adiante.
-->

---
layout: steps
kicker: Aplicação
title: Como se aplica
steps:
  - {
      icon: "lucide:user-check",
      title: "Escolha a forma de aplicação",
      desc: "Autoaplicação exige leitura fluente e visão corrigida. Na dúvida,
        heteroaplique — na população que atendemos, a heteroaplicação é o
        padrão"
    }
  - {
      icon: "lucide:door-closed",
      title: "Aplique com o idoso sozinho",
      desc: "Paradela et al. pediam que o acompanhante saísse da sala, justamente para
        evitar interferência e modificação das respostas"
    }
  - {
      icon: "lucide:message-square",
      title: "Leia a pergunta como está escrita",
      desc: "Se não for compreendida, repita mais devagar — sem interpretar nem
        parafrasear as palavras. Até três tentativas por item"
    }
  - {
      icon: "lucide:calendar",
      title: "Ancore no período",
      desc: "As perguntas se referem à última semana. Diga isso ao paciente antes de
        começar, e repita se ele derivar para o passado remoto"
    }
---

<!--
O
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
title: Duas vinhetas. Pontuem a GDS-15 na ficha, decidam a conduta e justifiquem em uma frase.
---

<!--
Organize grupos de quatro a cinco e entregue as duas folhas impressas. Vinte minutos para os dois casos, cinco minutos de discussão por caso. Peça que anotem o escore na folha, e não só mentalmente: a discussão fica muito melhor quando há um número escrito para defender. Avise que os dois casos têm armadilhas opostas — no primeiro a escala acerta e a dúvida é o que fazer com o resultado; no segundo a escala acerta em não pontuar, e a dúvida é se isso encerra a investigação.
-->

---
layout: columns
kicker: Vinheta 1 · o caso
aside: "vinheta clínica"
title: Dona Ivone, 71 anos, viúva há oito meses
columns:
  - title: "Quem é Dona Ivone"
    items:
      - "Nasceu na roça em Minas; veio para a capital aos 19 anos"
      - "Três anos de escolaridade; lê com dificuldade, escreve o nome"
      - "47 anos de casamento; três filhos vivos, um morto há 12 anos"
      - "Trabalhou como doméstica; cuidou da mãe com Alzheimer por seis anos"
      - "Ativa na igreja até o ano passado — grupo de oração e coral"
  - title: "Os oito meses desde a viuvez"
    items:
      - "O marido morreu de infarto em casa, à noite, ao lado dela"
      - "Parou a igreja no quarto mês; não sai de casa há três"
      - "Acorda às 3h e não volta a dormir; perdeu 6 kg"
      - "Diz «não sirvo mais para nada» e «se Deus me levasse, não reclamava»"
      - "A filha relata perguntas repetidas e duas consultas esquecidas"
  - title: "O que se observa na avaliação"
    items:
      - "Funções cognitivas preservadas para a idade e a escolaridade dela"
      - "Vigil, orientada e colaborativa, com latência de resposta aumentada"
      - "Responde «não sei» com frequência e acerta quando encorajada a tentar"
      - "Exames clínicos recentes afastaram causa orgânica para o quadro"
      - "Hidroclorotiazida e losartana; nenhum psicotrópico"
---

<!--
A queixa que chega escrita na guia é "desânimo", mas a filha fala de memória — é o inverso da guia de novo, e eles já viram isso na primeira parte da aula. Não responda nada sobre luto enquanto pontuam: a pergunta "isso não é só luto?" é o centro da discussão do caso e o DSM-5 retirou a exclusão por luto justamente porque a distinção não se sustentava. Circule pelos grupos e observe se alguém está pontuando pelo sentido literal da resposta em vez de pela coluna que pontua: é o erro de correção mais comum.
-->

---
layout: default
kicker: Vinheta 1 · a ficha
aside: "vinheta clínica"
title: A GDS-15 de Dona Ivone
---

Aplicada por entrevistadora treinada, com a filha fora da sala.

<Grid :data="[['Item', 'Resposta', 'Item', 'Resposta'], ['1. Satisfeita com a vida?', 'Não', '9. Prefere ficar em casa?', 'Não'], ['2. Interrompeu atividades?', 'Sim', '10. Mais problemas de memória?', 'Não'], ['3. Acha a vida vazia?', 'Sim', '11. Maravilhoso estar viva?', 'Sim'], ['4. Aborrece-se com frequência?', 'Sim', '12. Vale a pena viver assim?', 'Sim'], ['5. De bem com a vida?', 'Sim', '13. Cheia de energia?', 'Não'], ['6. Teme que algo ruim aconteça?', 'Sim', '14. Situação tem solução?', 'Sim'], ['7. Alegre a maior parte do tempo?', 'Não', '15. Muita gente em situação melhor?', 'Sim'], ['8. Sente-se desamparada?', 'Sim', '', '']]" head />

<!--
Gabarito: 9 pontos. Pontuam os itens 1, 2, 3, 4, 6, 7, 8, 13 e 15 — nove itens, um ponto cada. Rastreio positivo, bem acima do corte 5/6, na faixa de 6 a 10 que a ficha chama de indicativo leve. Repare com eles em dois pontos: o item 10 recebeu "Não" embora a filha traga queixa de memória — discrepância entre autorrelato e informante, que é achado, não erro; e a lentificação e os "não sei" que ela corrige quando encorajada são o padrão de falha de recuperação, não de armazenamento. Conduta: rastreio positivo exige entrevista diagnóstica, e a viuvez recente não a dispensa.
-->

---
layout: columns
kicker: Vinheta 2 · o caso
aside: "vinheta clínica"
title: Sr. Aparecido, 79 anos, DPOC e insuficiência cardíaca
columns:
  - title: "Quem é o Sr. Aparecido"
    items:
      - "Ex-metalúrgico; aposentou-se aos 58 pela doença pulmonar"
      - "Oito anos de escolaridade; fumou 40 anos, parou há 12"
      - "54 anos de casamento; dois filhos e quatro netos"
      - "Tinha oficina no quintal — consertava rádios e motores"
      - "Jogou futebol de várzea até os 60"
  - title: "O que a pneumologia encaminha"
    items:
      - "Encaminhado após dizer à médica «não vale mais a pena»"
      - "Dispneia aos mínimos esforços; depende de oxigênio quase o dia inteiro"
      - "Duas internações por descompensação em doze meses"
      - "Dorme sentado; acorda várias vezes com falta de ar"
      - "Perdeu 5 kg — a nutricionista atribui à caquexia cardíaca"
  - title: "O que se observa na sessão"
    items:
      - "Funções cognitivas preservadas; atento, colaborativo, com iniciativa"
      - "Ri das piadas do neto e acompanha o campeonato"
      - "Nega tristeza persistente, anedonia e desesperança"
      - "Interrompe a testagem para tossir; falta de ar evidente em repouso"
      - "Repete que «queria era respirar»"
---

<!--
Este é o caso que testa se entenderam para que serve o desenho da escala. Deixe no ar a pergunta que o encaminhamento levanta: um homem que disse "não vale mais a pena" pode ter rastreio negativo? Pode — e é exatamente por isso que rastreio negativo não encerra investigação. Guarde para o fechamento a distinção entre desmoralização e episódio depressivo, e o fato de que uma frase dessas se investiga por entrevista, não por escore.
-->

---
layout: default
kicker: Vinheta 2 · a ficha
aside: "vinheta clínica"
title: A GDS-15 do Sr. Aparecido
---

Aplicada no ambulatório, com a esposa na sala de espera.

<Grid :data="[['Item', 'Resposta', 'Item', 'Resposta'], ['1. Satisfeito com a vida?', 'Sim', '9. Prefere ficar em casa?', 'Sim'], ['2. Interrompeu atividades?', 'Sim', '10. Mais problemas de memória?', 'Não'], ['3. Acha a vida vazia?', 'Não', '11. Maravilhoso estar vivo?', 'Sim'], ['4. Aborrece-se com frequência?', 'Não', '12. Vale a pena viver assim?', 'Sim'], ['5. De bem com a vida?', 'Sim', '13. Cheio de energia?', 'Não'], ['6. Teme que algo ruim aconteça?', 'Não', '14. Situação tem solução?', 'Sim'], ['7. Alegre a maior parte do tempo?', 'Sim', '15. Muita gente em situação melhor?', 'Sim'], ['8. Sente-se desamparado?', 'Não', '', '']]" head />

<!--
Gabarito: 4 pontos — abaixo do corte 5/6, rastreio negativo. O achado a explorar é qual item pontuou: 2 (interrompeu atividades), 9 (prefere ficar em casa), 13 (falta de energia) e 15 (comparação social). Três dos quatro são produzidos pela doença pulmonar e cardíaca, não pelo humor, e o 13 é justamente um dos dois itens ambíguos que vimos no slide dos itens somáticos. Ou seja: mesmo com a doença empurrando o escore para cima, a escala não pontuou — é o desenho funcionando. E ainda assim o caso não está resolvido, porque a frase do encaminhamento não aparece em nenhum item.
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
contact: Traga a ficha da GDS-15 preenchida das duas vinhetas.
---
