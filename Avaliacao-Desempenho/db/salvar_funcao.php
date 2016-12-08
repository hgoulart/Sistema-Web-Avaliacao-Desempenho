<?php



include 'connect.php';

$entrada = $_POST['dados'];

$nomeFuncao = $entrada["nome_funcao"]; 
$descricaoFuncao = $entrada["descricao_funcao"];
$setor = $entrada["setor"];

$sql = "INSERT INTO funcao(nome_funcao, descricao_funcao, setor) VALUES ('$nomeFuncao', '$descricaoFuncao','$setor')";

$insert_row = $conexao->query($sql);

if($insert_row){
	$res = 'Dados inseridos com sucesso!';
    echo json_encode( $res);
}else{
	$res = 'Erro ';
    die($res);
}

?>