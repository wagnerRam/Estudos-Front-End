const produtos = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const totalAPagar = produtos.reduce((acumulador, produto) => {
  return produto.preco * produto.quantidade + acumulador;
}, 0);
