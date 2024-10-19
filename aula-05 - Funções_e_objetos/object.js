// OBJECT LITERAL

const array = ["wagner", 23, 43, 43, true];

const pessoa = {
  nome: "wagner",
  altura: 1.83,
  idade: 28,
  hobbies: "jogar",
  imprimirAlgo: () => {
    console.log("ola mundo");
  },
};

console.log(pessoa.nome);
console.clear();

// add propriedade
pessoa.profissao = "Desenvolvedor";

// sobrescrever atributos

pessoa.nome = "Wagner Ramos";

// Deletando atributo

delete pessoa.idade;

console.log(pessoa);

pessoa.imprimirAlgo();

console.clear();

// Sintaxe simplificada para adicionar propriedades em um objetos ou criar objetos

const idade = 27;
const altura = 1.77;

const objeto = {
  idade,
  altura,
};

// Desistruturacao

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);

console.log(pessoa);

console.clear();
