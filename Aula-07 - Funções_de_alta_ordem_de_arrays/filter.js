// ? E se, ao invés de obter um array do mesmo temanho
// ? (mesmo número de elemnentos), você desejasse um novo
// ? array somento com os números pares de um array original?

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const numerosParArray = valores.filter((valor) => valor % 2 === 0);
console.log(numerosParArray);

// ! Exercicio
// ! Crie um código que obtenha apenas os dados dos alunos que tem
// ! uma media superior a 85.
// ! em seguida, imprima os dados deles na tela.

const alunos = [
  { nome: "Quincy", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "Sam", media: 65 },
  { nome: "Katie", media: 90 },
];

const mediaPositivas = alunos.filter((aluno) => aluno.media > 85);
console.log(mediaPositivas);
console.clear();

// ! Crie um script para filtrar apenas pelos produtos que custam
// ! menos de R$ 10,00 e não são bebidas:

const produtos = [
  { nome: "Suco de laranja", preco: 7.5, tipo: "Bebida" },
  { nome: "Batata frita", preco: 10.5, tipo: "Comida" },
  { nome: "Pizza", preco: 12.49, tipo: "Comida" },
  { nome: "Chocolate", preco: 1.5, tipo: "Comida" },
  { nome: "Pastel", preco: 4.5, tipo: "Comida" },
  { nome: "coca", preco: 6.9, tipo: "Bebida" },
];

const filtroProdutos = produtos.filter((produto) => {
  return produto.preco < 10.0 && produto.tipo !== "Bebida";
});

console.log(filtroProdutos);
