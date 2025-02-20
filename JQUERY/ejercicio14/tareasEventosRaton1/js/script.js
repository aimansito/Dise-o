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
$(function(){
    $(document).on("keydown",
        function(event){
            event.preventDefault();
            if(event.key==="a"){
                $("article.noticia h3").toggle();
            }
        }
    )
});
$(function() {
    // Mostrar mensaje con efecto de persiana
    function mostrarMensaje(texto) {
        $("#mensaje").text(texto).slideDown(400).delay(2000).slideUp(400); // Efecto de persiana
    }

    // Manejo del envío del formulario
    $("#formulario-contacto").on("submit", function(event) {
        event.preventDefault(); // Previene el envío del formulario

        // Efecto de cambio de color en el botón con fadeTo
        $("#enviar-btn").fadeTo(300, 0.5).fadeTo(300, 1.0); // Cambia la opacidad

        mostrarMensaje("Formulario enviado con éxito!"); // Muestra el mensaje
    });

    $("#contacto input").on("focusin", function(){
        $(this).css("background", "lightblue");
    });

    $("#contacto input").on("focusout", function(){
        $(this).css("background", "white");
    });
});