//? ----------------------- PROMISES -----------------------

//? - A promise é um objeto que guarda uma promessa de que
//?                                        algo será realizado.

//? - É útil para os casos em que estamos lidando com operações
//?                                        assíncronas.

//? - A promise estará em algum dos estados abaixo:
//?   1. Pending: A promise foi iniciada, mas está pendente.
//?   2. FullFilled: a promise foi concretizada com sucesso.
//?   3. Rejected:   a promise foi rejeitada, porque houve um erro.

// ?   Exemplo de utilizaçao: pegar dados do back-end (API).

const fs = require("fs");

//* ---------------- Criando uma promessa ---------------------------

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("aula-13/arquivo.txt", (err, conteudo) => {
      if (err) {
        reject("Ocorreu um erro na leiturado do arquivo.txt", err);
      } else {
        resolve(conteudo);
      }
    });
  });
}

//! ------------------- Resouver promessas --------------------------

lerArquivoPromise()
  .then((returnOfPromise) => {
    console.log("Deu certo: ");
    console.log(String(returnOfPromise));
  })
  .catch((err) => {
    console.log("Deu ruim", err);
  })
  .finally(() => {
    console.log("Independente do resultado, isto será executado");
  });
