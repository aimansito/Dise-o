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
$(function () {
  $(document).on("keydown", function (event) {
    if (event.key === "a") {
      $("article.noticia h3").toggle();
    }
  });
});
$(function () {
    $("#enviar-btn").on("mouseenter", function () {
      $(this).fadeTo("fast", 0.7);
    });
  
    $("#enviar-btn").on("mouseleave", function () {
      $(this).fadeTo("fast", 1);
    });
  
    $("#enviar-btn").on("click", function (event) {
      event.preventDefault();
      let email = $("#email");
      let mensaje = $("#mensaje");
  
      if (email === "") {
        mensaje.text("Ingresa un correo válido.");
      } else {
        mensaje.text("Formulario enviado.");
      }
  
      mensaje.slideDown().delay(3000).slideUp();
    });
  
    $("#contacto input").on("focusin", function () {
      $(this).css("background", "lightblue");
    });
  
    $("#contacto input").on("focusout", function () {
      $(this).css("background", "white");
    });
  });
  