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
    $("header nav#menu-principal label").on("mouseenter", function(){
        $(this).animate({ color: "red" }, 3000);
    });
    $("header nav#menu-principal label").on("mouseleave", function(){
        $(this).animate({ color: "white" }, 3000);
    });
});