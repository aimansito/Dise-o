/*
$(function () {
    $(" article > img").on("mouseenter", function () {
        $(this).siblings(" h3 ").toggle();
    });
    $(" article > img").on("mouseleave", function () {
        $(this).siblings(" h3 ").toggle();
    });
});
*/
$(document).ready(function () {
    $("#email").on("select", function () {
        $("#mensaje-seleccion").fadeIn();
    }).on("blur", function () {
        $("#mensaje-seleccion").fadeOut();
    });

    $("#met-contacto").on("change", function () {
        let seleccionado = $(this).find(":selected").text();
        if (seleccionado) {
            $("#info-contacto").text(`Contacto por: ${seleccionado}`).fadeIn().delay(2000).fadeOut();
        }
    });
});