<?php

include 'connect.php';

	$id = $_POST['id'];

	if ($selecao = $conexao->query("SELECT colaborador.id_colaborador, tipo_avaliacao.nome_tipo_avaliacao, avaliacao_gerada.realizada, avaliacao_gerada.id_colaborador, colaborador.cpf_colaborador, colaborador.nome_colaborador, colaborador.perfil FROM colaborador INNER JOIN avaliacao_gerada ON avaliacao_gerada.id_colaborador = colaborador.id_colaborador INNER JOIN tipo_avaliacao ON tipo_avaliacao.id_tipo_avaliacao = avaliacao_gerada.tipo_avaliacao_gerada WHERE colaborador.id_colaborador = $id")) {

		$colaborador = array();

		while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
		    $colaborador[] = $row;

		};

		echo json_encode($colaborador);

	}else{
		$res = 'Erro';
		die($res);
	}
				
?>


