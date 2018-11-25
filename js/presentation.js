function load() {
    setTimeout(function () {
        $('#boy').removeClass('animated').removeClass('fadeInLeft').addClass('translate-boy');
        setTimeout(() => {
            $('#boy').css('display', 'none');
            $('<embed src="sounds/carDoor.mp3" loop="false" autostart="false" hidden="true">').appendTo('body');
            $('#car').attr('src','img/car_with_boy.png');
            setTimeout(() => {
                $('<embed src="sounds/car+start3.mp3" width="180" height="90" loop="false" autostart="false" hidden="true">').appendTo('body');
                setTimeout(()=>{
                    $('#bg').addClass('translate-car');
                    $('<embed src="sounds/autobuzul.mp3" width="180" height="90" loop="false" autostart="false" hidden="true">').appendTo('body');
                },2000);

            }, 3000);
        }, 3000);
    }, 2000);
}
