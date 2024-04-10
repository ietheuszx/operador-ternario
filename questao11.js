/*
Questão 11: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A 
variável idade contém a idade da pessoa. Atribua o resultado à variável 
categoria.
*/

let idade = 45;
let condissao = (idade < 2) ? "Bb" : (idade > 2 && idade < 12) ? "Crianssa" : 
(idade > 12 && idade < 18) ? "Aborrescente" : (idade >= 18 && idade < 60) ? "Adult Swim" : 
"Veio";
console.log(condissao)