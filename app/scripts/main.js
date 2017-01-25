console.log('\'Allo \'Allo!');

$(document).ready(function () {

    var sections = [];

    $(".section").each(function(){
        sections.push("#" + $(this).attr("id"));
    });

    var currentSection = sections[0];
    var currSecOffset = 0;
    var lastScrollTop = 0;

    console.log(sections);

    var wh = $(window).height();

    var countedAbout = false;

    $("#intro").height(wh);

    $("#products .head-pane").height($("#products .row.main").height() - 10)
    $("#work .head-pane").height($("#work .row.main").height() - 10)

    /*$(".section").each(function(){
        if($(this).height() < wh){
            $(this).height(wh);
        }
    });*/

    /*$(window).resize(function () {
        var wh = $(window).height();
               
        $(".section").each(function(){
            if($(this).height() < wh){
                $(this).height(wh);
            }
        });
        
    });*/

    //nav btn hover
    $(".nav-btns .dot").hover(
        function () {
            $(this).prev().toggle("fast", "swing");
        },
        function () {
            $(this).prev().toggle("fast", "swing");
        }
    )

    console.log($("#work #work-photos img"));

    //work portfolio
    /* */
    


    //window scroling
    $(window).scroll(function () {
        //alert("Hi");
        var wScroll = $(this).scrollTop();

        //console.log("wScroll = " + wScroll + "  lastScrollTop = " + lastScrollTop);

        //about section
        var aboutTop = $("#about").offset().top;
        var aboutTopAnimOffset = aboutTop - ($(window).height() / 1.2);

        //services 
        var services = $("#services");
        var servicesTop = services.offset().top;
        var servicesHeight = services.height();
        var servicesTopAnimOffset = servicesTop - ($(window).height() / 2);

         //products section
        var productsTop = $("#products").offset().top;
        var productsTopAnimOffset = productsTop - ($(window).height() / 1);

        //clients section
        var clientsTop = $("#clients").offset().top;
        var clientsTopAnimOffset = clientsTop - ($(window).height() / 1.2);        

        //work section
        var workTop = $("#work").offset().top;
        var workTopAnimOffset = workTop - ($(window).height() / 1.2);

        /*if((wScroll > lastScrollTop) && (currSecOffset < sections.length - 2) && wScroll + $(window).height() > $("" + sections[currSecOffset + 1]).offset().top){
            console.log("Scroll Down. Open " + sections[currSecOffset + 1]);
            currSecOffset++;
            currentSection = sections[currSecOffset];
            $('html,body').animate({ scrollTop:$("" + sections[currSecOffset]).offset().top}, 'slow');
        }
        else if((wScroll < lastScrollTop) && (currSecOffset > 0) && wScroll < $(currentSection).offset().top){
            console.log("Scroll Up. Open " + sections[currSecOffset - 1]);
            currSecOffset--;
            currentSection = sections[currSecOffset];
            $('html,body').animate({ scrollTop:$("" + sections[currSecOffset]).offset().top}, 'slow');
        }  */     

        
        if (wScroll > aboutTopAnimOffset && wScroll < productsTop) {
            $("#about .headline").addClass("appear");
            $("#about .data").addClass("appear");
            $("#about .list-head").addClass("appear");
            $("#about .list-data").addClass("appear");

            if(!countedAbout){
                $('#about .count').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                countedAbout = true;
            }
            $('#about .count').addClass("counted");
        }
        else {
            $("#about .headline").removeClass("appear");
            $("#about .data").removeClass("appear");
            $("#about .list-head").removeClass("appear");
            $("#about .list-data").removeClass("appear");
        }

        //services animation
        if (wScroll > servicesTopAnimOffset && wScroll <= (servicesTop + servicesHeight)) {
            //alert("HI");
            //$('#services .service').addClass("appear");
            //console.log("wScroll : " + wScroll + " Offset : " + servicesTopAnimOffset + " Limit : " + (servicesTop + servicesHeight));
            //$('#services .text').addClass("appear");
            
            var trans1 = Math.min(58, (wScroll - (servicesTop - ($(window).height() / 1.5))) / $(window).height() * 100);
            var trans2 = Math.min(35, (wScroll - (servicesTop - ($(window).height() / 2.5))) / $(window).height() * 100);

            //console.log("wScroll : " + wScroll + " Computed : " +  (wScroll / 40) + "%");

            $('#services .hoarding-right').css({
                'transform': 'translate(0px, -' + trans1 + '%)'
            });

            $('#services .hoarding-left').css({
                'transform': 'perspective(500px) rotateY(10deg) translate(0px, -' + trans2 + '%)'
            });
            
            $("#services .hoarding-right .content .service").height($("#services .hoarding-right .content").height() - 23);

        }
        /*else {
            $('#services .service').removeClass("appear");
            $('#services .text').removeClass("appear");
        }*/


        //products animation
         if (wScroll > productsTopAnimOffset && wScroll < servicesTop) {
            $("#products .head-pane").addClass("appear");
            $("#products .img-pane").addClass("appear");
         }
         else{
            $("#products .head-pane").removeClass("appear");
            $("#products .img-pane").removeClass("appear");
         }

         if (wScroll > workTopAnimOffset) {
            $("#work .head-pane").addClass("appear");
            $("#work .img-pane").addClass("appear");
         }
         else{
            $("#work .head-pane").removeClass("appear");
            $("#work .img-pane").removeClass("appear");
         }

         lastScrollTop = wScroll;
    });


});


function openModal() {
  document.getElementById('lightbox').style.display = "block";
}

function closeModal() {
  document.getElementById('lightbox').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
