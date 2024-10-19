// Muito útil quando sua variável possui valores específicos
//

const permissoes = "aluno"; // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
  case "aluno":
    console.log("Você so pode visualizar as aulas.");
    break;
  case "professor":
    console.log("Voce pode alterar as aulas e adicionar exercicios.");
    break;
  case "admin":
    console.log("voce pode fazer o que quiser");
    break;
  default:
    console.log("Não sei quem é você no sistema");
}
