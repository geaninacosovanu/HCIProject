function back(){
    window.location.replace('./page2Quiz.html')
}

function next(){
    window.location.replace('./page4Quiz.html')
}

let won = false;
let tires_pressed = 0;
function startTireQuiz() {
    $("#tire1").click(()=> {
       $('#tire1').css('animation', 'moveTire1 14s forwards');
        $('#tire1').click(()=>{});

        setTimeout(()=> {
           tires_pressed+= 1;
           if (tires_pressed === 1 || tires_pressed === 2) {
               $("#car").attr("src", "img/" + 2 + "-tires-car.png");
           }
           else
               $("#car").attr("src", "img/" + tires_pressed + "-tires-car.png");
            $('#tire1').css('display', 'none');
            success();

        }, 14000);
    });

    $("#tire2").click(()=> {
        $('#tire2').css('animation', 'moveTire2 16s forwards');
        $('#tire2').click(()=>{});
        tires_pressed+= 1;
        setTimeout(()=> {
            if (tires_pressed === 1 || tires_pressed === 2) {
                $("#car").attr("src", "img/" + 2 + "-tires-car.png");
            }
            else
                $("#car").attr("src", "img/" + tires_pressed + "-tires-car.png");
            $('#tire2').css('display', 'none');

            success();

        }, 16000);
    });

    $("#tire3").click(()=> {
        $('#tire3').css('animation', 'moveTire3 11s forwards');
        $('#tire3').click(()=>{});
        tires_pressed+= 1;
        setTimeout(()=> {
            if (tires_pressed === 1 || tires_pressed === 2) {
                $("#car").attr("src", "img/" + 2 + "-tires-car.png");
            }
            else
                $("#car").attr("src", "img/" + 4 - tires_pressed + "-tires-car.png");
            $('#tire3').css('display', 'none');

            success();

        }, 11000);
    });

    $("#tire4").click(()=> {
        $('#tire4').css('animation', 'moveTire4 8s forwards');
        $('#tire4').click(()=>{});
        tires_pressed+= 1;
        setTimeout(()=> {
            if (tires_pressed === 1 || tires_pressed === 2) {
                $("#car").attr("src", "img/" + 2 + "-tires-car.png");
            }
            else
                $("#car").attr("src", "img/" + tires_pressed + "-tires-car.png");
            $('#tire4').css('display', 'none');
            success();
        }, 8000);
    });

}

function success() {

setTimeout(() => {
    if (tires_pressed === 4 && !won) {
    $('<embed src="sounds/happyKids.mp3" loop="false" autostart="false" hidden="true">').appendTo('body');
    won = true;
        $('#back').css('display', 'block');
        $('#next').css('display', 'block');
}}, 4000);
}