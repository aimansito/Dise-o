// apartado 1 
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) { // Aparece después de hacer scroll 300px
        $('#volverarriba').fadeIn();
    } else {
        $('#volverarriba').fadeOut();
    }
});
$('#volverarriba').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
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
$(function () {
    $("#menu > li > a").on("click", function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado

        let submenu = $(this).next("ul"); // Obtiene el submenú

        if (submenu.length) {
            // Cierra otros submenús que no son el actual
            $("#menu li > ul").not(submenu).stop(true, true).slideUp();
            // Alterna el submenú actual
            submenu.stop(true, true).slideToggle();

            let icono = $(this).find("i"); // Obtiene el ícono de la flecha
            // Restablece los íconos de otros enlaces
            $("#menu li > a i").not(icono).removeClass("fa-angle-up").addClass("fa-angle-down");
            // Alterna la clase del ícono
            icono.toggleClass("fa-angle-down fa-angle-up");
        }
    });

    // Evita que el clic en el submenú cierre el menú
    $("#menu li ul li a").on("click", function(event) {
        event.stopPropagation(); // Detiene la propagación del evento
    });
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
