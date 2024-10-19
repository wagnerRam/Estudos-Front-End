// * FUNÇÕES DE ALTA ORDEM DE ARRAYS
// ! SÓ FUNCIONA COM ARRAYS

// 1. Array.prototype.forEach()

const numeros = [40, 34, 67, 89, 23, 10];

function imprimirElemento(elemento) {
  console.log(elemento);
}

numeros.forEach(imprimirElemento);

console.clear();

// Mesma função anterior, otimizada com arrow function

numeros.forEach((elemento) => {
  console.log(elemento);
});
console.clear();

// 2. Array.prototype.find(): Util para encontrar um elemento dentro do array

const encontrado = numeros.find((numero) => {
  return numero > 30;
});
console.log(encontrado);
console.clear();

// Array de objetos

const pessoas = [
  {
    nome: "Pessoa 1",
    idade: 28,
    altura: 1.7,
  },
  {
    nome: "Pessoa 2",
    idade: 19,
    altura: 1.5,
  },
  {
    nome: "Pessoa 3",
    idade: 39,
    altura: 1.4,
  },
  {
    nome: "Pessoa 4",
    idade: 46,
    altura: 180,
  },
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 40);
console.log(pessoaEncontrada);
console.clear();

const indeceDaPessoaEncotrada = pessoas.findIndex(
  (pessoa) => pessoa.idade < 50 && pessoa.altura < 1.5
);

console.log(indeceDaPessoaEncotrada);
