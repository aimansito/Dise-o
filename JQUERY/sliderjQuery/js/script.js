$(function () {
  var SliderModule = (function () {
    var pb = {}; //Creamos un objeto
    pb.elslider = $("#slider");
    pb.items = {
      panels: pb.elslider.find(".slider-wrapper> li"),
    };

    var SliderInterval,
      currentSlider = 0,
      nextSlider = 1,
      lengthSlider = pb.items.panels.length;

    pb.init = function (settings) {
      this.settings= settings || { duration : 5000}
      var loscontroles = '';
      SliderInit();

      for(var i = 0;i<lengthSlider;i++){
        if(i==0){
            loscontroles += "<li class='active'></li>";
        }else{
            loscontroles += "<li></li>";
        }
      }
      //insertamos los controles en el html
      $('#control-buttons').html(loscontroles);


      $('#control-buttons li').on("click",function() {
        if(currentSlider !== $(this).index()){
            cambiarPanel($(this).index());
        }
      });
    };
    // funcion para iniciar el slider
    var SliderInit = function () {
      SliderInterval = setInterval(pb.startSlider, 10000);
    };
    pb.startSlider = function () {
      var paneles = pb.items.panels;
      var controles = $('#control-buttons li');

      if(nextSlider >= lengthSlider){
        nextSlider = 0; // QUE EMPIECE POR EL PRINCIPIO DE NUEVO
        currentSldier = lengthSlider -1;
      }
      
      controles.removeClass('active');
      controles.eq(nextSlider).addClass('active');

      paneles.eq(currentSlider).fadeOut('slow');
      paneles.eq(nextSlider).fadeIn('slow');
      currentSlider = nextSlider;
      nextSlider += 1;
    };

    var cambiarPanel = function(indice){
        var controles = $('#control-buttons li');
        var paneles= pb.items.panels;
        //Comprobamos que el indice este disponible
        //dentro de los paneles de slider
        if(indice >= lengthSlider){
            indice = 0;// para que no se salga de lo paneles disponibles
        }else if(indice<0){
            indice = lengthSlider -1;
        }

      controles.removeClass('active');
      controles.eq(indice).addClass('active');


      paneles.eq(currentSlider).fadeOut('slow');
      paneles.eq(indice).fadeIn('slow');
      currentSlider = indice;
      nextSlider = indice +1;

      SliderInit();
    }
    return pb;
}());
  //Llamada al constructor 
  SliderModule.init();
});
