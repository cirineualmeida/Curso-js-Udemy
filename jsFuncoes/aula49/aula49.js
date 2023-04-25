
//declaração classica
function falaOi() {
    console.log('Oie');
}

falaOi();

//função expression
const souUmDado = function() {
    console.log('sou um dado');
};


function executaFuncao(funcao) {
    console.log('Executando sua função');
    funcao();
};
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
    console.log('sou uma função Arrow.');
};

funcaoArrow();

//Dentro de um objeto
const obj = {
    falar() {
        console.log('estou falando...');
    }
};
obj.falar();