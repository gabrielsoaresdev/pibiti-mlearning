var slideIndex = 0;

function showRecipe() {
    let paper = document.getElementById('paper');
    
    paper.style.marginTop = "0px";

    document.getElementById('cake').style.opacity = "1";
    setTimeout(() => {
        setTimeout(() => {
            animLines();
        }, 450);
    }, 50);
}

function resetRecipe() {
    let lines = document.getElementsByClassName('paper-line correctLine');

    if(lines.length == 0) {
        lines = document.getElementsByClassName('paper-line lineInFocus');
    }

    if(lines.length == 0) {
        return;
    }

    for(let i = 0; i < lines.length; i++) {
        lines[i].className = "paper-line";
        i--;
    }

    i_numLine = 0;
}

var i_numLine = 0;

function animLines() {
    var lines = document.getElementsByClassName('paper-line');

    if(lines.length == 0) {
        lines = document.getElementById('paper-line')
    }

    setTimeout(() => {
        lines[i_numLine].className = "paper-line lineInFocus";
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
    resetRecipe();

    if(slideIndex === 2) {
        setTimeout(() => {
            showRecipe();
        }, 250);
    }
}
