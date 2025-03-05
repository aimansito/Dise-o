$(function () {
  $("#hamburger").on("click", function () {
    function resetMenu() {
      $("#menu-toggle").removeAttr("style").stop(true, true).hide();
      $("#hamburger").removeClass("active").removeAttr("style");
      $(".line-ham:nth-child(2)").removeAttr("style");
    }

    function onResize() {
      resetMenu();
    }

    $(window).resize(onResize);

    if (!$("#menu-toggle").is(":animated")) {
      $("#menu-toggle").stop(true, true).slideToggle(300);

      let $lineaCentral = $(this).find(".line-ham:nth-child(2)");

      if ($(this).hasClass("active")) {
        $(this).removeClass("active");

        $(this).stop(true, true).animate(
          {
            backgroundColor: "#fff",
          },
          300
        );

        $lineaCentral.stop(true, true).animate(
          {
            width: "70%",
          },
          300
        );
      } else {
        $(this).addClass("active");
        $(this).stop(true, true).animate(
          {
            backgroundColor: "#f8f8f8",
          },
          300
        );

        $lineaCentral.stop(true, true).animate(
          {
            width: "100%",
          },
          300
        );
      }
    }
  });
});

// Cerrar el menú al hacer scroll

$(window).on("scroll", function () {
  if ($("#hamburger").hasClass("active")) {
    $("#hamburger").click(); // Simula un clic en el ícono para cerrar el menú
  }
});

// Abrir submenu

// cerrar menu al redimensionar


// barra social
$(function(){
    $("#barra-social").css({
        display: flex,
        opacity: 0,
        right: "-50px"
    }).animate({
        opacity: 1,
        right: "10px"
    },800);
})


$(function(){
    $()
})