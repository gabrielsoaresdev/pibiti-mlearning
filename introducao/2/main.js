var slideIndex = 0;

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
    let info = document.getElementById('info');
    let paper = document.getElementById('paper');
    
    setTimeout(() => {
        paper.className = "";
        paper.style.height = "150px !important";
        info.style.height = "fit-content";
        setTimeout(() => {
            paper.style.opacity = "1";
            setTimeout(() => {
                paper.style.marginTop = "0px";
                setTimeout(() => {
                    animLines();
                }, 750);
            }, 50);
        }, 100);
    }, 500);
}

function delRecipe() {
    let info = document.getElementById('info');
    let paper = document.getElementById('paper');

    let lines = document.getElementsByClassName('paper-line correctLine');

    paper.style.opacity = "0";
    setTimeout(() => {
        info.className += " hidden";
        setTimeout(() => {
            for(let i = 0; i < lines.length; i++) {
                lines[i].className = "paper-line";
                i--;
            }
        }, 500);
    }, 500);

    i_numLine = 0;
}

var i_numLine = 0;

function animLines() {
    var lines = document.getElementsByClassName('paper-line');

    if(lines.length == 0) {
        lines = document.getElementById('paper-line')
    }

    setTimeout(() => {
        lines[i_numLine].className += " lineInFocus";
        setTimeout(() => {
            lines[i_numLine].className = "paper-line correctLine";
            i_numLine++;
            if(i_numLine <= 7) {
                animLines();
            }
        }, 350);
    }, 450);
}

function verifySlide(next) {
    if(next) {
        slideIndex++;
        verifyAnim();
    }
    else {
        slideIndex--;
        verifyAnim();
    }
}

function verifyAnim() {
    let info = document.getElementById('info');
    let paper = document.getElementById('paper');

    if(slideIndex === 1) {
        info.className = "";
        paper.className = "";
        setTimeout(() => {
            showRecipe();
        }, 250);
    }
    else {
        delRecipe();
    }
}
