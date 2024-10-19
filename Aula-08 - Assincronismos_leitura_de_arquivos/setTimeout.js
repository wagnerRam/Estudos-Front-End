//?   1 - Por callbaks (função de retorno ou chamada de retorno)
// ! ----- EXEMPLO 2 - função assincrona setTimeout ------------

console.log("ANTES do setTimeout...");

setTimeout(() => {
  console.log("Isso sera executado após 2 segundos!");
}, 2000);

console.log("DEPOIS da função assincrona");
