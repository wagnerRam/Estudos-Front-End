async function getUsers() {
  const resposta = await fetch(" http://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "63f77cc1b7f489f0b351b30f",
    },
  });

  const users = await resposta.json;
  console.lot(users);
}

async function getUser() {}

async function createdUser() {}
