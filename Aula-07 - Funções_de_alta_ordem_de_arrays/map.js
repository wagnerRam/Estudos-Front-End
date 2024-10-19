// * Map - Um método do array que chama a funcao que passada como
// * parâmetro para cada elemento do array, e devolve um novo array como resultado.

// ? Map
// ? Ele cria um novo array que possui o *mesmo tamanho do array original*
// ? composto pelos elementos que foram retornados a cada iteração

// * EXEMPLO 1 - Multiplicando por 2 os numeros do Array

const numeros = [40, 34, 67, 89, 23, 10];

const dobroDoNumero = numeros.map((numeros) => numeros * 2);
console.log(dobroDoNumero);
console.clear();

// ====================================================================
// * EXEMPLO 2 - Elevando Todos os numeros do Array ao quadrado

const numeros2 = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const numerosAoQuadrado = numeros2.map((numeros2) => numeros2 ** 2);
console.log(numerosAoQuadrado);
console.clear();
// =====================================================================

// desestruturaçao ou spreed (operator)

const pessoa = {
  nome: "Wagner",
  idade: 28,
  altura: 1.83,
};

const pessoaComPeso = {
  ...pessoa,
  peso: 130,
};
console.log(pessoaComPeso);
console.clear();

// * EXEMPLO 3 - Adicionando uma propriedade aos objetos do Array

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const totalDoCarrinho = carrinho.map((item) => {
  return {
    ...carrinho,
    total: item.preco * item.quantidade,
  };
});
console.log(totalDoCarrinho);
console.clear();
