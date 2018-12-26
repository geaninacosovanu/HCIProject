function load() {
    setTimeout(function () {
        $('#car').attr('src', './img/car.png');
        $('#boy').css('display', 'block');
        setTimeout(() => {
            $('#listen').css('display', 'block');
            $('#back').css('display', 'block');
            $('#next').css('display', 'block');
        })
        playAudio();
    }, 5000);
}

function playAudio() {
    document.getElementById('music').pause();
    document.getElementById('sound').play();
    setTimeout(() => {
        document.getElementById('music').play();
    },15000);
}

function back() {
    window.location.replace('./page6.html')
}

function next() {
    window.location.replace('./final.html');
}
