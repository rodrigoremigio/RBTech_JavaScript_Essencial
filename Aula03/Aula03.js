
/*
	Uma função nada mais é que um bloco de código que executa uma determinada tarefa.
	Uma função só é executada mediante uma chamada específica a ela.
*/

function alerta(mensagem){
	alert(mensagem);
}
function dividir(num, por = 2){
	return num / por;
}

alerta('O resultado da divisão é: ' + dividir(15, 3)); // Invocação ou chamada da função.
