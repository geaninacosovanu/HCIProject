function playAudio() {
    document.getElementById('music').pause();
    document.getElementById('sound').play();
    setTimeout(() => {
        document.getElementById('music').play();
    }, 490000);
}

function onLoad() {
    document.getElementById('music').pause();
    document.getElementById('sound').play();
    setTimeout(() => {
        $('#car').css('display', 'block').addClass('animated fadeInLeftBig');
        setTimeout(() => {
            $('#listen').css('display', 'block').addClass(' animated fadeInDown');
            setTimeout(() => {
                $('#pres').css('display', 'block').addClass(' animated fadeInLeft');
                setTimeout(() => {
                    $('#quiz').css('display', 'block').addClass(' animated fadeInRight');
                    setTimeout(() => {
                        $('#back').css('display', 'block').addClass(' animated fadeInLeft');
                        $('#next').css('display', 'block').addClass(' animated fadeInRight');
                        setTimeout(() => {
                            document.getElementById('music').play();
                            $('#pres').css('display', 'block').removeClass('fadeInLeft').addClass('pulse infinite');
                            $('#quiz').css('display', 'block').removeClass('fadeInRight').addClass('pulse infinite');

                        }, 15000);
                    }, 6000);
                }, 3000);
            }, 4000);
        }, 12000);
    }, 7000);
}