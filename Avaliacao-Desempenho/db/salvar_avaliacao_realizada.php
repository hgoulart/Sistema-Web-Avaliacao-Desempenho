<?php

include 'connect.php';

$entrada = $_POST['dados'];

$id_gerada = $entrada['id_avaliacao_gerada']; 
$grupoCriterio = $entrada['grupo_criterios'];
// $colaborador = $entrada['colaborador'];

$sql = "INSERT INTO avaliacao_realizada(id_avaliacao_gerada, data_realizada) VALUES ('$id_gerada', NOW())";


$insert_row = $conexao->query($sql);
//pegar o ultimo id inserido
$id_avaliacao_realizada = $conexao->insert_id; 

if($insert_row == true){
	
	$id = '';
	$peso = '';

	foreach($grupoCriterio as $key => $value)
	{
	
		$id = $value['id'];
		$peso = $value['peso'];

	  	$sql = "INSERT INTO criterio_avaliacao_realizada(id_criterio, peso_criterio, id_avaliacao_realizada) VALUES ('$id', '$peso', '$id_avaliacao_realizada')";

		$insert_row = $conexao->query($sql);

	    echo 'Dados inseridos com sucesso!';
	
	}

}else{
		$res = 'Erro ';
	    die($res);
	}

	$sql = "UPDATE avaliacao_gerada SET realizada = 1 WHERE id_avaliacao_gerada = '$id_gerada'" ;

	$insert_row = $conexao->query($sql);
	

 
?>