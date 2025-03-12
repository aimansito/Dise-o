$(function (){
    $("div#compra").css({"display":"flex"});
})

// b
$(function(){
    $("span#btn-comprar").on("mouseenter",function(){
        $(this).css({
            "background-color":"white",
            "color":"#0795e6"
        })
    })
    $("span#btn-comprar").on("mouseleave",function(){
        $(this).css({
            "background-color":"",
            "color":""
        })
    })
})

//c
$(function(){
    $("div#compra > span:nth-child(2)").on("click",function(){
        $(this).html("favorite");
    })
})

// 2 
//a
$(function(){
    let num = $("section#producto p#cantidad-producto > span:nth-child(2) span#cantidad").text();
    let texto ;
    texto = parseFloat(num);
    console.log(texto);
    $("section#producto p#cantidad-producto > span:nth-child(2) span#mas").on("click",function(){
        let num = $("section#producto p#cantidad-producto > span:nth-child(2) span#cantidad").text();
        texto = parseFloat(num);
        if(texto>=10){
            $("section#producto p#cantidad-producto > span:nth-child(2) span#cantidad").html(10);
            $("span#cartel").css({
                "display":"flex"
            })
        }else{
            $("section#producto p#cantidad-producto > span:nth-child(2) span#cantidad").html(texto+1);
        }
    })
})
$(function(){
    let num = $("section#producto p#cantidad-producto > span:nth-child(2) span#cantidad").text();
    let texto ;
    texto = parseFloat(num);
    console.log(texto);
    $("section#producto p#cantidad-producto > span:nth-child(2) span#menos").on("click",function(){
        let num = $("section#producto p#cantidad-producto > span:nth-child(2) span#cantidad").text();
        texto = parseFloat(num);
        if(texto<=1){
            $("section#producto p#cantidad-producto > span:nth-child(2) span#cantidad").html(1);
        }else{
            $("section#producto p#cantidad-producto > span:nth-child(2) span#cantidad").html(texto-1);
        }
    })
})
// detalles del producto 

$(function(){
    $("section div#detalles").on("click",function(){
        $("section div#detalles div#texto").slideDown("slow");
    })
})

//opiniones

$(function (){
    $
})





//menu
$(function(){
    let menu = "header#header-web > nav#menu-principal > span";
    $(menu).on("click",function(event){
        event.stopPropagation();

        if($("ul").css("top")==="-224px"){
            $("ul").stop(true,true).animate({bottom:"0"},300);
            $("menu").stop(true,true).animate({color:"#c66c1d"},300);
        }else{
            $("ul").stop(true,true).animate({bottom:"-224px"},300);
            $("ul").stop(true,true).slideUp(300).removeAttr("style");
            $("menu").stop(true,true).animate({color:"c66c1d"},300);
        }
    })
})
$(window).on("scroll",function(){
    if($("ul").css("bottom")==="0px"){
        $("ul").stop(true,true).animate({bottom:"-224px"},300);
        $("#icono-menu").stop(true,true).animate({color:"black"},300);
        $("#menu ul").stop(true,true).slideUp(300).removeAttr("style")
    }
});