var mayorPressed = false;
var patientPressed = false;
var thiefPressed = false;
var teacherPressed = false;
var suitPressed = false;
var carPressed = false;
var kidsPressed = false;
var secretarPressed = false;
var docPressed = false;
var copPressed = false;
var schoolPressed = false;
var bankPressed = false;
var hospitalPressed = false;
var policePressed = false;
var cityHallPressed = false;

function load() {

    var count = 0;
    $("#mayor").click(()=> {
        if (cityHallPressed && count === 1) {
            $("#mayor").addClass("animated pulse infinite");
            $("#mayor").css("animation", "moveMayor 5s forwards");
            $("#mayor").click(()=>{});
            $("#cityhall").click(()=>{});
            setTimeout(()=> {
                    $("#mayor").removeClass("animated pulse infinite");
                    $("#cityhall").removeClass("animated pulse infinite");
                }, 5000);
                count-=1;
            }
            else if (count === 0) {
                $("#mayor").addClass("animated pulse infinite");
                mayorPressed = true;
                count +=1;
            }
            else
                if (count == 1 && mayorPressed) {
                    $("#mayor").removeClass("animated pulse infinite");
                    mayorPressed = false;
                    count -=1;
                }
        }
    );

    $("#cityhall").click(() => {
        if (mayorPressed && count === 1) {
                $("#cityhall").addClass("animated pulse infinite");
                $("#mayor").css("animation", "moveMayor 5s forwards");
                setTimeout(()=> {
                    $("#mayor").removeClass("animated pulse infinite");
                    $("#cityhall").removeClass("animated pulse infinite");
                }, 5000);
                $("#mayor").click(()=>{});
                $("#cityhall").click(()=>{});

                 count -= 1;
                }
            else
                if (count === 1 && cityHallPressed) {
                    $("#cityhall").removeClass("animated pulse infinite");
                    cityHallPressed = false;
                    count -=1;
            }
            else
                if (count === 0 && !cityHallPressed){
                    $("#cityhall").addClass("animated pulse infinite");
                    cityHallPressed = true;
                    count+=1;
                }
    })

    // police
    $("#police").click(() => {
        if (copPressed && count === 1) {
            $("#police").addClass("animated pulse infinite");
            $("#policeman").css("animation", "moveCop 5s forwards");
            setTimeout(()=> {
                $("#police").removeClass("animated pulse infinite");
                $("#policeman").removeClass("animated pulse infinite");
            }, 5000);
            $("#police").click(()=>{});
            count -= 1;
        }
        else
        if (count === 1 && policePressed) {
            $("#police").removeClass("animated pulse infinite");
            policePressed = false;
            count -=1;
        }
        else
        if (count === 0 && !policePressed){
            $("#police").addClass("animated pulse infinite");
            policePressed = true;
            count+=1;
        }
    });

    $("#policeman").click(()=> {
            if (policePressed && count === 1) {
                $("#police").addClass("animated pulse infinite");
                $("#policeman").css("animation", "moveCop 5s forwards");
                setTimeout(()=> {
                    $("#police").removeClass("animated pulse infinite");
                    $("#policeman").removeClass("animated pulse infinite");
                }, 5000);
                $("#police").click(()=>{});
                $("#policeman").click(()=>{});
                count -= 1;
            }
            else if (count === 0) {
                $("#policeman").addClass("animated pulse infinite");
                copPressed = true;
                count +=1;
            }
            else
            if (count == 1 && copPressed) {
                $("#policeman").removeClass("animated pulse infinite");
                copPressed = false;
                count -=1;
            }
        }
    );

    //school

    $("#school").click(() => {
        if (teacherPressed && count === 1) {
            $("#school").addClass("animated pulse infinite");
            $("#teacher").css("animation", "moveTeacher 5s forwards");
            setTimeout(()=> {
                $("#school").removeClass("animated pulse infinite");
                $("#teacher").removeClass("animated pulse infinite");
            }, 5000);
            $("#school").click(()=>{});
            $("#teacher").click(()=>{});
            count -= 1;
        }
        else
        if (count === 1 && schoolPressed) {
            $("#school").removeClass("animated pulse infinite");
            schoolPressed = false;
            count -=1;
        }
        else
        if (count === 0 && !schoolPressed){
            $("#school").addClass("animated pulse infinite");
            schoolPressed = true;
            count+=1;
        }
    });

    $("#teacher").click(()=> {
            if (schoolPressed && count === 1) {
                $("#school").addClass("animated pulse infinite");
                $("#teacher").css("animation", "moveTeacher 5s forwards");
                setTimeout(()=> {
                    $("#school").removeClass("animated pulse infinite");
                    $("#teacher").removeClass("animated pulse infinite");
                }, 5000);
                $("#school").click(()=>{});
                $("#teacher").click(()=>{});
                count -= 1;
            }
            else if (count === 0) {
                $("#teacher").addClass("animated pulse infinite");
                teacherPressed = true;
                count +=1;
            }
            else
            if (count == 1 && teacherPressed) {
                $("#teacher").removeClass("animated pulse infinite");
                teacherPressed = false;
                count -=1;
            }
        }
    );

    //doc

    $("#doctor").click(() => {
        if (hospitalPressed && count === 1) {
            $("#hospital").addClass("animated pulse infinite");
            $("#doctor").css("animation", "moveDoctor 5s forwards");
            setTimeout(()=> {
                $("#doctor").removeClass("animated pulse infinite");
                $("#hospital").removeClass("animated pulse infinite");
            }, 5000);
            $("#doctor").click(()=>{});
            $("#hospital").click(()=>{});
            count -= 1;
        }
        else
        if (count === 1 && docPressed) {
            $("#doctor").removeClass("animated pulse infinite");
            docPressed = false;
            count -=1;
        }
        else
        if (count === 0 && !docPressed){
            $("#doctor").addClass("animated pulse infinite");
            docPressed = true;
            count+=1;
        }
    });

    $("#hospital").click(()=> {
            if (docPressed && count === 1) {
                $("#hospital").addClass("animated pulse infinite");
                $("#doctor").css("animation", "moveDoctor 5s forwards");
                setTimeout(()=> {
                    $("#hospital").removeClass("animated pulse infinite");
                    $("#doctor").removeClass("animated pulse infinite");
                }, 5000);
                $("#hospital").click(()=>{});
                $("#doctor").click(()=>{});
                count -= 1;
            }
            else if (count === 0) {
                $("#hospital").addClass("animated pulse infinite");
                hospitalPressed = true;
                count +=1;
            }
            else
            if (count == 1 && hospitalPressed) {
                $("#teacher").removeClass("animated pulse infinite");
                hospitalPressed = false;
                count -=1;
            }
        }
    );

    //suit
    $("#suit").click(() => {
        if (bankPressed && count === 1) {
            $("#bank").addClass("animated pulse infinite");
            $("#suit").css("animation", "moveSuit 5s forwards");
            setTimeout(()=> {
                $("#bank").removeClass("animated pulse infinite");
                $("#suit").removeClass("animated pulse infinite");
            }, 5000);
            $("#bank").click(()=>{});
            $("#suit").click(()=>{});
            count -= 1;
        }
        else
        if (count === 1 && suitPressed) {
            $("#suit").removeClass("animated pulse infinite");
            suitPressed = false;
            count -=1;
        }
        else
        if (count === 0 && !suitPressed){
            $("#suit").addClass("animated pulse infinite");
            suitPressed = true;
            count+=1;
        }
    });

    $("#bank").click(()=> {
            if (suitPressed && count === 1) {
                $("#bank").addClass("animated pulse infinite");
                $("#suit").css("animation", "moveSuit 5s forwards");
                setTimeout(()=> {
                    $("#bank").removeClass("animated pulse infinite");
                    $("#suit").removeClass("animated pulse infinite");
                }, 5000);
                $("#bank").click(()=>{});
                $("#suit").click(()=>{});
                count -= 1;
            }
            else if (count === 0) {
                $("#bank").addClass("animated pulse infinite");
                bankPressed = true;
                count +=1;
            }
            else
            if (count == 1 && bankPressed) {
                $("#bank").removeClass("animated pulse infinite");
                bankPressed = false;
                count -=1;
            }
        }
    );



}
function back() {
    window.location.replace('./index.html')
}