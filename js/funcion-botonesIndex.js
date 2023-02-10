$(document).ready(function () {
    $(".cursosDisponibles").hover(function(){
        $(".titulo").html(`<h1>¿Quieres ingresar a <span class="span-titulo">SofiaPLus</span>?`);
    })

    $(".territorium").hover(function(){
        $(".titulo").html(`<h1>¿Quieres ir a <span class="span-titulo">Territorium</span>?`);
    })

    $(".certificados").hover(function(){
        $(".titulo").html(`<h1>¿Quizas consultar tus <span class="span-titulo">Certificados</span>?`);
    })

    $(".ape").hover(function(){
        $(".titulo").html(`<h1>¿Tal vez ir a la <span class="span-titulo">Agencia Publica de Empleo</span>?`);
    })

    $(".biblioteca").hover(function(){
        $(".titulo").html(`<h1>¿Vas a visitar nuestra <span class="span-titulo">Biblioteca</span>?`);
    })

    $(".boton-opcion").mouseleave(function(){
        $(".titulo").html(`<h1>¿No sabes que hacer <span class="span-titulo">entonces</span>?`);
    })
  
});