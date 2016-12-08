<?php

include 'connect.php';

$entrada = $_POST['dados'];

$tipo = $entrada['tipo_avaliacao']; 
$setor = $entrada['setor'];
$colaborador = $entrada['colaborador'];
$avaliador = $entrada['avaliador'];

if($tipo === '1'){

	if($colaborador !== "todos-colaboradores"){

	$sql = "INSERT INTO avaliacao_gerada(tipo_avaliacao_gerada, setor_avaliacao, id_colaborador, id_avaliador, realizada, data) VALUES ('$tipo', '$setor','$colaborador', '$avaliador', 0, NOW())";

	$insert_row = $conexao->query($sql);

		if($insert_row == true){
			$res = 'Avaliação inserida com sucesso!';
			echo json_encode( $res);
		}else{
			$res = "Erro";
		    die($res);
		}
	}else{

	if ($result = $conexao->query("SELECT DISTINCT colaborador.id_colaborador FROM colaborador INNER JOIN setor ON colaborador.setor = $setor")) {
	
		while($row = $result->fetch_array(MYSQLI_ASSOC)){
		    
		    $id = $row['id_colaborador'];

		    $sql = "INSERT INTO avaliacao_gerada(tipo_avaliacao_gerada, setor_avaliacao, id_colaborador, id_avaliador, realizada ,data) VALUES ('$tipo', '$setor','$id', '$avaliador', 0, NOW())";

		    	$insert_row = $conexao->query($sql);

		    	if($insert_row == true){
					$res = 'Avaliação inserida com sucesso!';
					echo json_encode( $res);
				}else{
					$res = 'Erro';
			    	die($res);
				}
			};
		}

	}
}else if($tipo === '2'){

	if($colaborador !== "todos-colaboradores"){

	$sql = "INSERT INTO avaliacao_gerada(tipo_avaliacao_gerada, setor_avaliacao, id_colaborador, id_avaliador, realizada, data) VALUES ('$tipo', '$setor','$colaborador', '$avaliador', 0, NOW())";

	$insert_row = $conexao->query($sql);

		if($insert_row == true){
			$res = 'Avaliação inserida com sucesso!';
			echo json_encode( $res);
		}else{
			$res = "Erro";
		    die($res);
		}
	}else{

	if ($result = $conexao->query("SELECT DISTINCT colaborador.id_colaborador FROM colaborador INNER JOIN setor ON colaborador.setor = $setor")) {
	
		while($row = $result->fetch_array(MYSQLI_ASSOC)){
		    
		    $id = $row['id_colaborador'];

		    $sql = "INSERT INTO avaliacao_gerada(tipo_avaliacao_gerada, setor_avaliacao, id_colaborador, id_avaliador, realizada ,data) VALUES ('$tipo', '$setor','$id', '$avaliador', 0, NOW())";

		    	$insert_row = $conexao->query($sql);

		    	if($insert_row == true){
					$res = 'Avaliação inserida com sucesso!';
					echo json_encode( $res);
				}else{
					$res = 'Erro';
			    	die($res);
				}
			};
		}
	}
}else if($tipo === '3'){

	$sql = "INSERT INTO avaliacao_gerada(tipo_avaliacao_gerada, setor_avaliacao, id_colaborador, id_avaliador, realizada, data) VALUES ('$tipo', '$setor','$colaborador', '$avaliador', 0, NOW())";

	$insert_row = $conexao->query($sql);
	//pegar o ultimo id inserido
    // $id_avaliacao_realizada = $conexao->insert_id; 
		if($insert_row == true){
			$res = 'Avaliação inserida com sucesso!';
			echo json_encode( $res);
		}else{
			$res = "Erro";
		    die($res);
		}
	$sql = "INSERT INTO avaliacao_gerada(tipo_avaliacao_gerada, setor_avaliacao, id_colaborador, id_avaliador, realizada, data) VALUES ('$tipo', '$setor','$avaliador', '$colaborador', 0, NOW())";

	$insert_row = $conexao->query($sql);
	//pegar o ultimo id inserido
	$id_avaliacao_realizada = $conexao->insert_id; 
		if($insert_row == true){
			$res = 'Avaliação inserida com sucesso!';
			echo json_encode( $res);
		}else{
			$res = "Erro";
		    die($res);
		}
}else if($tipo === '4'){

    $avaliador = '';

	if ($result = $conexao->query("SELECT DISTINCT colaborador.id_colaborador FROM colaborador INNER JOIN setor ON colaborador.setor = $setor")) {
	
		while($row = $result->fetch_array(MYSQLI_ASSOC)){
		    
		    $avaliador = $row['id_colaborador'];

		    $sql = "INSERT INTO avaliacao_gerada(tipo_avaliacao_gerada, setor_avaliacao, id_colaborador, id_avaliador, realizada ,data) VALUES ('$tipo', '$setor','$avaliador', '$avaliador', 0, NOW())";

		    	$insert_row = $conexao->query($sql);

		    	if($insert_row == true){
					$res = 'Avaliação inserida com sucesso!';
					echo json_encode( $res);
				}else{
					$res = 'Erro';
			    	die($res);
				}
		};
	}
}

?>