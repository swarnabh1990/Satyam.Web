console.log('\'Allo \'Allo!');

$(document).ready(function () {

    var wh = $(window).height();

    $("section.stretch").height(wh);

    $(window).resize(function () {
        var wh = $(window).height();

        $("section.stretch").height(wh);
    });

    $(".nav-btns .dot").hover(
        function () {
            $(this).prev().toggle("fast", "swing");
        },
        function () {
            $(this).prev().toggle("fast", "swing");
        }
    )

    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        //about section
        var aboutTop = $("#about").offset().top;
        var aboutTopAnimOffset = aboutTop - ($(window).height() / 1.2);

        //services 
        var services = $("#services");
        var servicesTop = services.offset().top;
        var servicesHeight = services.height();
        var servicesTopAnimOffset = servicesTop - ($(window).height() / 2);

        //work section
        var workTop = $("#work").offset().top;
        var workTopAnimOffset = workTop - ($(window).height() / 1.2);

        if (wScroll > aboutTopAnimOffset && wScroll < servicesTop) {
            $("#about .headline").addClass("appear");
            $("#about .data").addClass("appear");
            $("#about .list-head").addClass("appear");
            $("#about .list-data").addClass("appear");
        }
        else {
            $("#about .headline").removeClass("appear");
            $("#about .data").removeClass("appear");
            $("#about .list-head").removeClass("appear");
            $("#about .list-data").removeClass("appear");
        }

        if (wScroll > servicesTopAnimOffset && wScroll <= (servicesTop + servicesHeight)) {
            //alert("HI");
            //$('#services .service').addClass("appear");
            //console.log("wScroll : " + wScroll + " Offset : " + servicesTopAnimOffset + " Limit : " + (servicesTop + servicesHeight));
            //$('#services .text').addClass("appear");
            
            var trans1 = Math.min(58, (wScroll - (servicesTop - ($(window).height() / 1.5))) / $(window).height() * 100);
            var trans2 = Math.min(35, (wScroll - (servicesTop - ($(window).height() / 2.5))) / $(window).height() * 100);

            console.log("wScroll : " + wScroll + " Computed : " +  (wScroll / 40) + "%");

            $('#services .hoarding-right').css({
                '-webkit-transform': 'translate(0px, -' + trans1 + '%)'
            });

            $('#services .hoarding-left').css({
                '-webkit-transform': 'translate(0px, -' + trans2 + '%)'
            });
            
            $("#services .hoarding-right .content .service").height($("#services .hoarding-right .content").height() - 23);

        }
        /*else {
            $('#services .service').removeClass("appear");
            $('#services .text').removeClass("appear");
        }*/
    });


});


function navBtnHoverIn(dot) {

}
