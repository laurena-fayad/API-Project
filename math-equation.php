<?php

//API 1
$operand1 = $_GET["operand1"];
$operand2 = $_GET["operand2"];

$result = (2*(int)$operand1)+((int)$operand2%2);
$array = ["operand1"=>$operand1, "operand2"=>$operand2, "result"=>$result];

echo json_encode($array);
?>