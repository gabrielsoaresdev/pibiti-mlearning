$(anteriorButton).hide();
$(iconQuest).hide();

selected = 0;
questNum = 0;

function gerarPergunta() {

}

function altOnClick(id) {
  $("#alt"+selected).removeClass('bg-white text-success');
  $("#alt"+id).addClass('bg-white text-success');
  selected = id;
}

function proximoButtonOnClick() {
  questNum++;
  if(questNum >= 2)
    $(anteriorButton).show();
  $(iconQuest).show();
  $(enunciado).text('Hello World' + questNum);

}

function anteriorButtonOnClick() {
  questNum--;
  if(questNum < 2)
    $(anteriorButton).hide();

  $(enunciado).text('VocÊ prefere utilizar gráficos?' + questNum);
}
