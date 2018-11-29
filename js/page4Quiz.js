function startLightQuiz() {


    $("#red").click(() => {
        $("#red").css("display", "none");
        $("#traffic").attr("src", "img/traffic-light-red-glow.png");
        $("#yellow").click(() => {
            $("#yellow").css("display", "none");
            $("#traffic").attr("src", "img/traffic-light-yellow-glow.png");
            $("#green").click(() => {
                $("#blue").css("display", "none");
                $("#green").css("display", "none");
                $("#traffic").attr("src", "img/traffic-light-red.png");
                setTimeout(()=> {
                    $("#traffic").attr("src", "img/traffic-light-yellow.png");
                    setTimeout(()=> {
                        $("#traffic").attr("src", "img/traffic-light-green.png");
                        }, 3000);
                    }, 3000);
            });
        });
    });

}