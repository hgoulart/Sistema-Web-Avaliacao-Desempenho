<?php

include 'connect.php';

if ($selecao = $conexao->query("SELECT * FROM funcao INNER JOIN setor ON funcao.setor = setor.id_setor ORDER BY setor.nome_setor")) {

	$funcao = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $funcao[] = $row;
	};
}
	echo json_encode($funcao);
?>