//Require express package for networking and filesystem module
const express = require('express');
const fs = require('fs')
//Make  a new express app. Config done later, no arguments passed to express
var app = express()

//Store port used for app either set by heroku as a global env or default 3000
const port = process.env.PORT || 3000

//Add middleware to create static directory with multimedia to serve. Pass absolute file path to public
app.use(express.static(__dirname + '/public'));

//Middleware to log times of HTTP requests

app.use((req,res,next) => {
var now = new Date().toString();
var path = '${req.url}'
var log = '${now}: ${req.method} ${req.url}';
fs.appendFile('server.log', log + '\n',(err) => {
  if (err){

  }
});
next();
});


//HTTP Route Handlers Registration
//Pass URL and function to run to get as args. In this case arrow function with two arguments: request(storing info about incoming request), response can be string, JSON, etc. In this case will be URL
app.get('/',(req,res) => {
  res.send('HTTP Response String')
});

//Start Listening at port 3000 for local dev
app.listen(port);
