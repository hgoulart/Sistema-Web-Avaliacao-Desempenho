<?php

include 'connect.php';

$entrada = $_POST['dados'];

$id = $entrada["id"];
$nome = $entrada["nome"]; 
$cpf = $entrada["cpf"]; 
$email = $entrada["email"];
$tel = $entrada["tel"];
$setor = $entrada["setor"];
$cargo = $entrada["cargo"];
$ativo = $entrada["ativo"];
$perfil = $entrada["perfil"];

$sql = "UPDATE colaborador SET nome_colaborador ='$nome', cpf_colaborador ='$cpf', email_colaborador ='$email', tel_colaborador ='$tel', funcao = '$cargo', setor = '$setor', perfil = '$perfil', ativo = '$ativo'  WHERE id_colaborador = '$id'";

$insert_row = $conexao->query($sql);

if($insert_row){
	$res = 'Dados inseridos com sucesso!';
    echo ( $res);
}else{
	$res = 'Erro ';
    die($res);
}

?>
