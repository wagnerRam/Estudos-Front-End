// Fetch API

// then/catch
fetch("https://viacep.com.br/ws/04387140/json/")
  .then((response) => {
    response.json().then((dados) => console.log(dados));
  })
  .catch((erro) => {
    console.log(erro);
  });

// async / await

async function dadosDoCep() {
  try {
    const response = await fetch("https://viacep.com.br/ws/04387150/json/");
    const dadosJson = await response.json();
    console.log(dadosJson);
  } catch (error) {
    console.log(`Deu erro ${error}`);
  } finally {
    console.log("terminou a requisição");
  }
}

dadosDoCep();
