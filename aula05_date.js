// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix.
// const data = new Date(2019, 3); // a, m, d, h, M, s, ms.

const data = new Date (1726762595402);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero.
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Sec', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); // 0-Domingo, 6-Sábado
console.log(data.toString());
// console.log(Date.now());

console.log('-----------');

// Formatando datas

function zeroAEsquerda (num) {
    return num >= 10 ? num: `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const sec = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data2 = new Date();
const dataBrasil = formataData(data2);
console.log(dataBrasil);