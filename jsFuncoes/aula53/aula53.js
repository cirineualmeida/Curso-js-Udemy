function retornaFuncao() {
    const nome = 'Néu';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);