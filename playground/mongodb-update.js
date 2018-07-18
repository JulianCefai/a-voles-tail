
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/UserPlayedFiles', (err, client) =>{
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('UserPlayedFiles');

  //find one and update finds entry to update a value. Takes as arguments: filter,updates,options,callback (promise in this case). Various MongoDB Update Operators available in docs.
  //in this case set update operator used
  db.collection('User1024').findOneAndUpdate({
    audio_id: 'audio_file_01'
  },{
    $set: {
      played: false
    }
  },{
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  });
  //  client.close();

});
