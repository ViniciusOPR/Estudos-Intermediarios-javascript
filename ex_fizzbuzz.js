/*
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz.
Número é divisível por 5 = Buzz.
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número = Retorna o valor
Use a função com números de 0 a 100
*/

function jogoFizzBuzz(numero){
    const valor = Number(numero);

    if (typeof valor !== 'number') return NaN;

    if(valor % 3 === 0 && valor % 5 === 0){
        return `${valor} é divisível por 3 e 5 = FizzBuzz`;
    }
    if(valor % 3 === 0){
        return `${valor} é divisível por 3 = Fizz`;
    }
    if(valor % 5 === 0){
        return `${valor} é divisível por 5 = Buzz`;
    }
    return valor;

}

for (let i = 0; i <= 100; i++) {
    console.log(i, jogoFizzBuzz(i));
}