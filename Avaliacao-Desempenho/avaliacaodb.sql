-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 08-Dez-2016 às 20:37
-- Versão do servidor: 5.7.9
-- PHP Version: 5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `avaliacaodb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao`
--

DROP TABLE IF EXISTS `avaliacao`;
CREATE TABLE IF NOT EXISTS `avaliacao` (
  `id_avaliacao` int(11) NOT NULL,
  `id_criterio` int(11) NOT NULL,
  PRIMARY KEY (`id_avaliacao`,`id_criterio`),
  KEY `id_avaliacao` (`id_avaliacao`),
  KEY `id_criterio` (`id_criterio`),
  KEY `id_avaliacao_2` (`id_avaliacao`),
  KEY `id_criterio_2` (`id_criterio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `avaliacao`
--

INSERT INTO `avaliacao` (`id_avaliacao`, `id_criterio`) VALUES
(1, 1),
(1, 2),
(1, 8),
(1, 29),
(1, 30),
(1, 31),
(1, 48),
(2, 1),
(2, 2),
(2, 8),
(2, 30),
(2, 31),
(2, 48),
(3, 1),
(3, 2),
(3, 8),
(3, 29),
(3, 30),
(3, 31),
(3, 48),
(4, 1),
(4, 2),
(4, 8),
(4, 29),
(4, 30),
(4, 31),
(4, 48);

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_gerada`
--

DROP TABLE IF EXISTS `avaliacao_gerada`;
CREATE TABLE IF NOT EXISTS `avaliacao_gerada` (
  `id_avaliacao_gerada` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_avaliacao_gerada` int(11) NOT NULL,
  `setor_avaliacao` int(11) NOT NULL,
  `id_colaborador` int(11) NOT NULL,
  `id_avaliador` int(11) NOT NULL,
  `realizada` int(11) NOT NULL,
  `data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_avaliacao_gerada`),
  KEY `id_avaliacao_gerada` (`id_avaliacao_gerada`),
  KEY `tipo_avaliacao_gerada` (`tipo_avaliacao_gerada`),
  KEY `setor_avaliacao` (`setor_avaliacao`),
  KEY `id_colaborador` (`id_colaborador`),
  KEY `id_avaliador` (`id_avaliador`),
  KEY `realizada` (`realizada`),
  KEY `data` (`data`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `avaliacao_gerada`
--

INSERT INTO `avaliacao_gerada` (`id_avaliacao_gerada`, `tipo_avaliacao_gerada`, `setor_avaliacao`, `id_colaborador`, `id_avaliador`, `realizada`, `data`) VALUES
(1, 1, 4, 1, 1, 1, '2016-08-20 14:39:34'),
(2, 1, 1, 5, 5, 0, '2016-08-20 14:39:34'),
(21, 1, 2, 2, 2, 1, '2016-08-20 14:39:34'),
(22, 1, 4, 1, 1, 1, '2016-08-20 14:39:34'),
(23, 2, 2, 5, 5, 0, '2016-08-20 14:54:25'),
(24, 1, 14, 12, 12, 0, '2016-08-20 15:00:28'),
(25, 1, 1, 4, 4, 1, '2016-08-25 16:04:31'),
(26, 2, 4, 1, 1, 1, '2016-09-10 15:10:45'),
(27, 2, 6, 3, 5, 0, '2016-09-10 15:22:50'),
(30, 1, 4, 1, 1, 1, '2016-09-10 17:04:09'),
(31, 2, 6, 5, 3, 0, '2016-09-10 17:05:55'),
(32, 3, 4, 1, 1, 1, '2016-09-11 12:19:45'),
(34, 3, 6, 5, 3, 0, '2016-09-11 12:20:39'),
(35, 3, 6, 3, 5, 0, '2016-09-11 12:20:39'),
(36, 3, 4, 1, 1, 1, '2016-09-17 11:18:45'),
(38, 4, 4, 1, 1, 1, '2016-09-17 16:26:57'),
(39, 4, 6, 3, 3, 0, '2016-09-17 16:28:39'),
(40, 4, 6, 5, 5, 0, '2016-09-17 16:28:39'),
(41, 4, 1, 4, 4, 0, '2016-09-17 16:30:47'),
(42, 4, 1, 4, 4, 0, '2016-09-17 16:33:26');

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_realizada`
--

DROP TABLE IF EXISTS `avaliacao_realizada`;
CREATE TABLE IF NOT EXISTS `avaliacao_realizada` (
  `id_avaliacao_realizada` int(11) NOT NULL AUTO_INCREMENT,
  `id_avaliacao_gerada` int(11) NOT NULL,
  `data_realizada` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_avaliacao_realizada`),
  UNIQUE KEY `id_avaliacao_realizada_2` (`id_avaliacao_realizada`),
  KEY `id_avaliacao_realizada` (`id_avaliacao_realizada`),
  KEY `id_avaliacao_realizada_3` (`id_avaliacao_realizada`),
  KEY `id_avaliacao_gerada` (`id_avaliacao_gerada`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `avaliacao_realizada`
--

INSERT INTO `avaliacao_realizada` (`id_avaliacao_realizada`, `id_avaliacao_gerada`, `data_realizada`) VALUES
(1, 1, '2016-08-26 20:32:34'),
(2, 22, '2016-08-27 14:02:48'),
(5, 21, '2016-08-28 11:03:56'),
(6, 25, '2016-08-28 11:25:18'),
(7, 26, '2016-09-11 07:55:00'),
(8, 32, '2016-09-11 12:32:29'),
(9, 38, '2016-09-19 16:08:24'),
(10, 30, '2016-12-08 17:04:21'),
(11, 36, '2016-12-08 17:15:54');

-- --------------------------------------------------------

--
-- Estrutura da tabela `colaborador`
--

DROP TABLE IF EXISTS `colaborador`;
CREATE TABLE IF NOT EXISTS `colaborador` (
  `id_colaborador` int(11) NOT NULL AUTO_INCREMENT,
  `nome_colaborador` varchar(255) NOT NULL,
  `cpf_colaborador` varchar(20) NOT NULL,
  `email_colaborador` varchar(255) NOT NULL,
  `tel_colaborador` varchar(255) NOT NULL,
  `senha_colaborador` varchar(255) NOT NULL,
  `funcao` int(11) NOT NULL,
  `setor` int(11) NOT NULL,
  `perfil` int(11) NOT NULL,
  `ativo` char(1) NOT NULL,
  PRIMARY KEY (`id_colaborador`),
  UNIQUE KEY `cpf_colaborador` (`cpf_colaborador`),
  KEY `id_funcao` (`funcao`) USING BTREE,
  KEY `id_colaborador` (`id_colaborador`),
  KEY `cpf_colaborador_2` (`cpf_colaborador`),
  KEY `funcao` (`funcao`),
  KEY `setor` (`setor`),
  KEY `perfil` (`perfil`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `colaborador`
--

INSERT INTO `colaborador` (`id_colaborador`, `nome_colaborador`, `cpf_colaborador`, `email_colaborador`, `tel_colaborador`, `senha_colaborador`, `funcao`, `setor`, `perfil`, `ativo`) VALUES
(1, 'Hingo Sander Rocha Goulart', ' 96366320020', 'hingorocha@email.com', '5391541208', '202cb962ac59075b964b07152d234b70', 1, 4, 1, 's'),
(2, 'Joana', ' 96366020063', 'joanamello@email.com', '5391515151', '827ccb0eea8a706c4c34a16891f84e7b', 7, 2, 2, 's'),
(3, 'João da Silva', '96366020069', 'joaodasilva@email.com', '5391919292', '827ccb0eea8a706c4c34a16891f84e7b', 8, 6, 1, 's'),
(4, 'Juca Rosa', '  96366020065', 'juca@email.com', '5391929393', '202cb962ac59075b964b07152d234b70', 5, 1, 2, 's'),
(5, 'Carlos Antonio', ' 96366020070', 'carlos@email.com', '5398936864', '202cb962ac59075b964b07152d234b70', 8, 6, 1, 's'),
(9, 'Mauricio da Silveira', ' 96366020066', 'mauricio@email.com', '84848484', '202cb962ac59075b964b07152d234b70', 4, 3, 2, 's'),
(11, 'Cuca Silveira', ' 96366020067', 'cuca@email.com', '5391326598', '202cb962ac59075b964b07152d234b70', 6, 5, 2, 's'),
(12, 'José da Silva Xavier', ' 96366020068', 'jose@email.com', '5387449955', '202cb962ac59075b964b07152d234b70', 13, 14, 2, 's');

-- --------------------------------------------------------

--
-- Estrutura da tabela `criterio`
--

DROP TABLE IF EXISTS `criterio`;
CREATE TABLE IF NOT EXISTS `criterio` (
  `id_criterio` int(11) NOT NULL AUTO_INCREMENT,
  `nome_criterio` varchar(255) NOT NULL,
  `desc_criterio` varchar(255) NOT NULL,
  PRIMARY KEY (`id_criterio`),
  UNIQUE KEY `id_criterio` (`id_criterio`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `criterio`
--

INSERT INTO `criterio` (`id_criterio`, `nome_criterio`, `desc_criterio`) VALUES
(1, 'Pontualidade', 'Chega sempre no horário marcado.'),
(2, 'Assiduidade', 'Não falta a reuniões e ao trabalho'),
(8, 'Organização', 'É organizado e procura organizar os ambientes à sua volta.'),
(29, 'Comunicação', 'Comunica-se de forma clara e objetiva?                                                                                '),
(30, 'Capacidade de lidar com pressão', 'É capaz de cumprir os prazos estabelecidos de forma eficaz.                                            \n                                        '),
(31, 'Proatividade', 'É proativo (possui iniciativa), gerando retornos de informação construtivos e provendo novas idéias.'),
(48, 'Trabalho em Grupo', '  Consegue realizar de forma satisfatória as tarefas em grupo.\n                                    ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `criterio_avaliacao_realizada`
--

DROP TABLE IF EXISTS `criterio_avaliacao_realizada`;
CREATE TABLE IF NOT EXISTS `criterio_avaliacao_realizada` (
  `id_criterio_avaliacao` int(11) NOT NULL AUTO_INCREMENT,
  `id_criterio` int(11) NOT NULL,
  `peso_criterio` int(11) NOT NULL,
  `id_avaliacao_realizada` int(11) NOT NULL,
  PRIMARY KEY (`id_criterio_avaliacao`,`id_criterio`),
  KEY `id_criterio_avaliacao` (`id_criterio_avaliacao`),
  KEY `id_criterio` (`id_criterio`),
  KEY `id_avaliacao_realizada` (`id_avaliacao_realizada`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `criterio_avaliacao_realizada`
--

INSERT INTO `criterio_avaliacao_realizada` (`id_criterio_avaliacao`, `id_criterio`, `peso_criterio`, `id_avaliacao_realizada`) VALUES
(1, 1, 2, 1),
(2, 2, 4, 1),
(3, 8, 3, 1),
(4, 29, 1, 1),
(5, 30, 2, 1),
(6, 31, 1, 1),
(7, 1, 4, 2),
(8, 2, 3, 2),
(9, 8, 4, 2),
(10, 29, 3, 2),
(11, 30, 4, 2),
(12, 31, 3, 2),
(13, 48, 4, 2),
(28, 1, 1, 5),
(29, 2, 2, 5),
(30, 8, 3, 5),
(31, 29, 3, 5),
(32, 30, 4, 5),
(33, 31, 4, 5),
(34, 48, 3, 5),
(35, 1, 4, 6),
(36, 2, 3, 6),
(37, 8, 4, 6),
(38, 29, 3, 6),
(39, 30, 4, 6),
(40, 31, 3, 6),
(41, 48, 4, 6),
(42, 1, 4, 7),
(43, 2, 4, 7),
(44, 8, 4, 7),
(45, 30, 4, 7),
(46, 31, 4, 7),
(47, 48, 4, 7),
(48, 1, 3, 8),
(49, 2, 3, 8),
(50, 8, 4, 8),
(51, 29, 4, 8),
(52, 30, 3, 8),
(53, 31, 4, 8),
(54, 48, 3, 8),
(55, 1, 1, 9),
(56, 2, 2, 9),
(57, 8, 3, 9),
(58, 29, 3, 9),
(59, 30, 3, 9),
(60, 31, 3, 9),
(61, 48, 3, 9),
(62, 1, 4, 10),
(63, 2, 4, 10),
(64, 8, 4, 10),
(65, 29, 3, 10),
(66, 30, 4, 10),
(67, 31, 4, 10),
(68, 48, 4, 10),
(69, 1, 4, 11),
(70, 2, 4, 11),
(71, 8, 4, 11),
(72, 29, 3, 11),
(73, 30, 4, 11),
(74, 31, 3, 11),
(75, 48, 4, 11);

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcao`
--

DROP TABLE IF EXISTS `funcao`;
CREATE TABLE IF NOT EXISTS `funcao` (
  `id_funcao` int(11) NOT NULL AUTO_INCREMENT,
  `nome_funcao` varchar(255) NOT NULL,
  `setor` int(11) NOT NULL,
  `descricao_funcao` varchar(255) NOT NULL,
  PRIMARY KEY (`id_funcao`),
  KEY `setor` (`setor`),
  KEY `id_funcao` (`id_funcao`),
  KEY `setor_2` (`setor`),
  KEY `setor_3` (`setor`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `funcao`
--

INSERT INTO `funcao` (`id_funcao`, `nome_funcao`, `setor`, `descricao_funcao`) VALUES
(1, 'Gerente de Projetos', 4, 'Gerenciar recursos e prazos de projetos'),
(2, 'Front-End Developer', 1, 'Desenvolver web sites e Aplicações web'),
(3, 'Back-End Developer', 3, 'Desenvolver conexões de banco e regras de negócio'),
(4, 'Supervisor Equipe', 3, 'Supervisionar e ajudar no desenvolvimento.'),
(5, 'Entregador', 1, 'Entregar malotes e encomendas'),
(6, 'Analista de Recursos Financeiros ', 5, 'Aalisar Contas a receber e a pagar'),
(7, 'Representante Comercial', 2, 'Prospecção de Clientes, vendas e Relacionamento com cliente.'),
(8, 'CEO', 6, 'É o responsável pelas estratégias e pela visão da empresa.'),
(9, 'SEO', 4, 'Otimizar Sites, MOB e Otimização para Buscas.'),
(13, 'Vendedor', 14, 'Responsável por vender os produtos aos clientes.');

-- --------------------------------------------------------

--
-- Estrutura da tabela `perfil`
--

DROP TABLE IF EXISTS `perfil`;
CREATE TABLE IF NOT EXISTS `perfil` (
  `id_perfil` int(11) NOT NULL AUTO_INCREMENT,
  `nome_perfil` varchar(200) NOT NULL,
  PRIMARY KEY (`id_perfil`),
  UNIQUE KEY `id_perfil` (`id_perfil`),
  KEY `id_perfil_2` (`id_perfil`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `perfil`
--

INSERT INTO `perfil` (`id_perfil`, `nome_perfil`) VALUES
(1, 'Administrador'),
(2, 'Usuário');

-- --------------------------------------------------------

--
-- Estrutura da tabela `setor`
--

DROP TABLE IF EXISTS `setor`;
CREATE TABLE IF NOT EXISTS `setor` (
  `id_setor` int(11) NOT NULL AUTO_INCREMENT,
  `nome_setor` varchar(255) NOT NULL,
  PRIMARY KEY (`id_setor`),
  UNIQUE KEY `id_setor` (`id_setor`),
  KEY `id_setor_2` (`id_setor`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `setor`
--

INSERT INTO `setor` (`id_setor`, `nome_setor`) VALUES
(1, 'Administrativo'),
(2, 'Marketing'),
(3, 'Desensolvimento'),
(4, 'Planejamento'),
(5, 'Contabilidade'),
(6, 'Diretoria'),
(14, 'Vendas');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_avaliacao`
--

DROP TABLE IF EXISTS `tipo_avaliacao`;
CREATE TABLE IF NOT EXISTS `tipo_avaliacao` (
  `id_tipo_avaliacao` int(11) NOT NULL,
  `nome_tipo_avaliacao` varchar(255) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  PRIMARY KEY (`id_tipo_avaliacao`),
  UNIQUE KEY `id_tipo_avaliacao` (`id_tipo_avaliacao`),
  KEY `id_tipo_avaliacao_2` (`id_tipo_avaliacao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tipo_avaliacao`
--

INSERT INTO `tipo_avaliacao` (`id_tipo_avaliacao`, `nome_tipo_avaliacao`, `descricao`) VALUES
(1, 'Auto Avaliação ', 'Colaborador pode se auto avaliar'),
(2, 'Avaliação 90 Graus', 'Gestor superior imediato avalia o subordinado '),
(3, 'Avaliação 180 Graus', 'Gestor avalia subordinado e o subordinado avalia o gestor'),
(4, 'Avaliação 360 Graus', 'Colaborador é avaliado por todos do mesmo setor');

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `avaliacao`
--
ALTER TABLE `avaliacao`
  ADD CONSTRAINT `avaliacao_ibfk_1` FOREIGN KEY (`id_avaliacao`) REFERENCES `criterio_avaliacao_realizada` (`id_criterio_avaliacao`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `avaliacao_ibfk_2` FOREIGN KEY (`id_criterio`) REFERENCES `criterio` (`id_criterio`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `avaliacao_gerada`
--
ALTER TABLE `avaliacao_gerada`
  ADD CONSTRAINT `avaliacao_gerada_ibfk_1` FOREIGN KEY (`tipo_avaliacao_gerada`) REFERENCES `tipo_avaliacao` (`id_tipo_avaliacao`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `avaliacao_gerada_ibfk_2` FOREIGN KEY (`setor_avaliacao`) REFERENCES `setor` (`id_setor`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `avaliacao_gerada_ibfk_3` FOREIGN KEY (`id_colaborador`) REFERENCES `colaborador` (`id_colaborador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `avaliacao_gerada_ibfk_4` FOREIGN KEY (`id_avaliador`) REFERENCES `colaborador` (`id_colaborador`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `avaliacao_realizada`
--
ALTER TABLE `avaliacao_realizada`
  ADD CONSTRAINT `avaliacao_realizada_ibfk_1` FOREIGN KEY (`id_avaliacao_gerada`) REFERENCES `avaliacao_gerada` (`id_avaliacao_gerada`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `colaborador`
--
ALTER TABLE `colaborador`
  ADD CONSTRAINT `colaborador_ibfk_1` FOREIGN KEY (`perfil`) REFERENCES `perfil` (`id_perfil`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `colaborador_ibfk_2` FOREIGN KEY (`setor`) REFERENCES `setor` (`id_setor`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `colaborador_ibfk_3` FOREIGN KEY (`funcao`) REFERENCES `funcao` (`id_funcao`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `criterio_avaliacao_realizada`
--
ALTER TABLE `criterio_avaliacao_realizada`
  ADD CONSTRAINT `criterio_avaliacao_realizada_ibfk_1` FOREIGN KEY (`id_avaliacao_realizada`) REFERENCES `avaliacao_realizada` (`id_avaliacao_realizada`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `criterio_avaliacao_realizada_ibfk_2` FOREIGN KEY (`id_criterio`) REFERENCES `criterio` (`id_criterio`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `funcao`
--
ALTER TABLE `funcao`
  ADD CONSTRAINT `funcao_ibfk_1` FOREIGN KEY (`setor`) REFERENCES `setor` (`id_setor`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
