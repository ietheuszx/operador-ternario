/*
Questão 13: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é elegível para a aposentadoria. A variável idade 
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou 
'feminino'). Atribua o resultado à variável elegivel. 
*/

let idade = 60;
let feminino;
let condissao = (idade >= 62 && feminino) ? "apto à aposentadoria" : (idade >= 65 && masculino) ? "apto à aposentadoria" : "Vai trbaia irmao"
console.log(condissao)