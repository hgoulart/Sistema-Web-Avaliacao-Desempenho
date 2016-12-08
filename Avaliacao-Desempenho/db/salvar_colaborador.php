<?php

include 'connect.php';

$entrada = $_POST['dados'];

$nome = $entrada["nome_colaborador"]; 
$email = $entrada["email_colaborador"]; 
$tel = $entrada["tel_colaborador"]; 
$cpf = $entrada["cpf"];
$senha = md5($entrada["senha_colaborador"]); 
$funcao = $entrada["funcao"]; 
$setor = $entrada["setor"]; 
$perfil = $entrada["perfil"];
$ativo = "s";

$sql = "INSERT INTO colaborador(nome_colaborador,cpf_colaborador, email_colaborador,tel_colaborador,senha_colaborador,funcao,setor, perfil, ativo) VALUES ('$nome','$cpf', '$email','$tel','$senha','$funcao','$setor','$perfil', '$ativo')";

$insert_row = $conexao->query($sql);

if($insert_row){
	$res = 'Dados inseridos com sucesso!';
    echo json_encode( $res);
}else{
	$res = 'Erro ';
    die($res);
}

?>