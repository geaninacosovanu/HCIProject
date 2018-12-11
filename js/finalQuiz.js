let left = 35;

function appendStar1() {
    var i;
    for (i = 0; i < 4; i++) {
        $("#stars1").append($('<img class="star animated zoomInDown " src="./img/star.png">').css({
            "left": left + '%',
            "top": "25%"
        }));
        left +=7 ;
    }
}

function appendStar2() {
    var i;
    let left = 35;
    for (i = 0; i < 4; i++) {
        $("#stars2").append($('<img class="star animated zoomInDown " src="./img/star.png">').css({
            "left": left + '%',
            "top": "40%"
        }));
        left += 7;
    }
}

function appendStar3() {
    var i;
    let left = 35;
    for (i = 0; i < 4; i++) {
        $("#stars3").append($('<img class="star animated zoomInDown " src="./img/star.png">').css({
            "left": left + '%',
            "top": "55%"
        }));
        left += 7;
    }
}

function appendStar4() {
    var i;
    let left = 35;
    for (i = 0; i < 4; i++) {
        $("#stars4").append($('<img class="star animated zoomInDown " src="./img/star.png">').css({
            "left": left + '%',
            "top": "70%"
        }));
        left += 7;
    }
}

function next() {
    window.location.replace('./index.html')
}


function quizResults() {
    setTimeout(function () {
        $('#car').attr('src', './img/car.png');
        $('#boy').css('display', 'block');
        //playAudio();
        setTimeout(() => {
            document.getElementById('music').pause();
            document.getElementById('soundOne').play();
            appendStar1();
            setTimeout(() => {
                document.getElementById('soundTwo').play();
                appendStar2();
                setTimeout(() => {
                    document.getElementById('soundThree').play();
                    appendStar3();
                    setTimeout(() => {
                        document.getElementById('soundFour').play();
                        appendStar4();
                        setTimeout(() => {
                            document.getElementById('music').play();
                            $('#next').css('display', 'block');
                        }, 5000);
                    }, 5000);
                }, 5000);
            }, 5000);
        })
    }, 7000);

}

function listen(id) {
    document.getElementById('music').pause();
    document.getElementById('listen').play();
    setTimeout(() => {
        document.getElementById('music').play();
    }, 5000);
}
