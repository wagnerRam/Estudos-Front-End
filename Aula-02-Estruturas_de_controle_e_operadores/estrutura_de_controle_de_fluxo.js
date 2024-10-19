const prompt = require("readline-sync");

const pessoa = prompt.question("Por favor, digite seu nome: ");
const idadePessoa = Number(prompt.question("Informe sua Idade: "));

const maior_idade = 18;

console.log(idadePessoa, typeof idadePessoa);

if (idadePessoa >= maior_idade) {
  console.log(pessoa, "É maior de Idade!");
} else console.log(pessoa, "Não é maior de Idade");

const mediaDoAluno = 1;

if (mediaDoAluno >= 7) {
  console.log("Aprovado");
  console.log("Parabens! ");
} else if (mediaDoAluno >= 5) {
  console.log("Prova Final");
} else {
  console.log("Reprovado!");
}
