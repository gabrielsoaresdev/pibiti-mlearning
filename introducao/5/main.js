var slideIndex = 0;

function verifySlide(next) {
    let carouselLength = document.getElementsByClassName('carousel-item').length;
    let carouselItems = [ ];

    for(let i = 0; i < carouselLength; i++) {
        carouselItems[i] = document.getElementById('slide' + i);
    }

    for(let i = 0; i < carouselLength; i++) {
        if(carouselItems[i].className === "carousel-item active" ||
            carouselItems[i].className === "carousel-item text-center active") {
            slideIndex = i;
            if(next) {
                slideIndex++;
            }
            else {
                slideIndex--;
            }
            break;
        }
    }

    verifyAnim();
}

function verifyAnim() {

    if(slideIndex === 5 || slideIndex === 3) {
        setTimeout(() => {
            resetAnimFadeBox();
        }, 200);
    }
    else if(slideIndex === 4) {
        setTimeout(() => {
            animFadeBox();
        }, 250);
    }
    else if(slideIndex === 7) {
        setTimeout(() => {
            animNum();
        }, 250);
    }
    else if(slideIndex === 8) {
        animChangeNumber();
    }
}

function resetAnimFadeBox() {
    setTimeout(() => {
        document.getElementById('box-example1').innerText = "";
        document.getElementById('box-example1').style.width = "0";
        document.getElementById('box-example1').style.height = "0";
        document.getElementById('box-example1').style.border = "none";
    }, 250);
}

function animFadeBox() {
    setTimeout(() => {
        document.getElementById('box-example1').innerText = "B";
        setTimeout(() => {
            document.getElementById('box-example1').innerText = "Bo";
            setTimeout(() => {
                document.getElementById('box-example1').innerText = "Bol";
                setTimeout(() => {
                    document.getElementById('box-example1').innerText = "Bola";
                    setTimeout(() => {
                        document.getElementById('box-example1').innerText = "Bolas";
                        setTimeout(() => {
                            document.getElementById('box-example1').style.height = "75px";
                            setTimeout(() => {
                                document.getElementById('box-example1').style.width = "75px";
                                document.getElementById('box-example1').style.border = "3px solid black";
                            }, 200);
                        }, 300);
                    }, 250);
                }, 250);
            }, 250);
        }, 250);
    }, 250);
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

function animChangeNumber() {
    setTimeout(() => {
        let x = Math.floor((Math.random() * 100) + 1);
        while(x == parseInt(document.getElementById('rand-num').innerText)){
            x = Math.floor((Math.random() * 100) + 1);
        }
        document.getElementById('rand-num').innerText = "" + Math.floor((Math.random() * 100) + 1);
        setTimeout(() => {
            document.getElementById('rand-num').style.opacity = "1";
            setTimeout(() => {
                document.getElementById('rand-num').style.opacity = "0";
                if(slideIndex === 7) {
                    animChangeNumber();
                }
            }, 750);
        }, 150);
    }, 550);
}
