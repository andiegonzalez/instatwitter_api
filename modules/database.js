const mongoose = require('mongoose');

const database = {
  init() {
    //mongodb://andreag:01mongo@ds115283.mlab.com:15283/instatwitter
    mongoose.connect('mongodb://andreagonzalez:andreagonzalez11@ds115283.mlab.com:15283/instatwitter', { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('Conectado a la base de datos');
    });
  }
}

module.exports = database;
