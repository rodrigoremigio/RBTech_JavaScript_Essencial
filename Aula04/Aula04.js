// var nome = "Ridrigo";
// var sobrenome = "Remígio";
// var idade = 28;

// ARRAY
// var pessoa = ['Ridrigo', 'Remígio', '28'];
var frutas = ['laranja', 'maçã', 'pêra'];
console.log(frutas[1]);
// Nesse caso específico não é interessante o array. A MELHOR SOLUÇÃO É CRIAR UM OBJETO.

// OBJETO
var pessoa = {
	nome:'Rodrigo',
	sobrenome:'Remígio',
	idade:28,
	andar: function(){
		alert('Caminhando');
	}
};

frutas.push('limão'); // Adicionando mais um ítem no final do array.
console.log(frutas);

console.log(frutas.length); // Tamanho do Array

console.log(frutas.toString()); //Array como um texto (string)

console.log(frutas.join(' - ')); // Junta os elementos do Array separados por um hífen. 

frutas.pop(); // Remove o último ítem do array.
console.log(frutas);

frutas.shift(); // Remove o primeiro ítem do array.
console.log(frutas);

frutas.unshift('limão'); // Adiciona um ítem no início do array.
frutas.push('laranja');
console.log(frutas);

frutas.reverse(); // Inverte a ordem do array.
console.log(frutas);

frutas.sort(); // Coloca em ordem alfabética.
console.log(frutas);
