import userService from "./user-service.js";
const tweets = [];

export function postTweet(tweet, username) {
  if (!username || !tweet) {
    throw "Todos os campos são obrigatórios!";
  }

  const { avatar } = userService.usuarios.find(
    (user) => user.username === username
  );

  tweets.push({ username, tweet, avatar });
}

export function getTweets(page) {
  if (page && page < 1) {
    throw "Informe uma página válida!";
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    const result = reverseTweets();
    return result;
  }
  const result = [...tweets].reverse().slice(start, end);
  return result;
}

function reverseTweets() {
  return [...tweets].reverse();
}

export function getTweetsByUser(username) {
  const tweetsDoUsuario = tweets.filter((t) => t.username === username);
  return tweetsDoUsuario;
}

const tweetService = {
  tweets,
  postTweet,
  getTweets,
  getTweetsByUser,
};

export default tweetService;
