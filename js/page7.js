function load() {
    setTimeout(function () {
        $('#car').attr('src', './img/car.png');
        $('#boy').css('display', 'block');
        playAudio();
        setTimeout(() => {
            $('#listen').css('display', 'block');
            $('#back').css('display', 'block');
            $('#next').css('display', 'block');
        })


    }, 5000);
}

function playAudio() {
    document.getElementById('sound').play();

}

function back() {
    window.location.replace('./page6.html')
}

function next() {

    window.location.replace('./final.html');
}
