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
                    setTimeout(()=> {
                        $("#passing").css('display', 'inherit');
                        $("#cross_road").css('display', 'inherit');
                    }, 10);
                    setTimeout(()=>{
                        $("#bg").removeClass('translate-car');
                        $("#passing").css('animation', 'none');
                        $("#cross_road").css('animation', 'none');

                        $("#passing").addClass('stop-semaphore');
                        $("#cross_road").addClass('stop-cross-road');
                        setTimeout(()=>{
                            $("#passing").attr('src', 'img/traffic-light-yellow.png');
                            setTimeout(()=> {
                                $("#passing").attr('src', 'img/traffic-light-green.png');
                                $("#bg").addClass('translate-car');
                                $("#passing").css('animation', 'continue-semaphore 21s forwards');
                                $("#cross_road").css('animation', 'continue-cross-road 21s forwards');

                            }, 3000);
                        }, 3000)
                    }, 4200);
                },2000);

            }, 3000);
        }, 3000);
    }, 2000);
}
