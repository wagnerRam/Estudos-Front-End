// Utilize sempre o Camel Case no JavaScript!

// JavaScript possui tipagem dinâmica: Infere os tipos de dados
// JavaScript possui tipagem fraca:

var nomeDoAluno = "Wagner Ramos"; // String (texto): Utilize sempre aspas
var idade = 28; // number: O JavaScript ver todos os numeros como number
var altura = 1.83; // number
var estudando = true; // boolean = (booleano: True ou False)

// typeof diz o tipo da variavel
console.log(nomeDoAluno, typeof nomeDoAluno);
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);

//  Declarando uma variável sem atribuição de conteudo
var semConteudo;
console.log(semConteudo);

// Declarando muitiplas variaveis em uma mesma linha

var curso = "Front-end em React",
  topico = "JavaScript Básico I";

console.log(curso, topico);

// OUTRAS FORMAS DE DECLARAR VARIAVEIS...
// o var não é a melhor forma de se declarar variaveis no JS hoje em dia

// ! NÃO UTILIZE O VAR NOS CODIGOS JAVASCRIPT !!!!

let notaDoAluno = 10; // permite que altere uma variavel
const mediaDoAluno = 8; // !constante não pode ser alterada

notaDoAluno = 9;

// ! mediaDoAluno = 5; não pode alterar o valor de uma constrante

console.log(notaDoAluno);
console.log(mediaDoAluno);

// Var é uma variavel global...
// antes mesmo de criar uma variavel ela ja existe no codigo. porque ela tem um escopo global pelo hoisting
