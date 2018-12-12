let left = 35;

function appendStar1() {
    var i;
    for (i = 0; i < 4; i++) {
        $("#stars1").append($('<img class="star animated zoomInDown " src="./img/star.png">').css({
            "left": left + '%',
            "top": "25%"
        }));
        left += 7;
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
    window.location.replace('./index1.html')
}


function quizResults() {
    setTimeout(function () {
        $('#car').attr('src', './img/car.png');
        $('#boy').css('display', 'block');
        setTimeout(() => {
            appendStar1();
            setTimeout(() => {
                appendStar2();
                setTimeout(() => {
                    appendStar3();
                    setTimeout(() => {
                        appendStar4();
                        setTimeout(() => {
                            playAudio();
                            $('#next').css('display', 'block');
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        })
    }, 7000);


}

function playAudio(id) {
    document.getElementById('music').pause();
    document.getElementById('sound').play();
    setTimeout(() => {
        document.getElementById('music').play();
    }, 5000);
}
