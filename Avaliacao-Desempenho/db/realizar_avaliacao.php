<?php

include 'connect.php';

$realizada = '0';
$id = $_POST['id_colaborador'];
$tipoAvaliacao = $_POST['tipo_avaliacao_gerada'];

//if ($selecao = $conexao->query("SELECT  DISTINCT avaliacao_gerada.id_avaliacao_gerada, colaborador.nome_colaborador, tipo_avaliacao.nome_tipo_avaliacao, setor.nome_setor, criterio.nome_criterio, criterio.desc_criterio, funcao.nome_funcao, criterio.id_criterio from avaliacao_gerada INNER JOIN colaborador LEFT JOIN tipo_avaliacao ON tipo_avaliacao.id_tipo_avaliacao = avaliacao_gerada.tipo_avaliacao_gerada INNER JOIN setor ON colaborador.setor = setor.id_setor INNER JOIN avaliacao ON avaliacao.id_avaliacao = tipo_avaliacao.id_tipo_avaliacao INNER JOIN criterio ON criterio.id_criterio = avaliacao.id_criterio INNER JOIN funcao ON funcao.id_funcao = colaborador.funcao WHERE avaliacao_gerada.id_colaborador = $id AND colaborador.id_colaborador = $id AND avaliacao_gerada.realizada = 0 AND avaliacao_gerada.tipo_avaliacao_gerada = $tipoAvaliacao")) {
if ($selecao = $conexao->query(
"SELECT C1.nome_colaborador AS avaliado, 
funcao.nome_funcao, criterio.id_criterio,
avaliacao_gerada.realizada,
C2.nome_colaborador AS avaliador,  
tipo_avaliacao.nome_tipo_avaliacao, 
setor.nome_setor, criterio.nome_criterio, id_tipo_avaliacao,
criterio.desc_criterio, avaliacao_gerada.id_avaliacao_gerada,
avaliacao_gerada.data 
FROM avaliacao_gerada 
INNER JOIN colaborador C1 
ON avaliacao_gerada.id_colaborador = C1.id_colaborador 
INNER JOIN colaborador C2 
ON avaliacao_gerada.id_avaliador = C2.id_colaborador
INNER JOIN avaliacao
ON avaliacao.id_avaliacao = avaliacao_gerada.tipo_avaliacao_gerada
INNER JOIN criterio 
ON avaliacao.id_criterio = criterio.id_criterio
INNER JOIN setor 
ON  avaliacao_gerada.setor_avaliacao = setor.id_setor
INNER JOIN funcao 
ON  funcao.id_funcao = C1.funcao
INNER JOIN tipo_avaliacao 
ON avaliacao_gerada.tipo_avaliacao_gerada = tipo_avaliacao.id_tipo_avaliacao 
WHERE avaliacao_gerada.realizada = 0 AND avaliacao_gerada.id_colaborador = $id AND tipo_avaliacao.id_tipo_avaliacao = $tipoAvaliacao")) {
	$avaliacao_gerada = array();

	while($row = $selecao->fetch_array(MYSQLI_ASSOC)){
	    $avaliacao_gerada[] = $row;
	};
}
	echo json_encode($avaliacao_gerada);
?>