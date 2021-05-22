<?php
	header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);
    
    $fileInput = fopen("databaseComments.txt", "r");
	$comments = fread($fileInput, filesize("databaseComments.txt"));
    $comments = json_decode($comments, true);
    fclose($fileInput);
    $index = $_POST["params"]["objective"];
    if($_POST["params"]["action"]=="send"){
        if($comments[$index]["size"]==null){
        	$comments[$index]["size"] = 0;
        }
        $size = $comments[$index]["size"];
        $comments[$index][$size] = ["name"=>$_POST["params"]["name"], "text"=>$_POST["params"]["text"], "date"=>date("d-m-y")];
        $comments[$index]["size"] = $size + 1;
        $fileOutput = fopen("databaseComments.txt", "w");
        fwrite($fileOutput, json_encode($comments));
        fclose($fileOutput);
    }
   	elseif($_POST["params"]["action"]=="get"){
    	echo json_encode($comments[$index]);
    }
?>