// * EXEMPLO - Exercicio - IMC

const pessoas = [
  { nome: "pessoa 1", idade: 28, altura: 180, peso: 123 },
  { nome: "Pessoa 2", idade: 19, altura: 1.7, peso: 50 },
  { nome: "Pessoa 3", idade: 28, altura: 1.69, peso: 180 },
];

const pessasComIMC = pessoas.map((elemento) => {
  return {
    ...elemento,
    imc: elemento.peso / elemento.altura ** 2,
  };
});
console.log(pessasComIMC);
console.clear();
