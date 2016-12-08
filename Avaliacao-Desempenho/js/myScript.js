$(window).load(function () {
    FecharJanelas();
    $('#login-cpf').focus();
    $('#login').modal(); 
    TelaMediaHeight(); 

});

var setor = '';

Array.prototype.indexOfObject = function arrayObjectIndexOf(property, value) {
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i][property] === value) return i;
    }
    return -1;
}

$(document).ready(function () {
    
    $('#login').modal({
        keyboard: false,
    })

    $('#encerrar').on('click', UsuarioDeslogado);

    $(".fechar").on('click', FecharJanelas);

    // $('.slides').cycle(
    //     { 
    //         fx:     'scrollLeft', 
    //         speed:   1000, 
    //         timeout: 3000, 
    //         next:   '.right', 
    //         prev:   '.left' ,
    //         pause:   1 

    //     });

    $(".pergunta").click(function () {

        var quest = $(this).find('.background-icon');
        var hide = $(this).find('.resposta');
        var hasClass = hide.hasClass('resposta-show');

        $('.resposta').each(function(){

            $(this).removeClass('resposta-show');
            $('.background-icon').removeClass('background-icon-new');
            $(this).slideUp('slow');
 
        });

        if (hasClass){
            hide.removeClass('resposta-show');
            hide.slideUp('slow');
            quest.removeClass('background-icon-new');
        }
        else{
            hide.addClass('resposta-show');
            hide.slideDown('slow');
            quest.addClass('background-icon-new');
        }
    });

    $("#refresh").on('click', WindowRefresh);

    //DESLOGAR USUARIO
    $('#encerrar').on('click',function(event) {
        event.preventDefault();
        localStorage.removeItem("usuario");
    });
    $('#btn-aviso').on('click',function(){
        $('#login-failed').slideUp('fast');
        $('#login-form').slideDown('slow');
    });
    //CANCELAR LOGIN DO SISTEMA
    $('#cancelar-login').on('click',function(){
        url = "http://www.hingorocha.com";
        $(location).attr("href",url);
    });
    $('#cancelar-avaliacao').on('click',function(){
        $(".main").slideDown(800);
        $('#realizar-auto-avaliacao').slideUp(800);
    });
    //CADASTRAR COLABORDOR
    $("#btn-salvar-colaborador").on('click', SalvarColaborador);
    //CADASTRAR SETOR
    $("#btn-cad-setor").on('click', CadastrarSetor);
    //CADASTRAR FUNCAO
    $('#btn-cad-funcao').on('click',CadastrarFuncao);
    //CADASTRAR COLABORADOR
    $("#cadastrar-colaborador").on('click', CadastrarColaborador);
    //ENVIAR SETOR E RECEBER FUNCAO
    $("#selecionar-setor").change('click', EnviarSetorReceberFuncao);
    //ENVIAR CARGO E RECEBER PERFIL
    $("#selecionar-funcao").change('click', EnviarCargoReceberPerfil);
    //CARREGAR AUTO AVALIACAO
    $("#carrega-auto-avaliacao").on('click', CarregarAutoAvaliacao);
    //CARREGAR AVALIACAO 90
    $("#carrega-avaliacao-90").on('click', CarregarAvaliacao90);
    //CARREGAR AVALIACAO 180
    $("#carrega-avaliacao-180").on('click', CarregarAvaliacao180);
    //CARREGAR AVALIACAO 360
    $("#carrega-avaliacao-360").on('click', CarregarAvaliacao360);
    //RECEBER FUNCAO DO COLABORADOR
    $("#setor-colaborador").change('click', ReceberCargo);
    //RECEBER SETOR
    $("#recebe-setor").change('click', ReceberSetor);
    //RECEBE SETOR AO CLICAR EM CADASTRAR FUNCAO
    $("#cadastrar-funcao").on('click', ReceberSetorDaFuncao);
    //PREENCHER O SETOR QUANDO CLICA NO CADASTRO DE FUNÇÃO
    $("#show-cad-funcao").on('click', PreencherSetor);
    //CONSULTAR COLABORADOR
    $("#consultar-avaliacao-individual").on('click', ConsultarAvaliacao);
    $("#carregar-avaliacoes-acumuladas").on('click', ConsultarAvaliacaoAcumulada);
    $("#setor-avaliacao-realizada").change('click', ConsultarAvaliacaoCargo);
    $("#cargo-avaliacao-realizada").change('click', ConsultarAvaliacaoColaborador);
    $("#btn-consultar-avaliacoes").on('click', ConsultarAvaliacaoAcumuladaRealizada);
    $("#colaborador-avaliacao-realizada").change('click', ConsultarAvaliacaoRealizada);
    $("#consulta-avaliacao-realizada").change('click', CarregarAvaliacaoRealizada);
    //CONSULTA SETOR
    $("#consulta-setor").on('click', ConsultarSetor);
    //EFETUAR LOGIN NO SISTEMA
    $('#btn-login').on('click', Login);
    //GERAR AUTO AVALIACAO
    $("#btn-gerar-auto-avaliacao").on('click', GerarAutoAvaliacao);
    //GERAR AVALIACAO 90 graus
    $("#btn-gerar-avaliacao-90").on('click', GerarAvaliacao90Graus);
    //GERAR AVALIACAO 180 graus
    $("#btn-gerar-avaliacao-180").on('click', GerarAvaliacao180Graus);
    //GERAR AVALIACAO 180 graus
    $("#btn-gerar-avaliacao-360").on('click', GerarAvaliacao360Graus);
    //SALVAR AUTO AVALIAÇÃO
    $("#btn-salvar-avaliacao").on('click', SalvarAutoAvaliacaoRealizada);
    //SALVAR CRITERIO
    $('#btn-salvar-criterio').on('click', SalvarCriterio);
    //SALVAR ALTERAÇÕES NO COLABORADOR
    $('#btn-alterar-usuario').on('click', SalvarColaboradorAlterado);
    //REALIZAR AUTO AVALIACAO
    $('.load-avaliacao').on('click', RealizarAutoAvaliacao);
    //ALTERAR SETOR
    $("#btn-altera-setor").on('click', SalvarSetorAlterado);
    //ALTERAR FUNÇÃO
    $("#btn-alt-cargo").on('click', SalvarCargoAlterado);
    $("#recebe-novo-setor").change('click', RecebeNovoSetor);
    $("#auto-avaliacao-selecionar-setor").change('click', AutoAvaliacaoSelecionarSetor);
    $("#avaliacao-90-selecionar-setor").change('click', Avaliacao90SelecionarSetor);
    $("#avaliacao-180-selecionar-setor").change('click', Avaliacao180SelecionarSetor);
    $("#avaliacao-360-selecionar-setor").change('click', Avaliacao360SelecionarSetor);
    // $("#avaliacao-90-gestor").change('click', Avaliacao90SelecionarGestorRecebeColaborador);
    // $('.dropdown').hover(MostrarMenu);
    // $('#btn-cancelar-avaliacao').on('click', CancelaConsultaDeAvaliacao);
    // $('#btn-consultar-avaliacao').on('click', CancelaConsultaDeAvaliacao);
    // $('#cancelar-avaliacao').on('click', CancelaConsultaDeAvaliacao);
    
    $('#btn-alterar-senha').on('click', TrocarSenha);
    $('#btn-alterar-criterio').on('click', SalvarCriterioAlterado);
    $('#to-top').on('click', ToTop);

}); 

function TelaMediaHeight(){

    var height = $('.tela-media-container > .tela-media').height();

    $('.tela-media-container').find('.tela-media').each(function(index, el) {

        if($(this).height() > height){

        height = $(this).height();
        $('.tela-media-container > .tela-media').css({'height': height});
           
        }
    });

    $('.tela-media-container').find('.tela-media').each(function(index, el) {

        $(this).css({'height': height + 20});
           
    });

};

function TrocarSenha(){

    var novaSenha = $('#nova-senha').val();
    var novaSenha2 = $('#nova-senha-2').val();
    var cpf = $('#cpf-logado').text();
    var id = $('#id-logado').text();

    if((novaSenha === novaSenha2) && (novaSenha !== '') && (novaSenha2 !== '')){

        var parametros = {"cpf": cpf, "nova_senha": novaSenha,"nova_senha2": novaSenha2};

            $.ajax({
                url: 'db/alterar_senha.php',
                method: 'POST',
                dataType: 'html',
                data: {dados: parametros}
            })
            .done(function(data) {
                console.log("success");
                $('#trocar-senha').modal('hide');
                $('#senha-atual').val('');
                $('#nova-senha').val('');
                $('#nova-senha-2').val('');
                alert('Senha alterada com sucesso!');
            })
            .fail(function(data) {
                console.log("error");
                console.log(data);
            })
            .always(function(data) {
                console.log("complete");
                console.log(data);
            });
        
    }else{
       console.log('Senhas Diferentes: '+ novaSenha+' - '+ novaSenha2);
    }
    
};

function ToTop(e){
    e.preventDefault();
    $(this).css('background-color','transparent');
    $("html, body").animate({ scrollTop: 0 }, "slow");
};

function WindowRefresh(){

    window.location.reload(true);
};
//Fechar janelas
function FecharJanelas(){
    $(".tabelas").hide();
    $('#realizar-auto-avaliacao').hide();  
    $(".main").slideDown();
    $("article.tela-media").show();
    $('#login-failed').hide();
    $(".avaliacoes").hide();
    $("#tabela").hide();
    $(".resposta").hide();
    $('#consultar-avaliacoes-setor').hide();
};

//Consulta os dados dos funcionários cadastrados
function ConsultaUsuario() {
    $(".tabelas").show();
    $("#tabela").show();
    $.post('db/consulta_colaborador.php', function (data) {

        var obj = $.parseJSON(data + "");

        for (var i = 0; i < obj.length; i++) {

            $('tr').remove();
        }
        $('table#consulta-data').append("<tr ><th class='hidden'>ID</th><th>CPF</th><th> Nome</th><th> Email</th><th> Telefone</th><th>Função</th><th>Setor</th><th>Perfil</th></tr>");

        for (var i = 0; i < obj.length; i++) {

            $('table#consulta-data').append("<tr onclick='AlteraColaborador(this)'><td id='" + obj[i].id_colaborador + "' class='hidden'>" + obj[i].id_colaborador + "</td><td id='cpf'> " + obj[i].cpf_colaborador + "</td><td id='nome'>" + obj[i].nome_colaborador + "</td><td id='email'>" + obj[i].email_colaborador + "</td><td id='telefone'>" + obj[i].tel_colaborador + "</td><td id='funcao'>" + obj[i].nome_funcao + "</td><td id='setor'>" + obj[i].nome_setor + "</td><td id='perfil'>" + obj[i].nome_perfil + "</td></tr>");
        }
    });
    
    $("#span-consulta").text('Colaborador');
    // $("#fechar").show();
    $(".main").slideUp();
    $("article.tela-media").hide();

};
//SALVAR ALTERAÇÕES DO COLABORADOR
function SalvarColaboradorAlterado(){
    var nome = $('#alter-name').val();
    var id = $('#alter-id-colaborador').attr('placeholder');
    var cpf = $('#alter-cpf').val();
    var email = $('#alter-email').val();
    var tel = $('#alter-tel').val();
    var setor = $('#setor-colaborador option:selected').attr('id');
    var cargo = $('#funcao-colaborador option:selected').attr('id');
    var ativo =  $('#ativo-colaborador').find("input[type='radio']:checked").val();
    var perfil =  $('#perfil-colaborador').find("input[type='radio']:checked").val();

    if(perfil === "administrador"){
        perfil = 1;
    }else{
        perfil = 2;
    }

    var parametros = {
        "id": id,
        "nome": nome,
        "cpf": cpf,
        "email": email,
        "tel": tel,
        "setor": setor,
        "cargo": cargo,
        "ativo": ativo,
        "perfil":perfil

    };

        $.ajax({
            url: 'db/alterar_colaborador.php',
            method: 'POST',
            dataType: 'html',
            data: {dados: parametros}
        })
        .done(function(data) {
            alert("Usuário alterado com Sucesso!");
            FecharJanelas();

        })
        .fail(function(data) {
            console.log("error");
        })
        .always(function(data) {
            console.log("complete");
        });

};
//Consulta as funções dos funcionários cadastrados
function ConsultaFuncao() {
    
    $.post('db/consulta_funcao.php', function (data) {
        var obj = $.parseJSON(data + "");
        for (var i = 0; i < obj.length; i++) {

            $('tr').remove();
        }
        $('table#consulta-data').append("<tr><th class='borda-tabela hidden'>Código </th><th class='borda-tabela alinha-texto-centro'> Cargo</th><th class='borda-tabela alinha-texto-centro'> Descrição da Função</th><th class='borda-tabela alinha-texto-centro'> Setor</th></tr>");

        for (var i = 0; i < obj.length; i++) {

            $('table#consulta-data').append("<tr onclick='AlteraCargo(this)'><td id='id' class='borda-tabela'> " + obj[i].id_funcao + "</td><td id='nome' class='borda-tabela'>" + obj[i].nome_funcao + "</td><td id='descricao-funcao' class='borda-tabela'>" + obj[i].descricao_funcao + "</td><td id='setor' class='borda-tabela'>" + obj[i].nome_setor + "</td></tr>");
        }

    });
    $("#span-consulta").text('Cargo');
    $(".tabelas").show();
    $("#tabela").show();
    // $("#fechar").show();
    $(".main").slideUp();
    $(".tela-media.content").slideUp();
    $("article.tela-media").hide();
};
//CONSULTAR AVALIAÇÃO
function ConsultarAvaliacao(){

    FecharJanelas();
    
    $(".main").slideUp();
    $(".jumbotron.tela-media.content").slideUp();
    $(".tabelas").slideUp();
    $('#setor-avaliacao-realizada').prop('disabled',false);

 $('table#itens-avaliacao-realizada tr').each(function(){
        $(this).remove('tr');
    });

    $('#cargo-avaliacao-realizada').val('');
    $('#colaborador-avaliacao-realizada').val('');
    $('#consulta-avaliacao-realizada').val('');

    $.post('db/consulta_setor_avaliacao_realizada.php', function (data) {

        var dados = $.parseJSON(data + "");

        for (var i = 0; i < dados.length; i++) {

            $('#setor-avaliacao-realizada option').remove();
        }

        $('#setor-avaliacao-realizada').append("<option><span class='label label-default'>Selecione um setor</span></option>");

        for (var i = 0; i < dados.length; i++) {

            $('#setor-avaliacao-realizada').append("<option id="+dados[i].id_setor+">"+dados[i].nome_setor+"</option>");
        }

    });
    $('#consultar-avaliacao-individual-setor').slideDown();
    $(".main").slideUp();
    $(".tela-media.content").slideUp();
    $("article.tela-media").hide();
};

function ConsultarAvaliacaoAcumulada() {

    FecharJanelas();
    $('tr').remove();
    $(".main").slideUp();
    $(".jumbotron.tela-media.content").slideUp();
    $(".tabelas").slideUp();
    $('#itens-avaliacao-realizada').remove();
    $('#consultar-avaliacoes-acumuladas').slideDown();
    $(".main").slideUp();
    $(".tela-media.content").slideUp();
    $("article.tela-media").hide();
    $('#tabela-avaliacao-realizada').append("<table id='itens-avaliacao-realizada' class='table table-responsive table-bordered'></table>");

};

function ConsultarAvaliacaoAcumuladaRealizada(e) {
    e.preventDefault();

    var inicio1 = new Date($('#begin').val());
    var fim1 = new Date($('#end').val());

    var inicio = DateUSA(inicio1);
    var fim = DateUSA(fim1);

    if(inicio1 && fim1 !== 'null'){

   var parametros = {"inicio": inicio,"fim": fim};

   $.post('db/consulta_avaliacoes_acumuladas.php', parametros, function (data) {

       var dados = $.parseJSON(data + "");
       var tamanho = 0;
        
       for (var i = 0; i < dados.length; i++) {

           $('tr').remove();
       }

        var inicio = new Date(inicio1);
        var fim = new Date(fim1);

       $('table#itens-avaliacao-realizada').append("<tr><th>Tipo de avaliação</th><th>Nome Avaliado</th><th>Data Avaliação</th><th>Criterio</th><th>Pontuação</th></tr>");
      
       var media = 0;
      
       for (var i = 0; i < dados.length; i++) {
        //    console.log(dados);

           var cont = 0;
           var dataGerada = new Date(dados[i].data);
           var dataAvaliacaoRealizada = new Date(dados[i].data_realizada);

           var id_avaliacao_realizada = dados[i].id_avaliacao_realizada;
           var nome_tipo_avaliacao = dados[i].nome_tipo_avaliacao;
           var nome_colaborador = dados[i].nome_colaborador;
           

           var avaliacao = {
               'id_avaliacao_realizada' : id_avaliacao_realizada,
               'dados' : []
           };
            var info =  {
                'nome_tipo_avaliacao' : '',
                'nome_colaborador' : '',
                'media' : []
            };
            
            var media = 0;

            // for(var j = 0; j < dados.length; j++){
                
            //     if(id_avaliacao_realizada === dados[j].id_avaliacao_realizada){

            //         media = media + parseInt(dados[j].peso_criterio);
            //         cont = cont + 1;

            //         var info =  {
            //             'nome_tipo_avaliacao' : nome_tipo_avaliacao,
            //             'nome_colaborador' : nome_colaborador,
            //             'media' : media
            //         };
            //         avaliacao = {
            //             'id_avaliacao_realizada' : id_avaliacao_realizada,
            //             'dados' : info
            //         }

                    
            //     }else{
            //     //     media = media / cont;
            //     //    avaliacao = {
            //     //        'media' :  media
            //     //    };
            //     }
                
            // }
// console.log(avaliacao);
                // media = media + parseInt(dados[i].peso_criterio);
                
                // var mediaFinal = (4, media = 100 * media / (tamanho * 4) + '%');
                var dataInicio = formatDate(dados[i].data);
                var dataFim = formatDate(dados[i].data_realizada);
                
                $('table#itens-avaliacao-realizada').append("<tr><td id='"+ dados[i].id_avaliacao_realizada +"'>" + dados[i].nome_tipo_avaliacao + "</td><td>" + dados[i].nome_colaborador + "</td><td><strong>" + dataFim + "</strong></td><td>" + dados[i].nome_criterio + "</td><td>"+ dados[i].peso_criterio + ' - ' + dados[i].peso_criterio / 4 * 100+"%</td></tr>");


                // + mediaFinal.substr(0, 5 ) +
        //    }else{
        //     $('table#itens-avaliacao-realizada').append("<tr><td> - </td><th> - </td><td> - </td><td> Média </td><td></td>"+mediaFinal+"</tr>");
        //    }
        //   
        //    media = 0;
        //    mediaFinal = 0;
       }
                      
   });
    }else{
        alert('Selecione um período válido!');
        // console.log('else - begin: ' + inicio + 'end: ' + fim);
    }
    

};

function ConsultarAvaliacaoCargo(){

    $('#cargo-avaliacao-realizada').prop('disabled',false);

    var setor = $('#setor-avaliacao-realizada option:selected').attr('id');
        
    var parametros = {"id_setor": setor};
         
         $.post( "db/envia_setor_recebe_funcao.php",parametros, function( data ) {

        var dados = $.parseJSON(data);

        for (var i = 0; i < dados.length; i++) {

            $('#cargo-avaliacao-realizada option').remove();
        }
            $('#cargo-avaliacao-realizada').append("<option><span class='label label-default'>Selecione um cargo</span></option>");

        for (var i = 0; i < dados.length; i++) {

            $('#cargo-avaliacao-realizada').append("<option id="+dados[i].id_funcao+">"+dados[i].nome_funcao+"</option>");
                
        }
    }); 
};
function ConsultarAvaliacaoColaborador(){
    
    $('#colaborador-avaliacao-realizada').prop('disabled',false);

    var cargo = $('#cargo-avaliacao-realizada option:selected').attr('id');
        
    var parametros = {"id_cargo": cargo};
         
         $.post( "db/envia_cargo_recebe_colaborador.php",parametros, function( data ) {

        var dados = $.parseJSON(data);

        for (var i = 0; i < dados.length; i++) {

            $('#colaborador-avaliacao-realizada option').remove();
        }
            // $('#colaborador-avaliacao-realizada option').remove();
            $('#colaborador-avaliacao-realizada').append("<option><span class='label label-default'>Selecione um Colaborador</span></option>");

        for (var i = 0; i < dados.length; i++) {

            $('#colaborador-avaliacao-realizada').append("<option id="+dados[i].id_colaborador+">"+dados[i].nome_colaborador+"</option>");
                
        }
    }); 
};
function ConsultarAvaliacaoRealizada(){
    
    $('#consulta-avaliacao-realizada').prop('disabled',false);

    var id = $('#colaborador-avaliacao-realizada option:selected').attr('id');
        
    var parametros = {"id_colaborador": id};
         
         $.post( "db/envia_colaborador_recebe_avaliacao.php",parametros, function( data ) {

        var dados = $.parseJSON(data);

        for (var i = 0; i < dados.length; i++) { $('#consulta-avaliacao-realizada option').remove();}

            $('#consulta-avaliacao-realizada').append("<option><span class='label label-default'>Selecione o Tipo de Avaliação</span></option>");

        for (var i = 0; i < dados.length; i++) {
            $('#cpf-avaliacao').text(dados[i].cpf_colaborador);
            var dataAvaliacaoRealizada = formatDate(dados[i].data_realizada);
            $('#consulta-avaliacao-realizada').append("<option id="+dados[i].id_tipo_avaliacao+">"+dados[i].nome_tipo_avaliacao+' data: '+ dataAvaliacaoRealizada+"</option>");
                
        }
    }); 
};
function CarregarAvaliacaoRealizada(){

    $('#consulta-avaliacao-realizada').prop('disabled',true);
    $('#colaborador-avaliacao-realizada').prop('disabled',true);
    $('#setor-avaliacao-realizada').prop('disabled',true);
    $('#cargo-avaliacao-realizada').prop('disabled',true);
    
   var id = $('#consulta-avaliacao-realizada option:selected').attr('id');

   var str = $('#consulta-avaliacao-realizada option:selected').val();

   var dataAvaliacaoRealizada = str.substr(-9);


    var cpf = $('#cpf-avaliacao').text();
        
    var parametros = {"tipo_avaliacao_gerada": id,"cpf_colaborador": cpf, "data_realizada": dataAvaliacaoRealizada};

         $.post( "db/consulta_avaliacao_gerada.php",parametros, function( data ) {

        var obj = $.parseJSON(data);

        var media = 0;
        var tamanho = 0;
        for (var i = 0; i < obj.length; i++) {

            $('tr').remove();
        }
        $('table#itens-avaliacao-realizada').append("<tr><th > Critério </th><th > Descrição do Critério</th><th >Nota Recebida</th></tr>");

        for (var i = 0; i < obj.length; i++) {

            var dataAvaliacao = formatDate(obj[i].data);
            var dataAvaliacaoRecebida = formatDate(obj[i].data_realizada);

            if(dataAvaliacaoRealizada === dataAvaliacaoRecebida){

                media = media + parseInt(obj[i].peso_criterio);

                tamanho = tamanho + 1;

                $('#consulta-data-avaliacao').text(' '+dataAvaliacao);
                $('#consulta-data-avaliacao-realizada').text(' '+dataAvaliacaoRealizada);

                $('table#itens-avaliacao-realizada').append("<tr><td id='nome-criterio'>" + obj[i].nome_criterio + "</td><td id='desc-criterio'>" + obj[i].desc_criterio + "</td><td id='peso'><strong>" + obj[i].peso_criterio + "</strong>  -  <i>"+ obj[i].peso_criterio / 4 * 100+ "%</i></td></tr>");
          
            }
        }
        var mediaFinal = (4, media = 100 * media / (tamanho * 4) + '%');
        if(parseInt(mediaFinal) < 70){
            $('#media-avaliacao').text(mediaFinal.substr(0, 5 ));
            $('#media-avaliacao').css('color','red');

            console.log('1'+mediaFinal);
        }else{
            $('#media-avaliacao').text(mediaFinal.substr(0, 5 ));
            $('#media-avaliacao').css('color','blue');
            // console.log('2'+mediaFinal);
        }
        
    }); 
    
};
//Consulta os critérios das avaliações cadastradas
function ConsultaCriterios() {
    $.post('db/consulta_criterios.php', function (data) {

        var obj = $.parseJSON(data + "");
        for (var i = 0; i < obj.length; i++) {

            $('tr').remove();
        }
        $('table#consulta-data').append("<tr><th class='hidden'> Código </th><th > Nome Critério</th><th > Descricao Critério</th></tr>");

        for (var i = 0; i < obj.length; i++) {

            $('table#consulta-data').append("<tr onclick='AlterarCriterio(this)'><td id='id-criterio' class='hidden'>" + obj[i].id_criterio + "</td><td id='nome-criterio'>" + obj[i].nome_criterio + "</td><td id='descricao'>" + obj[i].desc_criterio + "</td></tr>");
        }

    });
    $("#span-consulta").text('Critérios');
    $(".tabelas").show();
    $("#tabela").show();
    // $("#fechar").show();
    $(".main").slideUp();
    $("article.tela-media").hide();
};
//Verificar se usuario está logado
function UsuarioLogado(){

    var cpf = localStorage.getItem('cpf');
    var id = localStorage.getItem('id');

    $.ajax({
        method: "POST",
        url: "db/login_avaliacao.php",
        dataType: "html",
        data: {"id": id}
        })
        .done(function(data){

            if( data === 'Erro' ){
            
                $('.avaliacoes-disponiveis').text('0');
                $('.avaliacoes-disponiveis').attr('Não há avaliações');
               console.log('erro');
               

            }else{
           
                var avalDisponiveis = 0;
                var tipoAvaliacao = new Array();
                var obj = $.parseJSON(data + "");
                var title = [];

                if(obj.length > 0){

                    for (var i = 0; i < obj.length; i++) {

                    tipoAvaliacao.push(obj[i].realizada);
                    
                    var cpf = obj[i].cpf_colaborador;

                    if(obj[i].id_colaborador){
                        if(obj[i].realizada == 0){
                             avalDisponiveis++;
                            if(obj[i].nome_tipo_avaliacao){
                                //title[0] = $( ".avaliacoes-disponiveis" ).attr( "title" ); 
                                title.push(obj[i].nome_tipo_avaliacao);
                            }
                        }

                    localStorage.setItem('avalDisponiveis',avalDisponiveis);
                    localStorage.setItem('nomeAvaliacoes', title);
                    $('.avaliacoes-disponiveis').text(localStorage.getItem('avalDisponiveis'));
                    $('.avaliacoes-disponiveis').attr('title', localStorage.getItem('nomeAvaliacoes'));
                    }else{
                        console.log('Erro');
                    }
                    
                }
            }else{
                    $('.avaliacoes-disponiveis').text('0');
                    $('.avaliacoes-disponiveis').attr('title', 'Não há avaliações.');
                }

        }
        }).fail(function(data) {

            if(data === 'Erro'){
                alert('Erro');
            }
            
        });

    if(localStorage.usuario){

        $('#id-logado').text(localStorage.getItem('id'));
        $('#logado').text(localStorage.getItem('usuario'));
        $('#cpf-logado').text(localStorage.getItem('cpf'));
        $('#perfil-logado').text(localStorage.getItem('perfil'));
        
        if(localStorage.getItem('perfil') == 1){

        }else{
            $("#cadastro").css('color', 'red');
            $("#cadastro").prop("disabled",  true);
            $("#gerar-avaliacao").css('color', 'red');
            $("#gerar-avaliacao").prop("disabled",  true);
            $("#consultas").css('color', 'red');
            $("#consultas").prop("disabled",  true);
        }
    }else{
        UsuarioDeslogado();
    }
};
//Verificar se uruário está deslogado
function UsuarioDeslogado(){
    
    $('#logado').text('');
    localStorage.clear();
    logadoOk = false;
    window.location.assign('index.html');
};

// CARREGAR AUTO AVALIACAO
function CarregarAutoAvaliacao(){

    $.post('db/consulta_setor.php', function (data) {

        var dados = $.parseJSON(data);

        $("#tipo-auto-avaliacao").attr("placeholder", 'Auto Avaliação');
        for (var i = 0; i < dados.length; i++) { $('#auto-avaliacao-selecionar-setor option').remove();}
        $('#auto-avaliacao-selecionar-setor').append("<option><span class='label label-default'>Selecione um setor</span></option>");

        for (var i = 0; i < dados.length; i++) {

            $('#auto-avaliacao-selecionar-setor').append("<option id="+dados[i].id_setor+">"+dados[i].nome_setor+"</option>");
        }
    });

    $(".main").slideDown();
    $("#tabela").slideUp('slow');
    $(".tabelas").hide();
};
// CARREGAR AVALIACAO 90 GRAUS
function CarregarAvaliacao90(){

    $('#avaliacao-90-gestor option').remove();
    $('#avaliacao-90-colaborador option').remove();

    $('#avaliacao-90-gestor').append("<option><span class='label label-default'>Selecione um setor antes</span></option>");
    $('#avaliacao-90-colaborador').append("<option><span class='label label-default'>Selecione um gestor antes</span></option>");

    // $('#avaliacao-90-gestor').val('Selecione um setor antes');
    // $('#avaliacao-90-colaborador').val('Selecione um gestor antes');

    $.post('db/consulta_setor.php', function (data) {

        $('#avaliacao-90-gestor').prop('disabled',true);
        $('#avaliacao-90-colaborador').prop('disabled',true);

        var dados = $.parseJSON(data);

        $("#tipo-avaliacao-90").attr("placeholder", 'Avaliação 90 graus');
        for (var i = 0; i < dados.length; i++) { $('#avaliacao-90-selecionar-setor option').remove();}
        $('#avaliacao-90-selecionar-setor').append("<option><span class='label label-default'>Selecione um setor</span></option>");

        for (var i = 0; i < dados.length; i++) {

            $('#avaliacao-90-selecionar-setor').append("<option id="+dados[i].id_setor+">"+dados[i].nome_setor+"</option>");
        }
    });

    $(".main").slideDown();
    $("#tabela").slideUp('slow');
    $(".tabelas").hide();
};
// CARREGAR AVALIACAO 180 GRAUS
function CarregarAvaliacao180() {

    $('#avaliacao-180-gestor option').remove();
    $('#avaliacao-180-colaborador option').remove();

    $('#avaliacao-180-gestor').append("<option><span class='label label-default'>Selecione um setor antes</span></option>");
    $('#avaliacao-180-colaborador').append("<option><span class='label label-default'>Selecione um gestor antes</span></option>");

    $.post('db/consulta_setor.php', function (data) {

        $('#avaliacao-180-gestor').prop('disabled', true);
        $('#avaliacao-180-colaborador').prop('disabled', true);

        var dados = $.parseJSON(data);

        $("#tipo-avaliacao-180").attr("placeholder", 'Avaliação 180 graus');
        for (var i = 0; i < dados.length; i++) { $('#avaliacao-180-selecionar-setor option').remove(); }
        $('#avaliacao-180-selecionar-setor').append("<option>Selecione um setor</option>");

        for (var i = 0; i < dados.length; i++) {

            $('#avaliacao-180-selecionar-setor').append("<option id=" + dados[i].id_setor + ">" + dados[i].nome_setor + "</option>");
        }
    });

    $(".main").slideDown();
    $("#tabela").slideUp('slow');
    $(".tabelas").hide();
};
// CARREGAR AVALIACAO 360 GRAUS
function CarregarAvaliacao360() {

    $('#avaliacao-360-gestor option').remove();
    $('#avaliacao-360-colaborador option').remove();

    $('#avaliacao-360-gestor').append("<option><span class='label label-default'>Selecione um setor antes</span></option>");
    $('#avaliacao-360-colaborador').append("<option><span class='label label-default'>Selecione um gestor antes</span></option>");

    $.post('db/consulta_setor.php', function (data) {

        $('#avaliacao-360-gestor').prop('disabled', true);
        $('#avaliacao-360-colaborador').prop('disabled', true);

        var dados = $.parseJSON(data);

        $("#tipo-avaliacao-360").attr("placeholder", 'Avaliação 360 graus');
        for (var i = 0; i < dados.length; i++) { $('#avaliacao-360-selecionar-setor option').remove(); }
        $('#avaliacao-360-selecionar-setor').append("<option>Selecione um setor</option>");

        for (var i = 0; i < dados.length; i++) {

            $('#avaliacao-360-selecionar-setor').append("<option id=" + dados[i].id_setor + ">" + dados[i].nome_setor + "</option>");
        }
    });

    $(".main").slideDown();
    $("#tabela").slideUp('slow');
    $(".tabelas").hide();
};
//PREENCHE O SELECT OPTION DA FUNCAO CONFORME O SETOR SELECIONADO
//NO CADASTRO DE COLABORADORES
function EnviarSetorReceberFuncao(){

    var setor = $('#selecionar-setor option:selected').attr('id');

    //$.post('db/envia_colaborador_recebe_setor.php', function (data) {
        
    var parametros = {"id_setor": setor};
         
         $.post( "db/envia_setor_recebe_funcao.php",parametros, function( data ) {

			var dados = $.parseJSON(data);

			for (var i = 0; i < dados.length; i++) {
			 $('#selecionar-funcao option').remove();
			}
				$('#selecionar-funcao').append("<option>Selecione um setor</option>");

			for (var i = 0; i < dados.length; i++) {

				$('#selecionar-funcao').append("<option id="+dados[i].id_funcao+">"+dados[i].nome_funcao+"</option>");

			}
		});          
};
function EnviarCargoReceberPerfil(){

    var setor = $('#selecionar-funcao option:selected').attr('id');
         
        $.get( "db/consulta_perfil.php", function( data ) {

			var dados = $.parseJSON(data);

			for (var i = 0; i < dados.length; i++) {
			 $('#selecionar-perfil option').remove();
			}
				$('#selecionar-perfil').append("<option><span class='label label-default'>Selecione um Perfil</span></option>");

			for (var i = 0; i < dados.length; i++) {

				$('#selecionar-perfil').append("<option id="+dados[i].id_perfil+">"+dados[i].nome_perfil+"</option>");

			}
		});          
};

//PEGAR O SETOR PARA CADASTRAR A FUNÇÃO
function ReceberSetor() {

    setor = $('#recebe-setor option:selected').attr('id');
};   
//INSERE A FUNÇÃO NO BANCO DE DADOS
function CadastrarFuncao(){

    nomeFuncao = $('#nome_funcao').val();
    descricaoFuncao = $('#descricao_funcao').val();

    var parametros = {"nome_funcao": nomeFuncao,"descricao_funcao": descricaoFuncao, "setor":setor};

    $.ajax({
        type: "post",
        url: "db/salvar_funcao.php",
        data: {dados : parametros},
        dataType: 'application/json', 
        success: function( data )
        {
            alert('sucesso');
            console.log('sucesso'+ data);

        }
    });
    $('#cadastrar-funcao').slideUp(500);
};
//CADASTRAR SETOR E INSERIR NO BANCO
function CadastrarSetor(){

    nomeSetor = $('#nome_setor').val();

    var parametros = {"nome_setor": nomeSetor};

    $.ajax({
        type: "post",
        url: "db/salvar_setor.php",
        data: {dados : parametros},
        dataType: 'application/json', 
        success: function( data )
        {
            console.log('sucesso'+ data);

        }
    });
    $('#cadastrar-setor').slideUp(500);        
};
//PREENCHE O SETOR QUANDO CLICA NO CADASTRO DE FUNÇÃO
function PreencherSetor(){

    $.post( "db/consulta_setor.php", function( data ) {

        var dados = $.parseJSON(data);

        for (var i = 0; i < dados.length; i++) { 
            $('option').remove();
        }
            $('#recebe-setor').append("<option><span class='label label-default'>Selecione um setor</span></option>");

        for (var i = 0; i < dados.length; i++) {

            $('#recebe-setor').append("<option id="+dados[i].id_setor+">"+dados[i].nome_setor+"</option>");
        }
    });          
};
//RECEBE SETOR AO CLICAR EM CADASTRAR FUNCAO
function ReceberSetorDaFuncao(){

    $.get('db/consulta_setor.php', function (data) {

        var dados = $.parseJSON(data);

        $('#selecionar-setor').append("<option><span class='label label-default'>Selecione um setor</span></option>");

        for (var i = 1; i < dados.length; i++) {

            $('#selecionar-setor').append("<option id="+dados[i].id_setor+">"+dados[i].nome_setor+"</option>");
        }
    });
};
//CADASTRAR COLABORADOR
function CadastrarColaborador(){

    $.post('db/consulta_setor.php', function (data) {

    var dados = $.parseJSON(data);

    $('#selecionar-setor').append("<option><span class='label label-default'>Selecione um setor</span></option>");
    $('#selecionar-funcao').append("<option><span class='label label-default'>Selecione um setor primeriro</span></option>");
    $('#selecionar-perfil').append("<option><span class='label label-default'>Selecione um cargo prieiro</span></option>");

        for (var i = 0; i < dados.length; i++) {

            $('#selecionar-setor').append("<option id="+dados[i].id_setor+">"+dados[i].nome_setor+"</option>");
        }
    });
};
//CONSULTAR SETOR
function ConsultarSetor(){

    $(".tabelas").show();
    $.post('db/consulta_setor.php', function (data) {

        var obj = $.parseJSON(data + "");

        for (var i = 0; i < obj.length; i++) {

            $('tr').remove();
        }
        $('table#consulta-data').append("<tr ><th class='hidden'>Código </th><th> Setor</th></tr>");

        for (var i = 0; i < obj.length; i++) {

            $('table#consulta-data').append("<tr onclick='AlteraSetor(this)'><td id='" + obj[i].id_setor + "' class='hidden'> " + obj[i].id_setor + "</td><td id='nome_setor'>" + obj[i].nome_setor + "</td></tr>");
        }
    });
    $("#span-consulta").text('Setor');
    $("#tabela").show();
    // $("#fechar").show();
    $(".main").slideUp();
    $(".tela-media").slideUp();
};
//EFETUAR LOGIN NO SISTEMA
function Login(){

    var cpf = $('#login-cpf').val();
    var senha = $('#login-senha').val();
    var error = true;

    // $('#loading').html("<img src='img/loader.gif'").fadeIn('fast');

    if(cpf === '' || senha === ''){

        $('#login-failed').slideDown('slow');
        $('#login-form').slideUp('fast');
    }
    else if(cpf != '' && senha != ''){

        $.ajax({
            method: "POST",
            url: "db/login.php",
            dataType: "html",
            data: {"cpf": cpf, "senha": senha}
        })
        .done(function(data){

            if(data === 'Erro'){

                $('#login-failed').slideDown('slow');
                $('#login-form').slideUp('fast');

            }else{

            var perfil = 0;
            var obj = $.parseJSON(data + "");

            for (var i = 0; i < obj.length; i++) {

                var id = obj[i].id_colaborador;
                var userTemp = obj[i].nome_colaborador;
                var cpf = obj[i].cpf_colaborador;
                var user = userTemp.split(' ')[0];
                perfil = obj[i].perfil;

                localStorage.setItem('id',id);
                localStorage.setItem('usuario',user);
                localStorage.setItem('cpf',cpf);
                localStorage.setItem('perfil',perfil);
                logadoOk = true;
                window.location.assign('home.html');
            }
            $('#login').modal('hide');
            }

        })
        .fail(function(data) {

            if(data === 'Erro'){
                $('#login-failed').slideDown('slow');
                $('#login-form').slideUp('fast');
            }
            
        })  
    }
};
//PREENCHE O SELECT OPTION DO COLABORADOR CONFORME O SETOR SELECIONADO
//NA NOVA AVALIAÇÃO -> AUTO AVALIAÇÃO
function AutoAvaliacaoSelecionarSetor(){

    var setor = $('#auto-avaliacao-selecionar-setor option:selected').attr('id');
    
    var parametros = {"id_setor": setor};
         
    $.post( "db/envia_setor_recebe_colaborador.php",parametros, function( data ) {

        var dados = $.parseJSON(data);
        for (var i = 0; i < dados.length; i++) {

            $('#auto-avaliacao-colaborador option').remove();
        }

        $('#auto-avaliacao-colaborador').append("<option><span class='label label-default'>Selecionar colaborador</span></option>");

        for (var i = 0; i < dados.length; i++) {

            $('#auto-avaliacao-colaborador').append("<option id="+dados[i].id_colaborador+">"+dados[i].nome_colaborador+"</option>");
        
        }
        $('#auto-avaliacao-colaborador').append("<option id='todos-colaboradores'><span class='label label-default'>Todos os colaboradores do setor</span></option>");
    });          
};
function Avaliacao90SelecionarSetor(){

    var setor = $('#avaliacao-90-selecionar-setor option:selected').attr('id');
    
    var parametros = {"id_setor": setor};
         
    $.post( "db/envia_setor_recebe_colaborador.php",parametros, function( data ) {

        $('#avaliacao-90-gestor').prop('disabled',false);
        $('#avaliacao-90-colaborador').prop('disabled',false);
        var dados = $.parseJSON(data);
        for (var i = 0; i < dados.length; i++) {

            $('#avaliacao-90-gestor option').remove();
            $('#avaliacao-90-colaborador option').remove();
        }

        $('#avaliacao-90-gestor').append("<option><span class='label label-default'>Selecionar Avaliador</span></option>");
        $('#avaliacao-90-colaborador').append("<option><span class='label label-default'>Selecionar Avaliado</span></option>");
        for (var i = 0; i < dados.length; i++) {

            $('#avaliacao-90-gestor').append("<option id="+dados[i].id_colaborador+">"+dados[i].nome_colaborador+"</option>");
            $('#avaliacao-90-colaborador').append("<option id="+dados[i].id_colaborador+">"+dados[i].nome_colaborador+"</option>");
        
        }
        // $('#avaliacao-90-gestor').append("<option id='todos-colaboradores'><span class='label label-default'>Todos os colaboradores do setor</span></option>");
        $('#avaliacao-90-colaborador').append("<option id='todos-colaboradores'><span class='label label-default'>Todos os colaboradores do setor</span></option>");        
    });          
};

function Avaliacao180SelecionarSetor() {

    var setor = $('#avaliacao-180-selecionar-setor option:selected').attr('id');

    var parametros = { "id_setor": setor };

    $.post("db/envia_setor_recebe_colaborador.php", parametros, function (data) {

        $('#avaliacao-180-gestor').prop('disabled', false);
        $('#avaliacao-180-colaborador').prop('disabled', false);
        var dados = $.parseJSON(data);
        for (var i = 0; i < dados.length; i++) {

            $('#avaliacao-180-gestor option').remove();
            $('#avaliacao-180-colaborador option').remove();
        }

        $('#avaliacao-180-gestor').append("<option><span class='label label-default'>Selecionar Avaliador</span></option>");
        $('#avaliacao-180-colaborador').append("<option>Selecionar Avaliado</option>");
        for (var i = 0; i < dados.length; i++) {

            $('#avaliacao-180-gestor').append("<option id=" + dados[i].id_colaborador + ">" + dados[i].nome_colaborador + "</option>");
            $('#avaliacao-180-colaborador').append("<option id=" + dados[i].id_colaborador + ">" + dados[i].nome_colaborador + "</option>");

        }
        // $('#avaliacao-90-gestor').append("<option id='todos-colaboradores'><span class='label label-default'>Todos os colaboradores do setor</span></option>");
        //$('#avaliacao-180-colaborador').append("<option id='todos-colaboradores'>Todos os colaboradores do setor</option>");
    });
};
function Avaliacao360SelecionarSetor() {

    var setor = $('#avaliacao-360-selecionar-setor option:selected').attr('id');

    var parametros = { "id_setor": setor };

    $.post("db/envia_setor_recebe_colaborador.php", parametros, function (data) {

        $('#avaliacao-360-gestor').prop('disabled', false);
        $('#avaliacao-360-colaborador').prop('disabled', false);
        var dados = $.parseJSON(data);
        for (var i = 0; i < dados.length; i++) {

            //$('#avaliacao-360-gestor option').remove();
            $('#avaliacao-360-colaborador option').remove();
        }

        //$('#avaliacao-360-gestor').append("<option><span class='label label-default'>Selecionar Avaliador</span></option>");
        $('#avaliacao-360-colaborador').append("<option>Selecionar Avaliado</option>");
        for (var i = 0; i < dados.length; i++) {

            //$('#avaliacao-360-gestor').append("<option id=" + dados[i].id_colaborador + ">" + dados[i].nome_colaborador + "</option>");
            $('#avaliacao-360-colaborador').append("<option id=" + dados[i].id_colaborador + ">" + dados[i].nome_colaborador + "</option>");

        }
        $('#avaliacao-360-colaborador').append("<option id='todos-colaboradores'>Todos os colaboradores do setor</option>");
    });
};
//GERAR AUTO AVALIAÇÃO
function GerarAutoAvaliacao(){

    var tipoAvaliacao = '1';
    var setor = $('#auto-avaliacao-selecionar-setor option:selected').attr('id');
    var avaliador = $('#auto-avaliacao-colaborador option:selected').attr('id');
    var colaborador = $('#auto-avaliacao-colaborador option:selected').attr('id');    

    if(( setor !== undefined ) && (colaborador !== undefined)){
    
    var parametros = 
        {
            "tipo_avaliacao": tipoAvaliacao, 
            "setor": setor,
            "avaliador": avaliador,
            "colaborador": colaborador
        };

        $.ajax({
            method: "POST",
            url: "db/salvar_avaliacao_gerada.php",
            dataType: "html",
            data: {"dados": parametros}
        })
        .done(function(data){

            console.log(data);
            $('#nova-auto-avaliacao').modal('hide');

        })
        .fail(function(data) {

            if(data === 'Erro'){
                alert('Erro');
            }
            
        })

    $('#nova-auto-avaliacao').modal('hide');
    }else{
        alert('Preencha os campos');
    }  

};
function GerarAvaliacao90Graus(){

    var tipoAvaliacao = 2;
    var setor = $('#avaliacao-90-selecionar-setor option:selected').attr('id');
    var avaliador = $('#avaliacao-90-gestor option:selected').attr('id');
    var colaborador = $('#avaliacao-90-colaborador option:selected').attr('id');    

    if(( setor !== undefined ) && (colaborador !== undefined) && (avaliador !== undefined)){
    
    var parametros = 
        {
            "tipo_avaliacao": tipoAvaliacao, 
            "setor": setor,
            "avaliador": avaliador,
            "colaborador": colaborador
        };

        $.ajax({
            method: "POST",
            url: "db/salvar_avaliacao_gerada.php",
            dataType: "html",
            data: {"dados": parametros}
        })
        .done(function(data){

            console.log(data);
            $('#nova-avaliacao-90').modal('hide');

        })
        .fail(function(data) {

            if(data === 'Erro'){
                alert('Erro');
            }
        })      
    }else{
        alert('Preencha os campos');
    }     
};
function GerarAvaliacao180Graus() {

    var tipoAvaliacao = 3;
    var setor = $('#avaliacao-180-selecionar-setor option:selected').attr('id');
    var avaliador = $('#avaliacao-180-gestor option:selected').attr('id');
    var colaborador = $('#avaliacao-180-colaborador option:selected').attr('id');

    if ((setor !== undefined) && (colaborador !== undefined) && (avaliador !== undefined)) {

        if (colaborador === avaliador) {
            $('#error-180').modal('show');
            $('#error-180 p').replaceWith('<p><strong>Avaliador e avaliado </strong>não podem ser a mesma pessoa, para isso você deve gerar uma auto avaliação para esse colaborador.</p>');
            $('#nova-avaliacao-180').modal('hide');
        } else {
            var parametros =
                {
                    "tipo_avaliacao": tipoAvaliacao,
                    "setor": setor,
                    "avaliador": avaliador,
                    "colaborador": colaborador
                };

            $.ajax({
                method: "POST",
                url: "db/salvar_avaliacao_gerada.php",
                dataType: "html",
                data: { "dados": parametros }
            })
            .done(function (data) {

                console.log(data);
                $('#nova-avaliacao-180').modal('hide');

            })
            .fail(function (data) {

                if (data === 'Erro') {
                    alert('Erro');
                }
            })
        }
    } else {
        $('#error-180').modal('show');
        $('#error-180 p').replaceWith('<p><strong>Preencha todos os campos!</strong></p>');
    }
};
function GerarAvaliacao360Graus() {

    var tipoAvaliacao = 4;
    var setor = $('#avaliacao-360-selecionar-setor option:selected').attr('id');
    var colaborador = $('#avaliacao-360-colaborador option:selected').attr('id');

    if ((setor !== undefined) && (colaborador !== undefined)) {

        var parametros =
            {
                "tipo_avaliacao": tipoAvaliacao,
                "setor": setor,
                "colaborador": colaborador
            };

        $.ajax({
            method: "POST",
            url: "db/salvar_avaliacao_gerada.php",
            dataType: "html",
            data: { "dados": parametros }
        })
        .done(function (data) {

            alert("Avaliação inserida com sucesso!")
            console.log(data);
            $('#nova-avaliacao-360').modal('hide');

        })
        .fail(function (data) {

            if (data === 'Erro') {
                alert('Erro');
            }
        })
    }
};
//SALVAR AUTO AVALIACAO avaliado-auto-avaliacao
function SalvarAutoAvaliacaoRealizada(){

    var idPesoTotal = new Array();
    var pesoFinal = new Array();
    var pesoTotal = new Array();
    var criterios = new Array();

    var nomeAvaliacao = $('#tipo-avaliacao-realizada').val(); 
    var setorAvaliacao = $('#setor-avaliacao').val();
    var funcaoAvaliacao = $('#funcao-avaliacao').val();
    var avaliadoAvaliacao = $('#avaliado-auto-avaliacao').val();
    var avaliadorAvaliacao = $('#avaliador-auto-avaliacao').val();
    var idAvaliacaoGerada = $('#id-avaliacao-gerada').text();
    var idTipoAvaliacaoGerada = $('#id-tipo-avaliacao-gerada').text();
    var idPeso = "";
    var peso2 = "";
    pesoFinal = {
        'id': [],
        'peso': []
    };
 
    $('#criterios-avaliacao').find('td').each(function(){
        if($(this).attr('id')){
            idPeso = $(this).attr('id');
        }

        $(this).each(function(){

             var peso = $(this).find("input[type='radio']:checked").val();

             if(peso){
                peso2 = peso.replace("peso-","");
                var pesoFinal = {
                    'id': idPeso,
                    'peso': peso2
                };
                criterios.push(pesoFinal);
             }
        });
    });

        var parametros = 
        {
            "id_avaliacao_gerada":idAvaliacaoGerada,
            "tipo_avaliacao": nomeAvaliacao, 
            "setor": setorAvaliacao,
            "funcao": funcaoAvaliacao,
            "avaliado": avaliadoAvaliacao, 
            "avaliador": avaliadorAvaliacao,
            "grupo_criterios": criterios,
            "tipo_avaliacao": idTipoAvaliacaoGerada
        };
    $.ajax({
        method: "POST",
        url: "db/salvar_avaliacao_realizada.php",
        dataType: "html",
        data: {"dados": parametros}
        })
        .done(function(data){
            console.log('sucesso');
            console.log(data);
        })
        .fail(function(data) {

            if(data === 'Erro'){
                 console.log('erro');
                 console.log(data);
            }
        })

    $(".main").slideDown('slow');
    $('#realizar-auto-avaliacao').slideUp('slow'); 
    WindowRefresh();   
};
//SALVAR O COLABORADOR E INSERIR NO BANCO DE DADOS
function SalvarColaborador() {

    var nome = $('#cad-nome').val();
    var setor = $('#selecionar-setor option:selected').attr('id');
    var funcao = $('#selecionar-funcao option:selected').attr('id');
    var email = $('#cad-email').val();
    var cpf = $('#cad-cpf').val();
    var tel = $('#cad-tel').val();
    var senha = $('#cad-senha').val();
    var perfil = $('#selecionar-perfil option:selected').attr('id');
    
    var parametros = 
    {
        "nome_colaborador": nome, 
        "email_colaborador": email,
        "tel_colaborador": tel,
        "cpf": cpf,
        "senha_colaborador": senha,
        "funcao": funcao,
        "setor": setor,
        "perfil": perfil
    };
    
    $.ajax({
        method: "POST",
        url: "db/salvar_colaborador.php",
        dataType: "html",
        data: {"dados": parametros}
        })
        .done(function(data){

            alert(data);

        })
        .fail(function(data) {

            if(data === 'Erro'){
                alert('Erro');
            }
            
        })
};
//SALVAR CRITÉRIO
function SalvarCriterio(){

    var nome = $('#nome_criterio').val();
    var descricao = $('#desc_criterio').val();
    var tipoAvaliacao = new Array();

    $('.criterio_avaliacao').find('label').each(function(){

        if($(this).find("input[type='radio']:checked").val()){
            tipoAvaliacao.push($(this).find("input[type='radio']:checked").val());    
        }
    });

    if((nome) && (descricao) && (tipoAvaliacao.length > 0)){
        var parametros = {

        'nome_criterio': nome,
        'desc_criterio': descricao,
        'tipo_avaliacao': tipoAvaliacao
    };

    $.ajax({
        type: "post",
        url: "db/salvar_criterio.php",
        data: {dados : parametros},
        dataType: 'aplication/json', 
        success: function( data )
        {
            alert('sucesso');
            console.log('sucesso'+ data);
        }
    });
    }else{
        console.log('Campos Vazios');
    }

   $('#nome_criterio').val('');
   $('#desc_criterio').val('');
};
//SALVAR O PESO DOS CRITERIOS
function SalvaPeso(e){
    row = e.rowIndex;

    id = document.getElementById("criterios-avaliacao").rows[row].cells[0].innerHTML;
    
    var peso = $("input[name="+id+"]:checked").val();
};
//REALIZAR AUTO AVALIACAO
function RealizarAutoAvaliacao(){

    FecharJanelas();
    $('.tabelas').hide();
    $(".tela-media.content").hide();
    $("article.tela-media").hide();
    $(".main").slideUp();
    $('#realizar-auto-avaliacao').slideDown(500);

    var id = $('#id-logado').text();
    var idAvaliacao = $(this).data('id');
    var parametros = {

        'id_colaborador': id,
        'tipo_avaliacao_gerada': idAvaliacao
    };

    console.log(parametros);
    $.post( "db/realizar_avaliacao.php",parametros, function( data ) {

        var obj = $.parseJSON(data);

        for (var i = 0; i < obj.length; i++) {

            $('tr').remove();
        }

        if(obj.length > 0){

            for (var i = 0; i < obj.length; i++) {

            $('tr').remove();
        }

        $('table#criterios-avaliacao').append("<tr><th class='borda-tabela hidden'>Código</th><th class='borda-tabela'>Competência</th><th class='borda-tabela'>Descrição</th><th class='borda-tabela'><span>Mínimo</span><span class='pull-right'>Máximo</span></th></tr>");

            for (var i = 0; i < obj.length; i++) {

                $('#avaliado-auto-avaliacao').val(obj[i].avaliado);
                $('#avaliador-auto-avaliacao').val(obj[i].avaliador);
                $('#setor-avaliacao').val(obj[i].nome_setor);
                $('#tipo-avaliacao-realizada').val(obj[i].nome_tipo_avaliacao);
                $('#funcao-avaliacao').val(obj[i].nome_funcao);
                $('#id-avaliacao-gerada').text(obj[i].id_avaliacao_gerada); 
                $('#id-tipo-avaliacao-gerada').text(obj[i].id_tipo_avaliacao);

                $('table#criterios-avaliacao').append("<tr onclick='SalvaPeso(this)'><td id='" + obj[i].id_criterio + "' >" + obj[i].id_criterio + "</td><td> " + obj[i].nome_criterio + "</td><td>" + obj[i].desc_criterio + "</td><td class='borda-tabela'><label for='1' class='radio-inline'><input type='radio' value='peso-1' name='" + obj[i].id_criterio +"'>1</label><label for='2' class='radio-inline'><input type='radio' value='peso-2' name='" + obj[i].id_criterio +"'>2</label><label for='3' class='radio-inline'><input type='radio' value='peso-3' name='" + obj[i].id_criterio +"'>3</label><label for='4'class='radio-inline'><input type='radio' value='peso-4' name='" + obj[i].id_criterio +"'>4</label></td></tr>");

            }

        }else{

            $('#realizar-auto-avaliacao').css('display','none');
            alert('Não há avaliações.');
            FecharJanelas();
        }

    });  
    $('#tabelas').slideUp('slow');
};
//ALTERAR SETOR
function SalvarSetorAlterado(){

    var setor = $('#alt-nome-setor').val();
    var id = $('#alt-id-setor').val();
    var parametros = {"nome_setor": setor,"id_setor": id};

        $.ajax({
            type: "post",
            url: "db/alterar_setor.php",
            data: {dados : parametros},
            dataType: 'application/json',
            success: function( data )
            {
                alert('sucesso');
                console.log('sucesso'+ data);
            }
        }); 
    $(".main").slideDown('slow');   
    FecharJanelas();
};
function RecebeNovoSetor(){
   
    var setor = $('#recebe-novo-setor option:selected').attr('id');
    $('#id-setor').val(setor);
};
//ALTERAR CARGO
function SalvarCargoAlterado(){

    var cargo = $('#alt-nome-cargo').val();
    var id = $('#alt-id-cargo').val();
    var descricao = $('#alt-descricao-funcao').val();
    var setor = $('#id-setor').val();

    if(cargo && id && descricao && setor){

        var parametros = {"nome_funcao": cargo,"id_funcao": id, "descricao_funcao": descricao,"setor":setor};

        $.ajax({
            type: "post",
            url: "db/alterar_funcao.php",
            data: {dados : parametros},
            dataType: 'application/json',
            success: function( data )
            {
                alert('sucesso');
                console.log('sucesso'+ data);
            }
        }); 
    $(".main").slideDown('slow');
        FecharJanelas();
    }else{
        alert('Campos obrigatórios não preenchidos!');
        FecharJanelas();
        $(".main").slideDown('slow');
    }   
};
//ALTERAR SETOR
function AlteraSetor(x) {
    row = x.rowIndex;

    id = document.getElementById("consulta-data").rows[row].cells[0].innerHTML;
    setor = document.getElementById("consulta-data").rows[row].cells[1].innerHTML;
    $('#alt-nome-setor').val(setor);
    $('#alt-id-setor').val(id);

    //$(".alterar").slideDown();
    $('#alterar-setor').modal();
};
function AlterarCriterio(x) {
    row = x.rowIndex;

    var id = document.getElementById("consulta-data").rows[row].cells[0].innerHTML;
    var nome = document.getElementById("consulta-data").rows[row].cells[1].innerHTML;
    var descricao = document.getElementById("consulta-data").rows[row].cells[2].innerHTML;
    $('#alt-id-criterio').text(id);
    $('#alt-nome-criterio').val(nome);
    $('#alt-descricao-criterio').val(descricao);

    $('#alterar-criterio').modal();
};
//ALTERAR FUNCAO
function AlteraCargo(x) {
    row = x.rowIndex;

    id = document.getElementById("consulta-data").rows[row].cells[0].innerHTML;
    funcao = document.getElementById("consulta-data").rows[row].cells[1].innerHTML;
    descricao = document.getElementById("consulta-data").rows[row].cells[2].innerHTML;
    setor = document.getElementById("consulta-data").rows[row].cells[3].innerHTML;
    $("#setor-atual").attr("placeholder", setor);
    $("#funcao-atual").attr("placeholder", funcao);
    $("#alt-descricao-funcao").val(descricao);
    $('#alt-id-cargo').val(id);

    $.post('db/consulta_setor.php', function (data) {

        var dados = $.parseJSON(data);

        for (var i = 0; i < dados.length; i++) {

            $('#recebe-novo-setor option').remove();
        }

        for (var i = 0; i < dados.length; i++) {

            $('#alterar-funcao #recebe-novo-setor').append("<option id="+dados[i].id_setor+">"+dados[i].nome_setor+"</option>");
        }
    });

    $("#alterar-funcao").modal();
};
//ALTERAR COLABORADOR
function AlteraColaborador(x) {

    row = x.rowIndex;

    var id = document.getElementById("consulta-data").rows[row].cells[0].innerHTML;
    var cpf = document.getElementById("consulta-data").rows[row].cells[1].innerHTML;
    var nome = document.getElementById("consulta-data").rows[row].cells[2].innerHTML;
    var email = document.getElementById("consulta-data").rows[row].cells[3].innerHTML;
    var telefone = document.getElementById("consulta-data").rows[row].cells[4].innerHTML;
    var funcao = document.getElementById("consulta-data").rows[row].cells[5].innerHTML;
    var setor = document.getElementById("consulta-data").rows[row].cells[6].innerHTML;
    var perfil = document.getElementById("consulta-data").rows[row].cells[7].innerHTML;
    
    $("#alter-name").val(nome);
    $("#alter-email").val(email);
    $("#alter-tel").val(telefone);
    $("#alter-setor-atual").val(setor);
    $("#alter-funcao-atual").attr("placeholder", funcao);
    $("#alter-id-colaborador").attr("placeholder", id);
    $("#alter-cpf").val(cpf);

    if(perfil === "Administrador"){
        $('#adm').prop('checked', true);
    }else{
        $('#user').prop('checked', true);
    }

    $.get('db/consulta_setor.php', function (data) {

        var dados = $.parseJSON(data);

        $('#setor-colaborador').append("<option>Selecione um setor</option>");

        for (var i = 0; i < dados.length; i++) {

            $('#setor-colaborador').append("<option id="+dados[i].id_setor+">"+dados[i].nome_setor+"</option>");
        }
    });

    $("#alterar-usuario").modal();
};
//SALVAR CRITERIO ALTERADO
function SalvarCriterioAlterado(){

    var id = $('#alt-id-criterio').text();
    var nome = $('#alt-nome-criterio').val();
    var descricao = $('#alt-descricao-criterio').val();

    var parametros = {"id_criterio": id,"nome_criterio": nome, "desc_criterio": descricao};

    $.ajax({
        method: "POST",
        url: "db/alterar_criterio.php",
        dataType: "html",
        data: {"dados": parametros}
        })
        .done(function(data){

            alert(data);

        })
        .fail(function(data) {

            if(data === 'Erro'){
                alert('Erro');
            }
            
        })

    $(".main").slideDown('slow');
        FecharJanelas();  
};
//RECEBER O CARGO DO COLABORADOR
function ReceberCargo(){

    var setor = $('#setor-colaborador option:selected').attr('id');
    
    var parametros = {"id_setor": setor};

     $.post( "db/envia_setor_recebe_funcao.php",parametros, function( data ) {

        var dados = $.parseJSON(data);

        for (var i = 0; i < dados.length; i++) { $('#funcao-colaborador option').remove();}

        $('#funcao-colaborador').append("<option><span class='label label-default'>Selecionar o Cargo</span></option>");

        for (var i = 0; i < dados.length; i++) {

            $('#funcao-colaborador').append("<option id="+dados[i].id_funcao+">"+dados[i].nome_funcao+"</option>");
            
        }
    });          
};

function formatDate(date) {

    var Data = date;
    var novaData = new Date(Data);

    var dia = novaData.getDate();

    if(novaData.getMonth()+1 < 10){
        var mes = '0'+(novaData.getMonth()+1);
    }else{
        var mes = novaData.getMonth()+1;
    }

    var ano = novaData.getFullYear();
    var hora = novaData.getHours();
    var minutos = novaData.getMinutes();

    if(dia < 10){
        var fullDate = 0+dia+'/'+mes+'/'+ano;
    }else{
        var fullDate = dia+'/'+mes+'/'+ano;
    }
    
  return fullDate;
};

function DateUSA(date) {

    var Data = date;
    var novaData = new Date(Data);

    var dia = novaData.getDate();

    if(novaData.getMonth()+1 < 10){
        var mes = '0'+(novaData.getMonth()+1);
    }else{
        var mes = novaData.getMonth()+1;
    }

    var ano = novaData.getFullYear();
    var hora = novaData.getHours();
    var minutos = novaData.getMinutes();

    var fullDate = ano+'-'+mes+'-'+dia;
  return fullDate;
};
// function MostrarMenu(){

//     $('.dropdown').each(function(){
//         $(this).removeClass('active');
//     });
//     $(this).addClass('active');
// };

