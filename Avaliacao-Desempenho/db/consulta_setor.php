<?php

include 'connect.php';

if ($selecao = $conexao->query("SELECT * FROM setor ORDER BY setor.nome_setor")) {

	$setor = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $setor[] = $row;
	};
}
	echo json_encode($setor);
?>