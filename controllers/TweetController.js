const validation = require('../validation');

const TweetController = {
  getTweets(req, res) {
    res.send([
      {
        body: "Hola mundo",
        likes: 10,
        retweets: 50,
        user: "Alex",
        comments: []
      },
      {
        body: "Hola mundo",
        likes: 10,
        retweets: 50,
        user: "Alex",
        comments: []
      },
      {
        body: "Hola mundo",
        likes: 10,
        retweets: 50,
        user: "Alex",
        comments: []
      }
    ]);
  },
  getSingleTweet(req, res) {
    res.send({
      id: req.params.tweetId,
      body: "Hola mundo",
      likes: 10,
      retweets: 50,
      user: "Alex",
      comments: []
    });
  },
  postTweet(req, res) {
    const tweet = {
      body: req.body.body
    }

    if(!tweet.body) {
      res.send({ error: 'Tweet no puede estar vacío' });
      return;
    }

    if(!validation.isValidLength(tweet.body, 140)) {
      res.send({ error: 'Tweet no puede ser mayor a 140 caracteres' })
      return;
    }

    //mandar respuesta al front
    res.send(tweet);
  },
  postComment(req, res) {
    const comment = {
      body: req.body.body,
      replyTo: req.body.replyTo
    }

    if(!comment.body || !comment.replyTo) {
      res.send({ error: 'Comment no puede estar vacío' });
      return;
    }

    if(!validation.isValidLength(comment.body, 140)) {
      res.send({ error: 'Comment no puede ser mayor a 140 caracteres' })
      return;
    }

    res.send(comment);
  }
}
module.exports = TweetController;
