<?php

//API 2
header("Access-Control-Allow-Origin: *");
$string = $_GET["string"];

$reversed_string = strrev($string);

$result;
if($string != null){
    if ($reversed_string == $string){
        $result = "Palindrome";
    }
    else{
        $result = "Not a palindrome";
    }
    
    $array = ["string"=>$string, "result"=>$result];
    
    echo json_encode($array);    
}
?>