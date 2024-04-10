/*
Questão 12: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa pode votar. A variável idade contém a idade da 
pessoa. Atribua o resultado à variável podeVotar.
*/

let idade = 15;
let condissao = (idade >= 16) ? "pode votar, mas não é obrigatório" : (idade >= 18) ? "se vai votar irmao" : "nem preocupa"
console.log(condissao)