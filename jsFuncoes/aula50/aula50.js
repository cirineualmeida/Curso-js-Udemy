
//arguments sustenta todos os valores enviados...

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(8, 5, 4, 3, 9, 7);

console.log('###########')

function soma(a, b = 2, c = 4) {
    console.log(a + b + c);
}

soma(2, 10);


function conta(operador, acumulador, ...numeros) {
   for (let numero of numeros ) {
    if (operador === '+')acumulador += numero;
    if (operador === '-')acumulador -= numero;
    if (operador === '/')acumulador /= numero;
    if (operador === '*')acumulador *= numero;
   }

   console.log(acumulador);
}
conta('*', 1, 5, 8);