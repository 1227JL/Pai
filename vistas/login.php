<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <div id="banner"></div>

    <section class="cont">
    <div class="cont-login">
    <form action="" method="POST">
        <div class="logos-login">
            <img class="logoPai" src="images/logoPai.svg" alt="logo Pai"><img class="logoSena" src="images/logoSena.svg" alt="">
        </div>
        <div class="texto-login">
            <p>Iniciar Sesion</p>
        </div>

        <label for="usuario"><img src="images/person-icon.svg" alt="">
        <input type="text" placeholder="Usuario" name="usuario" id="login_usuario" pattern="[a-zA-Z0-9]{4,20}" maxlength="20" required></label>
        <label for="contraseña"><img src="images/candado-icon.svg" alt="">
        <input type="password" placeholder="Contraseña" name="login_contraseña" id="contraseña" pattern="[a-zA-Z0-9$@.-]{7,100}" maxlength="100" required></label>

        <!-- <a href="#" class="enlace-olvidar">Olvide mi contraseña</a> -->

        <button type="submit" class="btn-ingresar">Ingresar</button>

        <?php
			if(isset($_POST['login_usuario']) && isset($_POST['login_contraseña'])){
				require_once "./php/main.php";
				require_once "./php/iniciar_sesion.php";
			}
		?> 
    </form>
    
    
</div>
</section>

    <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
</body>
</html>