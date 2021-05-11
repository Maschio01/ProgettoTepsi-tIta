<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $pass = $_POST["pass"];

    $file = fopen("boban.txt", "w");
    fwrite($file, $name);
    fclose($file);


?>