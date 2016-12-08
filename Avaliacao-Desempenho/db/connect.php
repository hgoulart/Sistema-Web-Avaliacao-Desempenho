<?php

$userName = "root";
$passWord = "";
$hostName = "localhost";
$dbName = "avaliacaodb";
$porta = '5000';
$conexao = null;

$conexao = new mysqli($hostName, $userName, $passWord, "$dbName");

mysqli_set_charset($conexao,"utf8");

?>