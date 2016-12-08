<?php

include 'connect.php';

if ($selecao = $conexao->query("SELECT * FROM tipo_avaliacao")) {

	$avaliacao = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $avaliacao[] = $row;
	};
}
	echo json_encode($avaliacao);
?>