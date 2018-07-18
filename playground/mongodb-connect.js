//mongo client lets you connect to mongo database server
const MongoClient = require('mongodb').MongoClient;

//Now connect to client. takes two arguments. first one is url (heroku,aws or local) second will be callback after fail/succession
MongoClient.connect('mongodb://localhost:27017/DatabaseName', (err, db) =>{
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');
  db.close();

});
