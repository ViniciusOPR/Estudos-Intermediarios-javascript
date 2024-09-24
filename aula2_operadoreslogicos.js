/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && false && true;
const expressaoOr = true || true || false || true;
console.log(expressaoAnd, expressaoOr);

console.log('--------------');

const usuario = 'Vinicius'; // form usuário digitou
const senha = '123456'; // form usuário digitou

const vaiLogar = usuario === 'Vinicius' && senha === '123';
console.log(vaiLogar);
console.log('--------------');

//NOT
console.log(true, false);
console.log(!false, !true);
console.log('--------------');

// Avaliação de Curto Circuito
/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"

FALSY Values - false, 0, "", '', ``, null / undefined, NaN
*/
console.log('Luiz' && undefined && 'Maria');

function falaOi(){
    return 'Oi';
}

let vaiExecutar = false;
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'ViniciusOP' || true);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e);