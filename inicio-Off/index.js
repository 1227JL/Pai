

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
            inicioIcon.src = "IMG/boton-de-inicio (1).png";
            tituladasIcon.src = "IMG/tituladas.png";
            mapaIcon.src = "IMG/mapa.png";
            calendarioIcon.src = "IMG/calendario.png"
        }

        if (e.currentTarget == botonesNavegador[1]){
            console.log("perfil");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            tituladasIcon.src = "IMG/tituladas2.png";
            mapaIcon.src = "IMG/mapa.png";
            calendarioIcon.src = "IMG/calendario.png"
        }
        
        if (e.currentTarget == botonesNavegador[2]){
            console.log("chatbox");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            tituladasIcon.src = "IMG/tituladas.png";
            mapaIcon.src = "IMG/mapa2.png";
            calendarioIcon.src = "IMG/calendario.png"
        }
        
        if (e.currentTarget == botonesNavegador[3]){
            console.log("otro");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            tituladasIcon.src = "IMG/tituladas.png";
            mapaIcon.src = "IMG/mapa.png";
            calendarioIcon.src = "IMG/calendario2.png"
        }
        
        if (e.currentTarget == botonesNavegador[4]){
            console.log("otro");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            tituladasIcon.src = "IMG/tituladas.png";
            mapaIcon.src = "IMG/mapa.png";
            calendarioIcon.src = "IMG/calendario.png"
        }
        
        if (e.currentTarget == botonesNavegador[5]){
            console.log("otro");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            tituladasIcon.src = "IMG/tituladas.png";
            mapaIcon.src = "IMG/mapa.png";
            calendarioIcon.src = "IMG/calendario.png"
        }
        
    });
});


// Jquery functions

$(document).ready(function(){

    var search = $("#barra")

    var serchIcon = $(".icon-lupa");
    
    function hoverAll(){
        $(this).css("cursor", "pointer")
    };

    search.focus(function(){
        search.css("border", "2px solid #82C635");
        serchIcon.show('fast');
    });
    search.blur(function(){
        search.css("border", "2px solid rgb(118, 118, 118)");
        search.css("borderTop", "none");
        search.css("borderLeft", "none");
        serchIcon.hide('fast');
    });

    serchIcon.hover(hoverAll)

    serchIcon.click(function(){
        console.log($(this).val().show);
    });

    $(".perfil img").each(function(element){
        $(this).hover(hoverAll)
    });

    // CIERRE DEL NAVEGADOR

    // Ingreso

    var divPerfil = $("#perfil");
    var perfilIcon = $("#perfil img")

    function perfilOn(){
        $(this).css("cursor", "pointer").css("color", "#82C635").css("fontSize", "1.1rem");
        perfilIcon.css("height", "40px")
    };

    function perfilOff(){
        $(this).css("fontSize", "1rem").css("color", "black");
        perfilIcon.css("height", "35px")
    };

    // Hover

    divPerfil.hover(perfilOn, perfilOff);


});



