---
theme: slidev-theme-fasm
title: "Processamento espacial no idoso"
info: O que é o processamento visioespacial e os seus componentes; o que muda
  no envelhecimento normal e nos quadros demenciais; avaliação pelo Teste do
  Desenho do Relógio, com a escala de Shulman
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
- **TDR**: Teste do Desenho do Relógio.
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
      desc: "o Teste do Desenho do Relógio e a escala de Shulman"
    }
  - {
      topic: "Vinheta clínica",
      desc: "um relógio para pontuar e interpretar em grupo"
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
- **B.** Amnésia espacial anterógrada
- **C.** Agnosia de ponto de referência
- **D.** Envelhecimento normal da visão

</v-clicks>

---
layout: default
kicker: Fixação · resposta 2
title: A resposta é <span class="accent2">B</span>
---

<Grid head highlight="row:3" :data="[
  ['', 'Alternativa', 'Por que erra, ou por que acerta'],
  ['A', 'Retrógrada', 'atinge os ambientes antigos; o caminho da casa antiga está preservado'],
  ['B', 'Anterógrada', '<b>correta</b>: navega no que já conhecia e não aprende o ambiente novo'],
  ['C', 'Ponto de referência', 'ele reconhece o próprio bloco quando chega nele'],
  ['D', 'Visão', 'a visão é a mesma nos dois trajetos; o que muda é a novidade do lugar'],
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
- Para figuras familiares (como o relógio), a programação motora pode partir direto da memória de longo prazo, sem planejamento novo.
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
layout: image
kicker: Envelhecimento normal
title: Dirigir
image: https://picsum.photos/seed/aula08-dirigir/900/900
side: right
alt: Imagem ilustrativa provisória
---

A direção tende a ficar menos eficiente com a idade.

Muitos erros ao volante vêm de falhas visioespaciais e visuomotoras.

<!--
- Dawson et al. (2010), citados no capítulo.
- A imagem é um placeholder do Lorem Picsum: troque por uma foto de um idoso ao volante.
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
title: A mesma figura em seis pessoas
note: Cada quadro desorganiza a cópia do seu jeito.
---

<Figure src="/cap11-fig4-seis-diagnosticos.png" alt="Seis cópias de uma figura complexa adaptada: um retângulo dividido, com cruzes, um asterisco, um triângulo embaixo e setas. Modelo; controle saudável, quase idêntico ao modelo; doença de Alzheimer inicial, com as divisões desalinhadas e o asterisco desfeito; degeneração lobar frontotemporal, com a estrutura mantida e partes omitidas; lesão vascular à esquerda, com elementos fora do lugar; demência mista, Alzheimer e vascular, com a estrutura deformada e o triângulo solto" />

<!--
- Figura 11.4 do mesmo capítulo.
- Compare a DA inicial com a DLFT: na DLFT o contorno geral se mantém e o que falta são partes, por desatenção e planejamento.
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
kicker: Apresentação atípica da DA
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

- **A.** Presbiopia: troca de óculos resolve
- **B.** Alteração perceptiva e espacial: precisa ser investigada
- **C.** Esperado no envelhecimento normal
- **D.** Falha de memória episódica

</v-clicks>

---
layout: default
kicker: Fixação · resposta 3
title: A resposta é <span class="accent2">B</span>
---

<Grid head highlight="row:3" :data="[
  ['', 'Alternativa', 'Por que erra, ou por que acerta'],
  ['A', 'Presbiopia', 'a visão já foi corrigida e examinada; o sensorial está resolvido'],
  ['B', 'Perceptiva e espacial', '<b>correta</b>: com o olho funcionando, falha o uso da informação espacial'],
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
subtitle: O Teste do Desenho do Relógio.
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
- Visioconstrução só se interpreta quando o déficit não é motor nem sensorial.
-->

---
layout: define
kicker: A tarefa clássica
term: Teste do Desenho do Relógio
definition: Tarefa breve de rastreio em que a pessoa desenha um relógio de
  ponteiros marcando uma <em>hora pedida</em>.
points:
  - "Exige planejamento, visioconstrução e conhecimento do relógio"
  - "O peso maior é das funções executivas"
---

<!--
- Paula et al. (2013), em 170 idosos: a associação mais forte do relógio foi com as funções executivas, seguidas do estado cognitivo global, do processamento visioespacial e do conhecimento semântico.
- Há vários sistemas de pontuação. Nesta aula, o de Shulman, que tem dados brasileiros.
-->

---
layout: steps
kicker: Teste do Desenho do Relógio
title: Como se aplica
steps:
  - {
      title: "Entregue a folha",
      desc: "Com um círculo já desenhado",
      icon: "lucide:circle"
    }
  - {
      title: "Dê a instrução",
      desc: "Coloque os números para que isto fique parecido com um relógio e marque onze e dez",
      icon: "lucide:message-square"
    }
  - {
      title: "Peça a cópia",
      desc: "Depois, mostre um relógio pronto e peça que ele o copie",
      icon: "lucide:copy"
    }
---

<!--
- Instrução de Shulman (Sunnybrook, Toronto): círculo pré-desenhado e "onze e dez". Os ponteiros têm de apontar para o 11 e para o 2.
- Fale a hora por extenso, "onze e dez", e não "11h10": o número escrito dá a resposta.
- Avalia-se só o desenho final, sem tempo-limite.
- A cópia não tem norma brasileira: nesta aula ela é uma comparação qualitativa com o desenho livre.
-->

---
layout: default
kicker: Escala de Shulman
title: A pontuação, de 0 a 5
---

<Grid head :data="[
  ['Pontos', 'O desenho'],
  ['5', 'relógio perfeito'],
  ['4', 'erros visioespaciais pequenos'],
  ['3', 'hora errada, com boa organização visioespacial'],
  ['2', 'desorganização visioespacial moderada dos números; a hora não pode ser marcada'],
  ['1', 'desorganização visioespacial grave'],
  ['0', 'nenhuma representação razoável de um relógio'],
]" />

<!--
- Escala de Shulman (2000), na redação de Graeff et al. (2021).
- Leia de cima para baixo: primeiro pergunte se a organização está boa; só depois olhe a hora.
-->

---
layout: diagram
kicker: Escala de Shulman
title: Um relógio para cada escore
note: Do 5 ao 3 a organização se mantém; do 2 para baixo ela se perde.
---

<Figure src="/relogio-shulman-escores.svg" alt="Seis relógios desenhados num círculo já impresso, um por escore da escala de Shulman. 5: números e ponteiros certos, marcando onze e dez. 4: números com espaçamento irregular e hora certa. 3: números bem distribuídos, mas ponteiros no 10 e no 11, hora errada. 2: números amontoados na metade direita e embaixo, hora impossível de marcar. 1: números soltos, repetidos e fora do círculo. 0: um número e um rabisco, sem relógio" />

<!--
- Desenhos esquemáticos, feitos para a aula.
- O 3 é o erro mais típico: o ponteiro vai para o 10, preso ao número dito na instrução, em vez de ir para o 2.
-->

---
layout: stats
kicker: Escala de Shulman · idosos brasileiros
title: Como interpretar
columns: 3
stats:
  - {
      value: "0–3",
      label: "alterado; 4 e 5 são normais (Fuzikawa et al., 2007)",
      icon: "lucide:scale",
      tone: "warn"
    }
  - {
      value: "≤ 4",
      unit: " anos",
      label: "de estudo: o teste é confiável, mas pouco válido (Lourenço et al., 2008)",
      icon: "lucide:graduation-cap",
      tone: "bad"
    }
  - {
      value: "90",
      unit: "%",
      label: "de sensibilidade para DA quando somado ao MEEM (Aprahamian et al., 2010)",
      icon: "lucide:plus",
      tone: "good"
    }
---

<!--
- Fuzikawa et al. (2007): 1.118 idosos de Bambuí (MG), com baixa escolaridade, escala de Shulman, corte 3/4.
- Lourenço et al. (2008): 211 idosos com até 4 anos de estudo, no Rio de Janeiro; sensibilidade e especificidade em torno de 65%.
- Aprahamian et al. (2010): 121 idosos com DA e 99 controles, escolaridade heterogênea. Relógio + MEEM: sensibilidade de 89 a 90% e especificidade de 72 a 80%. É o artigo-base para os alunos.
- Rastreio não é diagnóstico: o escore baixo aponta onde investigar.
-->

---
layout: vs
kicker: Teste do Desenho do Relógio
title: Desenho livre e cópia
left:
  title: "Desenho livre"
  items: [
    "Exige planejar e evocar o relógio",
    "Mais sensível ao declínio inicial",
    "Peso das funções executivas"
  ]
right:
  title: "Cópia"
  items: [
    "O modelo está à vista",
    "Exige menos planejamento",
    "Peso da visioconstrução"
  ]
label: "×"
---

<!--
- Beber et al. (2016): o desenho livre é mais exigente e separa melhor os grupos que a versão de cópia.
- Crowe et al. (2010): o desenho livre se liga mais às funções executivas; a cópia, à construção visioespacial.
- Leitura clínica: livre ruim e cópia boa sugere dificuldade de planejamento ou de evocar o conceito; livre ruim e cópia ruim sugere dificuldade visioconstrutiva.
-->

---
layout: two-cols
kicker: Fixação · pergunta 4
title: Homem de 70 anos, oito anos de estudo
---

<Figure src="/relogio-pergunta-4.svg" alt="Relógio desenhado num círculo impresso: os doze números bem distribuídos, mas um ponteiro aponta para o 10 e o outro para o 11, em vez de onze e dez" />

::right::

Pedido: "onze e dez". Qual o escore de Shulman?

<v-clicks>

- **A.** 5
- **B.** 4
- **C.** 3
- **D.** 2

</v-clicks>

---
layout: default
kicker: Fixação · resposta 4
title: A resposta é <span class="accent2">C</span>
---

<Grid head highlight="row:4" :data="[
  ['', 'Escore', 'Por que erra, ou por que acerta'],
  ['A', '5', 'os números estão certos, mas a hora não; o 5 exige as duas coisas'],
  ['B', '4', 'o 4 é para erro visioespacial pequeno com a hora certa'],
  ['C', '3', '<b>correta</b>: organização boa, hora errada'],
  ['D', '2', 'o 2 é para números desorganizados; aqui eles estão bem distribuídos'],
]" />

<!--
- Escore 3 fica abaixo do corte 3/4: rastreio alterado.
- O ponteiro no 10 é o erro de ficar preso ao número da instrução. Puxe a ligação com as funções executivas.
-->

---
layout: embed
kicker: Teste do Desenho do Relógio
title: Aplicação no consultório
iframe: https://www.youtube-nocookie.com/embed/QCsRNAclNIU
---

<!--
- "Teste do relógio: Avaliação Cognitiva do Idoso", vídeo de alunos de Habilidades Médicas III da UNIFOR.
- Assista antes da aula: o vídeo foi escolhido pelo título e pela descrição, e o sistema de pontuação usado pode não ser o de Shulman.
-->

---
layout: statement
kicker: Vinheta clínica
title: Pontuem o relógio e comparem o <em>desenho livre</em> com a
  <em>cópia</em>.
---

<!--
GABARITO. A ficha está em `referencias/aula-08/vinheta-1-sr-valdemar.docx`.

**Sr. Valdemar, 74 anos, 6 anos de estudo.**
- Desenho livre: os doze números estão todos lá, mas espremidos na metade direita e na parte de baixo do círculo; o quadrante superior esquerdo está vazio. Os ponteiros apontam para a região do 10 e do 11, embaixo. **Shulman = 2** (desorganização moderada dos números; a hora não pode ser marcada).
- Corte 3/4 (Fuzikawa et al., 2007): **alterado.** Com 6 anos de estudo, a ressalva de Lourenço (≤ 4 anos) não se aplica.
- Cópia: com o modelo à vista, o círculo sai aberto, o 7 e o 8 se amontoam, o 12 escorrega para a esquerda e os ponteiros não partem do centro. **A cópia não resolve:** a dificuldade é visioconstrutiva, não só de planejamento.
- Sensorial × perceptivo: catarata operada e visão corrigida (exame recente). A queixa persiste com o olho funcionando.
- Orientação: perde-se no caminho de 30 anos (navegação em ambiente antigo).
- Memória: recados, conversas e compromissos preservados.
- Conclusão descritiva: alteração do processamento visioespacial (orientação e visioconstrução), com o componente sensorial corrigido e a memória do dia a dia relativamente preservada.
- Se algum grupo fechar diagnóstico: o perfil lembra uma apresentação posterior, mas a ficha não traz imagem nem avaliação completa. O trabalho de hoje é descrever a função.
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
      title: "O relógio com a norma certa",
      icon: "lucide:clock",
      items: [
        "Shulman: 0 a 3 é alterado",
        "Compare o desenho livre com a cópia"
      ]
    }
---

---
layout: reference
kicker: Referências · 1 de 2
title: O capítulo e o que o relógio mede
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
  - title: "O que o relógio mede"
    items:
      - {
          term: "Paula et al., 2013",
          desc: "Paula, J. J., Miranda, D. M., Moraes, E. N. e Malloy-Diniz, L. F.
            Mapping the clockworks: what does the Clock Drawing Test assess in
            normal and pathological aging? <em>Arquivos de
            Neuro-Psiquiatria</em>, 71(10), 763-768."
        }
      - {
          term: "Beber et al., 2016",
          desc: "Beber, B. C., Kochhann, R., Matias, B. e Chaves, M. L. F. The Clock
            Drawing Test: performance differences between the free-drawn and
            incomplete-copy versions in patients with MCI and dementia.
            <em>Dementia &amp; Neuropsychologia</em>, 10(3), 227-231."
        }
      - {
          term: "Crowe et al., 2010",
          desc: "Crowe, M., Allman, R. M., Triebel, K., Sawyer, P. e Martin, R. C.
            Normative performance on an executive clock drawing task (CLOX) in a
            community-dwelling sample of older adults. <em>Archives of Clinical
            Neuropsychology</em>, 25(7), 610-617."
        }
---

<!--
- Os autores citados nas notas dos blocos 1 e 2 (Ungerleider e Mishkin, Goodale e Milner, Farah, Gil, Aguirre e D'Esposito, Benton, Kleist, Guérin, Ska e Belleville, Mitrushina, Salthouse, Sadun, Serra, Crutch, Bozeat, Dawson, Baiyewu) estão na lista de referências do capítulo. Não foram conferidos nos originais.
- As figuras 11.1 a 11.4 são recortes do capítulo (`referencias/aula-08/recortes/`). Os esquemas das vias e dos relógios são autorais; o das vias usa o atlas de Brodmann da aula 06.
-->

---
layout: reference
kicker: Referências · 2 de 2
title: O teste do relógio · escala e dados brasileiros
items:
  - {
      term: "Aprahamian et al., 2010",
      desc: "Aprahamian, I., Martinelli, J. E., Neri, A. L. e Yassuda, M. S. The
        accuracy of the Clock Drawing Test compared to that of standard
        screening tests for Alzheimer's disease. <em>International
        Psychogeriatrics</em>, 22(1), 64-71. doi:10.1017/S1041610209991141 —
        <strong>artigo-base para a turma</strong>."
    }
  - {
      term: "Shulman, 2000",
      desc: "Shulman, K. I. Clock-drawing: is it the ideal cognitive screening
        test? <em>International Journal of Geriatric Psychiatry</em>, 15(6),
        548-561."
    }
  - {
      term: "Graeff et al., 2021",
      desc: "Graeff, D. B. et al. Clock drawing test: comparison between the
        Pfizer and the Shulman systems. <em>Dementia &amp;
        Neuropsychologia</em>, 15(4), 480-484. doi:10.1590/1980-57642021dn15-040009"
    }
  - {
      term: "Fuzikawa et al., 2007",
      desc: "Fuzikawa, C., Lima-Costa, M. F., Uchôa, E. e Shulman, K.
        Correlation and agreement between the MMSE and the Clock Drawing Test
        in older adults with low levels of schooling. <em>International
        Psychogeriatrics</em>, 19(4), 657-667."
    }
  - {
      term: "Lourenço et al., 2008",
      desc: "Lourenço, R. A. et al. The Clock Drawing Test: performance among
        elderly with low educational level. <em>Revista Brasileira de
        Psiquiatria</em>, 30(4), 309-315."
    }
---

<!--
- Aprahamian et al. (2010) não é de acesso aberto. Para a turma, a revisão aberta dos mesmos autores é Aprahamian et al. (2009), The Clock Drawing Test: a review of its accuracy in screening for dementia, Dementia & Neuropsychologia, 3(2), 74-81.
- A instrução com círculo pré-desenhado e "onze e dez" é a descrita pelo próprio Shulman.
-->

---
layout: end
title: Até a próxima
subtitle: Enxergar bem e entender o que se vê são coisas diferentes.
contact: FASM · Neuropsicologia II
---
