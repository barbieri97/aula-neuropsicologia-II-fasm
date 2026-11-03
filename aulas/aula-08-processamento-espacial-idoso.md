---
theme: slidev-theme-fasm
title: "Processamento espacial no idoso"
info: O que é o processamento visioespacial e os seus componentes; o que muda
  no envelhecimento normal e nos quadros demenciais; avaliação pela Figura
  Complexa de Taylor simplificada
date: "2026-10-20"
author: FASM · Neuropsicologia II
download: true
exportFilename: aula-08-processamento-espacial-idoso
themeConfig:
  lang: pt-BR
layout: lead
index: "08"
kicker: Neuropsicologia II · FASM
subtitle: Perceber, orientar-se, construir.
---

<!--
- **DA**: doença de Alzheimer.
- **DLFT**: degeneração lobar frontotemporal.
- **AVC**: acidente vascular cerebral.
- **MEEM**: Miniexame do Estado Mental.
- **sTCFT**: versão simplificada da Figura Complexa de Taylor (sigla em inglês).
- Nesta aula, "corpos de Lewy" vai por extenso: a sigla DCL já foi usada para declínio cognitivo leve.
- Estrutura do encontro: 1 h de exposição, 30 min de intervalo, 1 h 30 de vinheta em grupo.
-->

---
layout: agenda
kicker: Aula 08
title: Caminho da aula
items:
  - {
      topic: "O processamento espacial",
      desc: "definição, componentes, as duas vias visuais"
    }
  - {
      topic: "O processamento espacial no envelhecimento",
      desc: "o que é esperado e o que pede investigação"
    }
  - {
      topic: "Avaliação",
      desc: "a Figura de Taylor simplificada: cópia e evocação"
    }
  - {
      topic: "Vinheta clínica",
      desc: "uma figura para pontuar e interpretar em grupo"
    }
---

<!--
- A vinheta não tem slides: a ficha é entregue em papel depois do intervalo.
-->

---
layout: section
index: "01"
kicker: Parte um
title: O processamento espacial
subtitle: Definição e componentes.
---

---
layout: define
kicker: A definição
term: Processamento visioespacial
definition: Componente da cognição responsável por <em>captar</em>,
  <em>armazenar</em> e <em>usar</em> as informações espaciais que vemos, nas
  tarefas do dia a dia.
points:
  - "Perceber formas e reconhecer objetos"
  - "Copiar desenhos e montar modelos"
  - "Ler mapas e traçar rotas"
---

<!--
- Os principais correlatos neurais ficam nas regiões posteriores do cérebro, em especial no circuito parieto-occipital.
-->

---
layout: vs
kicker: Dois componentes
title: Sensorial e perceptivo
left:
  title: "Componente sensorial"
  items: [
    "<strong>Captar</strong> a informação do meio",
    "Começa nos cones e bastonetes da retina",
    "Segue pelo nervo óptico até o córtex visual primário"
  ]
right:
  title: "Componente perceptivo"
  items: [
    "<strong>Interpretar</strong> o que foi captado",
    "Acontece nas áreas visuais associativas",
    "Monta a cena que reconhecemos"
  ]
label: "×"
---

<!--
- Fotorrecepção: conversão da luz em estímulo nervoso.
- O caminho: retina → nervo óptico → quiasma óptico → trato óptico → núcleo geniculado lateral do tálamo → radiação óptica → córtex visual primário (occipital).
- A distinção volta no bloco dois: catarata é problema sensorial; não achar o carro no estacionamento com a visão corrigida é perceptivo.
-->

---
layout: panels
kicker: Três componentes
title: O que o processamento espacial abrange
panels:
  - {
      title: "Percepção visual",
      icon: "lucide:eye",
      items: [
        "Reconhecer objetos, formas, cores e rostos"
      ]
    }
  - {
      title: "Orientação espacial",
      icon: "lucide:compass",
      items: [
        "Localizar-se e deslocar-se no ambiente"
      ]
    }
  - {
      title: "Visioconstrução",
      icon: "lucide:shapes",
      items: [
        "Juntar partes num todo: desenhar, copiar, montar"
      ]
    }
---

---
layout: diagram
kicker: Neuroanatomia
title: Duas vias a partir do lobo occipital
note: A via ventral diz <em>o quê</em> é o objeto; a via dorsal diz
  <em>onde</em> ele está.
---

<Figure src="/esp-vias-visuais.svg" alt="Vista lateral do encéfalo com as áreas de Brodmann, anterior à esquerda. Do lobo occipital (áreas 17, 18 e 19, em cinza) saem duas setas. A via ventral, em ocre, desce para o lobo temporal inferior (áreas 37, 20 e 21) e responde por o quê o objeto é. A via dorsal, em azul, sobe para o lobo parietal (áreas 7, 39 e 40) e responde por onde o objeto está" />

<!--
- Modelo de Ungerleider e Mishkin (início dos anos 1980).
- Ventral: occipitotemporal → temporal anterior → pré-frontal ventrolateral. Forma e cor.
- Dorsal: occipitoparietal → parietal posterior → pré-frontal dorsolateral. Espaço, movimento, atenção e localização.
- Goodale e Milner (1992) ampliaram a dorsal para uma "via do como": a orientação para a ação, como ao pegar um objeto.
-->

---
layout: columns
kicker: Lesões
title: Quando cada via falha
columns:
  - {
      title: "Via ventral · o quê",
      items: [
        "Acromatopsia: não reconhece cores",
        "Agnosia visual: não reconhece objetos",
        "Prosopagnosia: não reconhece rostos"
      ]
    }
  - {
      title: "Via dorsal · onde",
      items: [
        "Heminegligência: ignora um lado do espaço",
        "Síndrome de Bálint",
        "Apraxias"
      ]
    }
---

<!--
- Variações de topografagnosia (dificuldade de se orientar no espaço) também aparecem com lesão ventral.
- Síndrome de Bálint: não consegue ver mais de um objeto por vez, não dirige o olhar ao alvo e erra a mão ao tentar pegá-lo.
-->

---
layout: define
kicker: Primeiro componente · percepção visual
term: Agnosia visual
definition: Incapacidade de <em>reconhecer</em> e identificar objetos pela
  visão, com as funções visuais básicas preservadas.
points:
  - "O olho vê; o reconhecimento falha"
  - "É o distúrbio mais característico da percepção visual"
---

<!--
- Definição de Farah (1988), citada no capítulo.
-->

---
layout: vs
kicker: Agnosia visual
title: Aperceptiva e associativa
left:
  title: "Aperceptiva"
  items: [
    "Falha na própria percepção",
    "Não consegue <strong>copiar</strong> o desenho",
    "Não combina formas iguais"
  ]
right:
  title: "Associativa"
  items: [
    "A percepção está intacta",
    "<strong>Copia</strong> o desenho sem dificuldade",
    "Não liga o que vê ao que sabe sobre o objeto"
  ]
label: "×"
---

<!--
- A distinção é de Lissauer, há mais de cem anos.
- A cópia é a pergunta que separa as duas: se copia, a percepção funciona.
-->

---
layout: default
kicker: Fixação · pergunta 1
title: Mulher de 79 anos, um mês depois de um AVC posterior
---

Copia o desenho de uma chave traço por traço, com capricho. Perguntada, não
sabe dizer o que desenhou. Com a chave na mão, diz na hora: "é chave".

<v-clicks>

- **A.** Agnosia aperceptiva: ela não percebe a forma
- **B.** Agnosia associativa: percebe, mas não reconhece pela visão
- **C.** Afasia: ela não encontra a palavra
- **D.** Déficit visioconstrutivo: a cópia está comprometida

</v-clicks>

<!--
- Deixe a turma responder antes de virar o slide.
-->

---
layout: default
kicker: Fixação · resposta 1
title: A resposta é <span class="accent2">B</span>
---

<Grid head highlight="row:3" :data="[
  ['', 'Alternativa', 'Por que erra, ou por que acerta'],
  ['A', 'Aperceptiva', 'quem não percebe a forma não consegue copiá-la; a cópia saiu correta'],
  ['B', 'Associativa', '<b>correta</b>: a forma foi percebida e copiada, mas a visão não leva ao reconhecimento'],
  ['C', 'Afasia', 'com a chave na mão ela diz o nome na hora; a palavra está disponível'],
  ['D', 'Visioconstrução', 'a cópia está preservada, traço por traço'],
]" />

<!--
- O tato reconhece o que a visão não reconhece: a falha é específica da modalidade visual.
-->

---
layout: define
kicker: Segundo componente
term: Orientação espacial
definition: Capacidade de perceber a <em>direção</em>, o <em>movimento</em> e o
  <em>volume</em> dos objetos, as relações entre eles, e de se deslocar usando
  essas informações.
points:
  - "Deslocar-se de um lugar a outro"
  - "Representar o espaço como um mapa mental"
---

<!--
- Definição de Gil (2005), citada no capítulo.
- As duas habilidades dos marcadores são chamadas de navegação topográfica e mapa cognitivo (Kolb e Whishaw, 2003).
- Na DA, algum grau de desorientação espacial já aparece nas fases iniciais. As perguntas do MEEM sobre estado, cidade, bairro, local e andar caracterizam as alterações mais claras.
-->

---
layout: vs
kicker: Desorientação espacial
title: Agnosia topográfica e amnésia topográfica
left:
  title: "Agnosia topográfica"
  items: [
    "Não reconhece <strong>um</strong> ponto de referência",
    "Reconhece a classe: sabe que é uma igreja",
    "Não sabe que é <em>aquela</em> igreja"
  ]
right:
  title: "Amnésia topográfica"
  items: [
    "Reconhece o ponto de referência",
    "Sabe que é a igreja do bairro",
    "Não sabe <strong>onde</strong> ela fica"
  ]
label: "×"
---

<!--
- As duas também se dividem pelo tempo:
  - amnésia espacial retrógrada: perde a navegação em ambientes que conhecia antes do quadro;
  - amnésia espacial anterógrada: navega nos ambientes antigos, mas não aprende os novos.
-->

---
layout: default
kicker: Desorientação espacial
title: Cinco formas e onde cada uma se localiza
---

<Grid head :data="[
  ['Desorientação', 'Região', 'O que falha'],
  ['Egocêntrica', 'parietal posterior', 'localizar objetos em relação a si'],
  ['Alocêntrica', 'cíngulo posterior', 'direção e orientação em relação ao ambiente'],
  ['Agnosia de ponto de referência', 'giro lingual', 'reconhecer pontos de referência'],
  ['Anterógrada', 'giro para-hipocampal', 'aprender ambientes novos'],
  ['Déficit no mapa espacial', 'hipocampo', 'lembrar os detalhes espaciais, antigos e novos'],
]" />

<!--
- Quadro 11.1 do capítulo, adaptado de Aguirre e D'Esposito (1999).
- Todas ficam no córtex posterior e no sistema límbico.
-->

---
layout: default
kicker: Fixação · pergunta 2
title: Homem de 76 anos, quatro meses depois de mudar de casa
---

Ainda se perde entre o portão do condomínio novo e o próprio bloco, que
reconhece quando chega nele. No domingo foi sozinho, de ônibus, até a casa
antiga, em outro bairro, sem errar o caminho.

<v-clicks>

- **A.** Amnésia espacial retrógrada
- **B.** Envelhecimento normal da visão
- **C.** Agnosia de ponto de referência
- **D.** Amnésia espacial anterógrada

</v-clicks>

---
layout: default
kicker: Fixação · resposta 2
title: A resposta é <span class="accent2">D</span>
---

<Grid head highlight="row:5" :data="[
  ['', 'Alternativa', 'Por que erra, ou por que acerta'],
  ['A', 'Retrógrada', 'atinge os ambientes antigos; o caminho da casa antiga está preservado'],
  ['B', 'Visão', 'a visão é a mesma nos dois trajetos; o que muda é a novidade do lugar'],
  ['C', 'Ponto de referência', 'ele reconhece o próprio bloco quando chega nele'],
  ['D', 'Anterógrada', '<b>correta</b>: navega no que já conhecia e não aprende o ambiente novo'],
]" />

<!--
- No Quadro 11.1, a desorientação anterógrada se relaciona ao giro para-hipocampal.
-->

---
layout: define
kicker: Terceiro componente
term: Visioconstrução
definition: Capacidade de <em>integrar</em> elementos independentes num todo
  coeso, como num desenho ou num modelo montado.
points:
  - "Não se explica por déficit motor nem sensorial"
  - "A falha se chama apraxia construtiva"
---

<!--
- Definição de Benton (2009), citada no capítulo.
- Apraxia construtiva: termo de Kleist (1922), para pacientes que não conseguiam fazer desenhos simples nem montar mosaicos, palitos ou blocos, sem outros sinais de apraxia.
- Mayer-Gross (1935): costuma vir junto de outros sinais parieto-occipitais, como a agnosia digital e a acalculia.
-->

---
layout: steps
kicker: Visioconstrução
title: O que uma cópia exige
steps:
  - {
      title: "Perceber",
      desc: "Ver o modelo e cada um dos seus elementos",
      icon: "lucide:eye"
    }
  - {
      title: "Montar a imagem mental",
      desc: "Posição, proporção e relação entre as partes",
      icon: "lucide:brain"
    }
  - {
      title: "Planejar",
      desc: "Decidir por onde começar e em que ordem seguir",
      icon: "lucide:list-ordered"
    }
  - {
      title: "Desenhar",
      desc: "Executar o plano com o lápis",
      icon: "lucide:pencil"
    }
---

<!--
- Modelo de Guérin, Ska e Belleville (1999), citado no capítulo.
- A imagem mental envolve coordenadas, relações entre os elementos, mapeamento espacial, troca do foco da atenção e memória de trabalho.
- Para figuras familiares, a programação motora pode partir direto da memória de longo prazo, sem planejamento novo. Uma figura geométrica nova, como a da parte três, obriga a passar pelas quatro etapas.
-->

---
layout: section
index: "02"
kicker: Parte dois
title: O processamento espacial no envelhecimento
subtitle: O esperado e o que pede investigação.
---

---
layout: vs
kicker: Componente sensorial
title: O olho que envelhece
left:
  title: "Esperado com a idade"
  items: [
    "Presbiopia: o cristalino perde a elasticidade",
    "Catarata: o cristalino perde a transparência",
    "Perda de fibras do nervo óptico"
  ]
right:
  title: "Pede investigação"
  items: [
    "Degeneração macular: atinge a retina",
    "Glaucoma: atinge o nervo óptico",
    "Perda de fibras mais acentuada: aparece nas demências"
  ]
label: "×"
---

<!--
- Presbiopia é a "vista cansada".
- A perda de fibras do nervo óptico é mais pronunciada nas demências, até nos estágios pré-clínicos. Por isso há a proposta de usar alterações das vias visuais como biomarcador da DA.
- Antes de interpretar qualquer teste visual, confira óculos e catarata.
-->

---
layout: statement
kicker: Envelhecimento normal
title: A cópia de figuras se mantém <em>relativamente estável</em> no
  envelhecimento normal.
---

<!--
- Mitrushina, Boone e D'Elia (1999), citados no capítulo.
-->

---
layout: columns
kicker: Envelhecimento normal
title: O que declina
columns:
  - {
      title: "Planejamento",
      items: [
        "Decidir a ordem e a organização do desenho"
      ]
    }
  - {
      title: "Memória de trabalho visioespacial",
      items: [
        "Manter a imagem enquanto se desenha"
      ]
    }
---

<!--
- Os dois são componentes executivos, aspectos fluidos da cognição (Salthouse, Atkinson e Berish, 2003).
- Podem mediar dificuldades na cópia sem que haja quadro patológico. Cabe ao neuropsicólogo separar uma coisa da outra.
-->



---
layout: fact
kicker: Doença de Alzheimer
value: 50
unit: "%"
label: Quase metade dos pacientes com DA pode ter dificuldade de reconhecer
  estímulos visuais (Sadun et al., 1987).
---

<!--
- Estimativa citada no capítulo.
- As dificuldades estão nas funções visuais complexas: figura-fundo, percepção de forma, sínteses visuais complexas e agnosias espaciais. As áreas visuais primárias ficam relativamente preservadas.
- Essas dificuldades costumam ser negligenciadas no exame clínico da demência (Mendez, Tomsak e Remler, 1990).
-->

---
layout: diagram
kicker: Doença de Alzheimer
title: A mesma cópia em três fases
note: A cópia se desorganiza à medida que o quadro progride.
---

<Figure src="/cap11-fig1-copia-da.png" alt="Um quadrado com um losango inscrito serve de modelo. Na fase inicial da doença de Alzheimer, o paciente desenha o quadrado e um losango torto, desencaixado dos lados. Na fase moderada, desenha o quadrado e só um ângulo solto no meio. Na fase avançada, sobram dois traços e um rabisco, sem a figura" />

<!--
- Figura 11.1 do capítulo de Paula, Moreira, Coutinho e Mograbi.
- Na DA há alterações na organização global, no posicionamento e nos detalhes, tanto na forma típica quanto nas apresentações não amnésticas (Serra et al., 2010).
-->

---
layout: define
kicker: Doença de Alzheimer
term: Closing-in
definition: Tendência <em>inconsciente</em> de desenhar a cópia perto do
  modelo, ou por cima dele.
points:
  - "Compensa a dificuldade de processamento visioespacial"
  - "É comum na DA"
---

<!--
- Serra et al. (2010), citados no capítulo.
-->

---
layout: diagram
kicker: Doença de Alzheimer
title: Closing-in
note: A cópia, embaixo, cola no modelo, em cima, e o atravessa no final.
---

<Figure src="/cap11-fig2-closing-in.png" alt="Em cima, o modelo: uma sequência que alterna quadrados e triângulos. Embaixo, a cópia de um paciente com doença de Alzheimer, feita logo abaixo do modelo; no fim da linha, os traços sobem e se sobrepõem ao modelo" />

<!--
- Figura 11.2 do mesmo capítulo.
-->

---
layout: diagram
kicker: Visioconstrução
title: A mesma figura em cinco pessoas
note: Cada quadro desorganiza a cópia do seu jeito.
---

<Figure src="/cap11-fig4-cinco-copias.png" alt="O modelo da Figura Complexa de Taylor simplificada (um retângulo dividido, com um X, um asterisco, um triângulo embaixo e setas) e quatro cópias feitas por idosos. Controle saudável, quase idêntica ao modelo; degeneração lobar frontotemporal, com a estrutura mantida e partes omitidas; lesão vascular à esquerda, com elementos fora do lugar e círculos nas interseções; demência mista, Alzheimer e vascular, com a estrutura deformada e o triângulo solto" />

<!--
- Figura 11.4 do mesmo capítulo, sem o painel da DA inicial: ele é a cópia pré-operatória do Sr. Valdemar na vinheta.
- A figura é a Figura de Taylor simplificada, o teste da parte três.
- Na DLFT o contorno geral se mantém e o que falta são partes, por desatenção e planejamento.
-->

---
layout: panels
kicker: Visioconstrução
title: O padrão de cada quadro
panels:
  - {
      title: "Doença de Alzheimer",
      icon: "lucide:brain",
      items: [
        "Organização global, posição e detalhes",
        "Piora com a progressão"
      ]
    }
  - {
      title: "Corpos de Lewy",
      icon: "lucide:eye-off",
      items: [
        "Alteração marcante e grave",
        "Parietal e occipital são atingidos primeiro"
      ]
    }
  - {
      title: "Frontotemporal",
      icon: "lucide:list-x",
      items: [
        "Menos proeminente",
        "Secundária à disfunção executiva"
      ]
    }
  - {
      title: "Vascular",
      icon: "lucide:git-branch",
      items: [
        "Depende do local e da extensão",
        "Mais expressiva em infartos posteriores"
      ]
    }
---

<!--
- Na DLFT os erros são de desatenção, planejamento deficitário e perseveração.
- Na demência vascular, os infartos corticais posteriores dão déficits nos dois hemisférios.
-->

---
layout: diagram
kicker: Corpos de Lewy
title: Palitos e cubo na fase inicial
note: O paciente não reproduz um quadrado simples de palitos nem copia o cubo.
---

<Figure src="/cap11-fig3-lewy.png" alt="À esquerda, fotografia de uma mesa: no papel, o modelo de um quadrado feito com quatro palitos de fósforo; ao lado, quatro palitos espalhados, sem formar a figura. À direita, o cubo-modelo e a cópia do paciente: duas formas soltas, sem ligação com o cubo, e um traço isolado" />

<!--
- Figura 11.3 do mesmo capítulo.
- Os palitos (stick design test) são uma tarefa de visioconstrução que não depende de lápis e papel, útil para quem tem pouca escolaridade (Baiyewu et al., 2005).
-->

---
layout: define
kicker: Apresentação atípica da D.A.
term: Atrofia cortical posterior
definition: Declínio progressivo e relativamente <em>restrito</em> ao
  processamento visual, com atrofia dos lobos occipital e parietal.
points:
  - "Apresentação não amnéstica da DA"
  - "Atinge forma, movimento, cor e localização"
---

<!--
- Crutch et al. (2012), citados no capítulo. É considerada atípica da DA porque as alterações histopatológicas são semelhantes.
- Não confundir com a demência semântica: ali a cópia imediata é boa, e a falha aparece na cópia de memória, quando é preciso evocar o conceito (Bozeat et al., 2003).
- Quando a visão está comprometida, prefira testes com componentes táteis e auditivos para avaliar as outras funções.
-->

---
layout: default
kicker: Fixação · pergunta 3
title: Mulher de 78 anos, operada de catarata há seis meses
---

O oftalmologista diz que, de óculos, ela enxerga bem. Mesmo assim, não acha o
carro no estacionamento do mercado de sempre e erra o botão do elevador. Dá os
recados da família sem esquecer. A filha diz: "é a vista".

<v-clicks>

- **A.** Alteração perceptiva e espacial: precisa ser investigada
- **B.** Presbiopia: troca de óculos resolve
- **C.** Esperado no envelhecimento normal
- **D.** Falha de memória episódica

</v-clicks>

---
layout: default
kicker: Fixação · resposta 3
title: A resposta é <span class="accent2">A</span>
---

<Grid head highlight="row:2" :data="[
  ['', 'Alternativa', 'Por que erra, ou por que acerta'],
  ['A', 'Perceptiva e espacial', '<b>correta</b>: com o olho funcionando, falha o uso da informação espacial'],
  ['B', 'Presbiopia', 'a visão já foi corrigida e examinada; o sensorial está resolvido'],
  ['C', 'Envelhecimento normal', 'perder-se em lugar conhecido não é esperado com a idade'],
  ['D', 'Memória episódica', 'ela guarda e repassa os recados sem erro'],
]" />

<!--
- É o raciocínio da primeira distinção da aula: sensorial resolvido, perceptivo em questão. É também o raciocínio da vinheta de hoje.
-->

---
layout: section
index: "03"
kicker: Parte três
title: Avaliação do processamento espacial
subtitle: A Figura de Taylor simplificada.
---

---
layout: columns
kicker: Antes de avaliar
title: Três coisas que mudam o resultado
columns:
  - {
      title: "Visão",
      items: [
        "Óculos na sessão",
        "Catarata e outras doenças oculares"
      ]
    }
  - {
      title: "Escolaridade",
      items: [
        "Familiaridade com lápis e papel",
        "Tarefa de desenho pode gerar ansiedade"
      ]
    }
  - {
      title: "Motricidade",
      items: [
        "Tremor, fraqueza, mão dominante"
      ]
    }
---

<!--
- Para quem tem pouca escolaridade, tarefas clássicas de visioconstrução (Figura Complexa de Rey, cópia de figuras do CERAD) são muitas vezes pouco válidas e ansiogênicas (Baiyewu et al., 2005).
- A Figura de Taylor simplificada foi feita para essa população: idosos com baixa escolaridade e analfabetos.
- Visioconstrução só se interpreta quando o déficit não é motor nem sensorial.
-->

---
layout: define
kicker: A tarefa
term: Figura de Taylor simplificada
definition: Cópia de uma figura geométrica, seguida de duas <em>evocações</em>
  de memória.
points:
  - "Avalia visioconstrução, planejamento e memória visioespacial"
  - "Depende menos da escolaridade que a figura original"
---

<!--
- Figura original: Taylor (1969). Versão simplificada e validação brasileira: de Paula, Costa, Andrade, Ávila e Malloy-Diniz (2016), em idosos com baixa escolaridade.
- A sigla na literatura é sTCFT (simplified Taylor Complex Figure Test).
- É a figura da Figura 11.4 do capítulo, que a turma já viu na parte dois.
-->

---
layout: steps
kicker: Figura de Taylor simplificada
title: Como se aplica
steps:
  - {
      title: "Cópia",
      desc: "Com o modelo à vista, sem borracha e sem girar o cartão",
      icon: "lucide:copy"
    }
  - {
      title: "Evocação imediata",
      desc: "Até três minutos depois, sem o modelo",
      icon: "lucide:timer"
    }
  - {
      title: "Evocação tardia",
      desc: "Entre 20 e 30 minutos depois, sem o modelo",
      icon: "lucide:hourglass"
    }
---

<!--
- Instrução do manual: "Nesse próximo teste você deverá desenhar nessa folha uma figura geométrica bem diferente. Não precisa ser uma cópia perfeita, mas quero que você tente fazer o melhor que você conseguir. Preste atenção nas proporções e nas formas da figura. Não precisa ter pressa, pode fazer no seu tempo. Caso você erre alguma coisa, pode rasurar e depois eu avalio com mais calma."
- Uma folha em branco para cada etapa. Nas evocações, o estímulo não é mostrado de novo.
- Não avise que haverá evocação: a memória testada é a incidental.
- Logo depois da cópia, registre a abordagem (global ou por detalhes) e o planejamento. Esses índices ainda não têm norma.
- Cada etapa dura, em média, menos de cinco minutos. No intervalo até a tardia, aplique tarefas não visuais.
-->

---
layout: diagram
kicker: Figura de Taylor simplificada
title: Copie a figura
---

<Figure src="/taylor-modelo.svg" alt="A Figura Complexa de Taylor simplificada, sem numeração: um retângulo principal dividido por uma linha vertical e uma horizontal centrais, com um retângulo menor sobre a metade esquerda, um triângulo à esquerda com uma seta vertical na ponta, um triângulo no canto de baixo à direita, uma linha pontilhada do centro até esse canto, uma estrela no quadrante inferior esquerdo, um X no quadrante superior esquerdo, uma diagonal no quadrante superior direito e uma seta saindo do canto superior direito" />

<!--
- A turma copia a figura numa folha em branco, como na aplicação: sem régua, sem borracha.
- No slide seguinte, cada um confere os doze elementos da própria cópia.
-->

---
layout: diagram
kicker: Figura de Taylor simplificada
title: Doze elementos
note: Cada elemento vale de 0 a 2; a soma vai de 0 a 24.
---

<Figure src="/taylor-elementos.svg" alt="A Figura Complexa de Taylor simplificada com os doze elementos numerados, como na folha de registro: 1 retângulo principal; 2 triângulo à esquerda; 3 seta vertical na ponta desse triângulo; 4 linha vertical central; 5 linha horizontal central; 6 triângulo inferior; 7 linha pontilhada; 8 estrela; 9 X no quadrante superior esquerdo; 10 diagonal no quadrante superior direito; 11 retângulo superior; 12 seta que sai do canto superior direito" />

<!--
- A numeração é a da folha de registro do manual (Labep_neuro, de Paula, 2019).
- A mesma pontuação vale para as três etapas: cópia, evocação imediata e evocação tardia.
-->

---
layout: default
kicker: Figura de Taylor simplificada
title: Cada elemento, de 0 a 2
---

<Grid head :data="[
  ['Pontos', 'Localização', 'Precisão'],
  ['2', 'boa', 'boa'],
  ['1', 'boa', 'ruim'],
  ['1', 'ruim', 'boa'],
  ['0,5', 'ruim, mas reconhecível', 'ruim'],
  ['0', 'ausente ou irreconhecível', ''],
]" />

<!--
- É o crivo das figuras complexas em geral (Rey, Taylor, Boston).
- Localização: o elemento está no lugar certo em relação aos outros. Precisão: a forma está correta.
-->

---
layout: default
kicker: Normas preliminares · idosos brasileiros
title: Do escore ao percentil
---

<Grid head :data="[
  ['', 'Cópia', 'Evocação imediata', 'Evocação tardia'],
  ['Média (DP)', '20,3 (4,0)', '14,0 (4,3)', '13,8 (4,6)'],
  ['Pc 5', '11', '6', '5'],
  ['Pc 10', '16', '8', '8'],
  ['Pc 25', '19', '12', '11'],
  ['Pc 50', '22', '14', '14'],
  ['Pc 75', '23', '17', '17'],
  ['Pc 90', '24', '19', '19'],
  ['Pc 95', '24', '20', '21'],
]" />

<!--
- Tabela da p. 8 do manual (Labep_neuro, de Paula, 2019), adaptada de de Paula (2018): 100 idosos, 72,7 ± 8,2 anos, de 0 a 26 anos de estudo (média de 6,2 ± 4,7).
- Mínimo e máximo: cópia de 5 a 24; imediata de 1 a 24; tardia de 2 a 24. Alfa de Cronbach: 0,845, 0,867 e 0,865.
- Como ler: procure a linha cujo valor o escore alcança. Um escore entre duas linhas fica entre os dois percentis. Exemplo: cópia 17 fica entre o Pc 10 e o Pc 25.
- Não há ponto de corte: o escore se lê pelo percentil. As normas são preliminares.
- Boa concordância entre examinadores na correção (de Paula et al., 2016).
-->

---
layout: vs
kicker: Figura de Taylor simplificada
title: Cópia e evocação
left:
  title: "Cópia"
  items: [
    "O modelo está à vista",
    "Peso da visioconstrução",
    "Anda junto com os testes construtivos"
  ]
right:
  title: "Evocação"
  items: [
    "Sem o modelo",
    "Peso da memória visioespacial",
    "Anda junto com os testes de memória"
  ]
label: "×"
---

<!--
- de Paula et al. (2016): a cópia compartilha 29% da variância com a praxia construtiva da Mattis e 31% com o teste dos palitos, e só de 4 a 10% com tarefas de memória. As evocações compartilham 27% com a memória da Mattis e de 16 a 17% com o RAVLT, e de 1 a 7% com os testes visioespaciais.
- A cópia também se liga ao planejamento (Torre de Londres), por meio da memória operacional e da flexibilidade cognitiva (Ávila et al., 2015).
- Leitura clínica: a evocação só se interpreta à luz da cópia. Quem copiou mal não tem o que lembrar; o que importa é quanto do que foi copiado se manteve.
-->

---
layout: default
kicker: Fixação · pergunta 4
title: Mulher de 72 anos, sete anos de estudo
---

Na Figura de Taylor simplificada fez cópia 22, evocação imediata 15 e
evocação tardia 3.

<v-clicks>

- **A.** Déficit visioconstrutivo
- **B.** Falha de planejamento na cópia
- **C.** Falha de memória visioespacial
- **D.** Desempenho esperado para a idade

</v-clicks>

---
layout: default
kicker: Fixação · resposta 4
title: A resposta é <span class="accent2">C</span>
---

<Grid head highlight="row:4" :data="[
  ['', 'Alternativa', 'Por que erra, ou por que acerta'],
  ['A', 'Visioconstrução', 'a cópia é 22, na mediana das normas'],
  ['B', 'Planejamento', 'uma cópia de 22 pontos não mostra falha de organização'],
  ['C', 'Memória', '<b>correta</b>: copiou bem, guardou no início e perdeu quase tudo na tardia'],
  ['D', 'Esperado', 'a tardia de 3 fica abaixo do percentil 5'],
]" />

<!--
- O contrário do Sr. Valdemar antes da cirurgia: aqui a cópia é boa e a memória falha.
- A queda da imediata para a tardia aponta perda do que foi armazenado, e não falta de codificação.
-->

---
layout: statement
kicker: Vinheta clínica
title: Pontuem as duas cópias e respondam à <em>equipe médica</em>.
---

<!--
GABARITO. A ficha está em `referencias/aula-08/vinheta-1-sr-valdemar.docx`.

**Sr. Valdemar, 74 anos, 6 anos de estudo. Meningioma temporo-occipital direito, retirado por completo. Cópia da Figura de Taylor duas semanas antes e três meses depois da cirurgia.**

| # | Elemento | Pré | Pós |
|---|---|---|---|
| 1 | Retângulo principal | 1 | 2 |
| 2 | Triângulo à esquerda | 1 | 2 |
| 3 | Seta na ponta do triângulo | 1 | 1 |
| 4 | Linha vertical central | 1 | 2 |
| 5 | Linha horizontal central | 1 | 2 |
| 6 | Triângulo inferior | 1 | 1 |
| 7 | Linha pontilhada | 0,5 | 2 |
| 8 | Estrela | 1 | 1 |
| 9 | X do quadrante esquerdo | 0,5 | 2 |
| 10 | Diagonal do quadrante direito | 0,5 | 2 |
| 11 | Retângulo superior | 2 | 2 |
| 12 | Seta do quadrante direito | 0,5 | 1 |
| | **Total** | **11** | **20** |

- Pré 11: no percentil 5. Retângulo torto, X desfeito, a pontilhada virou uma diagonal contínua, estrela desfeita, as setas sem ponta. **Alteração visioconstrutiva.**
- Pós 20: entre os percentis 25 e 50, dentro do esperado. A armação, as divisões, o X, a diagonal e a pontilhada saem certos. Sobram os elementos soltos: a seta da esquerda longe da ponta do triângulo, o triângulo de baixo fora do canto, a estrela com raios que não se cruzam, a seta de cima com a ponta pela metade.
- A estratégia mudou junto com o escore: antes começou pelo detalhe (o retângulo pequeno) e não fechou a estrutura; depois começou pela armação, "primeiro o esquadro".
- Aceite meio ponto de diferença entre os grupos: o crivo pede julgamento.
- Efeito de prática: mesmo teste, três meses depois. Um ganho de 9 pontos, do percentil 5 para a faixa média, vai muito além do que a repetição explica, e vem junto com a melhora fora do teste: veste-se sozinho, voltou aos consertos, pega a caneta de primeira, sai pela porta certa, pentágonos certos no MEEM.
- Sensorial × perceptivo: exame oftalmológico com campo visual normal antes da cirurgia. A queixa era perceptiva, e foi ela que melhorou.
- Resposta à equipe: a cirurgia não teve impacto negativo sobre a habilidade visioconstrutiva. A cópia passou de alterada para dentro do esperado, o que indica recuperação depois da retirada do tumor. Restam imprecisões na localização de elementos periféricos; vale reavaliar no seguimento.
- Se algum grupo atribuir a melhora à cirurgia "curar" a região: o meningioma comprime o tecido sem invadi-lo, e a retirada alivia a compressão. Isso é fala do professor, não precisa estar no parágrafo dos alunos.
-->

---
layout: panels
kicker: Para levar
title: Três coisas que ficam
panels:
  - {
      title: "Ver não é perceber",
      icon: "lucide:eye",
      items: [
        "Corrija o olho antes de interpretar",
        "Com a visão boa, a falha é perceptiva"
      ]
    }
  - {
      title: "Envelhecer muda o planejamento",
      icon: "lucide:route",
      items: [
        "A cópia simples se mantém",
        "Perder-se em lugar conhecido não é esperado"
      ]
    }
  - {
      title: "A figura com a norma certa",
      icon: "lucide:shapes",
      items: [
        "Cópia de 0 a 24, lida pelo percentil",
        "Leia a evocação à luz da cópia"
      ]
    }
---

---
layout: reference
kicker: Referências
title: O capítulo e a Figura de Taylor simplificada
groups:
  - title: "Processamento espacial e envelhecimento"
    items:
      - {
          term: "Paula, Moreira, Coutinho e Mograbi, 2013",
          desc: "Paula, J. J., Moreira, L., Coutinho, G. e Mograbi, D. C. Aspectos do
            processamento espacial em idosos: percepção, consciência, orientação
            espacial e habilidades visioespaciais. In: Malloy-Diniz, L. F., Fuentes,
            D. e Cosenza, R. M. (orgs.), <em>Neuropsicologia do envelhecimento: uma
            abordagem multidimensional</em>. Porto Alegre: Artmed, cap. 11, p.
            197-209 — <strong>base primária dos blocos 1 e 2 e das figuras</strong>."
        }
  - title: "A Figura de Taylor simplificada"
    items:
      - {
          term: "de Paula et al., 2016",
          desc: "de Paula, J. J., Costa, M. V., Andrade, G. F., Ávila, R. T. e
            Malloy-Diniz, L. F. Validity and reliability of a “simplified” version
            of the Taylor Complex Figure Test for the assessment of older adults
            with low formal education. <em>Dementia &amp; Neuropsychologia</em>,
            10(1), 52-57 — <strong>artigo-base para a turma</strong>."
        }
      - {
          term: "de Paula, 2018",
          desc: "de Paula, J. J. Variantes da Figura Complexa de Taylor. In:
            Malloy-Diniz, L. F. et al. (orgs.), <em>Avaliação
            neuropsicológica</em>, 2. ed. Porto Alegre: Artmed."
        }
      - {
          term: "Ávila et al., 2015",
          desc: "Ávila, R. T. et al. Working memory and cognitive flexibility
            mediates visuoconstructional abilities in older adults with
            heterogeneous cognitive ability. <em>Journal of the International
            Neuropsychological Society</em>, 21(5), 392-398."
        }
      - {
          term: "Taylor, 1969",
          desc: "Taylor, L. B. Localization of cerebral lesions by psychological
            testing. <em>Clinical Neurosurgery</em>, 16, 269-287."
        }
---

<!--
- Os autores citados nas notas dos blocos 1 e 2 (Ungerleider e Mishkin, Goodale e Milner, Farah, Gil, Aguirre e D'Esposito, Benton, Kleist, Guérin, Ska e Belleville, Mitrushina, Salthouse, Sadun, Serra, Crutch, Bozeat, Dawson, Baiyewu) estão na lista de referências do capítulo. Não foram conferidos nos originais.
- O manual de aplicação, com a folha de registro e as normas preliminares, está em `referencias/aula-08/1063565119-Taylor.pdf` (Labep_neuro, de Paula, 2019, versão 2).
- As figuras 11.1 a 11.4 são recortes do capítulo (`referencias/aula-08/recortes/`); a 11.4 aparece sem o painel da DA inicial. O esquema das vias e o da figura numerada são autorais; o das vias usa o atlas de Brodmann da aula 06.
-->

---
layout: end
title: Até a próxima
subtitle: Enxergar bem e entender o que se vê são coisas diferentes.
contact: FASM · Neuropsicologia II
---
