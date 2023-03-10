<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bulma.min.css">
    <title>PAI</title>
</head>
<body>

<?php
if(!isset($_GET['vista']) || $_GET['vista']==""){

    $_GET['vista']="login";
}
    
if(is_file("./vistas/".$_GET['vista'].".php") && $_GET['vista']!="login" && $_GET['vista']!="404" ){

    //include("./inc/nav_s.php");
    include("vistas/".$_GET['vista'].".php");
    include("./inc/script.php");

}else{

    if($_GET['vista']=="login"){

        include("vistas/login.php");
    }else{

        include("vistas/404.php");
    }
}
?>

<script src="js/ajax.js"></script>
</body>
</html>