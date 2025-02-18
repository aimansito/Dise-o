$(function(){
    $("section > div > div").on("click", function (){
        $(this).parent().next(".texto").slideToggle();
        let svgs = $(this).find("svg");
        if(svgs.length === 2){
            svgs.last().remove();
        }else{
            $(this).append('  <svg height="3" width="21"><rect x1="0" y1="0" width="21" height="3" />');
        }
    })
})