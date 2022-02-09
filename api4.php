<?php
//API 4
$password = $_GET["password"];
$pw_length = strlen($password);
$error;
$result;
$letters_check = preg_match('/[a-z]/i', $password);
$numbers_check = preg_match('/\d/', $password);

if (($pw_length >= 8) && $letters_check && $numbers_check){
    $error = "none";
    $result = "approved";
}else if($pw_length<8){
    $error = "Password must be at least 8 characters.";
    $result = "rejected";
}elseif(!$letters_check || !$numbers_check){
    $error = "Password must contain both letters and numbers.";
    $result = "rejected";
}

$array = ["result" =>$result, "error" =>$error];
echo json_encode($array);
?>