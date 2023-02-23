const usuarios = [];

export function signUp(username, avatar) {
  if (!username || !avatar) {
    throw "Todos os campos são obrigatórios!";
  }

  usuarios.push({ username, avatar });
}

const userService = {
  signUp,
  usuarios,
};

export default userService;
