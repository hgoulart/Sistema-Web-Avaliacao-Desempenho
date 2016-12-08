<?php

include 'connect.php';

$entrada = $_POST['dados'];

$id = $entrada['id_criterio'];
$nome = $entrada['nome_criterio']; 
$descricao = $entrada['desc_criterio'];

	$sql = "UPDATE criterio SET nome_criterio = '$nome', desc_criterio = '$descricao' WHERE id_criterio = '$id'" ;

	$insert_row = $conexao->query($sql);

	if($insert_row){
		$res = 'Dados inseridos com sucesso!';
	    echo json_encode( $res);
	}else{
		$res = 'Erro ';
	    die($res);
	}

?>