<?php

include 'connect.php';

if ($selecao = $conexao->query("SELECT * from criterio ORDER BY criterio.nome_criterio")) {

	$criterios = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $criterios[] = $row;
	};
}

	echo json_encode($criterios);
  
?>