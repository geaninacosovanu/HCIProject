let left = 0;

function startLightQuiz() {
    $('#blue').click(() => playWrong());
    $('#yellow').click(() => playWrong());
    $('#green').click(() => playWrong());
    $("#red").click(() => {
        $("#red").css("display", "none");
        $("#traffic").attr("src", "img/traffic-light-red-glow.png");
        appendStar();
        $("#yellow").unbind("click");
        $("#yellow").click(() => {
            $("#green").unbind("click");
            appendStar();
            $("#yellow").css("display", "none");
            $("#traffic").attr("src", "img/traffic-light-yellow-glow.png");
            $("#green").click(() => {
                $("#blue").unbind("click");
                appendStar();
                setTimeout(() => {
                    appendStar();
                }, 1000);
                $("#blue").css("display", "none");
                $("#green").css("display", "none");
                playSucces();
                $("#traffic").attr("src", "img/traffic-light-red.png");
                setTimeout(() => {
                    $("#traffic").attr("src", "img/traffic-light-yellow.png");
                    setTimeout(() => {
                        $("#traffic").attr("src", "img/traffic-light-green.png");
                    }, 3000);
                    setTimeout(() => {
                        $('#back').css('display', 'block');
                        $('#next').css('display', 'block');
                    }, 3000);
                }, 3000);
            });
        });
    });

}

function appendStar() {
    $("#stars").append($('<img class="star animated zoomInDown " src="./img/star.png">').css('left', left + '%'));
    left += 7;
}

function back() {
    window.location.replace('./page3Quiz.html')
}

function next() {
    $('#car').addClass('car-go');
    setTimeout(() => {
        window.location.replace('./finalQuiz.html')
    }, 4000);

}

function playWrong() {
    event.stopPropagation();
    document.getElementById('music').pause();
    document.getElementById('sound').pause();
    document.getElementById('wrong').play();
    setTimeout(() => {
        document.getElementById('music').play();
    }, 4000);

}

function playSucces() {
    document.getElementById('music').pause();
    document.getElementById('sound').pause();
    document.getElementById('success').play();
    setTimeout(() => {
        document.getElementById('music').play();
    }, 4000);

}

function playAudio() {
    document.getElementById('music').pause();
    document.getElementById('sound').play();
    setTimeout(() => {
        document.getElementById('music').play();
    }, 4000);

}