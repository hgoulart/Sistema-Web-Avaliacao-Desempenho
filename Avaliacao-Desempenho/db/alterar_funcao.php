<?php

include 'connect.php';

$entrada = $_POST['dados'];

$cargo = $entrada["nome_funcao"]; 
$id = $entrada["id_funcao"];
$descricao = $entrada["descricao_funcao"];
$setor = $entrada["setor"];

$sql = "UPDATE funcao SET nome_funcao='$cargo',setor='$setor',descricao_funcao='$descricao' WHERE id_funcao = $id";
//"UPDATE funcao SET nome_funcao ='$cargo',descricao_funcao = '$descricao' WHERE id_f = '$id'";

$insert_row = $conexao->query($sql);

if($insert_row){
	$res = 'Dados aterados com sucesso!';
    echo json_encode( $res);
}else{
	$res = 'Erro ';
    die($res);
}
?>