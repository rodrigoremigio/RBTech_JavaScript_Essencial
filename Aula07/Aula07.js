// ESTRUTURAS DE CONTROLE E REPETIÇÃO

// if (condicao){
//  	blobo de codigo a ser executado
// } else {
// 		
// }


var num = 5;
if (num > 5){
	console.log('Primeira condição verdadeira.');
} else if (num == 5){
	console.log('Segunda condição verdadeira.');
} else {
	console.log('Condição falsa.');
}

/*
	==  (igual a. Somente o valor é analizado)
	=== (igual a. Valor e tipo são analizados)
	!=  (diferente de. Somente o valor é analizado)
	!== (diferente de. Valor e tipo são analizados)
	>   (Maior que)
	>   (Menor que)
	>=  (Maior ou igual que)
	<=  (Menor ou igual que)
	
	Lógicos
	&&  (condição1 E condição2)
	||  (condição 1 OU condição2)
	!   (Negação)
*/

console.log('---------------------');

// Operador ternário "?"

var idade1 = 16;
var situacao1 = (idade1 >= 18) ? 'Maioridade': 'Menor';
console.log(situacao1);

var idade2 = 21;
var situacao2 = (idade2 >= 18) ? 'Maioridade': 'Menor';
console.log(situacao2);

console.log('---------------------');

// Switch

// switch (){
// 		case condicao1:
//			codigo
// 			break;
// 		default:
// 			codigo
// }

var diaSemana = new Date().getDay();
switch (diaSemana){
	case 6:
		console.log('Hoje é sábado! Vamos sair!');
		break;
	case 0:
		console.log('Hoje é domingo! Vamos relaxar!');
		break;
	default:
		console.log('Dia normal: trabalho e estudo!');
}

console.log('---------------------');

// For

var linguagens = ['PHP', 'JAVA', 'C++', 'ASP', 'DELPHI'];
for(i = 0; i < linguagens.length; i++){
	// if (i == 2) continue; Não exibiria o C++.
	// if (i == 2) break; Para o loop e só exibe até Java.
	console.log('Linguagem ' + [i] + ': ' + linguagens[i]);
}

console.log('---------------------');

// While

var contador = 5;
var codigos = ['PHP', 'JAVA', 'C++', 'ASP', 'DELPHI'];
while(contador < 7){
	console.log(codigos[contador]);
	contador++;
}