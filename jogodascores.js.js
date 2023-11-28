/*const prompt = require('prompt-sync')({sigint: true})*/



console.log('Bem vindo ao Jogo das Cores de Mebous e Luisinho! Tente acertar as quatro cores codificadas: ')

var cores = ['vermelho', 'amarelo', 'verde', 'azul', 'laranja', 'roxo', 'violeta', 'rosa'];



function gerarCores() {

var código = [];

while (código.length < 4) {

var cor = cores[Math.floor(Math.random() * cores.length)];

if (! código.includes(cor)) {

código.push(cor);

}}



return código;



}



function obterOpiniao() {

  

var opiniao = [];

for (var i = 0; i < 4; i++) {

var cor = prompt('Digite uma cor (vermelho, amarelo, verde, azul, laranja, roxo, violeta ou rosa):');

opiniao.push(cor);

}



return opiniao;



} 



function compararOpiniao(código, opiniao) {

var resposta = [];

var códigoRestante = [];

var opiniaoRestante = [];



for (var i = 0; i < código.length; i++) {

if (código[i] === opiniao[i]) {

resposta.push('P');

} else {

códigoRestante.push(código[i]);     opiniaoRestante.push(opiniao[i]);

}

}



for (var i = 0; i < opiniaoRestante.length; i++) {

var cor = opiniaoRestante[i];

var index = códigoRestante.indexOf(cor);

if (index !== -1) {

resposta.push('B');

códigoRestante.splice(index, 1);

} else {

resposta.push('C');

}

}



return resposta;



}



function exibirResposta(resposta) {

console.log('Resposta: ' + resposta.join(' '));

}

var rodadas = 0

function jogar() {

var código = gerarCores();

var tentativas = [];

var melhorResposta = null;

var jogando = true;

while(jogando){
for (var i = 0; i < 10; i++, rodadas++) {


var opiniao = obterOpiniao();

tentativas.push(opiniao)

var resposta = compararOpiniao(código, opiniao);

exibirResposta(resposta);

var parar = prompt("Deseja parar ou continuar jogando? 1 - parar; 2 - continuar.");



if (parar == 1){

jogando = false;



break;



}else{

if (resposta.every(function(valor) {return valor === 'P'; })) {

console.log('Parabéns, você acertou o código!');



return;



}else if (melhorResposta === null || resposta.filter(function(valor) { return valor === 'P'; }).length > melhorResposta.filter(function(valor) { return valor === 'P'; }).length) {



melhorResposta = resposta;


}

}

}

console.log("Resumo das tentativas: ");

for (var i=0; i < rodadas; i++) {

console.log(tentativas[i].join(' '));


}


console.log('Você não acertou o código. O código era ' + código.join(' '));

console.log('Melhor resposta: ' + melhorResposta.join(' '));
var De_novo = prompt("Você quer jogar de novo? ")
if (De_novo == "sim") {
tentativas = []
}
else {
jogando = false
}


}
}



  

jogar()

console.log("O número de rodadas foi: " + rodadas);

