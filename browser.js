// instalando biblioteca
// cria a pasta node_modules mostra todas as bibliotecas instaladas no projeto

const readlineSync = require("readline-sync");

const idade = readlineSync.question("Informe sua idade: "); // prompt só funciona no browser

console.log("Usuario tem", idade, " anos de Idade");

// CONVERSÃO DE TIPO OU COERÇÃO
// É o processo de conversão de um valor de um tipo, para outro
//(como a conversão de uma string para um número. um objeto para um booleano
// e etc.. )

// COERSÃO EXPLICITA (CONVERSÃO MANUAL)
console.log(idade, typeof idade);

const idadeNumber = Number(idade);
console.log(idadeNumber, typeof idadeNumber);
console.log(String(10), typeof String(10));
console.log(Boolean(-1));

// COERSAO IMPLICITA

// se não for soma, ele transforma o texto em numero

console.log(1 + "1");
console.log("10" + 5);
console.log(10 - "5");
