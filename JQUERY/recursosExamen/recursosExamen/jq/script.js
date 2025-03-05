// menu-principal 

//menu hamburguesa

$(function(){
    //Escucha el evento de click en el elemento con ID "hamburguesa"
    $("#hamburguesa").on("click",function(event){
        //evita que el evento de click se propague a otros elementos
        event.stopPropagation();

        //verifica si el menu esta oculto
        if($("#menu").css("left")==="-224px"){
            $("#menu").stop(true,true).animate({left:"0"},300);
            $("#menu-principal span i").stop(true,true).animate({color:"e3a51a"},300);
        }else{
            $("#menu").stop(true,true).animate({left:"-224px"},300);
            $("#menu ul").stop(true,true).slideUp(300).removeAttr("style");
            $("#hamburguesa").stop(true,true).animate({color:"black"},300);
        }
    })
})
$(function(){
    $("#menu > li > a").on("click",function(e){
        e.preventDefault();
        e.stopPropagation();

        let submenu = $(this).next("ul");


        $("#menu ul").not(submenu).slideUp(300);
        submenu.stop(true,true).slideToggle(300);
    });
    $(document).on("click",function(){
        $("#menu ul").slideUp(300);
    })
})

// al hacer scroll se cierra el menu
$(window).on("scroll",function(){
    if($("#menu").css("left")==="0px"){
        $("#menu").stop(true,true).animate({left:"-224px"},300);
        $("#hamburguesa").stop(true,true).animate({color:"black"},300);
        $("#menu ul").stop(true,true).slideUp(300).removeAttr("style")
    }
});


// al redimensionar
$(window).on("load", function () {
    $(window).on("resize", function () {
        // Cerramos todos los submenús
        $("#main-menu #menu-toggle li > ul").stop().slideUp();
    
        // Restablecemos los íconos a "+"
        $("#main-menu #menu-toggle li > a span").text("+");
    
        // Eliminamos atributos añadidos dinámicamente (si los hay)
        $("#main-menu #menu-toggle li > ul").removeAttr("style");
        $("#main-menu #menu-toggle li > a span").removeAttr("style");
    });
});

// cabecera 
$(window).on("scroll",function(){
    if($(window).scrollTop()>100){
        $("#elviajero").stop(true,true).fadeOut(300);
        $("header").css({
            "position":"fixed",
            "width":"100%",
            "top":"0",
            "background-color":"white",
        });
    }else{
        $("#elviajero").stop(true,true).fadeIn(300);
        $("#header").css({
            "position":"relative"
        });
    }
})

// barra social
$(window).on("scroll",function(){
    if($(window).scrollTop()>100){
        $("#barra-social").css({
            "position":"fixed",
            "bottom":"0",
            "width":"100%",
            "background-color":"white"
        }).stop().animate({"opacity":"1"},300);
    }else{
        $("#barra-social").css({
            "position":"",
            "bottom":"",
            "width":"",
            "background-color":""
        });
    }
})

// formulario
$(function(){
    $("#contacto input, #contacto textarea, #contacto select").each(function(){
        $(this).attr("title",$(this).attr("placeholder"));
    })
})

$(function(){
    let errores = $("#errores");

    $("#contacto input, #contacto textarea, #contacto select").on("blur",function(){
        if ($(this).prop("required") && $(this).val().trim() === "") {
            errores.append(`<p style="color: red;">El campo "${$(this).attr("name")}" no puede estar vacío.</p>`);
        }
    })
})

$(function () {
    let errores = $("#errores");

    $("#telefno").on("blur", function () {
        if ($(this).val().length !== 9) {
            errores.append(`<p style="color: red;">El teléfono debe tener exactamente 9 dígitos.</p>`);
        }
    });
});

$(function () {
    $("#mensaje").on("input", function () {
        let max = 100;
        let restante = max - $(this).val().length;
        $("#caracteres").text(`Dispone de ${restante} caracteres.`);
    });
});
$("#menu > li > a").on("click", function (event) {
    event.preventDefault();

    let subMenu = $(this).next("ul");
    let otrosSubMenu = $("#menu ul").not(subMenu);
    //let iconos = $(this).find("span i");

    if (subMenu.is(":visible")) {
        subMenu.stop().slideUp(300);
        //iconos.rotate({ angle: 180, animateTo: 0, duration: 300 });
    } else {
        otrosSubMenu.stop().slideUp(300);
        //$("#menu > li > a").find("span i").rotate({ angle: 180, animateTo: 0, duration: 300 });
        subMenu.stop().slideDown(300);
        //iconos.rotate({ angle: 0, animateTo: 180, duration: 300 });
    }
});