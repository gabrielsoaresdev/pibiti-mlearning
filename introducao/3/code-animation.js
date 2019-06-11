function executarEx1(slideIndex) {
  $(btnRun6).removeClass("btn-primary");
  $(btnRun6).addClass("btn-warning");
  $(btnRun6).html("Analisando...");
  $(btnRun6).prop("onclick", null).off("click");

  row = 1;
  warnRow(row);
  intervalId = setInterval(() => {
    successRow(row);
    row++;
    warnRow(row);
    $(btnRun6).html("Analisando linha " + row);

    if(row == 4) {
      setTimeout(() => {
        fazerBeep(999, 210, 800);
        fazerBeep(999, 500, 800);
        for(row = 1; row <= 3; row++) {
          $('#row' + row).removeClass("bg-success");
        }
        $('#row4').removeClass("bg-warning").addClass("bg-danger");
        $(btnRun6).removeClass("btn-primary").addClass("btn-danger");
        $(btnRun6).html("Erro de sintaxe na linha 4!<br>Clique para executar novamente!");
        $(btnRun6).click(() => {
          $('#row4').removeClass("bg-danger");
          $(btn6).removeClass("btn-danger");
          executarEx1();
        })
      }, 1000);
      clearInterval(intervalId);
    }
  }, 1000);

}

function warnRow(row) {
  $('#row' + row).addClass("bg-warning");
}

function successRow(row) {
  $('#row' + row).removeClass("bg-warning").addClass("bg-success");
}

audioContext = new AudioContext();

function fazerBeep(vol, freq, duration){
  v = audioContext.createOscillator();
  u = audioContext.createGain();
  v.connect(u);
  v.frequency.value = freq;
  v.type = "square";
  u.connect(audioContext.destination);
  u.gain.value = vol*0.01;
  v.start(audioContext.currentTime);
  v.stop(audioContext.currentTime + duration * 0.001);
}
