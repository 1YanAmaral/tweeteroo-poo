import userService from "./user-service.js";
const tweets = [];

class Tweet {
  constructor({ text, user, avatar }) {
    this.text = text;
    this.user = user;
    this.avatar = avatar;
  }
}

export function postTweet(tweet, username) {
  if (!username || !tweet) {
    throw "Todos os campos são obrigatórios!";
  }

  const { avatar } = userService.usuarios.find(
    (user) => user.username === username
  );

  const userTweet = new Tweet({
    text: tweet,
    user: username,
    avatar: avatar,
  });

  tweets.push(userTweet);
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
