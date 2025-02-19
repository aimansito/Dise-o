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
    let menu = $("#menu");
    let submenus = $("#menu li ul"); 
    let arrows = $("#menu > li > a i");

    menu.hide();
    submenus.hide();

    $("#menu-principal > span").on("click", function () {
        if (!menu.is(":animated")) {
            menu.stop(true, true).slideToggle(300);
        }
    });

    // Controlar apertura de submenús y cambiar flecha
    $("#menu > li > a").on("click", function (e) {
        e.preventDefault(); 

        let submenu = $(this).next("ul"); 
        let arrow = $(this).find("i"); 

        if (!submenu.is(":animated")) {
            submenus.not(submenu).slideUp(300); 
            arrows.not(arrow).removeClass("fa-angle-up").addClass("fa-angle-down"); 

            submenu.stop(true, true).slideToggle(300, function () {
                if (submenu.is(":visible")) {
                    arrow.removeClass("fa-angle-down").addClass("fa-angle-up");
                } else {
                    arrow.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
        }
    });
});


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
