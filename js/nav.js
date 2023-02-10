

// NAVEGADOR

const botonesNavegador = document.querySelectorAll(".lista");

var inicioIcon = document.querySelector("#inicio span img");
var tituladasIcon = document.querySelector("#tituladas span img");
var mapaIcon = document.querySelector("#mapa span img");
var calendarioIcon = document.querySelector("#calendario span img");


botonesNavegador.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesNavegador.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget == botonesNavegador[0]){
            console.log("Home");
            inicioIcon.src = "images/boton-de-inicio (1).png";
            tituladasIcon.src = "images/tituladas.png";
            mapaIcon.src = "images/mapa.png";
            calendarioIcon.src = "images/calendario.png"
        }

        if (e.currentTarget == botonesNavegador[1]){
            console.log("perfil");
            inicioIcon.src = "images/boton-de-inicio.png"
            tituladasIcon.src = "images/tituladas2.png";
            mapaIcon.src = "images/mapa.png";
            calendarioIcon.src = "images/calendario.png"
        }
        
        if (e.currentTarget == botonesNavegador[2]){
            console.log("chatbox");
            inicioIcon.src = "images/boton-de-inicio.png"
            tituladasIcon.src = "images/tituladas.png";
            mapaIcon.src = "images/mapa2.png";
            calendarioIcon.src = "images/calendario.png"
        }
        
        if (e.currentTarget == botonesNavegador[3]){
            console.log("otro");
            inicioIcon.src = "images/boton-de-inicio.png"
            tituladasIcon.src = "images/tituladas.png";
            mapaIcon.src = "images/mapa.png";
            calendarioIcon.src = "images/calendario2.png"
        }
        
        if (e.currentTarget == botonesNavegador[4]){
            console.log("otro");
            inicioIcon.src = "images/boton-de-inicio.png"
            tituladasIcon.src = "images/tituladas.png";
            mapaIcon.src = "images/mapa.png";
            calendarioIcon.src = "images/calendario.png"
        }
        
        if (e.currentTarget == botonesNavegador[5]){
            console.log("otro");
            inicioIcon.src = "images/boton-de-inicio.png"
            tituladasIcon.src = "images/tituladas.png";
            mapaIcon.src = "images/mapa.png";
            calendarioIcon.src = "images/calendario.png"
        }
        
    });
});


// Jquery functions

$(document).ready(function(){


    function hoverAll(){
        $(this).css("cursor", "pointer")
    };

    $(".perfil img").each(function(element){
        $(this).hover(hoverAll)
    });

    // CIERRE DEL NAVEGADOR

    // Ingreso

    var divPerfil = $("#perfil");
    var perfilIcon = $("#perfil img")

    function perfilOn(){
        $(this).css("cursor", "pointer").css("color", "#82C635").css("fontSize", "1rem");
        perfilIcon.css("height", "35px")
    };

    function perfilOff(){
        $(this).css("fontSize", "1rem").css("color", "black");
        perfilIcon.css("height", "30px")
    };

    // Hover

    divPerfil.hover(perfilOn, perfilOff);


});



