/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var bodyParser = require('body-parser');


// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

app.get('/sent', function (req, res) {
  res.sendFile(__dirname + '/public/sent.html');
});

app.post('/register', function (req, res) {
  
  var user_name = req.body.name;

  var Cloudant = require('cloudant');
  var me = ''; // Set this to your own account
  var password = "";
  var cloudant = Cloudant({account:me, password:password});
  var db = cloudant.db.use('sampledb');

  var doc = {
    "register":req.body
  };

  db.insert(doc, function(err, body) {
  }); 

  res.sendFile(__dirname + '/public/sent.html');

});

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
