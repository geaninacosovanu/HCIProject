function back() {
    window.location.replace('./index.html')
}

function next() {
    window.location.replace('./page3Quiz.html')
}

let foundIds = [];
let ids = [1, 2, 3, 4];
let left = 0;

function imageClick(imgNr) {
    event.stopPropagation();
    foundIds.push(imgNr);
    const index = ids.indexOf(imgNr);
    ids.splice(index, 1);
    $('#' + imgNr).css('display', 'none');
    $("#stars").append($('<img class="star animated zoomInDown " src="./img/star.png">').css('left', left + '%'));
    left += 7;
    if (foundIds.length === 4) {
        $('#stars').append('<audio controls autoplay hidden src="sounds/happyKids.mp3" type="audio/mpeg"></audio>')
        setTimeout(() => {
            $('#back').css('display', 'block');
            $('#next').css('display', 'block');
        }, 4000);
    }
}


function wrongClick() {
    event.stopPropagation();
    console.log('wrong click');
    $('#' + ids[0]).addClass('animated pulse infinite');

}


function playAudio() {
    event.stopPropagation();
    document.getElementById('music').pause();
    document.getElementById('dif').play();
    setTimeout(() => {
        document.getElementById('music').play();
    },7000);
}