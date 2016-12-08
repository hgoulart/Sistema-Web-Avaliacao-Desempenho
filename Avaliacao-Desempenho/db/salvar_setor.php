<?php



include 'connect.php';

$entrada = $_POST['dados'];

$nomeSetor = $entrada["nome_setor"]; 

$sql = "INSERT INTO setor(nome_setor) VALUES ('$nomeSetor')";

$insert_row = $conexao->query($sql);

if($insert_row){
	$res = 'Dados inseridos com sucesso!';
    echo json_encode( $res);
}else{
	$res = 'Erro ';
    die($res);
}

?>