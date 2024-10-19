const { error } = require("console");
const fs = require("fs");

//? 1 - Lendo um arquivo JSON com JS.

fs.readFile("node_modules/readline-sync/package.json", (error, dados) => {
  if (error) {
    console.log(error);
  } else {
    const dadosObjeto = JSON.parse(dados); //? Convertendo o Buffer em um objeto do JS
    console.log(dadosObjeto);
  }
});

//? 2 - Convertendo JSON, em formato de string, para um objeto.

const jsonString = '{"nome": "Wagner"}';
console.log(JSON.parse(jsonString));
console.clear();

//? 3 - Convertendo um objeto do JS, em um JSON (string).

const pessoa = {
  nome: "Tony Start",
  papel: "Homem de Ferro",
};

console.log(JSON.stringify(pessoa));
