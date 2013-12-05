$(function() {
    var sound = new Audio('http://www.recordmp3.org/gRs2S.mp3');
    var sound2 = new Audio('http://www.recordmp3.org/gR52T.mp3');
    var bgcolorlist=new Array("#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6")
                $("#jquery_jplayer_1").jPlayer({
                    ready: function() {
                        $(this).jPlayer("setMedia", {
                            mp3: "/javascripts/Eleanor Rigby - Beatles piano instrumental.mp3"
                        }).jPlayer("play");
                        var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
                        var kickoff = function () {
                            $("#jquery_jplayer_1").jPlayer("play");
                            document.documentElement.removeEventListener(click, kickoff, true);
                        };
                        document.documentElement.addEventListener(click, kickoff, true);
                    },
                    loop: true,
                    swfPath: "/js"
                });
    var socket = io.connect(window.location.hostname);
    socket.on('data', function(data) {
        if (typeof data == 'string' || data instanceof String){
            var data = data.replace(/(^|\s)@(\w+)/g, "");
            meSpeak.speak(data,{speed: 130, variant: "m1"});
            $('.tweets').fadeOut(500);
            $('.tweets').empty();
            $('.tweets').append(data);
            $('.tweets').fadeIn(500);
            // document.body.style.background=bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]

        }


        // var total = data.total;
        // for (var key in data.symbols) {
        //     var val = data.symbols[key] / total;
        //     if (isNaN(val)) {
        //         val = 0;
        //     }

        //     // $('li[data-symbol="' + key + '"]').each(function() {
        //     //     $(this).css('background-color', 'rgb(' + Math.round(val * 255) +',0,0)');
        //     //     // if(key=="chocolate"){
        //     //     //     console.log("chicken");
        //     //     //     sound.play();
        //     //     // }
        //     //     // if(key=="hello"){
        //     //     //     console.log("hello");
        //     //     //     sound2.play();
        //     //     // }
        //     // });
        // }
        // $('#last-update').text(new Date().toTimeString());
    });
})