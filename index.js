const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const validation = require('./validation')
const mongoose = require('mongoose');
const port = 3000

//mongodb://andreag:01mongo@ds115283.mlab.com:15283/instatwitter
mongoose.connect('mongodb://andreagonzalez:andreagonzalez11@ds115283.mlab.com:15283/instatwitter', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conectado a la base de datos');
});

// leer el JSON de las solicitudes POST
app.use(bodyParser.json())

app.get('/api/tweets', (req, res) => {
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
  ])
});

app.get('/api/tweet/:tweetId', (req, res) => {
  res.send({
    id: req.params.tweetId,
    body: "Hola mundo",
    likes: 10,
    retweets: 50,
    user: "Alex",
    comments: []
  });
});

app.post('/api/tweet', (req, res) => {
  //conseguir las propiedades que queremos
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
});

app.post('/api/tweet/comment', (req, res) => {
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

})

//404 handler
app.use((req, res) => {
  res.status(404);
  res.send({ error: "Invalid API" });
});

//error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.send({ error: 'Internal Server Error' });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
