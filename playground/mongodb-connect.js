//mongo client lets you connect to mongo database server
//const MongoClient = require('mongodb').MongoClient;

//use Destructuring to pull various properties from mongodb, as opposed to just one as shown above. Destructuring explained below
//Now also using ObjectID to easier manipulate unique object IDs
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

//####### ES6 Object Destructuring
//Pull out properties from object to create variables. eg:
//var user = {name : 'andrew', age: 25};
//Now  make variable wrapped in {} then make equal to object to destructure
//var {name} = user;

//Now connect to client. takes two arguments. first one is url (heroku,aws or local) second will be callback after fail/succession
MongoClient.connect('mongodb://localhost:27017/UserPlayedFiles', (err, client) =>{
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  //pass database reference to client to connect
  const db = client.db('UserPlayedFiles');

  //add collections to database of specific user. takes two arguments, first object of keyavalue pairs and callback function
  db.collection('User1024').insertOne({
    audio_id: 'audio_file_01',
    played: true
  },(err,result) => {
    if (err){
      return console.log('Adding to databse failed.', err)
    }
    console.log(JSON.stringify(result.ops,undefined,2))
  });

  client.close();

});
