<?php

$userName = "root";
$passWord = "";
$hostName = "localhost";
$dbName = "avaliacaodb";
$porta = '5000';
$conexao = null;

$conexao = new mysqli($hostName, $userName, $passWord, "$dbName");

mysqli_set_charset($conexao,"utf8");

// $userName = "hingoroc_hingo";
// $passWord = "*Sul487176";
// $hostName = localhost;
// $dbName = "hingoroc_avaliacaodb";
// $porta = '80';
// $conexao = null;

// $conexao = new mysqli($hostName, $userName, $passWord, "$dbName");

// mysqli_set_charset($conexao,"utf8");

?>