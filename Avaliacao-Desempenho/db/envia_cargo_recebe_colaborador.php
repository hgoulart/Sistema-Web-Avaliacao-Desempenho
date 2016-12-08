<?php

include 'connect.php';

$cargo = $_POST['id_cargo'];

if ($selecao = $conexao->query("SELECT colaborador.id_colaborador, colaborador.nome_colaborador FROM colaborador WHERE colaborador.funcao = $cargo")) {

	$colaborador = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $colaborador[] = $row;
	};
}
	echo json_encode($colaborador);
?>