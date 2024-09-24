function zeroAEsquerda (num) {
    return num >= 10 ? num: `0${num}`;
}

const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const diasDaSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
];

function setDataAtual(data){
    data = new Date();
    const dia_semana = (diasDaSemana[data.getDay()]);
    const dia = zeroAEsquerda(data.getDate());
    const mes = (meses[data.getMonth()]);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    const data_atual = document.querySelector('.dataatual');
    data_atual.innerHTML = `${dia_semana}, ${dia} de ${mes} de ${ano}, ${hora}:${min}`;

}
setDataAtual();

// Segunda forma de fazer

// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiaSemanaTexto(diaSemana) {
//   const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 
//     'sexta', 'sábado'];
//   return diasSemana[diaSemana];
// }

// function getNomeMes(numeroMes) {
//   const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho', 
//     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//   return meses[numeroMes];
// }

// function zeroAEsquerda (num) {
//   return num >= 10 ? num : `0${num}`;
// }

// function criaData(data) {
//   const diaSemana = data.getDay();
//   const numeroMes = data.getMonth();

//   const nomeDia = getDiaSemanaTexto(diaSemana);
//   const nomeMes = getNomeMes(numeroMes);

//   return (
//     `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
//     ` de ${data.getFullYear()} ` + 
//     `${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
//   );
// }

// h1.innerHTML = criaData(data);

/* Terceira forma de fazer

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

*/

// Uma quarta forma de fazer esse exércicio seria utilizando switch/case. Porém o código ficaria muito longo.

// A forma mais eficiente seria a terceira.