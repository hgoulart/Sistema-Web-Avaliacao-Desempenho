<?php

include 'connect.php';

	if ($result = $conexao->query("SELECT * FROM colaborador")) {

	$dados = array();

	while($row = $result->fetch_array(MYSQLI_ASSOC)){
	    $dados[] = $row;
	};
}
	echo json_encode($dados);
?>