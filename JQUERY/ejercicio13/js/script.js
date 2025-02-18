$(window).on("scroll", function(){
    if($(this).scrollTop()>150){
        $("header").css({
            "position":"fixed",
            "width": "100%",
            "top":  "0",
            "opacity": "0.75"
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

$(function(){
    $("header nav#menu-principal label").on("click", function(){
        $(this).stop(true,true).animate({color: "red"});
    }).on("click",function(){
        $(this).stop(true,true).animate({color: "white"});
    })
});