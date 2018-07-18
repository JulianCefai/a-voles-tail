
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/UserPlayedFiles', (err, client) =>{
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('UserPlayedFiles');

  //deleteMany to target many docs with criteria passed as argument
  // db.collection('User1024').deleteMany({text: 'identifier'}).then((result) =>{
  //
  // });
  // //deleteOne
  // db.collection('User1024').deleteOne({text: 'identifier'}).then((result) =>{
  //
  // });
  // //findOne and delete....delete and return object (will only target first one)
  // db.collection('User1024').findOneAndDelete({text: 'identifier'}).then((result) =>{
  //
  // });
  //  client.close();

});
