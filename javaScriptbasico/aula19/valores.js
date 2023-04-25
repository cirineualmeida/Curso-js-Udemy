/*
let nome = 'Cirineu';
console.log(nome[4]);
*/

/*
let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);
*/

const a = {
    nome: 'Néu',
    sobrenome:'Almeida'
};
const b = {...a};

a.nome = 'Carlos';
console.log(a);
console.log(b);