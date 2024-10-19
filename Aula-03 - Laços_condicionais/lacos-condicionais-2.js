const prompt = require("readline-sync");

const numeroDaSorte = parseInt(Math.random() * 100);
let qtdTentativas = 0;

let tentativa = Number(prompt.question("Tente acertar o numero da sorte: "));

while (tentativa != numeroDaSorte) {
  qtdTentativas++;
  const dica =
    tentativa > numeroDaSorte
      ? "seu numero eh maior, Informe outro numero: "
      : "seu mumero eh menor, Informe outro numero: ";

  tentativa = Number(prompt.question(dica));
}

console.log("Parabens! Você acertou ! o numero era");
