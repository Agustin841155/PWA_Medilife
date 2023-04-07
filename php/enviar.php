<?php
    $destinatario = 'eliazarparzival@gmail.com';
    //correo a donde se enviara el mensaje
    $nombre = $_POST['nombre'];
    $asunto= $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];
    
    $header = "enviado desde la pagina de pradiot";
    $mensajecompleto = $mensaje . "\nAtentamente:" . $nombre;
    mail($destinatario, $asunto, $mensajecomleto, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script>stTimeout(<\"location.href='contacto.html'\"1000)</script>";
?>