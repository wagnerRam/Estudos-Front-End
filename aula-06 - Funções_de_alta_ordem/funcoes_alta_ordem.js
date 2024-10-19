// 1. FIRST CLASS FUNCTION
// as funcoes nessa linguagem sao tratadas como qualquer outra variavel.

// HIGH ORDER FUNCTION
// Uma funcao que recebe outra funcao como parâmetro/argumento, ou uma funcao
// que retorna outra funcao.

// !!! HIGH ORDER FUNCTIONS

//* 1. Função que retorna outra funcão como parâmetro

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Ola, ${studentName} seja bem vindo ao curso de ${courseName}!`
    );
  };
}

const displayWelcomeToFrontEndCourse = welcome("Front-end em React");
const displayWelcomeToBackEndCourse = welcome("Back-end em Node.js");

displayWelcomeToFrontEndCourse("Wagner Ramos");
console.clear();

//* 2. Função que recebe outra função como parâmetro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

// -------------------------------------------------------------------------------

// operacao: funcao que realiza a operacao entre os dois números
//           ou seja, ela precisa ser uma funcao que receba dois numeros.
const calcular = (num1, num2, operacao) => operacao(num1, num2);

const retorno = calcular(2, 5, multiplicar);
console.log(retorno);

// o calculo que eu quero é: (num1 * num2) + (2 * num1 * num2)

const resultado = calcular(
  10,
  5,
  (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(resultado);
