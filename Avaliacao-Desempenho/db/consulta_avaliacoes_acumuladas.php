<?php

include 'connect.php';

$inicio = $_POST['inicio']; //'2016-09-01';//
$fim = $_POST['fim'];//'2016-09-31';

if ($selecao = $conexao->query("SELECT criterio.nome_criterio, criterio_avaliacao_realizada.peso_criterio, avaliacao_realizada.id_avaliacao_realizada, tipo_avaliacao.nome_tipo_avaliacao, colaborador.nome_colaborador, avaliacao_gerada.data, avaliacao_realizada.data_realizada FROM avaliacao_realizada LEFT JOIN avaliacao_gerada ON avaliacao_realizada.id_avaliacao_gerada = avaliacao_gerada.id_avaliacao_gerada INNER JOIN tipo_avaliacao ON avaliacao_gerada.tipo_avaliacao_gerada = tipo_avaliacao.id_tipo_avaliacao INNER JOIN colaborador ON colaborador.id_colaborador = avaliacao_gerada.id_colaborador INNER JOIN criterio_avaliacao_realizada ON criterio_avaliacao_realizada.id_avaliacao_realizada = avaliacao_realizada.id_avaliacao_realizada INNER JOIN criterio ON criterio_avaliacao_realizada.id_criterio = criterio.id_criterio ORDER BY avaliacao_realizada.data_realizada")) {

	$avaliacao_gerada = array();
	
	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
		
	    $avaliacao_gerada[] = $row;
	
	}
		$novaAvaliacao = [];
	
	foreach($avaliacao_gerada as $key => $value)
	{
			$nome_criterio = $value['nome_criterio'];
			$peso_criterio = $value['peso_criterio'];
			$id_avaliacao_realizada = $value['id_avaliacao_realizada'];
			$nome_tipo_avaliacao = $value['nome_tipo_avaliacao'];
			$nome_colaborador = $value['nome_colaborador'];
			$data = $value['data'];
			$data_realizada = $value['data_realizada'];
			
		if($data >= $inicio && $data_realizada <= $fim){
			
			$avaliacao = [
				'nome_criterio' => $nome_criterio, 
				'peso_criterio' => $peso_criterio, 
				'id_avaliacao_realizada' => $id_avaliacao_realizada, 
				'nome_tipo_avaliacao' => $nome_tipo_avaliacao, 
				'nome_colaborador' => $nome_colaborador,
				'data' => $data,
				'data_realizada' => $data_realizada
				];
		
			array_push($novaAvaliacao, $avaliacao);
					
		}
	}
	
}
    echo json_encode($novaAvaliacao);
    //  var_dump($novaAvaliacao);
?>