let left = 30;
function appendStar1() {
    var i;
    for(i=0;i<4;i++) {
        $("#stars1").append($('<img class="star animated zoomInDown " src="./img/star.png">').css({"left": left + '%', "top": "20%"}));
        left += 10;
    }
}

function appendStar2() {
    var i;
    let left = 30;
    for(i=0;i<4;i++) {
        $("#stars2").append($('<img class="star animated zoomInDown " src="./img/star.png">').css({"left": left + '%', "top": "40%"}));
        left += 10;
    }
}

function appendStar3() {
    var i;
    let left = 30;
    for(i=0;i<4;i++) {
        $("#stars3").append($('<img class="star animated zoomInDown " src="./img/star.png">').css({"left": left + '%', "top": "60%"}));
        left += 10;
    }
}
function appendStar4() {
    var i;
    let left = 30;
    for(i=0;i<4;i++) {
        $("#stars4").append($('<img class="star animated zoomInDown " src="./img/star.png">').css({"left": left + '%', "top": "80%"}));
        left += 10;
    }
}
function back() {
    window.location.replace('./index.html')
}

function next() {
    window.location.replace('./page3Quiz.html')
}

function quizResults(){
    document.getElementById('soundOne').play();
    appendStar1();
    setTimeout(()=>{
        document.getElementById('soundTwo').play();
        appendStar2();
        setTimeout(()=>{
            document.getElementById('soundThree').play();
            appendStar3();
            setTimeout(()=>{
                document.getElementById('soundFour').play();
                appendStar4();
            },5000);
        },5000);
    },5000);
}

function listen(){
    document.getElementById('listen').play();
}