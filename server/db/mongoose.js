var mongoose = require('mongoose');

//mongoose takes care of delays and timings for querying and callbacks. set up to use promises and connect. Try to connect to mlab database after deployment (MongoDB_URI process environmental variable set by heroku)

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/UserPlayedFiles');


//after setting up mongoose it is saved as an export to be used in files that require it
module.exports = {
  mongoose
};
