// * Async/await

const fs = require("fs");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("aula-13/arquivo.txt", (err, conteudo) => {
      if (err) {
        reject("Ocorreu um erro na leiturado do arquivo.txt", err);
      } else {
        resolve(String(conteudo));
      }
    });
  });
}

async function leituraDeDados() {
  console.log("isso é executado antes da promise ser resolvida!");

  try {
    const dadosDoArquivo = await lerArquivoPromise();

    console.log(dadosDoArquivo);
    console.log("Isso é executado DEPOIS da promise ser resolvida");
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Dentro do finally");
  }
}

leituraDeDados();
