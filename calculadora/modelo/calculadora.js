function meuEscopo () {
    const num1 = document.querySelector('.numero1');
    const num2 = document.querySelector('.numero2');
    const resultado = document.querySelector('.resultados')

    function soma(num1, num2) {
        return num1 + num2;
    };

    function result(evento) {
        evento.preventDefault();
        return soma(num1.value, num2.value);
    }

    resultado.innerHTML += `<p>O resultado da soma é ${result()}</p>`

    resultado.addEventListener('submit', result);
}

meuEscopo();