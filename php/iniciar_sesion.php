<?php

$usuario = $_POST['usuario'];
$ontraseña = $_POST['contraseña'];

if($usuario == "" || $contraseña == ""){
    echo '
    <div class="notification is-danger is-light">
    <strong>¡Ocurrio un error inesperado!</strong><br>
    No has llenado todos los campos que son obligatorios
</div>
    ';
    exit();
}

if(verificarDatos("[a-zA-Z0-9]{4,20}",$usuario)){
    echo '
            <div class="notification is-danger is-light">
                <strong>¡Ocurrio un error inesperado!</strong><br>
                El USUARIO no coincide con el formato solicitado
            </div>
        ';
        exit();
}

if(verificarDatos("[a-zA-Z0-9$@.-]{7,100}"$contraseña)){
    echo '
    <div class="notification is-danger is-light">
        <strong>¡Ocurrio un error inesperado!</strong><br>
        La CONTRASEÑA no coincide con el formato solicitado
    </div>
';
exit();
}

$verificar_usuario = conexion();
$verificar_usuario = $verificar_usuario->query("SELECT * FROM instructor WHERE instrutor_usuario = '$usuario'");

if($verificar_usuario->rowCount()==1){

    $verificar_usuario=$verificar_usuario->fetch();

    if($verificar_usuario['intructor_usuario']==$usuario && password_verify($contraseña,$verificar_usuario['instructor_contraseña'])){

        $_SESSION['id']= $verificar_usuario['instructor_id'];
        $_SESSION['nombre']= $verificar_usuario['instructor_nombre'];
        $_SESSION['cedula']= $verificar_usuario['instructor_cedula'];
        $_SESSION['nombre']= $verificar_usuario['instructor_nombre'];
        $_SESSION['titulada']= $verificar_usuario['instructor_titulada'];
        $_SESSION['correo']= $verificar_usuario['instructor_correo'];
        $_SESSION['jornada']= $verificar_usuario['instructor_jornada'];
        $_SESSION['contrato']= $verificar_usuario['instructor_contrato'];
        $_SESSION['usuario']= $verificar_usuario['instructor_usuario'];
        $_SESSION['rol']= $verificar_usuario['rol'];
        $_SESSION['ambiente_id']= $verificar_usuario['ambiente_id'];
        $_SESSION['area_id']= $verificar_usuario['area_id'];

        if(headers_sent()){  //esta funcion comprueba si fue enviado un encabezado 
            echo "<script> window.location.href='index.php?vista=home'; </script>";
        }else{
            header("Location: index.php?vista=home");
        }

    }else{
        echo '
        <div class="notification is-danger is-light">
            <strong>¡Ocurrio un error inesperado!</strong><br>
            USUARIO o CONTRASEÑA incorrectos
        </div>
    ';
    }
}else{
    echo '
    <div class="notification is-danger is-light">
        <strong>¡Ocurrio un error inesperado!</strong><br>
        USUARIO o CONTRASEÑA incorrectos
    </div>
';

}

$verificar_usuario=null;
