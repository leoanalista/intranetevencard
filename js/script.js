
loadItens();


//Função para adicionar os itens do Array
function loadItens(){

document.getElementById('EvenCard_btnAdicionarAdm').onclick = function(){
  

}

//Função ao clicar no botão
document.getElementById('EvenCard_btnCalcular').onclick = function(){
	
	calcular();
}


document.getElementById('EvenCard_btnCancelarCalculo').onclick = function(){

	location.reload();
}

}


function removerCodigoAdm(obj) {
    var emconid = $(obj).data("emconid");
    if (emconid == 0) {
        $(obj).closest('tr').fadeOut(400, function () {
            $(obj).closest('tr').remove();
            calcular();
        });
    } else {
        $(obj).closest('tr').addClass("EvenCard_trRemoved");
        $(obj).attr("disabled", "disabled");
        $(obj).attr("data-remove", true);
    }

}



function calcular() {


	var tabela = document.getElementById('EvenCard_dtCodigoAdministradora');
	var Tlinhas = tabela.getElementsByTagName('tr');
	var linhas = Tlinhas.length - 1;
	var transacao = Number(document.getElementById("quantidade-transacao").value);
	var periodo = Number(document.getElementById("get-periodo").value);
	var adm = Number(document.getElementById("get-periodo").value);
	var empresas = Number(document.getElementById("quantidade-empresa").value);
	var resultado = document.getElementById("resultado");
	var transacaoPorADM = transacao / linhas;
	var totalADM = 0;
	var soma = 0;
	var acrescimo = 0;
	

	if (empresas > 1 && empresas <= 4){
		empresas = 1.25
	} 
	else if (empresas > 4) {
		empresas = 1.5
	}


	if (linhas > 1 && linhas <= 4){
		
		acrescimo = 0.085 * linhas 
	} 
	else if (linhas > 4) {
		acrescimo = 0.4
	}


	$('#EvenCard_dtCodigoAdministradora > tbody  > tr').each(function(i) {


		var dificuldade = ($( $(this)[0].cells[1]).data('percenntdificult'));
		var custo = ($( $(this)[0].cells[1]).data('custo'));
		var periodo2 = ($( $(this)[0].cells[2]).data('periodo'));

		totalADM  =  transacaoPorADM * periodo2 * custo * empresas ;
		soma += totalADM;

		if (acrescimo != 0) {
			ValorFinal = (soma * acrescimo) + soma; 
		} else{

			ValorFinal =  soma; 
		}
		

	});

	if (ValorFinal < 149) {

		ValorFinal = 150; 
		resultado.innerText = ValorFinal.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
	}
	else{	
		resultado.innerText = ValorFinal.toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});

	}
	
}



