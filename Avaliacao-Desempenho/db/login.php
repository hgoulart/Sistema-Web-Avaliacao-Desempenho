<?php

include 'connect.php';

	$cpf = $_POST['cpf'];
	$senha = md5($_POST['senha']);

if ($selecao = $conexao->query("SELECT colaborador.id_colaborador, colaborador.nome_colaborador, colaborador.perfil, colaborador.cpf_colaborador, colaborador.senha_colaborador FROM colaborador WHERE colaborador.cpf_colaborador = $cpf")) {
	
		$colaborador = array();

		while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
		    $colaborador[] = $row;

			if($senha === $row['senha_colaborador']){

				echo json_encode($colaborador);	

			}else{
				$res = 'Erro';
				die($res);
			}		    

		};	    

} else{
	
		$res = 'Erro';
		die($res);
	}




	  //   $password[] = $row;    

	  //   if($senha === $row['senha_colaborador']){

			// if ($selecao2 = $conexao->query("SELECT tipo_avaliacao.nome_tipo_avaliacao, avaliacao_gerada.realizada, avaliacao_gerada.id_colaborador, colaborador.cpf_colaborador, colaborador.nome_colaborador, colaborador.perfil FROM colaborador INNER JOIN avaliacao_gerada ON avaliacao_gerada.id_colaborador = colaborador.id_colaborador INNER JOIN tipo_avaliacao ON tipo_avaliacao.id_tipo_avaliacao = avaliacao_gerada.tipo_avaliacao_gerada WHERE colaborador.cpf_colaborador = $cpf")) {

			// 	$colaborador = array();

			// 	while($row = $selecao2->fetch_array(MYSQLI_ASSOC)){
			// 	    $colaborador[] = $row;

			// 	};

			// 	if(!$colaborador){

			// 		$login = array();

			// 		while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
			//     		$login[] = $row;
			// 		};

			// 		// echo json_encode($login);
			// 		var_dump($login);
			// 	}

			// 	var_dump($colaborador);
			// 	// echo json_encode($colaborador);

			// }else{
			// 	$res = 'Erro';
   //  			die($res);
			// }
				
			
		
//SELECT tipo_avaliacao.nome_tipo_avaliacao, avaliacao_gerada.realizada, avaliacao_gerada.id_colaborador, colaborador.cpf_colaborador, colaborador.nome_colaborador, colaborador.perfil FROM colaborador LEFT JOIN avaliacao_gerada ON avaliacao_gerada.id_colaborador = colaborador.id_colaborador INNER JOIN tipo_avaliacao ON tipo_avaliacao.id_tipo_avaliacao = avaliacao_gerada.tipo_avaliacao_gerada WHERE colaborador.cpf_colaborador = 96366020069
?>


