/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade(valores)
=== igualdade estrita (valor e tipo)
!= diferente (valores)
!== diferente estrito (valor e tipo)
*/

console.log(10 > 5);
console.log(10 >= 11);
console.log(10 < 5);
console.log(10 <= 11);
console.log('-----------------------');
const num1 = 10; // Number
const num2 = '10'; // String

const comp_igualdade = num1 == num2;
const comp_igualdade_estrita = num1 === num2;
const comp_diferente = num1 != num2;
const comp_diferente_estrito = num1 !== num2;

console.log(comp_igualdade);
console.log(comp_igualdade_estrita);
console.log(comp_diferente);
console.log(comp_diferente_estrito);