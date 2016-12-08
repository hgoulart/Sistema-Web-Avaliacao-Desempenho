<?php

include 'connect.php';

$entrada = $_POST['dados'];

$nome = $entrada['nome_criterio']; 
$descricao = $entrada['desc_criterio'];
$tipo_avaliacao = $entrada['tipo_avaliacao'];


	$sql = "INSERT INTO criterio(nome_criterio, desc_criterio) VALUES ('$nome', '$descricao')";

	$insert_row = $conexao->query($sql);

	$id_criterio = $conexao->insert_id;

	if($insert_row){
		$res = 'Dados inseridos com sucesso!';
	    echo json_encode( $res);
	}else{
		$res = 'Erro ';
	    die($res);
	}

for($i=0; $i < count($tipo_avaliacao) ; $i++){

	$ava = $tipo_avaliacao[$i];

	$sql = "INSERT INTO avaliacao(id_avaliacao, id_criterio) VALUES ('$ava', '$id_criterio')";

	$insert_row = $conexao->query($sql);

	if($insert_row){
		$res = 'Dados inseridos com sucesso!';
	    echo json_encode( $res);
	}else{
		$res = 'Erro';
	    die($res);
	}
	
}

?>