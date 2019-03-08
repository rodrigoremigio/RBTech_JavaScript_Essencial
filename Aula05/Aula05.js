// var txt = 'Pegou fogo na caixa d\'água'; // Caracteres especiais devem ser precedidos de barra invertida.
var txt = 'Para aprender JavaScript pesquise no Google';

console.log(txt.length);
console.log(txt.indexOf('aprender')); // Mostra a posição onde começa a palavra aprender.
// Se tiverem duas palavras iguais e você quiser saber a última, use "lastIndexOf"

console.log(txt.slice(0, 4));
// Slice mostra parte do conteúdo. De 0 a 4 significa que será exibida as letras na posição de 0 a 3: "0P 1a 2r 3a"

console.log(txt.substr(5, 8));
// O primeiro número é a posição inicial, o segundo representa a quantidade de caracteres que será buscada.

console.log(txt.replace('Google', 'RBTech'));
// Subistitui Google por RBTech

console.log(txt.toUpperCase()); // Tudo maiúsculo.

console.log(txt.toLowerCase()); // Tudo minúsculo.

var numero = 9.658;

console.log(numero.toFixed(2));
// O toFixed arredonda o número. Neste caso, com duas casas decimais.
// O toFixed(1)... uma casa decimal.

console.log(numero.toPrecision(2));
// O toPrecision(2)... Traz dois dígitos e não duas casas decimais.