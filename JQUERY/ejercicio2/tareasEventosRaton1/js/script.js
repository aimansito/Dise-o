
$(function () {
    $(" article > img").on("mouseenter", function () {
        $(this).siblings(" h3 ").toggle();
    });
    $(" article > img").on("mouseleave", function () {
        $(this).siblings(" h3 ").toggle();
    });
});