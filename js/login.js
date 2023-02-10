$(document).ready(function () {
    
    $(".img-muñequita").hover(function(){
        $(".burbuja").removeClass("invisible");
        $(".burbuja").html(`<h4 class="mensajito">La enseñanza es inspirar el cambio.</h4>`);
    })

    $(".logoPai").hover(function(){
        $(".burbuja").removeClass("invisible");
        $(".burbuja").html(`<h4 class="mensajito">Plataforma de Ambientes e Instructores</h4>`);
    })
  
    $(".enlace-olvidar").hover(function(){
        $(".burbuja").removeClass("invisible");
        $(".burbuja").html(`<h4 class="mensajito">No te preocupes, es de humanos...</h4>`);
    })
});