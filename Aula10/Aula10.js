// WINDOW.ONLOAD executa o código quando a janela for carregada

window.onload = function(){
	var zebrar = document.querySelectorAll('.zebra tbody tr');
	for (var i = 0; i < zebrar.length; i+=2){
		zebrar[i].className = 'zebrada';
	}
}

// Guarda o endereço que está no navegador
console.log(window.location.href);

// LOCALSTORAGE e SESSIONSTORAGE
// localStogare armazena um dado localmente de forma permanente, caso a pessoa não limpe os dados do navegador
// sessionStorage só armazena enquanto o navegador estiver aberto

// window.localStorage.setItem('chave', 'valor')
// setItem guarda algo no computador do usuário
window.localStorage.setItem('nome1', 'Rodrigo');
document.getElementById('msg1').innerHTML = window.localStorage.getItem('nome1');

window.sessionStorage.setItem('nome2', 'Cristina');
document.getElementById('msg2').innerHTML = window.sessionStorage.getItem('nome2');

// window.open serve para você abrir uma janela
// window.open('URL', 'Nome da janela', 'parâmentros adicionais')
// Esta função já não é tão utilizada porque os navegadores bloqueiam esses popup's.
var janela = window.open('', '', 'width=500, height=300');
janela.document.write('Texto para a minha janela popup.');
janela.opener.document.write('Texto para a minha janela principal.'); // "opener" manipula a janela princial.

// setTimeout define uma função que vai ser executada uma única vez depois de um certo período de tempo
var msg = setTimeout(msgtimeoutconsole, 5000);
function msgtimeoutconsole(){
	console.log('Mensagem via timeout');
}


//var msgObrigado = setTimeout(msgtimeout, 5000);
var intervalo = setInterval(verificaFoco, 1000);
var counter = 0;
function verificaFoco(){
	if(document.hasFocus()){
		counter++;
		console.log(counter);
		if(counter >= 10){
			msgtimeout();
			clearInterval(intervalo);
		}
	}
}
function msgtimeout(){
	document.getElementById('msg3').innerHTML = 'Obrigado por visitar a minha página.'
}

// setInterval define uma função que vai ser executada várias vezes durante um espaço de tempo.
// setInterval(msginterval, 1000);
// function msginterval(){
//  	console.log('Mensagem via interval');
// }

