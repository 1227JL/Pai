<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio Pai</title>
    <link rel="stylesheet" href="css/nav_s.css">
</head>
<body>
    <div class="caja-navegador">
        <div class="navegador">
            <div class="logo-name">
                <a href="#"><h3>Pa<span>i</span></h3></a>
                <div id="separacion">j</div>
                <img src="images/logoSena.png" alt="" width="50px" height="50px">
            </div>
            <ul class="ul1">
                <li class="lista active" id="inicio">
                    <a href="index.php?vista=home">
                        <span class="icon"><img src="Images/boton-de-inicio (1).png" alt="" height="30px"></span>
                        <span class="text">Inicio</span>
                    </a>
                </li>
                <li class="lista" id="tituladas">
                    <a href="index.php?vista=tituladas">
                        <span class="icon"><img src="images/tituladas.png" alt="" height="40px"></span>
                        <span class="text">Tituladas</span>
                    </a>
                </li>
                <li class="lista" id="instructores">
                    <a href="index.php?vista=instructores">
                        <span class="icon"><img src="images/instructores.png" alt="" height="38px"></span>
                        <span class="text">Instructores</span>
                    </a>
                </li>
                <li class="lista" id="mapa">
                    <a href="#">
                        <span class="icon"><img src="images/mapa.png" alt="" height="35px"></span>
                        <span class="text">Mapa</span>
                    </a>
                </li>
                <li class="lista" id="calendario">
                    <a href="#">
                        <span class="icon"><img src="images/calendario.png" alt="" height="30px"></span>
                        <span class="text">Calendario</span>
                    </a>
                </li>
                <div class="bordeCurbo"></div>
            </ul>
        </div>

        <div class="perfil" id="perfil">
            <div id="perfilIcon">
                <img src="images/usuario.png" alt="" height="30
                px">
            </div>
            <p id="Name-usuario">Nombre</p>
            <img id="listOptionsIcon" src="images/arrow-down-sign-to-navigate.png" alt="" height="18px">
            <ul id="listOptions">
                <li><a id="verPerfil" href="">Ver perfil</a></li>
                <li><a href="">Cerrar sesión</a></li>
            </ul>
        </div>
    </div>

    <div id="contenido">
        
    </div>
    <div class="" id="pag2"></div>

    
    <script src="js/jquery-3.6.3.min.js"></script>
    <script src="js/nav_s.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>