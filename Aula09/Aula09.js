// 3 formas de buscar elementos do DOM para trabalhar com eles.

// document.getElementById('demo').innerHTML = 'Texto do meu parágrafo.';
// document.getElementsByTagName('p');
// document.getElementsByClassName('exemplo');

var x = document.getElementsByClassName('exemplo');
x[0].innerHTML = "Texto 0"
x[1].innerHTML = "Texto 1"
x[2].innerHTML = "Texto 2"

var y = document.querySelectorAll('p.exemplo');
console.log(y);

/*
document.baseURI / document.body / document.doctype / document.documentURI / document.domain / document.head
document.inputEncoding / document.lastModified / document.title / document.URI / document.forms / document.links
document.images / document.scripts
*/

// Escreve no documento HTML
document.write('Isso é um teste');

// Mundando o atributo. Troca o SRC de imagem.jpg para foto.jpg.
document.getElementById('imagem').src = 'foto.jpg';

// Alterando propriedades do CSS
document.getElementById('demo').style.color = "red";

// Evento ONCLICK

function change(){
	document.getElementById('textchange').innerHTML = 'Obrigado!';
}
document.getElementById('textchange').onclick = change;

// Evento ONCHANGE
function functionchange(){
	alert('Opção alterada!');
}
document.getElementById('mudanca').onclick = functionchange;

// onmouseover e onmouseout
function funcao1(elemento){
	elemento.innerHTML = 'Ok, mouse sobre o elemento';
}
function funcao2(elemento){
	elemento.innerHTML = 'Passe o mouse aqui';
}

/*
onclick / onload / onchange / onmouseover / onmouseout
onfocus / onmousedown / onmouseup
*/
