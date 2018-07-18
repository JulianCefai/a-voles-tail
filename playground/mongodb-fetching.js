
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/UserPlayedFiles', (err, client) =>{
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('UserPlayedFiles');

  //find returns mongodb cursor (in pointer form) which has methods that can be used to fetch objects. In this case objects case to Array and this returns a promise. And so we use then and add
  //callback where docs is only argument and is what is returned by callback. Inside of 'find' you put queru to specify how to query collection,for example only ones played true.
  //to query by id, Unique ID is not string and must by converted to ObjectID : find({_id: new ObjectID('UniqueStringIdentigier')})

  //QUery can be to Count instead of array: pass in count instead of docs in promise callback 
  db.collection('User1024').find({played: true}).toArray().then((docs) => {
    console.log('User1024');
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log('Unable to fetch todos',err);
  });

//  client.close();

});
