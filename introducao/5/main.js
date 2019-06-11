var slideIndex = 0;

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

    resetNum();

    if(slideIndex === 5) {
        setTimeout(() => {
            animNum();
        }, 250);
    }
}

function resetNum() {
    //document.getElementById('decimal-example').style.marginBottom = '0px';
}

function animNum() {
    setTimeout(() => {
        document.getElementById('decimal-example').style.marginBottom = '0px';
        setTimeout(() => {
            document.getElementById('box-example3').style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
            setTimeout(() => {
                document.getElementById('decimal-example').style.marginBottom = '135px';
                setTimeout(() => {
                    document.getElementById('box-example3').style.backgroundColor = 'rgba(111, 111, 111, 0.5)';
                }, 750);
            }, 1000);
        }, 1000);
    }, 500);
}