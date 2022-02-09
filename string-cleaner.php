<?php

//API 3
$string = $_GET["string"];

$trimmed_string = trim($string); 

$array = ["string"=>$string, "trimmed string"=>$trimmed_string];

echo json_encode($array);
?>