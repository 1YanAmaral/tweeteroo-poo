import express from "express";
import {
  getTweets,
  getTweetsByUser,
  postTweet,
} from "../controllers/tweet-controller.js";

const tweetRouter = express.Router();

tweetRouter.post("/tweets", postTweet);
tweetRouter.get("/tweets/:username", getTweetsByUser);
tweetRouter.get("/tweets", getTweets);

export default tweetRouter;
