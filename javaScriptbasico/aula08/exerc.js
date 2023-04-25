/*
Néu Almeida tem 34 anos, pesa 90 kg
tem 1.6 de altura e seu IMC é de 25.9259
Néu Almeida nasceu em 1988.
*/

const nome = 'Néu';
const sobrenome = 'Almeida';
const idade= 35;
const peso = 90;
const altura = 1.65;
const anoAtual = 2023;

let imc = peso / (altura * altura);
let anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);