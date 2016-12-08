<?php

include 'connect.php';

$entrada = $_POST['dados'];

$novaSenha = md5($entrada["nova_senha"]);
$cpf = $entrada["cpf"];

$sql = "UPDATE colaborador SET colaborador.senha_colaborador = '$novaSenha' WHERE colaborador.cpf_colaborador = '$cpf'";

$insert_row = $conexao->query($sql);

if($insert_row){
	$res = 'Sucesso';
    echo ( $res);
}else{
	$res = 'Erro ';
    die($res);
}
?>