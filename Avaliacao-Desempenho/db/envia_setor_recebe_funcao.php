<?php

include 'connect.php';

$setor = $_POST['id_setor'];

if ($selecao = $conexao->query("SELECT DISTINCT funcao.id_funcao, funcao.nome_funcao FROM funcao INNER JOIN setor ON funcao.setor = $setor")) {

	$funcao = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $funcao[] = $row;
	};
}
	echo json_encode($funcao);
?>