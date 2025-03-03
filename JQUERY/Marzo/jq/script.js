$(function(){
    $("#hamburger").on("click",function(){
        if(!$("#menu-toggle").is(":animated")){
            $("#menu-toggle").stop(true,true).slideToggle(300);

            $(this).toggleClass("active");
        }
    })
});

