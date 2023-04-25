const pessoa1 = {
    nome: 'Néu',
    sobrenome: 'Almeida',
    idade: 35,

    fala() {
        console.log('ola')
    }

};

pessoa1.fala();


/*
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Néu', 'Almeida', 35);
const pessoa2 = criaPessoa('Manu', 'Rosa', 8);
const pessoa3 = criaPessoa('Yasmim', 'Barbosa', 16);
const pessoa4 = criaPessoa('Marcia', 'ramos', 30);

console.log(pessoa1.nome, pessoa3.sobrenome);
*/