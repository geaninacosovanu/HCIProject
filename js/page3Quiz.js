let left = 0;

function back() {
    window.location.replace('./index.html')
}

function next() {
    $("#traffic").css("display", "block");
    $("#traffic").css("animation", "animateTraffic 10s forwards");
    $("#bg").css("animation", "animate 10s forwards");
    setTimeout(()=>{
        window.location.replace('./page4Quiz.html')
    }, 10000);
}

let won = false;
let tires_pressed = 0;
let other_pressed = false;

function startTireQuiz() {
    $("#tire1").click(() => {
        if (other_pressed === false) {
            $('#tire1').css('animation', 'moveTire1 4s forwards');
            $('#tire1').click(() => {
            });
            other_pressed = true;
            setTimeout(() => {
                tires_pressed += 1;
                if (tires_pressed === 1 || tires_pressed === 2) {
                    $("#car").attr("src", "img/" + 2 + "-tires-car.png");
                }
                else
                    $("#car").attr("src", "img/" + tires_pressed + "-tires-car.png");
                $('#tire1').css('display', 'none');
                appendStar();
                other_pressed = false;
                success();

            }, 4000);
        }
    });

    $("#tire2").click(() => {
        if (other_pressed === false) {
            other_pressed = true;
            $('#tire2').css('animation', 'moveTire2 6s forwards');
            $('#tire2').click(() => {
            });
            setTimeout(() => {
                tires_pressed += 1;

                if (tires_pressed === 1 || tires_pressed === 2) {
                    $("#car").attr("src", "img/" + 2 + "-tires-car.png");
                }
                else
                    $("#car").attr("src", "img/" + tires_pressed + "-tires-car.png");
                $('#tire2').css('display', 'none');
                appendStar();
                other_pressed = false;
                success();

            }, 6000);
        }
    });

    $("#tire3").click(() => {
        if (other_pressed === false) {
            other_pressed = true;
            $('#tire3').css('animation', 'moveTire3 5s forwards');
            $('#tire3').click(() => {
            });
            setTimeout(() => {
                tires_pressed += 1;

                if (tires_pressed === 1 || tires_pressed === 2) {
                    $("#car").attr("src", "img/" + 2 + "-tires-car.png");
                }
                else
                    $("#car").attr("src", "img/" + 4 - tires_pressed + "-tires-car.png");
                $('#tire3').css('display', 'none');
                appendStar();
                other_pressed = false;
                success();

            }, 5000);
        }
    });

    $("#tire4").click(() => {
        if (other_pressed === false) {
            $('#tire4').css('animation', 'moveTire4 7s forwards');
            other_pressed = true;
            $('#tire4').click(() => {
            });
            setTimeout(() => {
                tires_pressed += 1;
                if (tires_pressed === 1 || tires_pressed === 2) {
                    $("#car").attr("src", "img/" + 2 + "-tires-car.png");
                }
                else
                    $("#car").attr("src", "img/" + tires_pressed + "-tires-car.png");
                $('#tire4').css('display', 'none');
                appendStar();
                success();
                other_pressed = false;
            }, 7000);
        }
    });

}

function success() {

        if (tires_pressed === 4 && !won) {
            $('<embed src="sounds/happyKids.mp3" loop="false" autostart="false" hidden="true">').appendTo('body');
            won = true;
            $('#back').css('display', 'block');
            $('#next').css('display', 'block');

        }

}


function playAudio() {
    event.stopPropagation();
    document.getElementById('music').pause();
    document.getElementById('dif').play();
    setTimeout(() => {
        document.getElementById('music').play();
    }, 7000);
}

function appendStar() {
    $("#stars").append($('<img class="star animated zoomInDown " src="./img/star.png">').css('left', left + '%'));
    left += 7;
}