console.log('\'Allo \'Allo!');

$( document ).ready(function() {
    
    var wh = $(window).height();
    
        $("section.stretch").height(wh);

    $( window ).resize(function() {
        var wh = $(window).height();
    
        $("section.stretch").height(wh);
    });  

    $(".nav-btns .dot").hover(
        function(){
            $(this).prev().toggle("fast", "swing");
        },
        function(){
            $(this).prev().toggle("fast", "swing");
        }
    )

    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        //about section
        var aboutTop = $("#about").offset().top;
        var aboutTopAnimOffset = aboutTop - ($(window).height()/1.2);

        //work section
        var servicesTop = $("#services").offset().top;
        var servicesTopAnimOffset = servicesTop - ($(window).height()/1.2);

        if(wScroll > aboutTopAnimOffset && wScroll < servicesTop){
            $("#about .headline").addClass("appear");
            $("#about .data").addClass("appear");
            $("#about .list-head").addClass("appear");
            $("#about .list-data").addClass("appear");
        }
        else{
            $("#about .headline").removeClass("appear");
            $("#about .data").removeClass("appear");
            $("#about .list-head").removeClass("appear");
            $("#about .list-data").removeClass("appear");
        }

    });

    
});


function navBtnHoverIn(dot){
    
}