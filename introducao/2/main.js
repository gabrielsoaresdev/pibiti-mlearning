var mensagens = [
    "Algoritmo? Essa palavra parece bem diferente do normal, mas no contexto do mundo da computação em si, é mais que uma simples palavra. Algoritmo significa um conjunto regras, raciocínios ou operações finitas, que, em uma determinada ordem, busca solucionar um problema.",
    "Podemos fazer uma comparação com uma receita bolo. Uma receita de bolo busca, a partir de uma lista de ações, colocadas em uma certa sequência, criar um bolo. Se seguida corretamente, o resultado será um bolo.",
    "Esse bolo pode ser de um certo sabor, de um certo tamanho, com uma certa cobertura, mas todas essas preferências devem seguir em uma ordem correta para que no final se obtenha o bolo pronto.",
    "Voltando ao pensamento do algoritmo no mundo da computação, o algoritmo seria uma série de linhas de código que busca solucionar um problema, que no final, resultará em um software, como visto na seção de \"O que é um algoritmo.\".",
    "Parabéns! Você concluiu a seção 2 da introdução!"
];

var btn_comecar = document.getElementById('btn-comecar');
btn_comecar.onclick = (e) => {
    e.preventDefault();
    init();
}

var mainDisplayText = document.getElementById('displayText');

var actualText = 0;

var lines = document.getElementsByClassName('paper-line');
var i_numLine = 0;

function init(){
    moveButton();
    document.getElementById('infoContent').className = "inform";
    document.getElementById('infoContent').style.height = "fit-content";
    document.getElementById('buttonContainer').className += " alreadyInit";
    document.getElementById('subDivide-content').className = "";
    btn_comecar.onclick = () => { nextText() };
    nextText();
}

function showRecipe() {
    document.getElementById('info').style.height = "fit-content";
    setTimeout(() => {
        document.getElementById('info').className = "inform"
        document.getElementById('paper').className = "";
        setTimeout(() => {
            document.getElementById('paper').style.opacity = "1";
            setTimeout(() => {
                document.getElementById('paper').style.height = "150px";
                document.getElementById('paper').style.marginTop = "0px";
            }, 50);
        }, 100);
    }, 500);
}

function delRecipe() {
    document.getElementById('paper').style.height = "0";
    document.getElementById('paper').style.opacity = "0";
    setTimeout(() => {
        document.getElementById('info').style.height = "0";
        setTimeout(() => {
            document.getElementById('info').className += " hidden"; 
        }, 500);
    }, 500);
}

function nextText() {
    if(actualText > 4) {
        return;
    }

    mainDisplayText.style.opacity = "0";
    mainDisplayText.style.marginTop = "70px";

    setTimeout(() => {
        if(actualText === 0) {
            mainDisplayText.innerText = mensagens[0];
        }
        else if (actualText === 1) {
            mainDisplayText.innerText = mensagens[1];
            showRecipe();
        }
        else if(actualText === 2) {
            mainDisplayText.innerText = mensagens[2];
            animLines();
        }
        else if(actualText === 3) {
            mainDisplayText.innerText = mensagens[3];
            delRecipe();
        }
        else {
            mainDisplayText.innerText = mensagens[4];
            btn_comecar.innerText = "Concluir";
            btn_comecar.onclick = () => { finalizar(); }
        }
        setTimeout(() => {
            mainDisplayText.style.opacity = "1";
            setTimeout(() => {
                mainDisplayText.style.marginTop = "50px";
            }, 50);
        }, 100);

        actualText++;
    }, 500);
}

function animLines() {
    setTimeout(() => {
        lines[i_numLine].className += " lineInFocus";
        setTimeout(() => {
            lines[i_numLine].className = "paper-line";
            i_numLine++;
            if(i_numLine <= 7) {
                animLines()
            }
        }, 500);
    }, 150);
}

function moveButton() {
    document.getElementById('buttonContainer').className += " moveButton";
    btn_comecar.innerText = "Próximo";
}

function finalizar() {

}
