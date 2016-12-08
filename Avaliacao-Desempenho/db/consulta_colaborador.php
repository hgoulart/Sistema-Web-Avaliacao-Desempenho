<?php

include 'connect.php';

	if ($result = $conexao->query("SELECT colaborador.id_colaborador, colaborador.cpf_colaborador, colaborador.nome_colaborador, colaborador.email_colaborador, colaborador.tel_colaborador, funcao.nome_funcao, setor.nome_setor, perfil.nome_perfil FROM colaborador INNER JOIN setor ON colaborador.setor = setor.id_setor INNER JOIN funcao ON colaborador.funcao = funcao.id_funcao INNER JOIN perfil ON colaborador.perfil = perfil.id_perfil  WHERE colaborador.ativo = 's' ORDER BY colaborador.nome_colaborador")) {

	$dados = array();

	while($row = $result->fetch_array(MYSQLI_ASSOC)){
	    $dados[] = $row;
	};
}
	echo json_encode($dados);
?>