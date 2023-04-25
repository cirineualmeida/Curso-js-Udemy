function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function(assunto) {
            return `${nome} esta ${assunto}.`
        }
    };
}

const p1 = criaPessoa('Néu', 'Almeida');
console.log(p1.fala('estudando Js'));