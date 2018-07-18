//destructuring syntax used to make a variable from the parameter named mongoose of the required file which was set as an export
var {mongoose} = require('./db/mongoose.js');
var {audioFile} = require('./models/audiofile');

//express for networking, body parser for parsin JSON
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT || 3000;
//set port for heroku

//set up http route by callin app.post passing in URL and callback that gets called with request and response. for now routing to create audiofile entry.
//Body parser used to convert JSON to object. Configure middleware using app.use and will be able to send JSON to express
app.use(bodyParser.json());

app.post('/audioFilePlayed', (req,res) => {

    var httpaudioFile = new audioFile({
      audioFileID: req.body.audioFileID,
      played: req.body.played,
      category: req.body.category
    });
    httpaudioFile.save().then((doc)=>{
      res.send(doc);
    }, (e) =>{
      res.status(400).send(e);
    });
});

app.get('/audioFilePlayed', (req,res) => {
  audioFile.find().then((audioFiles) => {
    console.log(audioFiles);
    res.send({audioFiles});
  }, (e) => {
    res.status(400).send(e);
  });
});
app.get('/audioFilePlayed/:audiofileid', (req,res) => {
  var id = req.params.audiofileid;
  audioFile.find({audioFileID: id}).then((audio_file)=> {
    if (!audioFile){
      return res.status(404).send()
    }
    res.send({audio_file});
  }).catch((e) => {
    res.status(400).send();
  })

});

//open on local port for Now

app.listen(port, () => {
  console.log('The port is', port);
  console.log(`Started on port ${port}`);
});

module.exports = {app};
