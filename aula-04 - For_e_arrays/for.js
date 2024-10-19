const prompt = require("readline-sync");

let i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

for (let q = 0; q < 10; q++) {
  console.log("q");
}

console.clear();

//* Exemplo 1

// let maiorNumero = 0;
// let numeroInformado;

// for (let i = 0; i < 5; i++) {
//   numeroInformado = Number(
//     prompt.question("Informe uma sequencia de 5 numeros: ")
//   );

//   numeroInformado > maiorNumero
//     ? (maiorNumero = numeroInformado)
//     : (numeroInformado = numeroInformado);
// }

// console.log(maiorNumero);

//* Exemplo 2 - Percorrendo uma string
const nome = "Wagner";

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

// console.log(nome.length); // retorna o tamanho da string
// console.log(nome[0]);
