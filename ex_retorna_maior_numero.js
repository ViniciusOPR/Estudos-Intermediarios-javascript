// Escreva uma função que recebe 2 números e retorne o maior deles

function retornaMaior(n1, n2){

    const numero1 = Number(n1);
    const numero2 = Number(n2);

   
    if (numero1 > numero2){
        return `O maior número é ${numero1}`;
    } else { // Pode-se retirar o Else.
        return `O maior número é ${numero2}`;
    }

}

const resultado = retornaMaior(1, 2);
console.log(resultado);

/*
Outra forma de fazer
*/

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 5));


