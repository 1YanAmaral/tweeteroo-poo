import userService from "../services/user-service.js";

export function signUp(req, res) {
  const { username, avatar } = req.body;
  try {
    userService.signUp(username, avatar);
    res.status(200).send("OK deu tudo certo");
  } catch (error) {
    res.status(401).send(error);
  }
}
