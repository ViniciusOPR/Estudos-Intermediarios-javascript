//For clássico - Geralmente com iteráveis (array ou strings)
for (let i = 0; i <=5; i++){
    console.log(i);
}

console.log('---------------------');

for (let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par': 'impar';
    console.log(i, par);
}
console.log('---------------------');

const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let i = 0; i < frutas.length; i++){
    console.log(`Indice ${i}`, frutas[i]);
}
console.log('---------------------');

//FOR - IN. Lê os indices ou chaves do objeto (string, array ou objetos)
const legumes = ['cenoura', 'alface', 'cebola'];

for(let i in legumes){
    console.log(legumes[i])
}
console.log('---------------------');

const pessoa ={
    nome: 'Oliver',
    sobrenome: 'Queen',
    idade: 35
}

for(let keys in pessoa){
    console.log(keys);
    console.log(keys, pessoa[keys])
}
console.log('---------------------');
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
const nomes = ['Vinicius', 'Iago', 'Carlos'];
for(let valor of nomes){
    console.log(valor);
}
console.log('---------------------');
nomes.forEach(function(el){
     console.log(el)
});