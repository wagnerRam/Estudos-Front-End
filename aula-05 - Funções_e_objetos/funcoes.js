const prompt = require("readline-sync");

// DRY - DONT REPEAT YOURSELF
function saudacao(nomeDoEstudante, curso = "Front-end em React") {
  return `Ola, ${nomeDoEstudante}! Seja bem vindo ao ${curso}`;
}

const mensagemDaSaudacao = saudacao(
  "Wagner",
  "Analise e Desenvolvimento de Sistemas"
);

console.log(mensagemDaSaudacao);

console.clear();
// ---------------------------------------------------------------
function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(5, 5);
console.log(resultado);

console.clear();

// ---------------------------------------------------------------
// FUNÇÕES ANONIMAS

const dobroDoNumero = function (numero) {
  return numero * 2;
};

const dobro = dobroDoNumero(2);
console.log(dobro);
console.clear();

// ---------------------------------------------------------------
// ARROW FUNCTION

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

const multiplicar = (numero1, numero2) => numero1 * numero2;

const resto = (numero) => numero % 2;

const nomeDoAluno = prompt.question("digite seu nome: ");
const cursoEstudado = prompt.question("digite o curso estudado: ");

function saudacaoAluno(nomeDoAluno, cursoEstudado) {
  console.log(
    `Ola, ${nomeDoAluno}, bem vindo ao curso curso de ${cursoEstudado}`
  );
}

saudacaoAluno(nomeDoAluno, cursoEstudado);
