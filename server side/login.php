<?php
	header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $file = fopen("database.txt", "r");
   	$fileContent = fread($file, filesize("database.txt"));
    fclose($file);
    $rest_json = file_get_contents("php://input");
	$_POST = json_decode($rest_json, true);
   	
    $email="";
    $pass="";
    $name="";
    $fileContent = str_split($fileContent);
    $fileContentArray = [];
    $str = "";
    $inRecord = false;
    $jsonPart = 0;
    $record = 0;
    foreach($fileContent as $char){
    	if($char=='['){
        	$str = "";
            $inRecord = true;
        }
        elseif($char==']' || $char==','){
            switch($part){
            	case 0:
                  $email=$str;
                  break;
            	case 1:
                  $name=$str;
                  break;
              	case 2:
                  $pass=$str;
                  break;  
            }
            $str="";
            $part++;
            if($char==']'){
            	$inRecord = false;
                $part=0;
                $fileContentArray[$record] = ["email"=>$email, "name"=>$name, "pass"=>$pass];
                $record++;
            }
        }
        elseif($inRecord){
        	$str .= $char;
        }
    }
    
    $email = $_POST["params"]["email"];
    $pass = $_POST["params"]["pass"];
    	
    for($i=0; $i<count($fileContentArray); $i++){
   		if($email==$fileContentArray[$i]["email"] && $pass==$fileContentArray[$i]["pass"]){
        	echo json_encode(["logged" => true, "name" => $fileContentArray[$i]["name"]]);
            exit;
        }
    }
   	echo json_encode(["logged" => false]);


?>