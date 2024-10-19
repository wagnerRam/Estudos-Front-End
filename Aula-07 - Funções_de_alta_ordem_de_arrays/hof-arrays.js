// * Array.prototype.every(): Verificar se todos os elementos de array seguem uma determinada
// *                         condicao retornada pela funcao

const numeros = [40, 34, 67, 89, 23, 10];

const todosPositivos = numeros.every((elemento) => elemento > 0);

console.log(todosPositivos);
console.clear();

// ARRAYS DE OBJETOS

const pessoas = [
  {
    nome: "Wagner",
    idade: 28,
  },
  {
    nome: "Thiago",
    idade: 26,
  },
  {
    nome: "Sara",
    idade: 24,
  },
  {
    nome: "Simba",
    idade: 10,
  },
];

const todosMaiorDeIdade = pessoas.every((pessoas) => pessoas.idade > 18);
console.log(todosMaiorDeIdade);

console.clear();

// * Array.prototype.some(): Veriifica se algum elemento do array torna verdadeira uma determinada
// *                         condição.

const numeros2 = [-1, 3, 7 - 3, 5];
const retorno2 = numeros2.some((numero) => numero > 0);
console.log(retorno2);

//
