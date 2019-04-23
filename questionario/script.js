var questNum = 0;
var questoes;
var userAnswers;
var altSelected;

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
  altSelected = null;
  $(enunciado).text(questoes[questNum].enunciado);
  var alternativas = "";
  for(i = 0; i < questoes[questNum].alt.length; i++) {
    alternativas += "<div id=\"alt" + i + "\" style=\"cursor: pointer\" class=\"border border-white rounded w-100 p-2 my-1\" onclick=\"altOnClick("+i+")\">"+questoes[questNum].alt[i].text+"</div>"
  }
  $(alts).html(alternativas);
  if(userAnswers[questNum] != null) {
    altOnClick(userAnswers[questNum]);
  }
}

function altOnClick(id) {
  $(alts).popover('hide');
  $("#alt"+altSelected).removeClass('bg-white text-success');
  $("#alt"+id).addClass('bg-white text-success');
  altSelected = id;
}

function nextButtonOnClick() {
  //Salvar questão atual, antes de passar para a próxima
  if(questNum == 0) {
    questNum++;
    gerarPergunta();
    $(iconQuest).show();
  }
  else if(questNum > 0 && altSelected != null){
    //Salva a atual
    salvar();

    //Passa para a proxima
    questNum++;

    if(questNum == 2) {
      $(anteriorButton).show();
    }

    if(questNum >= questoes.length) {
      $(nextButton).text("FINALIZAR");
      $(nextButton).on("click", function() {
        questNum--;
        salvar();
        window.location.replace("../index.html");
      });
    }
    else
      gerarPergunta();
  }
  else if(altSelected == null) {
    //Se o usuario não marcou nenhuma alternativa
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

function salvar() {
  var inteligenciaDaQuestao = questoes[questNum].alt[altSelected].inteligencia;
  if(userAnswers[questNum] != null) {
    var inteligenciaDaQuestaoAnterior = questoes[questNum].alt[userAnswers[questNum]];
    userAnswers[0].inteligenciasPontuacao[inteligenciaDaQuestaoAnterior] -= questoes[questNum].[userAnswers[questNum]].pontuacao;
  }

  userAnswers[questNum] = altSelected;
  userAnswers[0].inteligenciasPontuacao[inteligenciaDaQuestao] += questoes[questNum].alt[altSelected].pontuacao;


  console.log(questoes.enunciado);
  console.log(JSON.stringify(userAnswers));
  window.localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
}
