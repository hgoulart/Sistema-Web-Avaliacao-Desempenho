<?php

include 'connect.php';

if ($selecao = $conexao->query("SELECT * from perfil")) {

	$perfil = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $perfil[] = $row;
	};
}
	echo json_encode($perfil);
  
?>