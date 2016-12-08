<?php

include 'connect.php';

$id = $_POST['id_colaborador'];

if ($selecao = $conexao->query("SELECT avaliacao_realizada.data_realizada, tipo_avaliacao.id_tipo_avaliacao, tipo_avaliacao.nome_tipo_avaliacao, colaborador.cpf_colaborador, colaborador.nome_colaborador FROM avaliacao_gerada LEFT JOIN tipo_avaliacao on tipo_avaliacao_gerada = tipo_avaliacao.id_tipo_avaliacao INNER JOIN colaborador ON avaliacao_gerada.id_colaborador = colaborador.id_colaborador INNER JOIN avaliacao_realizada ON avaliacao_realizada.id_avaliacao_gerada = avaliacao_gerada.id_avaliacao_gerada WHERE colaborador.id_colaborador = $id AND avaliacao_gerada.realizada = 1")) {

	$avaliacao = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $avaliacao[] = $row;
	};
}
	echo json_encode($avaliacao);
?>