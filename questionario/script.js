var questNum = 0;
var questoes;
var userAnswers;
var altSelected;

$.getScript("questoes.js", function(){questoes = getQuestoes();});

jsonLocalStorage = window.localStorage.getItem('userAnswers');
if(jsonLocalStorage == null) {
  userAnswers = [];
  window.localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
}
else {
  userAnswers = JSON.parse(jsonLocalStorage);
}

function nextButtonOnClick() {
  if(questNum == 0) {
    questNum++;
    gerarPergunta();
    $(iconQuest).show();
  }
  else if(altSelected != null) {
    questNum++;

    if(questNum == 2)
      $(anteriorButton).show();

    if(questNum >= questoes.length - 1) {
      $(nextButton).text("FINALIZAR");
      $(nextButton).on("click", function() {
        mostrarInteligencia();

        $(anteriorButton).hide();
        $(nextButton).text('CONCLUIR');
        $(nextButton).on('click', function() {
          window.location.replace("../index.html");
        })
      });
    }
    gerarPergunta();
  }
  else if(altSelected == null) {
    $(alts).popover('show');
  }
}

function anteriorButtonOnClick() {
  if(questNum >= questoes.length - 1) {
    $(nextButton).text("Próximo ↳");
    $(nextButton).on("click", nextButtonOnClick());
  }
  questNum--;
  if(questNum < 2)
    $(anteriorButton).hide();
  gerarPergunta();
}

function gerarPergunta() {
  if(questNum >= questoes.length)
    return;

  altSelected = null;
  $(enunciado).text(questoes[questNum].enunciado);
  var alternativas = "";
  for(i = 0; i < questoes[questNum].alt.length; i++) {
    alternativas += "<div id=\"alt" + i + "\" style=\"cursor: pointer\" class=\""+
    "border border-white rounded w-100 p-2 my-1\" onclick=\"altOnClick("+i+")\">"
    +questoes[questNum].alt[i].text+"</div>";
  }
  $(alts).html(alternativas);
  if(userAnswers[questNum] != null) {
    selecionarAlternativa(userAnswers[questNum]);
    altSelected
  }
}


function altOnClick(id) {
  //Neste ponto, altSelected terá o valoro da alternativa anterior marcada
  selecionarAlternativa(id);

  altSelected = id;
  userAnswers[questNum] = id;
  window.localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
}

function selecionarAlternativa(altSelecionada) {
  $(alts).popover('hide');
  $("#alt"+altSelected).removeClass('bg-white text-success');
  $("#alt"+altSelecionada).addClass('bg-white text-success');
  altSelected = altSelecionada;
}

function getInteligencia() {
  pontuacaoPorInteligencia = [
    {inteligencia:"Interpessoal", pontuacao:0},
    {inteligencia:"Intrapessoal", pontuacao:0},
    {inteligencia:"Espacial", pontuacao:0},
    {inteligencia:"Musical", pontuacao:0},
    {inteligencia:"Linguística", pontuacao:0},
    {inteligencia:"Físico-cinestésica", pontuacao:0},
    {inteligencia:"Lógico-matemática", pontuacao:0}
  ];

  arrayIndexes = {interpessoal:0, intrapessoal:1, espacial:2, musical:3,
     linguistica:4, fisico:5, logico:6};

  for(i = 1; i < questoes.length; i++) {
    if(userAnswers[i] == null)
      continue;

    alternativaEscolhida = questoes[i].alt[userAnswers[i]];
    inteligenciaDaQuestaoIndex = arrayIndexes[alternativaEscolhida.inteligencia];
    if(alternativaEscolhida.inteligencia == null)
      continue;
    pontuacaoPorInteligencia[inteligenciaDaQuestaoIndex].pontuacao += alternativaEscolhida.pontuacao;
  }

  maioresInteligencias = [pontuacaoPorInteligencia[0]];
  for(i = 1; i < pontuacaoPorInteligencia.length; i++) {
    if(pontuacaoPorInteligencia[i].pontuacao == maioresInteligencias[0].pontuacao) {
      maiorInteligencias.push(pontuacaoPorInteligencia[i]);
    }
    if(pontuacaoPorInteligencia[i].pontuacao > maioresInteligencias[0].pontuacao) {
      maioresInteligencias = [pontuacaoPorInteligencia[i]];
    }
  }
  return maioresInteligencias;
}

function mostrarInteligencia() {
  maioresInteligencias = getInteligencia();
  if (maioresInteligencias.length > 1) {
    // escolher entre inteligencias;
  }
  else {
    $(enunciado).html("Inteligência identificada: <span class=\"font-weight-bold\">" + maioresInteligencias[0].inteligencia + "</div>");
    $(alts).hide();

    nomeDaImagem = maioresInteligencias[0].inteligencia;
    nomeDaImagem = nomeDaImagem.split(" ", 1);
    nomeDaImagem = nomeDaImagem[0].toLowerCase();
    if(nomeDaImagem == "físico")
      nomeDaImagem = "fisico";
    else if(nomeDaImagem == "linguística")
      nomeDaImagem = "linguistica";
    else if(nomeDaImagem == "lógico")
      nomeDaImagem = "logico";
    $(iconQuest).attr('src', ('../img/intelig_'+ nomeDaImagem + '.jpg'));
  }
}
