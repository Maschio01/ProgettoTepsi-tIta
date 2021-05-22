<?php 
	header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
	
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    
    $email = $_POST['params']['email'];
    $name = $_POST['params']['name'];
    $pass = $_POST['params']['pass'];
    
    if($email != ""){
        $msg = '['.$email.','.$name.','.$pass.']'."\n";
    	$file = fopen("database.txt", "a");
    	fwrite($file, $msg);
    	fclose($file);
        echo json_encode(["registered"=>true]);
    }

?>

