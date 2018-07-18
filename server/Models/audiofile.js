var mongoose = require('mongoose');

var audioFile = mongoose.model('genericAudioFile',{
  audioFileID:{
    type: String,
    required:true, //make audioFileID required
    minLength: 1, //min length of string
    trim: true //removes leading and trailing spaces
  },
  played:{
      type: Boolean,
      default: true //gives default property
  },
  category:{
    type: String
  }
});

//set audioFile model as export
module.exports = {audioFile}
