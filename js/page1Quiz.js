function back(){
    window.location.replace('./index.html')
}

function nextPage2(){
    window.location.replace('./page2Quiz.html')
}

function load() {
    var nextButton=document.getElementById("nextButton");
    nextButton.style.visibility='hidden';
}

let left = 0;
function rightClick() {
    for(var i=1;i<=4;i++) {
        $("#stars")
            .append($('<img class="star animated zoomInDown " src="./img/star.png">')
                        .css('left', left + '%'));
        left += 7;
    }
}