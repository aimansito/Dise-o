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