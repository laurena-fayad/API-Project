<?php

//API 2
$string = $_GET["string"];

$reversed_string = strrev($string);

$result;
if ($reversed_string == $string){
    $result = "Palindrome";
}
else{
    $result = "Not a palindrome";
}

$array = ["string"=>$string, "result"=>$result];

echo json_encode($array);
?>