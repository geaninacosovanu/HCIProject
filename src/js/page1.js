function load() {
    setTimeout(function () {
        $('#boy').removeClass('animated').removeClass('fadeInLeft').addClass('translate-boy');
        setTimeout(() => {
            $('#boy').css('display', 'none');
            $('<embed src="sounds/carDoor.mp3" loop="false" autostart="false" hidden="true">').appendTo('body');
            $('#car').attr('src', 'img/car_with_boy.png');
            setTimeout(() => {
                $('<embed src="sounds/car+start3.mp3" loop="false" autostart="false" hidden="true">').appendTo('body');
                setTimeout(() => {
                    $('#bg').addClass('translate-car');
                    $(' <audio id="music" autoplay loop controls hidden src="sounds/autobuzul-1.mp3" type="audio/mpeg"></audio>').appendTo('body');
                    setTimeout(() => {
                        $("#passing").css('display', 'inherit');
                        $("#cross_road").css('display', 'inherit');
                    }, 10);
                    setTimeout(() => {
                        $("#bg").removeClass('translate-car');
                        $("#passing").css('animation', 'none');
                        $("#cross_road").css('animation', 'none');
                        $("#cross_road").addClass('stop-cross-road');

                        $("#passing").addClass('stop-semaphore');
                        setTimeout(() => {
                            document.getElementById('music').pause();
                            document.getElementById('sound').play();
                            setTimeout(() => {
                                document.getElementById('music').play();
                                $("#passing").attr('src', 'img/traffic-light-yellow.png');
                                setTimeout(() => {
                                    $("#passing").attr('src', 'img/traffic-light-green.png');
                                    $("#bg").addClass('translate-car');
                                    $("#passing").css('animation', 'continue-semaphore 21s forwards');
                                    $("#cross_road").css('animation', 'continue-cross-road 21s forwards');

                                    setTimeout(() => {
                                        window.location.replace('./page2.html');
                                    }, 12000)

                                }, 3000);
                            }, 26000);

                        });

                    }, 4200);
                }, 2000);

            }, 3000);
        }, 3000);
    }, 2000);
}


function back() {
    window.location.replace('./index.html')
}