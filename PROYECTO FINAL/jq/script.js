// cabcecera
$(window).on("scroll", function(){
    if($(this).scrollTop()>100){
        $("header").css({
            "position":"fixed",
            "width": "100%",
            "top":  "0"
        });
    }else{
        $("header").css({
            "position":"relative",
            "opacity":"1"
        })
    }
})
$(function(){
    $(window).on("resize",function(){
        $("#hamburger").prop("checked",false);
    })
})
