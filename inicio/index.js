

// NAVEGADOR

const botonesNavegador = document.querySelectorAll(".lista");

var inicioIcon = document.querySelector("#inicio span img");
var perfilIcon = document.querySelector("#perfil span img");
var chatBox = document.querySelector("#chatbox span img");
var other1 = document.querySelector("#other1 span img")
var other2 = document.querySelector("#other2 span img")
var other3 = document.querySelector("#other3 span img")

botonesNavegador.forEach(boton => {

    boton.addEventListener("click", (e) => {

        botonesNavegador.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget == botonesNavegador[0]){
            console.log("Home");
            inicioIcon.src = "IMG/boton-de-inicio (1).png";
            perfilIcon.src = "IMG/usuario.png";
            chatBox.src = "IMG/burbuja-de-dialogo.png"
            other1.src = "IMG/ellipsis.png"
            other2.src = "IMG/ellipsis.png"
            other3.src = "IMG/ellipsis.png"
        }

        if (e.currentTarget == botonesNavegador[1]){
            console.log("perfil");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            perfilIcon.src = "IMG/usuario (1).png"
            chatBox.src = "IMG/burbuja-de-dialogo.png"
            other1.src = "IMG/ellipsis.png"
            other2.src = "IMG/ellipsis.png"
            other3.src = "IMG/ellipsis.png"
        }
        
        if (e.currentTarget == botonesNavegador[2]){
            console.log("chatbox");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            perfilIcon.src = "IMG/usuario.png"
            chatBox.src = "IMG/burbuja-de-dialogo (1).png"
            other1.src = "IMG/ellipsis.png"
            other2.src = "IMG/ellipsis.png"
            other3.src = "IMG/ellipsis.png"
        }
        
        if (e.currentTarget == botonesNavegador[3]){
            console.log("otro");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            perfilIcon.src = "IMG/usuario.png"
            chatBox.src = "IMG/burbuja-de-dialogo.png"
            other1.src = "IMG/ellipsis (1).png"
            other2.src = "IMG/ellipsis.png"
            other3.src = "IMG/ellipsis.png"
        }
        
        if (e.currentTarget == botonesNavegador[4]){
            console.log("otro");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            perfilIcon.src = "IMG/usuario.png"
            chatBox.src = "IMG/burbuja-de-dialogo.png"
            other1.src = "IMG/ellipsis.png"
            other2.src = "IMG/ellipsis (1).png"
            other3.src = "IMG/ellipsis.png"

        }
        
        if (e.currentTarget == botonesNavegador[5]){
            console.log("otro");
            inicioIcon.src = "IMG/boton-de-inicio.png"
            perfilIcon.src = "IMG/usuario.png"
            chatBox.src = "IMG/burbuja-de-dialogo.png"
            other1.src = "IMG/ellipsis.png"
            other2.src = "IMG/ellipsis.png"
            other3.src = "IMG/ellipsis (1).png"
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
 


});

setInterval(function(){
    var date = new Date();
    var minutes = date.getMinutes();

    if (minutes % 2 != 0){
        var perfilImg = document.querySelector("#perfil-icon");
        perfilImg.src = "IMG/quitar-usuariO.png"
    }
    console.log(minutes);
},1000)

// CIERRE DEL NAVEGADOR
