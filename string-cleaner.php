<?php

//API 3
header("Access-Control-Allow-Origin: *");
$string = $_GET["string"];

$trimmed_string = trim(preg_replace('/\s\s+/', ' ', str_replace("\n", " ", $string)));

$array = ["string"=>$string, "trimmed_string"=>$trimmed_string];

echo json_encode($array);
?>