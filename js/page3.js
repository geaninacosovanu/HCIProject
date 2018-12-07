function load() {
    setTimeout(function () {
        $('#car').attr('src', './img/car.png');
        $('#boy').css('display', 'block');
        playAudio();
        setTimeout(()=>{
            $('#listen').css('display', 'block');
            $('#back').css('display', 'block');
            $('#next').css('display', 'block');
        })


    }, 5000);
}

function playAudio() {
    document.getElementById('music').pause();
    document.getElementById('sound').play();
    setTimeout(() => {
        document.getElementById('music').play();
    },7000);
}

function back() {
    window.location.replace('./page2.html')
}

function next() {
    $('#boy').addClass('boy-go');
    setTimeout(()=>{
        $('#boy').css('display', 'none');
        $('#car').attr('src', './img/car_with_boy.png').addClass('car-go');
        setTimeout(()=>{
            window.location.replace('./page4.html');
        },4000);
    },5000);
}
