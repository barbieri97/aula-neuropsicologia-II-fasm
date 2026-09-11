---
theme: slidev-theme-fasm
title: "Funções executivas no idoso"
info: O que são as funções executivas, a tríade que as sustenta e as funções
  complexas que dela dependem; o que o envelhecimento normal muda em cada
  subcomponente; aplicação, correção e interpretação da FAB
date: "2026-09-15"
author: FASM · Neuropsicologia II
# Gera o PDF no build (via playwright-chromium) e liga o botão de download no deck.
download: true
exportFilename: aula-06-funcoes-executivas-idoso
themeConfig:
  lang: pt-BR
layout: lead
index: "06"
kicker: Neuropsicologia II · FASM
subtitle: Os processos que controlam os outros processos — o que são, o que a
  idade faz com eles e como se mede isso na clínica.
---

<!--
- **FE** — funções executivas.
- **FAB** — *Frontal Assessment Battery*, Bateria de Avaliação Frontal.
- **CCL** — comprometimento cognitivo leve.
- **g de Hedges** — medida de tamanho de efeito; g = 1,0 significa uma diferença de um desvio-padrão entre os dois grupos.
- Estrutura do encontro: 1 h de exposição, 30 min de intervalo, 1 h 30 de vinheta em grupo.
-->

---
layout: agenda
kicker: Aula 06 · o caminho de hoje
title: Caminho da aula
items:
  - {
      topic: "As funções executivas",
      desc: "a tríade, as funções complexas, o comportamento e a neuroanatomia"
    }
  - {
      topic: "As executivas no envelhecimento",
      desc: "qual subcomponente cai, qual se mantém e o que isso significa"
    }
  - {
      topic: "Avaliação das executivas",
      desc: "a FAB: aplicação, correção e interpretação"
    }
  - {
      topic: "Vinheta clínica",
      desc: "um protocolo de FAB para corrigir e interpretar em grupo"
    }
---

<!--
- Os três primeiros blocos reaparecem como slides de seção, numerados de 01 a 03. A trilha no topo mostra em qual deles a turma está.
- A dinâmica não tem slides: a ficha é entregue em papel depois do intervalo.
-->

---
layout: section
index: "01"
kicker: Parte um
title: As funções executivas
subtitle: Antes de perguntar o que a idade faz com elas, é preciso dizer o que
  elas são — e o que elas não são.
---

---
layout: define
kicker: A definição
term: Funções executivas
definition: Conjunto de processos mentais que <em>controlam outros processos</em>
  a serviço de um comportamento dirigido a uma meta — na formulação, no
  planejamento, na execução e no desempenho efetivo da ação.
points:
  - "Não são um conteúdo, são um controle: não guardam a informação, decidem o
    que fazer com ela"
  - "Aparecem quando a resposta automática não serve"
  - "Comprometem-se com frequência após lesão frontal ou dos núcleos da base"
---

<!--
- A definição é a que abre Beato et al. (2007), o artigo da versão brasileira da FAB, alinhada à de Diamond (2013).
- Contraste útil com a aula 05: memória é conteúdo, executiva é controle. Um paciente pode ter os dois preservados, um dos dois, ou nenhum.
-->

---
layout: showcase
kicker: A observação fundadora
title: O acidente que separou <em>inteligência</em> de <em>conduta</em>
subtitle: Phineas Gage sobreviveu à barra de ferro e manteve fala, memória e
  força. O que se desfez foi a capacidade de se conduzir.
image: /phineas-gage.jpg
side: right
alt: Daguerreótipo de Phineas Gage segurando a barra de ferro que lhe atravessou
  o crânio, com a órbita esquerda fechada pela lesão
---

<!--
- 1848, Cavendish, Vermont. A barra entrou pela bochecha esquerda e saiu pelo topo do crânio, lesando o pré-frontal ventromedial.
- O relato de Harlow: "já não era Gage". Manteve o que se media na época — linguagem, memória, movimento — e perdeu o que não se media.
- É o caso que obriga a postular um domínio próprio: há algo que quebra sem que a inteligência caia.
-->

---
layout: feature
kicker: Quando elas entram em cena
title: Três situações que <em>exigem</em> controle executivo
columns: 3
features:
  - {
      icon: "lucide:sparkles",
      title: "Novidade",
      desc: "a situação não tem rotina pronta — o caminho precisa ser montado na hora"
    }
  - {
      icon: "lucide:target",
      title: "Meta",
      desc: "a ação só faz sentido por causa de um resultado que ainda não chegou"
    }
  - {
      icon: "lucide:split",
      title: "Conflito",
      desc: "a resposta mais fácil é a errada, e precisa ser segurada"
    }
---

<!--
- Regra de bolso para a anamnese: pergunte por situações novas, não por rotinas. O idoso com disfunção executiva costuma ir bem no que repete há trinta anos e falhar no que mudou no mês passado.
- É por isso que a queixa aparece primeiro na família e não no consultório: no consultório quase tudo é roteiro.
-->

---
layout: image
kicker: De onde vem o conceito
title: Luria e o lobo frontal como <em>unidade de programação</em>
image: /alexander-luria.jpg
side: right
alt: Retrato em preto e branco de Alexander Luria, neuropsicólogo soviético
---

Luria descreveu o lobo frontal como a terceira unidade funcional do cérebro: a que
programa, regula e verifica a atividade.

A ideia sobrevive a todos os modelos posteriores — há um sistema que não executa a
tarefa e sim **supervisiona** quem a executa.

<!--
- Alexander Romanovich Luria (1902-1977). A tarefa punho-borda-palma, que está na FAB, é dele.
- O que mudou de Luria para cá: deixou-se de falar de "o" lobo frontal como função única e passou-se a decompor o controle em subcomponentes separáveis. É o próximo slide.
-->

---
layout: diagram
kicker: Bloco 1 · em uma figura
title: A tríade que sustenta todo o resto
note: "O modelo de Diamond (2013): três núcleos separáveis e, sobre eles, as
  funções complexas. Não há um quarto componente — as complexas são estes três
  combinados."
---

<Figure src="/fe-triade.svg" alt="Três núcleos executivos lado a lado — controle inibitório, memória operacional e flexibilidade cognitiva — sustentando, acima, a faixa das funções executivas complexas" />

<!--
- **Unidade e diversidade** (Friedman e Miyake, 2017): os três são fortemente correlacionados entre si, mas separáveis quando medidos como variáveis latentes. Nem um bloco só, nem três coisas independentes.
- Consequência para a avaliação: um teste que "mede função executiva" mede, na prática, um desses núcleos — mais o que a tarefa carrega de linguagem, motricidade e velocidade.
-->

---
layout: define
kicker: Núcleo 1
term: Controle inibitório
definition: Capacidade de <em>suprimir</em> uma resposta dominante — um impulso,
  um hábito, uma distração — quando ela não serve à meta em curso.
points:
  - "É o que permite não fazer o que já está pronto para ser feito"
  - "Falha aqui aparece como impulsividade, não como esquecimento"
---

<!--
- Diamond separa o alvo da inibição: a resposta motora, a interferência perceptual e o conteúdo mental que insiste em voltar. É o slide seguinte.
- Na FAB, os subtestes 4 e 5 medem exatamente isto, de dois jeitos diferentes.
-->

---
layout: columns
kicker: As três faces da inibição
title: O que exatamente está sendo segurado?
columns:
  - {
      title: "Inibição de resposta",
      items: [
        "O alvo é uma <strong>ação</strong> já disparada",
        "Não interromper quem fala",
        "Não pegar o doce que está na mesa"
      ]
    }
  - {
      title: "Controle de interferência",
      items: [
        "O alvo é um <strong>estímulo</strong> que compete",
        "Ler a conta com a televisão ligada",
        "Achar o remédio na gaveta cheia"
      ]
    }
  - {
      title: "Inibição cognitiva",
      items: [
        "O alvo é um <strong>conteúdo mental</strong> que volta",
        "Largar a hipótese que não deu certo",
        "Parar de ruminar o mesmo assunto"
      ]
    }
---

<!--
- A distinção é de Diamond (2013). Importa na clínica porque a queixa da família quase sempre descreve a primeira, e os testes medem sobretudo a segunda.
- Exemplo clássico de controle de interferência: o Stroop. É, na meta-análise de Maldonado et al. (2020), a tarefa com maior diferença entre jovem e idoso — g = 2,11.
-->

---
layout: define
kicker: Núcleo 2
term: Memória operacional
definition: Sistema de capacidade limitada que <em>mantém</em> a informação
  disponível e, ao mesmo tempo, <em>opera</em> sobre ela.
points:
  - "Manter sem manipular é memória de curto prazo — outra coisa"
  - "É o que permite comparar, ordenar e recombinar sem apoio externo"
  - "O limite não é de tempo, é de quanto cabe em uso simultâneo"
---

<!--
- Distinção que costuma cair: repetir sete dígitos é curto prazo; repetir os mesmos sete de trás para frente é operacional.
- O modelo detalhado é o de Baddeley, visto na aula 05. Vale reabrir, porque o componente que interessa hoje é a central executiva — e ela é, em Baddeley, o próprio controle atencional.
-->

---
layout: diagram
kicker: Retomando a aula 05
title: A central executiva de Baddeley
note: Na aula passada este modelo explicava a memória. Hoje o que interessa é o
  bloco de cima — a central executiva é atenção controlada, a mesma coisa que
  aqui se chama núcleo executivo.
---

<Figure src="/modelo-baddeley.svg" alt="A central executiva no topo, controlando três subsistemas — alça fonológica, buffer episódico e esboço visuoespacial — e, abaixo de cada um, o sistema de longo prazo com que ele conversa" />

<!--
- O ponto do slide é a costura entre as duas aulas: memória operacional aparece nas duas listas porque é, literalmente, o mesmo sistema visto de dois ângulos.
- Baddeley, A. (2012). Working memory: theories, models, and controversies. *Annual Review of Psychology*, 63, 1-29.
-->

---
layout: define
kicker: Núcleo 3
term: Flexibilidade cognitiva
definition: Capacidade de <em>mudar</em> de perspectiva, de regra ou de
  estratégia quando o que estava em curso deixou de funcionar.
points:
  - "Exige inibir o critério antigo e carregar o novo na memória operacional"
  - "É o último dos três a se desenvolver e se apoia nos outros dois"
  - "Falha aqui aparece como rigidez, não como lentidão"
---

<!--
- Diamond trata a flexibilidade como derivada: ela usa inibição (largar a regra velha) e memória operacional (segurar a regra nova). É por isso que a tríade não é uma lista de três iguais.
- O teste de referência é o Wisconsin; na FAB, o item de fluência lexical é a versão de bancada.
-->

---
layout: panels
kicker: A tríade num quadro só
title: O que cada núcleo faz, como falha e onde isso aparece
panels:
  - {
      title: "Controle inibitório",
      icon: "lucide:hand",
      items: [
        "<strong>Faz:</strong> segura a resposta dominante",
        "<strong>Falha:</strong> impulsividade, desinibição",
        "<strong>Em casa:</strong> compra por impulso, fala o que não deve"
      ]
    }
  - {
      title: "Memória operacional",
      icon: "lucide:layers",
      items: [
        "<strong>Faz:</strong> mantém e opera ao mesmo tempo",
        "<strong>Falha:</strong> perde o fio, refaz do começo",
        "<strong>Em casa:</strong> erra a conta de cabeça, esquece o que ia fazer"
      ]
    }
  - {
      title: "Flexibilidade cognitiva",
      icon: "lucide:repeat",
      items: [
        "<strong>Faz:</strong> troca de regra e de estratégia",
        "<strong>Falha:</strong> rigidez, perseveração",
        "<strong>Em casa:</strong> insiste no caminho fechado, repete a mesma frase"
      ]
    }
---

<!--
- Este quadro é a ponte para a anamnese: a linha "em casa" é a linguagem em que a queixa chega, e a linha "faz" é a linguagem em que o laudo sai.
- Peça exemplos da turma antes de mostrar a terceira linha de cada cartão.
-->

---
layout: default
kicker: Fixação · pergunta 1
title: Uma senhora de 71 anos responde antes de a pergunta terminar
---

Ela interrompe o entrevistador, começa a responder e, no meio da frase, para e diz
"esqueci o que eu ia falar". Repete o padrão quatro vezes na sessão. Como descrever
o achado?

<v-clicks>

- **A.** É falha de memória episódica: ela não retém o que acabou de ouvir
- **B.** São duas falhas distintas — inibição de resposta e memória operacional
- **C.** É ansiedade de desempenho, e não um achado cognitivo
- **D.** É falha de atenção sustentada: ela não consegue manter o foco

</v-clicks>

<!--
- Deixe a turma responder antes de virar o slide.
- Se alguém escolher A, pergunte: o que exatamente ela deixou de reter — a pergunta, ou a própria resposta que estava montando?
-->

---
layout: default
kicker: Fixação · resposta 1
title: A resposta é <span class="accent2">B</span>
---

<Grid head highlight="row:3" :data="[
  ['', 'Alternativa', 'Por que erra — ou por que acerta'],
  ['A', 'Memória episódica', 'o que se perdeu não foi armazenado e sim mantido em uso; episódica é o que se recupera depois, não o que está na mão agora'],
  ['B', 'Inibição e memória operacional', '<b>correta</b> — interromper é falha de inibição de resposta; perder a própria resposta no meio é falha de memória operacional'],
  ['C', 'Ansiedade de desempenho', 'é hipótese plausível, mas não explica a interrupção — e um achado que se repete quatro vezes se descreve antes de se atribuir'],
  ['D', 'Atenção sustentada', 'sustentada é manter o foco ao longo do tempo, sem competição; aqui há competição — entre o impulso de falar e a instrução de esperar'],
]" />

<!--
- O ponto que fica: uma só observação clínica costuma conter mais de um déficit executivo. Descrever cada um separadamente é o trabalho.
- Consequência prática: o teste que se escolhe depois muda conforme qual dos dois se quer confirmar.
-->

---
layout: statement
kicker: A transição do bloco
title: As funções complexas não são um quarto componente. São os três núcleos
  <em>trabalhando juntos</em>.
---

<!--
- É a tese de Diamond (2013) e a moldura que Corbo e Casagrande (2022) usam para revisar a literatura do idoso.
- Consequência de avaliação: quando o planejamento falha, a pergunta seguinte é sempre "por causa de qual núcleo?".
-->

---
layout: steps
kicker: Função complexa 1
title: Planejamento, em quatro passos
steps:
  - {
      title: "Articular a meta",
      desc: "dizer, para si mesmo, qual é o resultado pretendido",
      icon: "lucide:flag"
    }
  - {
      title: "Formular o plano",
      desc: "quebrar a meta em etapas intermediárias e ordená-las",
      icon: "lucide:list-ordered"
    }
  - {
      title: "Criar e disparar marcadores",
      desc: "deixar sinais que lembrem de retomar cada etapa na hora certa",
      icon: "lucide:bookmark"
    }
  - {
      title: "Avaliar o alcance",
      desc: "conferir se a meta inicial foi mesmo atingida, e corrigir se não",
      icon: "lucide:check-check"
    }
---

<!--
- O modelo é o de Shallice e Burgess, retomado por Corbo e Casagrande (2022).
- Note quantos núcleos cada passo consome: o passo 2 é memória operacional pura; o passo 3 exige inibir o que está em curso; o passo 4 exige flexibilidade para trocar de plano.
- Na prática clínica, o passo que mais falha em silêncio é o 4: o paciente executa e não confere.
-->

---
layout: columns
kicker: Funções complexas
title: Três nomes que aparecem juntos na literatura
columns:
  - {
      title: "Raciocínio",
      items: [
        "Tornar explícito o que estava implícito",
        "Indutivo e dedutivo",
        "Medido por semelhanças e matrizes"
      ]
    }
  - {
      title: "Resolução de problemas",
      items: [
        "Chegar à meta por uma sequência de operações",
        "Ou de uma vez, por <em>insight</em>",
        "Medida por torres e labirintos"
      ]
    }
  - {
      title: "Inteligência fluida",
      items: [
        "Raciocinar sobre material <strong>novo</strong>",
        "Tratada como sinônimo das duas anteriores",
        "Distinta da cristalizada, que é o já aprendido"
      ]
    }
---

<!--
- A arrumação é a de Corbo e Casagrande (2022), que organizam a revisão exatamente nestes quatro rótulos — planejamento, raciocínio, resolução de problemas e inteligência fluida.
- Ressalva delas mesmas: **impureza de tarefa**. O Matrix Reasoning aparece na literatura ora como raciocínio, ora como raciocínio visuoespacial, ora como QI, ora como fluida. O nome do teste não garante o nome da função.
-->

---
layout: diagram
kicker: Bloco 1 · em uma figura
title: Cada complexa se apoia em núcleos diferentes
note: É por isso que "déficit de planejamento" não é um diagnóstico de função — é
  o começo de uma pergunta. A resposta está em qual dos núcleos falhou.
---

<Figure src="/fe-complexas-dependencia.svg" alt="Três colunas — planejamento, raciocínio e resolução de problemas — e sob cada uma as funções executivas básicas de que ela depende" />

<!--
- Consequência prática: dois pacientes podem falhar na Torre de Londres por motivos opostos — um por não segurar o primeiro movimento que veio à cabeça, outro por não conseguir manter a configuração-alvo em mente.
- É a mesma lógica da aula 05: o escore diz que falhou; o perfil diz onde.
-->

---
layout: default
kicker: Do déficit à queixa
title: Como cada falha chega descrita pela família
---

<Grid head :data="[
  ['O que falhou', 'Como a família conta'],
  ['Inibição de resposta', '&quot;ficou sem filtro&quot;, &quot;fala o que não deve&quot;, &quot;gasta o que não tem&quot;'],
  ['Controle de interferência', '&quot;só funciona se estiver tudo quieto&quot;, &quot;se distrai com qualquer coisa&quot;'],
  ['Memória operacional', '&quot;esquece no meio do caminho o que ia fazer&quot;, &quot;erra a conta que sempre fez&quot;'],
  ['Flexibilidade cognitiva', '&quot;não aceita fazer diferente&quot;, &quot;repete a mesma história no mesmo dia&quot;'],
  ['Planejamento', '&quot;começa tudo e não termina nada&quot;, &quot;a festa de Natal virou um caos&quot;'],
  ['Avaliação do resultado', '&quot;faz errado e acha que ficou bom&quot;, &quot;não vê problema nenhum&quot;'],
]" />

<!--
- Esta tabela é ferramenta de anamnese: a coluna da direita é o que se ouve, a da esquerda é o que se escreve.
- A última linha é a mais importante e a menos perguntada. Ausência de autocrítica não é negação psicológica — costuma ser parte do próprio déficit executivo.
-->

---
layout: panels
kicker: A síndrome disexecutiva
title: Três apresentações, três circuitos
panels:
  - {
      title: "Disexecutiva cognitiva",
      icon: "lucide:brain",
      items: [
        "Planeja mal, perde o fio, não alterna",
        "Desempenho ruim em teste, conduta social preservada",
        "Circuito <strong>dorsolateral</strong>"
      ]
    }
  - {
      title: "Desinibida",
      icon: "lucide:zap",
      items: [
        "Impulsividade, desajuste social, perda de crítica",
        "Pode ir bem em teste e mal na vida",
        "Circuito <strong>orbitofrontal</strong>"
      ]
    }
  - {
      title: "Apática",
      icon: "lucide:battery-low",
      items: [
        "Iniciativa reduzida, fala escassa, indiferença",
        "Confunde-se com depressão, e não é",
        "Circuito <strong>cingulado anterior</strong>"
      ]
    }
---

<!--
- A tripartição é de Cummings (1993), confirmada em Bonelli e Cummings (2007).
- A distinção apatia × depressão é de prova: na apatia falta iniciativa sem sofrimento; na depressão há tristeza, culpa e anedonia. Rastreio de humor negativo não exclui apatia — ele reforça a hipótese.
- A forma desinibida é a que a vinheta de hoje descreve.
-->

---
layout: default
kicker: Fixação · pergunta 2
title: Homem de 69 anos faz um comentário sobre o peso da nora no almoço
---

Em dois anos passou a comentar em voz alta a aparência de estranhos, riu durante um
velório e comprou três televisores. Memória preservada, MEEM 28/30, orientado. Qual
é a leitura mais adequada?

<v-clicks>

- **A.** Sem queixa de memória e com MEEM normal, não há indicação de avaliação neuropsicológica
- **B.** É um quadro psiquiátrico primário: o padrão é maniforme e a cognição está intacta
- **C.** O achado central é desinibição — um déficit executivo que o MEEM não mede
- **D.** É a desinibição esperada do envelhecimento, quando a pessoa deixa de se preocupar com convenções

</v-clicks>

<!--
- Deixe a turma responder antes de virar o slide.
- Vale perguntar o que mudaria a leitura: se isso tivesse começado aos 25 anos; se houvesse euforia e insônia; se a autocrítica estivesse preservada.
-->

---
layout: default
kicker: Fixação · resposta 2
title: A resposta é <span class="accent2">C</span>
---

<Grid head highlight="row:4" :data="[
  ['', 'Alternativa', 'Por que erra — ou por que acerta'],
  ['A', 'MEEM normal dispensa avaliação', 'inverte o raciocínio: o MEEM quase não toca função executiva nem cognição social; normalidade nele não cobre o domínio em questão'],
  ['B', 'Quadro psiquiátrico primário', 'é diferencial obrigatório, não conclusão: falta o resto do quadro maniforme, e primeiro episódio aos 69 anos exige investigar causa neurológica'],
  ['C', 'Desinibição, déficit executivo', '<b>correta</b> — o que mudou foi a conduta, não o conteúdo cognitivo; é o desenho do circuito orbitofrontal (Cummings, 1993)'],
  ['D', 'Desinibição própria da idade', 'não existe tal norma: envelhecer não produz desajuste social progressivo; o que muda com a idade é velocidade e eficiência, não o freio social'],
]" />

<!--
- O ponto que fica: perfil executivo alterado com rastreio global normal é um achado frequente, e é exatamente onde o instrumento de hoje entra.
- O desenho completo do caso corresponde aos traços de variante comportamental da degeneração frontotemporal (Rascovsky et al., 2011), vistos na aula 04 — mas o nosso trabalho hoje para na descrição da função.
-->

---
layout: diagram
kicker: Neuroanatomia
title: Três circuitos, três síndromes
note: Cada circuito pré-frontal tem uma síndrome assinatura — e ela se repete
  quando a lesão está na parte subcortical do mesmo circuito, não no córtex.
  Cummings (1993); Bonelli e Cummings (2007).
---

<Figure src="/fe-neuroanatomia.svg" alt="Encéfalo esquemático em vista lateral com três setores pré-frontais numerados — dorsolateral, orbitofrontal e cingulado anterior — e, ao lado, a síndrome característica de cada circuito" />

<!--
- São cinco circuitos no artigo de Cummings; dois são motores (oculomotor e motor). Os três de interesse comportamental são estes.
- Cada circuito é uma alça: córtex pré-frontal → estriado → globo pálido e substância negra → tálamo → de volta ao mesmo córtex.
-->

---
layout: columns
kicker: A consequência clínica da alça
title: Por que disfunção executiva não é sinônimo de lesão frontal
columns:
  - {
      title: "A alça inteira produz a síndrome",
      items: [
        "Lesão do estriado, do pálido ou do tálamo repete o quadro cortical",
        "A substância branca que liga os pontos também conta",
        "Daí o termo <strong>fronto-subcortical</strong>"
      ]
    }
  - {
      title: "Onde isso aparece no idoso",
      items: [
        "Doença de pequenos vasos e leucoaraiose",
        "Doença de Parkinson e parkinsonismos atípicos",
        "Depressão vascular, vista na aula 03"
      ]
    }
---

<!--
- É a razão de a FAB ter sido validada originalmente em doença de Parkinson, atrofia de múltiplos sistemas, degeneração corticobasal e paralisia supranuclear progressiva — e não só em demência frontotemporal (Dubois et al., 2000).
- Para o laudo: descrever o perfil executivo não localiza lesão. Localiza circuito, no máximo — e mesmo isso com parcimônia.
-->

---
layout: statement
kicker: Fecho do bloco um
title: O que se descreve é <em>função</em>. O que a neuroimagem descreve é
  <em>lesão</em>. Os dois se encontram no circuito, não no escore.
---

<!--
- Ponte para o bloco 2: agora que os componentes têm nome, dá para perguntar o que a idade faz com cada um — e a resposta não é a mesma para todos.
-->

---
layout: section
index: "02"
kicker: Parte dois
title: As executivas no envelhecimento
subtitle: O declínio existe, é grande e não é uniforme. Qual subcomponente cai,
  qual se mantém e o que isso significa na clínica.
---

---
layout: metric
kicker: Tamanho de efeito · função executiva global
value: 1,29
label: O desempenho executivo do idoso saudável fica cerca de <strong>um
  desvio-padrão</strong> abaixo do adulto jovem. Meta-análise de 401 artigos e
  1.268 tamanhos de efeito (Maldonado et al., 2020).
---

<!--
- **g de Hedges** — tamanho de efeito padronizado: 1,29 significa uma diferença de 1,29 desvio-padrão entre jovens de 18 a 35 anos e idosos de 65 ou mais.
- É um número de grupo, não de pessoa. Serve como régua para dizer se o rebaixamento de um paciente é o esperado ou algo além dele.
- Todos os estudos incluídos são transversais — desenho que tende a exagerar o declínio, por misturar efeito de idade com efeito de geração.
-->

---
layout: chart
kicker: O declínio não é uniforme
title: Tamanho de efeito por subcomponente
note: g de Hedges, jovens de 18 a 35 anos contra idosos de 65 ou mais.
  <em>Atualização</em> foi o único significativamente menor que os demais.
  Maldonado et al. (2020), 438 amostras independentes.
chart:
  type: bar
  horizontal: true
  height: "300px"
  categories: ["Inibição", "Velocidade de processamento", "Alternância", "Executiva global", "Atualização"]
  series:
    - { name: "g de Hedges", data: [1.64, 1.50, 1.40, 1.29, 0.80] }
---

<!--
- Os rótulos em inglês, que aparecem na literatura: inibição = *inhibition*; alternância = *shifting*; atualização = *updating*. O trio é o modelo de unidade e diversidade de Miyake e Friedman.
- Intervalos de confiança de 95%: inibição 1,33-1,95; velocidade 1,19-1,80; alternância 1,02-1,79; global 1,12-1,47; atualização 0,68-0,92.
- Atualização difere dos outros três com p = 0,001; entre os outros três não houve diferença significativa.
-->

---
layout: default
kicker: Lendo o gráfico
title: O que cai muito, o que cai pouco — e a ressalva
---

O idoso saudável fica mais de um desvio-padrão abaixo do jovem em **inibição**,
**velocidade** e **alternância**. Em **atualização** a diferença é bem menor.

<Callout tone="warn" icon="lucide:triangle-alert">
Parte da vantagem da atualização pode ser de <strong>método</strong>: ela é medida por
acerto, e as outras, por tempo de reação — que carrega a lentificação geral do idoso.
</Callout>

<!--
- A segunda explicação que os autores oferecem: as tarefas de atualização são muito verbais, e vocabulário é o que menos muda com a idade.
- Achado que desarma a explicação simples: mesmo com diferença grande em velocidade de processamento, a atualização não cai na mesma proporção. Ou seja, velocidade não é a causa única do declínio executivo.
-->

---
layout: diagram
kicker: A moldura que organiza tudo
title: Fluida cai, cristalizada se mantém
note: Traçado <em>esquemático</em>, para mostrar a forma das duas curvas — não são
  dados de um estudo. A distinção é a que Corbo e Casagrande (2022) usam para
  situar as funções complexas.
---

<Figure src="/fe-cristalizada-fluida.svg" alt="Duas curvas esquemáticas ao longo da vida adulta: a inteligência cristalizada sobe e se mantém até idades avançadas, enquanto a fluida, que sustenta as funções executivas, cai de forma contínua a partir do início da vida adulta" />

<!--
- A fluida atinge o pico na adolescência e é sensível ao envelhecimento fisiológico; a cristalizada atinge o pico no início da vida adulta e é pouco afetada.
- É a figura que explica por que o mesmo idoso conta uma história com riqueza de vocabulário e trava numa tarefa nova de duas regras.
- E é o contraponto ao "déficit de atualização menor": o que sustenta a atualização é justamente material verbal, do lado cristalizado da conta.
-->

---
layout: default
kicker: Memória operacional no envelhecimento
title: Guardar já é difícil. Guardar <em>enquanto</em> se faz outra coisa é pior
---

<Grid head highlight="row:4" :data="[
  ['Condição', 'g', 'Leitura'],
  ['Só armazenar', '0,604', 'a diferença entre jovem e idoso já é média-alta na tarefa simples'],
  ['Armazenar + processar', '0,638', 'com processamento concorrente a diferença cresce pouco'],
  ['Custo da concorrência', '−0,182', 'o custo extra de fazer as duas coisas é <b>real, porém pequeno</b>'],
]" />

<Callout icon="lucide:scale">
Quando se <strong>equipara a dificuldade de base</strong> entre os dois grupos antes de
combinar as tarefas, o custo extra do idoso cai para perto de zero.
</Callout>

<!--
- Jaroslawska e Rhodes (2019): 43 referências, 135 observações de tarefa dupla.
- O termo técnico para equiparar a dificuldade de base é **titulação**. Sem titular, g = −0,246; com titulação, g = −0,111, não significativo.
- A moral metodológica: boa parte do que se atribui a "déficit de coordenação do idoso" é, na verdade, o idoso partindo de um ponto mais baixo na tarefa simples.
-->

---
layout: vs
kicker: E o material também decide
title: O mesmo idoso vai melhor com palavra do que com figura
left:
  title: "Material verbal"
  items: [
    "g = 0,553 na tarefa de armazenamento",
    "Apoia-se no vocabulário, que a idade preserva",
    "É o material da maior parte dos testes de rastreio"
  ]
right:
  title: "Material não verbal"
  items: [
    "g = 0,859 na mesma tarefa",
    "Sem apoio do que já foi aprendido",
    "É onde a diferença de idade aparece maior"
  ]
label: "×"
---

<!--
- Jaroslawska e Rhodes (2019), diferença entre os dois domínios: −0,306, p < 0,05.
- Consequência de escolha de teste: uma bateria só verbal subestima o déficit; uma bateria só visuoespacial superestima. Isso vale para qualquer laudo de idoso.
- É a mesma dissociação verbal-não verbal que apareceu na aula 05, a propósito da Memória Lógica contra a Figura de Rey.
-->

---
layout: default
kicker: Fixação · pergunta 3
title: Senhora de 73 anos perde o fio quando o neto entra na cozinha
---

Ela conta que, se for interrompida no meio de uma receita, precisa "começar tudo de
novo". Sozinha e em silêncio, cozinha sem erro. Faz compras, dirige e administra as
contas. Como classificar o relato?

<v-clicks>

- **A.** É comprometimento cognitivo leve: a queixa é específica e tem repercussão prática
- **B.** É falha de armazenamento: o conteúdo se perde depois de alguns segundos
- **C.** É o padrão esperado — a idade aumenta o custo da interferência, com funcionalidade preservada
- **D.** Nada muda na memória operacional do idoso saudável; a queixa precisa de outra explicação

</v-clicks>

<!--
- Deixe a turma responder antes de virar o slide.
- Pergunte o que precisaria mudar no relato para a resposta virar A — e ouça se alguém traz funcionalidade.
-->

---
layout: default
kicker: Fixação · resposta 3
title: A resposta é <span class="accent2">C</span>
---

<Grid head highlight="row:4" :data="[
  ['', 'Alternativa', 'Por que erra — ou por que acerta'],
  ['A', 'Comprometimento cognitivo leve', 'o critério exige declínio objetivo com independência preservada mas esforço aumentado em tarefa complexa; aqui não há falha, há custo em uma condição específica'],
  ['B', 'Falha de armazenamento', 'confunde manter-em-uso com guardar; a receita não foi esquecida, foi despejada quando a atenção foi tomada'],
  ['C', 'Padrão esperado da idade', '<b>correta</b> — é exatamente o efeito de processamento concorrente sobre o armazenamento, com toda a funcionalidade preservada'],
  ['D', 'Nada muda no idoso saudável', 'contraria a meta-análise: a diferença existe mesmo na tarefa simples (g = 0,60) e cresce um pouco com concorrência'],
]" />

<!--
- O que decide a resposta não é o escore, é a funcionalidade — a mesma lógica do critério de transtorno neurocognitivo leve × maior, da aula 04.
- Conduta razoável aqui: orientação ambiental (uma tarefa por vez, reduzir ruído) e reavaliação no prazo, não bateria completa imediata.
-->

---
layout: columns
kicker: A régua do bloco dois
title: O que é esperado e o que pede investigação
columns:
  - {
      title: "Esperado no envelhecimento normal",
      items: [
        "Mais lentidão para responder",
        "Mais custo quando há distração ou dupla tarefa",
        "Mais dificuldade com material novo e não verbal",
        "<strong>Funcionalidade preservada</strong>"
      ]
    }
  - {
      title: "Pede investigação",
      items: [
        "Mudança de <strong>conduta</strong>: desinibição, apatia, perda de crítica",
        "Perda de autonomia em tarefa que já era rotina",
        "Instalação em meses, com curso progressivo",
        "Queixa que vem da família, não do paciente"
      ]
    }
---

<!--
- A coluna da direita é a que separa envelhecimento de doença. Nenhum dos quatro itens dela é explicado por lentificação.
- Repare que o critério decisivo continua sendo funcional, não psicométrico. O escore entra depois, para descrever o perfil.
-->

---
layout: default
kicker: Na fronteira
title: As funções complexas no comprometimento cognitivo leve
---

<Grid head :data="[
  ['Função', 'Estudos com alteração no CCL', 'O que a revisão observa'],
  ['Planejamento', '56,8%', 'torres e Zoo Map discriminam; o Teste do Relógio, não'],
  ['Raciocínio', '50%', 'resultado inconsistente, salvo em matrizes'],
  ['Resolução de problemas', '100%', 'apenas 6 estudos, cada um com uma tarefa diferente'],
  ['Inteligência fluida', '71,4%', '7 estudos, com boa qualidade metodológica'],
]" />

<!--
- Corbo e Casagrande (2022): revisão sistemática de 73 estudos, sem meta-análise.
- Leitura das autoras: planejamento e raciocínio frequentemente **não** discriminam CCL de idoso saudável — e elas atribuem isso à baixa sensibilidade dos instrumentos, não à ausência de déficit.
- O dado sobre o Relógio é prático: ele avalia praxia e habilidade visuoespacial muito mais do que planejamento, apesar de ser usado como se medisse o segundo.
-->

---
layout: statement
kicker: O que ainda está em aberto
title: Ninguém decidiu ainda se a falha executiva <em>anuncia</em> a doença ou se
  ela é <em>consequência</em> do que já se instalou.
---

<!--
- É a questão que Corbo e Casagrande deixam explícita no fim da revisão.
- Os três limites que sustentam a dúvida: os estudos são transversais; não há protocolo padronizado entre eles; e a mesma tarefa é usada para nomear funções diferentes.
- Para a turma: é a diferença entre um marcador precoce e um achado tardio — e ela muda o que faz sentido reavaliar, e quando.
-->

---
layout: section
index: "03"
kicker: Parte três
title: Avaliação das funções executivas
subtitle: O que conferir antes de testar, e um instrumento de bancada — a Bateria
  de Avaliação Frontal.
---

---
layout: columns
kicker: Antes de aplicar qualquer coisa
title: Três coisas que invalidam o escore se não forem conferidas
columns:
  - {
      title: "Escolaridade",
      items: [
        "É a variável que mais pesa nos testes executivos",
        "Define contra qual norma o escore será lido",
        "Analfabetismo funcional muda o que a tarefa exige"
      ]
    }
  - {
      title: "Sensorial e motor",
      items: [
        "A FAB tem itens motores e itens verbais",
        "Tremor, rigidez e artrose derrubam a série motora",
        "Surdez não corrigida vira erro de instrução"
      ]
    }
  - {
      title: "Humor e fármacos",
      items: [
        "Depressão rebaixa iniciativa e velocidade",
        "Benzodiazepínicos e anticolinérgicos idem",
        "Registre fármaco, dose e data de início"
      ]
    }
---

<!--
- Beato et al. (2007) excluíram da amostra normativa quem usava benzodiazepínico, antidepressivo ou neuroléptico, e quem pontuava mais de 7 na escala Cornell de depressão. Quem não confere isso está comparando o paciente com um grupo do qual ele não faz parte.
- Sobre a escolaridade: no estudo brasileiro, dois dos seis subtestes — semelhanças e instruções conflitantes — correlacionaram significativamente com anos de estudo.
-->

---
layout: default
kicker: Por que um instrumento específico
title: O que o rastreio global <em>não</em> vê
---

O MEEM não tem nenhum item de cognição social e quase nada de função executiva. Um
paciente com desinibição franca pode fazer 28 em 30.

<Callout tone="warn" icon="lucide:eye-off">
Rastreio global normal <strong>não</strong> é evidência de função executiva preservada.
É evidência de que aquele instrumento não olhou para lá.
</Callout>

<!--
- Retoma o limite do MEEM discutido na aula 04, a propósito dos seis domínios do DSM-5.
- É exatamente o argumento que motivou Dubois et al. (2000) a construir uma bateria de bancada específica para o frontal.
-->

---
layout: define
kicker: O instrumento de hoje
term: FAB
definition: <em>Frontal Assessment Battery</em> — bateria breve de bancada para
  rastrear disfunção executiva, com <strong>seis subtestes</strong> de 0 a 3
  pontos cada e escore total de <strong>0 a 18</strong>.
points:
  - "Aplicação em menos de dez minutos, sem material"
  - "Construída por Dubois, Slachevsky, Litvan e Pillon (2000)"
  - "Versão brasileira de Beato, Nitrini, Formigoni e Caramelli (2007)"
---

<!--
- Propriedades do estudo original: concordância entre examinadores κ = 0,87; consistência interna α = 0,78; 89,1% dos casos classificados corretamente entre pacientes e controles.
- Validada originalmente em doença de Parkinson, atrofia de múltiplos sistemas, degeneração corticobasal, paralisia supranuclear progressiva e demência frontotemporal.
- É rastreio, não bateria diagnóstica. Ela diz "olhe para cá", não "é isto".
-->

---
layout: diagram
kicker: Bloco 3 · em uma figura
title: Seis subtestes, seis domínios
note: Cada subteste isola um aspecto do controle executivo. O escore total esconde
  o perfil — e é o perfil que interessa.
---

<Figure src="/fab-seis-subtestes.svg" alt="Os seis subtestes da Bateria de Avaliação Frontal em dois blocos de três, cada um com o domínio executivo que investiga" />

<!--
- Os dois últimos estão marcados em outra cor porque são os dois que dependem mais diretamente do circuito orbitofrontal — e são os que caem primeiro em quadros com desinibição.
- Os subtestes 4 e 5 parecem iguais e não são: o 4 pede fazer o oposto (interferência), o 5 pede não fazer nada (inibição).
-->

---
layout: steps
kicker: Como se aplica
title: A ordem, subteste a subteste
steps:
  - {
      title: "Semelhanças",
      desc: "“De que maneira eles são parecidos?” — banana e laranja; mesa e cadeira; tulipa, rosa e margarida",
      icon: "lucide:shapes"
    }
  - {
      title: "Fluência lexical",
      desc: "“Diga quantas palavras puder começando com a letra S, menos nomes próprios” — 60 segundos",
      icon: "lucide:type"
    }
  - {
      title: "Série motora",
      desc: "punho, borda, palma — três vezes só o examinador, três vezes junto, depois o paciente sozinho",
      icon: "lucide:hand-metal"
    }
  - {
      title: "Instruções conflitantes",
      desc: "“Bata duas vezes quando eu bater uma”, depois o inverso; série 1-1-2-1-2-2-2-1-1-2",
      icon: "lucide:shuffle"
    }
  - {
      title: "Vai–não vai",
      desc: "“Bata uma vez quando eu bater uma”, depois “não bata quando eu bater duas”; mesma série",
      icon: "lucide:octagon-x"
    }
  - {
      title: "Comportamento de preensão",
      desc: "“Não pegue minhas mãos” — palmas do paciente para cima nos joelhos, e o examinador toca as dele",
      icon: "lucide:grab"
    }
---

<!--
- No subteste 1, se ele falhar no primeiro item, ajude dizendo "tanto a banana quanto a laranja são…" — mas credite **zero** naquele item e não ajude nos dois seguintes.
- No subteste 2, se não responder em 5 segundos, dê o exemplo "sapo"; se pausar 10 segundos, estimule.
- No subteste 6, o examinador toca as palmas **sem dizer nada e sem olhar para o paciente**. Se ele pegar, repete-se depois de avisar de novo.
-->

---
layout: default
kicker: Como se corrige
title: A régua dos extremos de cada subteste
---

<Grid head :data="[
  ['Subteste', 'Vale 3 pontos', 'Vale 0 ponto'],
  ['1 · Semelhanças', 'as três respostas de categoria', 'nenhuma resposta de categoria'],
  ['2 · Fluência lexical', 'mais de nove palavras válidas', 'menos de três'],
  ['3 · Série motora', 'seis séries consecutivas sozinho', 'nem três séries junto com o examinador'],
  ['4 · Instruções conflitantes', 'nenhum erro', 'bate como o examinador quatro vezes seguidas'],
  ['5 · Vai–não vai', 'nenhum erro', 'bate como o examinador quatro vezes seguidas'],
  ['6 · Preensão', 'não pega as mãos do examinador', 'pega mesmo depois de ter sido avisado'],
]" />

<!--
- Valores intermediários: nos subtestes 1 e 2 a pontuação é por contagem (duas e uma resposta certas valem 2 e 1; de seis a nove palavras valem 2, de três a cinco valem 1). Nos subtestes 4 e 5, um ou dois erros valem 2, mais de dois valem 1.
- No subteste 2 só contam palavras distintas: repetição, variação da mesma palavra (sapato e sapateiro) e nome próprio não pontuam. É o erro de correção mais comum.
- No subteste 6, hesitar e perguntar o que fazer vale 2; pegar sem hesitar vale 1.
-->

---
layout: default
kicker: Contra qual norma
title: O escore só significa alguma coisa ao lado da escolaridade
---

<Grid head :data="[
  ['Escolaridade', 'FAB — média ± desvio-padrão'],
  ['1 a 3 anos', '10,9 ± 2,3'],
  ['4 a 7 anos', '12,8 ± 2,7'],
  ['8 a 11 anos', '13,8 ± 2,2'],
  ['12 anos ou mais', '15,3 ± 2,3'],
]" />

<Callout icon="lucide:graduation-cap">
Na amostra brasileira o escore correlacionou com <strong>escolaridade</strong> (r = 0,47)
e com o MEEM (r = 0,39). Com <strong>idade e sexo, não</strong>.
</Callout>

<!--
- Beato et al. (2012): 275 indivíduos saudáveis, idade média 66,4 ± 10,6 anos. É o estudo que fecha a lacuna do artigo de 2007, que era preliminar e trazia só a média global — 13,0 ± 2,3, em 48 idosos.
- O achado de que a idade **não** correlaciona é contraintuitivo e importante: quatro pontos de diferença entre a faixa mais baixa e a mais alta de escolaridade são mais do que qualquer efeito de idade medido.
-->

---
layout: metric
kicker: O ponto de corte brasileiro
value: 9
unit: " pontos"
label: <strong>Nove pontos ou menos</strong> classificam como caso; dez ou mais,
  como não-caso. Sensibilidade 0,72 e especificidade 0,61 em 391 idosos saudáveis
  contra 93 pacientes com doença de Alzheimer (Paula et al., 2013).
---

<!--
- Especificidade de 0,61 é modesta: quatro em cada dez pessoas sem a doença caem abaixo do corte. É um rastreio que erra para o lado de investigar demais — o que, num rastreio, é o erro preferível.
- As mesmas autoras sugerem tratar como clinicamente relevante qualquer resultado abaixo do percentil 25 da faixa de escolaridade, o que é uma leitura mais fina que o corte único.
- Consistência interna: 0,79 no grupo saudável e 0,87 no grupo com Alzheimer.
-->

---
layout: vs
kicker: Para que serve o escore total
title: A FAB separa o que o MEEM não separa
left:
  title: "Demência frontotemporal"
  items: [
    "FAB média 7,6 ± 4,2",
    "O déficit executivo é o quadro",
    "Rebaixa a FAB antes de rebaixar o MEEM"
  ]
right:
  title: "Doença de Alzheimer"
  items: [
    "FAB média 12,6 ± 3,7",
    "O déficit inicial é de memória episódica",
    "Pode ter MEEM igual ao da coluna ao lado"
  ]
label: "×"
---

<!--
- Slachevsky et al. (2004): 26 pacientes com demência frontotemporal e 64 com Alzheimer. Os escores de FAB diferiram (p < 0,001); os de MEEM, não.
- No subgrupo de demência leve (MEEM ≥ 24), o corte de 12 pontos deu sensibilidade de 77% e especificidade de 87% para separar os dois.
- Note que este corte é outro, e para outra pergunta: 12 separa duas doenças; 9/10 separa caso de não-caso na população brasileira.
-->

---
layout: default
kicker: Os limites
title: O que a FAB <em>não</em> resolve
---

<Callout tone="warn" icon="lucide:triangle-alert">
A FAB é <strong>rastreio</strong>. Um escore baixo diz que vale investigar o domínio
executivo — não diz qual núcleo falhou, nem qual é a etiologia.
</Callout>

- Fortemente influenciada pela escolaridade: sem a norma certa, o escore engana
- Especificidade modesta; o falso positivo é frequente
- Sem item de planejamento propriamente dito, nem de tomada de decisão
- Um escore total normal pode esconder um subteste zerado

<!--
- É o mesmo raciocínio da aula 04 a propósito do MEEM: efeito de chão em quem tem pouca escolaridade, efeito de teto em quem tem muita.
- Para planejamento, os instrumentos que discriminam na literatura são a Torre de Londres, a Torre de Hanói e o Zoo Map — e não o Teste do Relógio (Corbo e Casagrande, 2022).
- A regra prática: leia o perfil dos seis itens antes do total. É o total que empata; é o perfil que informa.
-->

---
layout: embed
kicker: Ver aplicar
title: Uma sessão de FAB, do primeiro ao sexto subteste
iframe: https://www.youtube.com/embed/dJ0ubrh1ack
---

<!--
- A demonstração está **em inglês**; a ordem dos subtestes e os critérios são os mesmos da versão brasileira. Não encontrei registro equivalente em português — vale procurar antes da aula e trocar se aparecer.
- Vale parar no subteste 6 e chamar atenção para o detalhe que os alunos sempre erram: o examinador não fala e não olha para o paciente enquanto toca as palmas.
-->

---
layout: default
kicker: Fixação · pergunta 4
title: Homem de 70 anos, quatro anos de escolaridade, FAB 11 em 18
---

Aposentado, mora sozinho, cuida da casa e das contas sem ajuda. MEEM 26 em 30, sem
queixa da família. Foi encaminhado para "avaliar o frontal". O que dizer do escore?

<v-clicks>

- **A.** Está abaixo da média brasileira de 13,0, portanto há disfunção executiva
- **B.** Está dentro do esperado para a escolaridade dele e acima do ponto de corte
- **C.** Onze pontos configuram rastreio positivo e indicam investigar demência frontotemporal
- **D.** Com o MEEM normal, a FAB não acrescenta informação ao caso

</v-clicks>

<!--
- Deixe a turma responder antes de virar o slide. Se possível, projete de novo a tabela de normas.
- A conta que interessa: 11 contra 12,8 ± 2,7 dá menos de um desvio-padrão de distância.
-->

---
layout: default
kicker: Fixação · resposta 4
title: A resposta é <span class="accent2">B</span>
---

<Grid head highlight="row:3" :data="[
  ['', 'Alternativa', 'Por que erra — ou por que acerta'],
  ['A', 'Abaixo da média geral', 'usa a norma errada: a média de 13,0 é de uma amostra com 8 anos de estudo em média; a faixa dele tem média 12,8 ± 2,7'],
  ['B', 'Dentro do esperado', '<b>correta</b> — 11 fica a menos de um desvio-padrão da média da faixa de 4 a 7 anos, e acima do corte 9/10'],
  ['C', 'Rastreio positivo', 'erra duas vezes: o escore não cruza o corte, e rastreio positivo nunca aponta etiologia — aponta domínio'],
  ['D', 'MEEM normal dispensa a FAB', 'inverte o argumento do bloco: é justamente porque o MEEM não cobre o executivo que a FAB foi aplicada'],
]" />

<!--
- O ponto que fica: nenhum escore de teste executivo é interpretável sem a escolaridade ao lado. É a variável que mais pesa neste instrumento.
- E o contexto fecha a leitura: mora sozinho, administra as contas, sem queixa de informante. Funcionalidade preservada é dado, não detalhe.
-->

---
layout: panels
kicker: Levando para o laudo
title: Como escrever um achado executivo
panels:
  - {
      title: "Diga a função",
      icon: "lucide:pen-line",
      items: [
        "O nome do teste não é o nome do achado",
        "“Controle inibitório rebaixado”, não “FAB 5”",
        "Descreva o erro, não só o escore"
      ]
    }
  - {
      title: "Ancore na norma certa",
      icon: "lucide:ruler",
      items: [
        "Escolaridade sempre; idade quando o teste exigir",
        "Diga qual norma usou e de onde ela vem",
        "Compare com a faixa, não com a média geral"
      ]
    }
  - {
      title: "Separe o que não se decide",
      icon: "lucide:git-branch",
      items: [
        "Rastreio aponta domínio, não etiologia",
        "Diga o que faltou para concluir mais",
        "Funcionalidade é dado de informante, não de teste"
      ]
    }
---

<!--
- A terceira coluna é a que evita o erro mais caro: transformar rastreio em diagnóstico. Vale repetir a fórmula da aula 04 — o exame descreve o perfil, a história decide o nível, e a etiologia exige mais do que ambos.
-->

---
layout: statement
kicker: Dinâmica em grupo
title: Uma ficha. Corrijam a FAB, comparem com a norma certa e digam <em>qual
  função</em> falhou.
---

Em grupos de quatro ou cinco. Cada grupo corrige os seis subtestes a partir do registro
verbatim, soma o total, compara com a faixa de escolaridade e escreve o parágrafo de
conclusão.

<Tags :items="['1 · pontue cada subteste', '2 · some o total', '3 · compare com a faixa', '4 · leia o perfil', '5 · o que investigar depois?']" />

<!--
GABARITO — para você, não para eles. A ficha está em `referencias/aula-06/`.

**Sr. Osmar, 68 anos, 11 anos de escolaridade.**
Pontuação esperada, subteste a subteste: 1 · Semelhanças = **1** (só a categoria de frutas;
"são de madeira" e "são bonitas" não são resposta de categoria). 2 · Fluência lexical = **1**
(seis palavras ditas, mas *sapateiro* é variação de *sapato*, *sapato* repete e *Sandra* é
nome próprio — restam três válidas). 3 · Série motora = **1** (fracassa sozinho, consegue
três séries com o examinador). 4 · Instruções conflitantes = **1** (mais de dois erros, sem
imitação sustentada). 5 · Vai–não vai = **0** (da 5ª tentativa em diante imita o examinador até o fim da série — bem mais que as quatro imitações consecutivas do critério).
6 · Preensão = **1** (pega sem hesitar, para depois de avisado).

**Total = 5 / 18.**

A COMPARAÇÃO CERTA
- Faixa de 8 a 11 anos de estudo: 13,8 ± 2,2 (Beato et al., 2012). Cinco pontos ficam a
  cerca de quatro desvios-padrão abaixo da média da faixa dele.
- Ponto de corte 9/10 (Paula et al., 2013): muito abaixo. Rastreio francamente positivo.
- Quem comparar com a média geral de 13,0 chega à mesma conclusão por sorte; peça a norma
  da faixa.

AS TRÊS ARMADILHAS DE CORREÇÃO
- A fluência: contar as palavras ditas dá 6 e a regra dá 3. É a mais errada das seis.
- Os itens 4 e 5 parecem o mesmo teste. O 4 pede fazer o oposto; o 5 pede não fazer nada.
  Ele passa raspando no 4 e zera no 5 — a inibição pura é a que colapsa.
- O item 6 não é 0: ele para quando avisado. Zero seria pegar mesmo depois do aviso.

O PERFIL, QUE É O PONTO DE CHEGADA
- Relativamente melhor nos itens conceituais e motores; **zerado na inibição**.
- É o desenho do circuito **orbitofrontal** (Cummings, 1993), e casa item a item com a
  história: comentário inadequado, compra por impulso, perda de empatia, hiperoralidade.
- Memória preservada e MEEM 27/30 são parte do achado, não ruído: mostram que o rastreio
  global não vê o que a FAB viu.

SE ALGUM GRUPO FECHAR DIAGNÓSTICO
- O desenho corresponde aos traços de variante comportamental descritos por Rascovsky et al.
  (2011), e a aula 04 dá o nome. Mas a ficha não traz neuroimagem, nem entrevista completa
  com informante, nem seguimento. Dá para descrever a função e levantar hipótese de
  circuito. Não dá para cravar etiologia — e não é isso que se pede hoje.
-->

---
layout: panels
kicker: Para levar
title: Três coisas que ficam
panels:
  - {
      title: "Controle, não conteúdo",
      icon: "lucide:sliders-horizontal",
      items: [
        "Executiva não é o que se sabe, é o que se faz com o que se sabe",
        "Aparece quando a rotina não resolve",
        "Por isso a queixa vem da família, e não da sala"
      ]
    }
  - {
      title: "O declínio não é uniforme",
      icon: "lucide:trending-down",
      items: [
        "Inibição, velocidade e alternância caem muito",
        "Atualização cai bem menos",
        "O que decide o normal é a funcionalidade"
      ]
    }
  - {
      title: "O perfil antes do total",
      icon: "lucide:list-checks",
      items: [
        "Escore só existe ao lado da escolaridade",
        "Rastreio aponta domínio, não etiologia",
        "Um subteste zerado vale mais que o total"
      ]
    }
---

<!--
- Se sobrar tempo, peça que cada grupo diga em uma frase qual dos três pontos mais mudou o que eles pensavam antes da aula.
-->

---
layout: reference
kicker: Referências · 1 de 2
title: O conceito, o modelo e o envelhecimento
items:
  - {
      term: "Diamond, 2013",
      desc: "Executive functions. <em>Annual Review of Psychology</em>, 64,
        135-168. doi:10.1146/annurev-psych-113011-143750 — <strong>o modelo da
        tríade</strong> usado nesta aula."
    }
  - {
      term: "Friedman e Miyake, 2017",
      desc: "Unity and diversity of executive functions: individual differences as
        a window on cognitive structure. <em>Cortex</em>, 86, 186-204.
        doi:10.1016/j.cortex.2016.04.023"
    }
  - {
      term: "Maldonado et al., 2020",
      desc: "Age differences in the subcomponents of executive functioning.
        <em>The Journals of Gerontology: Series B</em>.
        doi:10.1093/geronb/gbaa005 — <strong>base primária do bloco 2</strong>: os
        tamanhos de efeito por subcomponente."
    }
  - {
      term: "Jaroslawska e Rhodes, 2019",
      desc: "Adult age differences in the effects of processing on storage in
        working memory: a meta-analysis. <em>Psychology and Aging</em>, 34(4),
        512-530. doi:10.1037/pag0000358"
    }
  - {
      term: "Corbo e Casagrande, 2022",
      desc: "Higher-level executive functions in healthy elderly and mild cognitive
        impairment: a systematic review. <em>Journal of Clinical Medicine</em>,
        11(5), 1204. doi:10.3390/jcm11051204"
    }
  - {
      term: "Cummings, 1993",
      desc: "Frontal-subcortical circuits and human behavior. <em>Archives of
        Neurology</em>, 50(8), 873-880 — os três circuitos e suas síndromes; ver
        também Bonelli e Cummings (2007), <em>Dialogues in Clinical
        Neuroscience</em>, 9(2), 141-151."
    }
---

<!--
- O retrato de Luria e o daguerreótipo de Phineas Gage vêm do Wikimedia Commons, ambos em **domínio público**. Todos os esquemas da aula são autorais.
- Os quatro primeiros estão em `referencias/aula-06/`, salvo Diamond (2013) e Friedman e Miyake (2017), cujos PDFs o PubMed Central não libera por download automático — estão em acesso aberto nos identificadores PMC4084861 e PMC5104682.
- Baddeley (2012), citado no slide do modelo de memória operacional, está na bibliografia da aula 05.
-->

---
layout: reference
kicker: Referências · 2 de 2
title: A FAB e a avaliação
items:
  - {
      term: "Dubois et al., 2000",
      desc: "The FAB: a Frontal Assessment Battery at bedside. <em>Neurology</em>,
        55(11), 1621-1626. doi:10.1212/wnl.55.11.1621 — <strong>o instrumento
        original</strong>."
    }
  - {
      term: "Beato et al., 2007",
      desc: "Brazilian version of the Frontal Assessment Battery (FAB): preliminary
        data on administration to healthy elderly. <em>Dementia &amp;
        Neuropsychologia</em>, 1(1), 59-65. doi:10.1590/S1980-57642008DN10100010 —
        <strong>base primária do bloco 3</strong>; traz a versão brasileira em
        apêndice."
    }
  - {
      term: "Beato et al., 2012",
      desc: "Frontal assessment battery in a Brazilian sample of healthy controls:
        normative data. <em>Arquivos de Neuro-Psiquiatria</em>, 70(4), 278-280.
        doi:10.1590/S0004-282X2012005000009 — as médias por escolaridade."
    }
  - {
      term: "Paula et al., 2013",
      desc: "Screening for executive dysfunction with the Frontal Assessment
        Battery: psychometric properties analysis and representative normative data
        for Brazilian older adults. <em>Psicologia em Pesquisa</em>, 7(1) — o ponto
        de corte 9/10."
    }
  - {
      term: "Slachevsky et al., 2004",
      desc: "Frontal assessment battery and differential diagnosis of frontotemporal
        dementia and Alzheimer disease. <em>Archives of Neurology</em>, 61(7),
        1104-1107. doi:10.1001/archneur.61.7.1104"
    }
  - {
      term: "Rascovsky et al., 2011",
      desc: "Sensitivity of revised diagnostic criteria for the behavioural variant
        of frontotemporal dementia. <em>Brain</em>, 134(9), 2456-2477.
        doi:10.1093/brain/awr179 — usado no gabarito da vinheta, não no deck."
    }
---

<!--
- Beato et al. (2012), Paula et al. (2013) e Rascovsky et al. (2011) são de **acesso aberto** e estão salvos em `referencias/aula-06/`. Dubois et al. (2000) e Slachevsky et al. (2004) não são.
- **doi** — identificador digital de objeto, o endereço permanente de um artigo científico.
- O material do teste em si — as instruções literais e a folha de correção — é de uso restrito ao profissional habilitado. Ele está na ficha da dinâmica, não neste deck.
-->

---
layout: end
title: Até a próxima
subtitle: Função executiva é o que sobra quando a rotina acaba. A avaliação é o
  trabalho de dizer qual parte desse controle falhou, e onde isso aparece na vida.
contact: FASM · Neuropsicologia II
---
