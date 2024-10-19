const prompt = require("readline-sync");

const pessoa = ["wagner", "ramos", 28];
console.log(pessoa);

pessoa[0] = "Wagnao";

console.log(pessoa);

console.clear();
console.log(pessoa.length);

pessoa.push("Carvalho");
console.log(pessoa);

console.clear();

const numeros = [10, 40, 60, 90, 15];
console.log(numeros.slice(2, 5));

console.clear();

// Percorrendo Arrey com for

const arr = [45, 65, 34, 23, 22, 4];

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

console.clear();

// for-of percorrendo um array, pegando so elementos

for (const elemento of arr) {
  console.log(elemento);
}
console.clear();

// For-in percorre um array, pegando so o indice

for (const indice in arr) {
  console.log(indice);
}

console.clear();

for (let i = 0; i < 9; i += 2) {
  console.log(i);
}
