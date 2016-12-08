<?php

include 'connect.php';

$setor = $_POST['id_setor'];

if ($selecao = $conexao->query("SELECT colaborador.id_colaborador, colaborador.nome_colaborador FROM colaborador WHERE colaborador.setor = $setor")) {

	$colaborador = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $colaborador[] = $row;
	};
}
	echo json_encode($colaborador);
?>