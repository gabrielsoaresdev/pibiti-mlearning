var questNum = 0;
var questoes;
var userAnswers;

jsonLocalStorage = window.localStorage.getItem('userAnswers');
if(jsonLocalStorage == null) {
  $.getScript("questoes.js", function() {
    questoes = getQuestoes();
    window.localStorage.setItem('userAnswers', JSON.stringify(getUserAnswers()));
    userAnswers = getUserAnswers();
  });
}
else {
  userAnswers = JSON.parse(jsonLocalStorage);
  $.getScript("questoes.js", function(){questoes = getQuestoes();});
}

function gerarPergunta() {
  $(enunciado).text(questoes[questNum].enunciado);
  var alternativas = "";
  for(i = 0; i < questoes[questNum].alt.length; i++) {
    alternativas += "<div id=\"alt" + i + "\" style=\"cursor: pointer\" class=\"border border-white rounded w-100 p-2 my-1\" onclick=\"altOnClick("+i+")\">"+questoes[questNum].alt[i].text+"</div>"
  }
  $(alts).html(alternativas);
}

function altOnClick(id) {
  $(alts).popover('hide');
  $("#alt"+userAnswers[questNum].altSelected).removeClass('bg-white text-success');
  $("#alt"+id).addClass('bg-white text-success');
  userAnswers[questNum].altSelected = id;
}

function nextButtonOnClick() {
  //Salvar questão atual, antes de passar para a próxima
  if(questNum == 0) {
    questNum++;
    gerarPergunta();
    $(iconQuest).show();
  }
  else if(questNum > 0 && userAnswers[questNum].altSelected != null){
    salvar();

    questNum++;
    if(questNum == 2) {
      $(anteriorButton).show();
    }
    if(questNum >= questoes.length - 1) {
      console.log("HELLO");
      $(nextButton).text("FINALIZAR");
      $(nextButton).on("click", function() {
        salvar();
        window.location.replace("../index.html");
      });
    }
    else
      gerarPergunta();
  }
  else if(userAnswers[questNum].altSelected == null) {
    $(alts).popover('show');
  }
}

function anteriorButtonOnClick() {
  if(questNum >= questoes.length - 2) {
    $(nextButton).text("Próximo ↳");
    $(nextButton).on("click", nextButtonOnClick());
  }
  questNum--;
  if(questNum < 2)
    $(anteriorButton).hide();
  gerarPergunta();
}

function salvar() {
  var alternativa = userAnswers[questNum].altSelected;
  var inteligenciaDaQuestao = questoes[questNum].alt[alternativa].inteligencia;

  userAnswers[0].inteligenciasPontuacao[inteligenciaDaQuestao] += questoes[questNum].alt[alternativa].pontuacao;

  console.log(JSON.stringify(userAnswers[0]));
}
