<?php
//API 4
header("Access-Control-Allow-Origin: *");
$error;
$result;
$hashed_pw;
$password = $_GET["password"];
$pw_length = strlen($password);
$letters_check = preg_match('/[a-z]/i', $password);
$numbers_check = preg_match('/\d/', $password);

if (($pw_length >= 8) && $letters_check && $numbers_check){
    $hashed_pw = hash("sha256", $password);
    $error = "none";
    $result = "Password approved";
}else if($pw_length<8){
    $hashed_pw = " ";
    $error = "Password must be at least 8 characters.";
    $result = "Password rejected";
}elseif(!$letters_check || !$numbers_check){
    $hashed_pw = " ";
    $error = "Password must contain both letters and numbers.";
    $result = "Password rejected";
}

$array = ["pw_hash" => $hashed_pw, "result" =>$result, "error" =>$error];
echo json_encode($array);
?>