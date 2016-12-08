<?php

include 'connect.php';

$entrada = $_POST['dados'];

$setor = $entrada["nome_setor"]; 
$id = $entrada["id_setor"];


$sql = "UPDATE setor SET nome_setor='$setor' WHERE id_setor = '$id'";

$insert_row = $conexao->query($sql);

if($insert_row){
	$res = 'Dados aterados com sucesso!';
    echo json_encode( $res);
}else{
	$res = 'Erro ';
    die($res);
}
?>