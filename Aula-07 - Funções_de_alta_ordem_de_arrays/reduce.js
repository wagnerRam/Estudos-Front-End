// ? Método que executa (para cada elemento do array) a
// ? função que foi passada com parâmetro, resultado em um
// ? elemento único.

//? Imagine que você queira calcular a soma dos elementos de um array...

const numeros = [1, 2, 3, 4, 5];

const somaDosNumeros = numeros.reduce((acumulador, numero) => {
  return numero + acumulador;
}, 0);

console.log(somaDosNumeros);
console.clear();

//! EXERCICIO
//! Calcular a media

const media = numeros.reduce((acumulador, elemento, _, arrayCompleto) => {
  return elemento / arrayCompleto.length + acumulador;
}, 0);
console.log(media);
console.clear();

const somaDosPares = numeros.reduce((acumulador, elemento) => {
  if (elemento % 2 === 0) {
    return elemento + acumulador;
  } else {
    return acumulador;
  }
}, 0);

console.log(somaDosPares);
console.clear();

//! Soma dos produtos do carrinho

const produtos = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const totalAPagar = produtos.reduce((acumulador, produto) => {
  return produto.preco * produto.quantidade + acumulador;
}, 0);

console.log(totalAPagar);
