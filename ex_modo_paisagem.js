/*
Escreva uma função chamada ePaisagem que recebe dois argumentos (largura e altura) de uma imagem (number).
Retorne TRUE se a imagem estiver no MODO PAISAGEM.
*/

const ePaisagem = (largura, altura) => largura === Number(1920) && altura === Number(1080) ? true: 'Modo Retrato';
console.log(ePaisagem(1920, 108));

/*
Outra forma de fazer
const ePaisagem = (largura, altura) => 
  largura > altura;

console.log(ePaisagem(1080, 1920));
*/