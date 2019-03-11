// Tratamento de Exceções

function verifica(){
	var x = document.getElementById('numero').value;
	try{
		if(x == '') throw 'Iniforme um valor'; // Throw cria um "erro" personalizado
		if(isNaN(x)) throw 'Você precisa informar um número!';
		x = Number(x);
		if(x < 10 || x > 20) throw 'Informe um número entre 10 e 20!';
		document.getElementById('msg').innerHTML = 'Perfeito! Você digitou ' + x +'.';
	} catch(erro){
		document.getElementById('msg').innerHTML = 'Erro: ' + erro;
	} finally{
		document.getElementById('numero').value = '';
	}
}

console.log('---------------------');
