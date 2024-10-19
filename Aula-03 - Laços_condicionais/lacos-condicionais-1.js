// lacos condicionais (wilhe / do-wilhe)
// o que sao estruturas de repetição?
// laços condicionais são chamados de estrutura de repeticao não controlada
// While

// Do-while
const prompt = require("readline-sync");

// let saldo = Number(prompt.question("Informe seu saldo: "));

// while (saldo < 0) {
//   saldo = Number(
//     prompt.question("Saldo invalido! Por favor, Infome novamente: ")
//   );
// }
// console.log(saldo);

// Exemplo 2

let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));
let somaDasNotas = 0;
let qtdNotasValidas = 0;
let mediaDoAluno = 0;

while (notaDoAluno >= 0) {
  //somaDasNotas = somaDasNotas + notaDoAluno;
  //qtdNotasValidas = qtdNotasValidas + 1;
  somaDasNotas += notaDoAluno;
  qtdNotasValidas++;

  notaDoAluno = Number(prompt.question("Informe a proxima nota: "));
}

console.log("A media do aluno é ", somaDasNotas / qtdNotasValidas);
console.log(somaDasNotas);
