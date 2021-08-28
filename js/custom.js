$(document).ready(
    function(){
        $(".preloder").delay(2000).fadeOut();
    }
    
);

$(window).scroll(
    function(){
        var scrolling = $(this).scrollTop();
        if( scrolling > 100){
            $('nav').addClass("bg");

        }else{
            $('nav').removeClass('bg');
        }
        if(scrolling > 400){
            $(".bottom-top").fadeIn()
        }else(
            $(".bottom-top").fadeOut()
        )
    }
);


$(".bottom-top").click(
    function(){
        $("body,html").animate({
            scrollTop: "0",
        },1500);
    }
);