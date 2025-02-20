// apartado 1
$(function () {
    let $volverArriba = $("#volverarriba");

    $volverArriba.hide();

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) { // Aparece después de hacer scroll 100px
            $volverArriba.stop(true, true).fadeIn();
        } else {
            $volverArriba.stop(true, true).fadeOut();
        }
    });

    $volverArriba.on("click", function () {
        $("html, body").stop().animate({ scrollTop: 0 }, 500);
    });
});

// apartado 2
$(function () {
    let menu = $("#menu");

    menu.hide();

    $("#menu-principal span").on("click", function () {
        if (!menu.is(":animated")) {
            menu.stop(true, true).slideToggle(300);
        }
    });
});
// apartado 3 
$(function () {
    let menu = $("#menu");
    let submenus = $("#menu li ul"); 

    menu.hide();
    submenus.hide();

    $("#menu-principal > span").on("click", function () {
        if (!menu.is(":animated")) {
            menu.stop(true, true).slideToggle(300);
        }
    });

    $("#menu > li > a").on("click", function (e) {
        e.preventDefault(); 
        let submenu = $(this).next("ul"); 

        if (!submenu.is(":animated")) {
            submenus.not(submenu).slideUp(300);
            submenu.stop(true, true).slideToggle(300); 
        }
    });
});
// apartado 4
$("#menu li > a").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();

    let submenu = $(this).next("ul");

    if (submenu.length) {
        $("#menu li > ul").not(submenu).stop().slideUp();
        $("#menu li > a i").removeClass("fa-angle-up").addClass("fa-angle-down");

        submenu.stop().slideToggle();

        let icono = $(this).find("i");
        icono.toggleClass("fa-angle-down fa-angle-up");
    }
});


//apartado 5
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


// apartado 6
$(function(){
    $('article.item').on("mouseenter",function(){
        let img = $(this).find('img');
        let src = img.attr('src');
        let hoverSrc = src.replace('.jpg','-1.jpg');
        img.attr('imagen',src);
        img.attr('src',hoverSrc);
    })
    .on("mouseleave", function(){
        let img = $(this).find('img');
        img.attr('src',img.attr('imagen'));
    })
});
