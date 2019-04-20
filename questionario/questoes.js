function getUserAnswers() {
  return [
    {
      inteligenciasPontuacao: {
        interpessoal:0,
        intrapessoal:0,
        logico:0,
        musical:0,
        espacial:0,
        fisico: 0,
        linguistica:0
      }
    },
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null},
    {altSelected:null}
  ];
}

function getQuestoes() {
  return [
    {
      enunciado:"Vamos lhe mostrar algumas perguntas a fim de identificar a inteligência que está mais desenvolvida em você!",
      alt: null
    },
    {
      enunciado:"Você gosta de aprender sobre sua personalidade?",
      alt: [
        {text:"Sim", inteligencia:"intrapessoal", pontuacao:2},
        {text:"UM POUCO", inteligencia:"intrapessoal", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Você costuma conversar consigo mesmo?",
      alt: [
        {text:"Sempre", inteligencia:"intrapessoal", pontuacao:3},
        {text:"Quase sempre",inteligencia:"intrapessoal", pontuacao:2},
        {text:"Quase nunca",inteligencia:"intrapessoal", pontuacao:1},
        {text:"Nunca",inteligencia:null}
      ]
    },
    {
      enunciado:"Você acha gráficos e tabelas fáceis de compreender?",
      alt: [
        {text:"Sim", inteligencia:"espacial", pontuacao:2},
        {text:"UM POUCO", inteligencia:"espacial", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Você consegue ver imagens claras quando fecha meus olhos e/ou consegue imaginar ambientes/imagens com facilidade?",
      alt:[
        {text:"Sim", inteligencia:"espacial", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Você consegue identificar com facilidade se um objeto cabe em determinado espaço?",
      alt:[
        {text:"Sim", inteligencia:"espacial", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Consegue compreender mapas mentais e diagramas?",
      alt:[
        {text:"Sim", inteligencia:"espacial", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Você gosta de fazer as coisas ouvindo música em segundo plano?",
      alt:[
        {text:"Sim", inteligencia:"musical", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Eu sempre tenho uma música ou o trecho de uma música na minha cabeça!",
      alt:[
        {text:"Verdadeiro", inteligencia:"musical", pontuacao:1},
        {text:"Falso",inteligencia:null}
      ]
    },
    {
      enunciado:"Gosto de cantar e/ou tocar algum instrumento musical!",
      alt:[
        {text:"Verdadeiro", inteligencia:"musical", pontuacao:1},
        {text:"Falso",inteligencia:null}
      ]
    },
    {
      enunciado:"A música é importante para você?",
      alt:[
        {text:"Muito importante!", inteligencia:"musical", pontuacao:2},
        {text:"Importante!",inteligencia:"musical", pontuacao: 1},
        {text:"Não é importante ou tem pouca importância!",inteligencia:null}
      ]
    },
    {
      enunciado:"Você considera fácil relacionar-se com outra pessoa?",
      alt:[
        {text:"Muito Fácil", inteligencia:"interpessoal", pontuacao:3},
        {text:"Fácil",inteligencia:"interpessoal", pontuacao: 2},
        {text:"UM POUCO COMPLICADO",inteligencia:"interpessoal", pontuacao: 1},
        {text:"É difícil se relacionar com outras pessoas",inteligencia:null}
      ]
    },
    {
      enunciado:"Acho fácil entender os sentimentos de outra pessoa!",
      alt:[
        {text:"Verdadeiro", inteligencia:"interpessoal", pontuacao:1},
        {text:"Falso",inteligencia:null}
      ]
    },
    {
      enunciado:"Você gosta de ler?",
      alt:[
        {text:"Muito", inteligencia:"linguistica", pontuacao:2},
        {text:"Moderadamente, dependendo do conteúdo",inteligencia:"linguistica", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Você consegue criar histórias com facilidade?",
      alt:[
        {text:"Sim", inteligencia:"linguistica", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Você acha facil aprender um novo idioma?",
      alt:[
        {text:"Sim", inteligencia:"linguistica", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Consigo expressar minhas ideias com facilidade.",
      alt:[
        {text:"Verdadeiro", inteligencia:"linguistica", pontuacao:1},
        {text:"Falso",inteligencia:null}
      ]
    },
    {
      enunciado:"Avalie sua coordenação motora:",
      alt:[
        {text:"Excelente", inteligencia:"fisico", pontuacao:3},
        {text:"Boa",inteligencia:"fisico", pontuacao:2},
        {text:"Moderada",inteligencia:"fisico", pontuacao:1},
        {text:"Ruim",inteligencia:null}
      ]
    },
    {
      enunciado:"Você dança bem ou gosta de dançar?",
      alt:[
        {text:"Sim", inteligencia:"fisico", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Você gosta de praticar algum tipo de esporte ou alguma atividade física?",
      alt:[
        {text:"Sim", inteligencia:"fisico", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Consigo fazer cálculos de cabeça!",
      alt:[
        {text:"Verdadeiro", inteligencia:"logico", pontuacao:1},
        {text:"Falso",inteligencia:null}
      ]
    },
    {
      enunciado:"Você gosta de matemática?",
      alt:[
        {text:"Sim", inteligencia:"logico", pontuacao:2},
        {text:"Moderadamente", inteligencia:"logico", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Gosto de questões de raciocínio lógico!",
      alt:[
        {text:"Verdadeiro", inteligencia:"logico", pontuacao:1},
        {text:"Falso",inteligencia:null}
      ]
    },
    {
      enunciado:"Você gosta de quebra-cabeças de lógica, como por exemplo SUDOKU",
      alt:[
        {text:"Sim", inteligencia:"logico", pontuacao:1},
        {text:"Não",inteligencia:null}
      ]
    },
    {
      enunciado:"Analisando a sua personalidade, qual das múltiplas inteligências você considera que está mais desenvolvida?",
      alt: [
        {text:"<span class=\"font-weight-bold\">interpessoal</span> - Habilidade em se relacionar com outras pessoas, e entender intenções, motivações e desejos de outros.", inteligencia:"interpessoal", pontuacao:5},
        {text:"<span class=\"font-weight-bold\">intrapessoal</span> - Capacidade de se conhecer, de identificar as próprias emoções e sentimentos, utilizando esse conhecimento de maneira positiva na hora de lidar com as mais diversas situações do trabalho e do dia a dia.", inteligencia:"intrapessoal", pontuacao:5},
        {text:"<span class=\"font-weight-bold\">musical</span> - Indivíduos que possuem essa inteligência desenvolvida gostam de estar em contato com a música. Tendem a cantar com frequência e sempre tentam tocar (ou sentem vontade de tocar) algum tipo de instrumento musical.",inteligencia:"musical", pontuacao:5},
        {text:"<span class=\"font-weight-bold\">Espacial</span> - Melhor percepção do mundo visual. Facilidade de resolver problemas espacias reais (físicos) ou imaginários: capacidade que a pessoa tem para lidar com aspectos como cor, linha, forma, figura, espaço e a relação que existe entre eles. ",inteligencia:"espacial", pontuacao:5},
        {text:"<span class=\"font-weight-bold\">Lógico-matemática - Habilidade em desenvolver cálculos e resolver questões de lógica. Habilidade para o raciocínio dedutivo e para solucionar problemas matemáticos.",inteligencia:"logico", pontuacao:5},
        {text:"<span class=\"font-weight-bold\">Físico-sinestésica</span> - Maior capacidade em controlar movimentos do corpo. Predominante em atores, dançarinos e atletas.",inteligencia:"fisico", pontuacao:5},
        {text:"<span class=\"font-weight-bold\">Linguística</span> - Maior domínio de idiomas e das palavras. Presente em escritores, podetas e linguistas.",inteligencia:"linguistica", pontuacao:5}
      ]
    },
    {
      enunciado:"Como você consegue aprender melhor determinado conteúdo?",
      alt:[
        {text:"Estudando com outra pessoa ou em grupo.", inteligencia:"interpessoal", pontuacao:2},
        {text:"Estudando sozinho.",inteligencia:"intrapessoal", pontuacao:2}
      ]
    },
    {
      enunciado:"Eu aprendo melhor: ",
      alt:[
        {text:"Utilizando mapas mentais", inteligencia:"espacial", pontuacao:2},
        {text:"Utilizando música", inteligencia:"musical", pontuacao:2},
        {text:"Fazendo resumo escrito do conteúdo", inteligencia:"linguistica", pontuacao:2},
        {text:"Prefiro, semper que possível, resolver exercícios relacionados ao conteúdo;", inteligencia:"logico", pontuacao:2}
      ]
    }
  ];
}
