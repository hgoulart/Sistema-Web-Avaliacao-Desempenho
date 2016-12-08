<?php

include 'connect.php';

$cpf = $_POST['cpf_colaborador'];
$tipoAvaliacao = $_POST['tipo_avaliacao_gerada'];

if ($selecao = $conexao->query("SELECT avaliacao_realizada.data_realizada, criterio.nome_criterio, criterio.desc_criterio, criterio_avaliacao_realizada.peso_criterio, avaliacao_gerada.data FROM avaliacao_realizada INNER JOIN avaliacao_gerada ON avaliacao_realizada.id_avaliacao_gerada = avaliacao_gerada.id_avaliacao_gerada INNER JOIN criterio_avaliacao_realizada ON criterio_avaliacao_realizada.id_avaliacao_realizada = avaliacao_realizada.id_avaliacao_realizada INNER JOIN criterio ON criterio_avaliacao_realizada.id_criterio = criterio.id_criterio INNER JOIN colaborador ON avaliacao_gerada.id_colaborador = colaborador.id_colaborador INNER JOIN tipo_avaliacao ON avaliacao_gerada.tipo_avaliacao_gerada = tipo_avaliacao.id_tipo_avaliacao WHERE avaliacao_gerada.realizada = 1 AND colaborador.cpf_colaborador = $cpf AND tipo_avaliacao.id_tipo_avaliacao = $tipoAvaliacao")) {

	$avaliacao_gerada = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $avaliacao_gerada[] = $row;
	};
}
	echo json_encode($avaliacao_gerada);
	// echo print_r($avaliacao_gerada);
?>