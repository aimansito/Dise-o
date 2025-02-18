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


// apartado 6
$(function () {
    $("main article img").on("mouseenter", function () {
        $(this).attr("src", "ruta/nueva-imagen.jpg");
        $(this).siblings("h3").toggle(); // Mostrar u ocultar el título
    });

    $("main article img").on("mouseleave", function () {
        $(this).attr("src", "ruta/imagen-original.jpg");
        $(this).siblings("h3").toggle(); // Mostrar u ocultar el título
    });
});
