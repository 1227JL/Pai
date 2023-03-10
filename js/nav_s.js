
// NAVEGADOR

const botonesNavegador = document.querySelectorAll(".lista");

var inicioIcon = document.querySelector("#inicio span img");
var tituladasIcon = document.querySelector("#tituladas span img");
var instructores = document.querySelector("#instructores span img");
var mapaIcon = document.querySelector("#mapa span img");
var calendarioIcon = document.querySelector("#calendario span img");


// botonesNavegador.forEach(boton => {

//     boton.addEventListener("click", (e) => {

//         botonesNavegador.forEach(boton => boton.classList.remove("active"));
//         e.currentTarget.classList.add("active");


//         // if (e.currentTarget == botonesNavegador[0]){
//         //     console.log("Home");
//         //     inicioIcon.src = "../images/boton-de-inicio (1).png";
//         //     instructores.src = "../images/instructores.png"
//         //     tituladasIcon.src = "../images/tituladas.png";
//         //     mapaIcon.src = "../images/mapa.png";
//         //     calendarioIcon.src = "../images/calendario.png"
//         // }

//         // if (e.currentTarget == botonesNavegador[1]){
//         //     console.log("perfil");
//         //     inicioIcon.src = "../images/boton-de-inicio.png"
//         //     instructores.src = "../images/instructores.png"
//         //     tituladasIcon.src = "../images/tituladas2.png";
//         //     mapaIcon.src = "../images/mapa.png";
//         //     calendarioIcon.src = "../images/calendario.png"
//         // }
        
//         // if (e.currentTarget == botonesNavegador[2]){
//         //     console.log("chatbox");
//         //     inicioIcon.src = "../images/boton-de-inicio.png"
//         //     instructores.src = "../images/instructores2.png"
//         //     tituladasIcon.src = "../images/tituladas.png";
//         //     mapaIcon.src = "../images/mapa.png";
//         //     calendarioIcon.src = "../images/calendario.png"
//         // }
        
//         // if (e.currentTarget == botonesNavegador[3]){
//         //     console.log("otro");
//         //     inicioIcon.src = "../images/boton-de-inicio.png"
//         //     instructores.src = "../images/instructores.png"
//         //     tituladasIcon.src = "../images/tituladas.png";
//         //     mapaIcon.src = "../images/mapa2.png";
//         //     calendarioIcon.src = "../images/calendario.png"
//         // }
        
//         // if (e.currentTarget == botonesNavegador[4]){
//         //     console.log("otro");
//         //     inicioIcon.src = "../images/boton-de-inicio.png"
//         //     instructores.src = "../images/instructores.png"
//         //     tituladasIcon.src = "../images/tituladas.png";
//         //     mapaIcon.src = "../images/mapa.png";
//         //     calendarioIcon.src = "../images/calendario2.png"
//         // }

        
//     });
// });

// Jquery functions

$(document).ready(function(){

    function hoverAll(){
        $(this).css("cursor", "pointer")
    };

    $("#listOptionsIcon").hover(hoverAll)
    $("#listOptionsIcon").click(function(){

    });

    var PerfilOpciones = $("#listOptions li a")
    
    PerfilOpciones.each(function(element) {
        function hoverOn(){
            $(this).css("background", "#82C635").css("color", "white")
        }
        function hoverOut(){
            $(this).css("background", "white").css("color", "black")
        }
        $(this).hover(hoverOn, hoverOut);
    });

    var perfilMenu = $("#listOptionsIcon")

    
    $(document).click(function() {
        // PerfilOpciones.css("display", "none")
    });

    perfilMenu.click(function() {

        if (PerfilOpciones.css("display") == "none") {
            PerfilOpciones.css("display", "flex");
            $("#perfil").css("border-bottom-right-radius", "0px")
            $("#perfil").css("border-bottom-left-radius", "0px")
            } else if (PerfilOpciones.css("display") == "flex") {
            PerfilOpciones.css("display", "none");
            $("#perfil").css("border-bottom-right-radius", "10px")
            $("#perfil").css("border-bottom-left-radius", "10px")
        }
    });

    perfilMenu.click(function(event) {
        event.stopPropagation();
    });
    
    $(document).click(function() {
        PerfilOpciones.hide();
    });


    // Redireccion de las paginas

    var navHrefs = $(".lista a");

    navHrefs.each(function(index, element){
        console.log(element);
        $(element).click(function(event){
            event.preventDefault();
            window.location.href = $(this).attr("href");
        });
        

    });


});



