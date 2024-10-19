const prompt = require("readline-sync");

let saldo = Number(prompt.question("Informe o valor do saldo: "));

do {
  saldo = Number(
    prompt.question("Saldo invalido! por favor, informe novamente: ")
  );
} while (saldo < 0);

console.log(saldo);
