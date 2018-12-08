let left = 0;
function startLightQuiz() {


    $("#red").click(() => {
        $("#red").css("display", "none");
        $("#traffic").attr("src", "img/traffic-light-red-glow.png");
        appendStar();
        $("#yellow").click(() => {
            appendStar();
            $("#yellow").css("display", "none");
            $("#traffic").attr("src", "img/traffic-light-yellow-glow.png");
            $("#green").click(() => {
                appendStar();
                setTimeout(()=> {
                    appendStar();
                }, 1000);
                $("#blue").css("display", "none");
                $("#green").css("display", "none");
                $("#traffic").attr("src", "img/traffic-light-red.png");
                setTimeout(()=> {
                    $("#traffic").attr("src", "img/traffic-light-yellow.png");
                    setTimeout(()=> {
                        $("#traffic").attr("src", "img/traffic-light-green.png");
                        }, 3000);
                    setTimeout(()=>{
                        $('#back').css('display', 'block');
                        $('#next').css('display', 'block');
                    },3000);
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
    window.location.replace('./finalQuiz.html')
}