import tweetService from "../services/tweet-service.js";

export function postTweet(req, res) {
  const { tweet, username } = req.body;

  try {
    tweetService.postTweet(tweet, username);
    res.status(201).send("OK, seu tweet foi criado");
  } catch (error) {
    res.status(401).send(error);
  }
}

export function getTweets(req, res) {
  const { page } = req.query;
  try {
    const result = tweetService.getTweets(page);
    res.status(200).send(result);
  } catch (error) {
    res.status(401).send(error);
  }
}

export function getTweetsByUser(req, res) {
  const { username } = req.params;

  try {
    const result = tweetService.getTweetsByUser(username);
    res.status(200).send(result);
  } catch (error) {
    res.status(401).send(error);
  }
}
