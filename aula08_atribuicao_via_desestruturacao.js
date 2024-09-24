//Atribuição via desestruturação [Arrays]
//...rest, ...spread

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

//Atribuição via desestruturação [Objects]
const pessoa = {
    nome: 'Jonhny',
    sobrenome: 'Walker',
    idade: 40,
    endereco: {rua: 'Av Japão', numero_residencia: 121}
}

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto);