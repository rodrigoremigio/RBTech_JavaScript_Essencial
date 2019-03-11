// 4 formas de criar datas:
   var d = new Date(); // Mais utilizado
// var d = new Date(milisegundos);
// var d = new Date(string);
// var d = new Date(ano, mês, dia, hora, minuto, milisegundos);

// Exibição em formatos diferentes:
console.log(d);
console.log(d.toUTCString());
console.log(d.toDateString());

console.log('--------------------------');

console.log('getDate: ' + d.getDate());                 // Dia do mês
console.log('getDay: ' + d.getDay());                   // Dia da semana de 0 a 6. Dom:0, Seg:1, Ter:2 ...
console.log('getFullYear: ' + d.getFullYear());         // O ano
console.log('getHours: ' + d.getHours());               // A hora
console.log('getMilliseconds: ' + d.getMilliseconds()); // Os milisegundos na hora que a página é carregada.
console.log('getMinutes: ' + d.getMinutes());           // Os minutos
console.log('getMonth: ' + d.getMonth());               // O mês. De 0 a 11. Jan:0, Fev:1 ...
console.log('getSeconds: ' + d.getSeconds());           // Os segundos
console.log('getTime: ' + d.getTime());                 // Pega a quantidade de milisegundos a partir de 01/01/1970.
console.log('--------------------------');
// Se em vez de usar o GET usar o SET (setDate, por exemplo), redefinir a data.
// d.setDate(25);
// console.log(d);

//Função para formatação de DATA

function formatDate(data = new Date()){
	var dia = data.getDate();
	var mes = data.getMonth()+1;
	var ano = data.getFullYear();
	
	if(dia.toString().length == 1) dia = '0'+dia;
	if(mes.toString().length == 1) mes = '0'+mes;

	return dia+'/'+mes+'/'+ano;
}

console.log(formatDate());
