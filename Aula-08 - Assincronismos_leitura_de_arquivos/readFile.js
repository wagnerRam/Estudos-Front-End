//?   1 - Por callbaks (função de retorno ou chamada de retorno)
//! ------- EXEMPLO - leitura de arquivos é assincrono --------

const fs = require("fs");

fs.readFile(
  "JavaScript_basico/aula-13/arquivo.txt",
  (error, conteudoDoAquivo) => {
    if (error) {
      console.log("Deu erro ao iniciar o arquivo", error);
    } else {
      console.log(String(conteudoDoAquivo));
    }
  }
);
