var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var decoder = require('./modules/decoder');
var privateData = require('./routes/private-data');
var ourDates = require('./routes/our-dates');
var cardDetail = require('./routes/card-detail');

app.get('/', function(req, res){
  res.sendFile(path.resolve('./public/views/index.html'));
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Decodes the token in the request header and attaches the decoded token to the request.
app.use(decoder.token);

/* Whatever you do below this is protected by your authentication.
WARNING: So far you are returning secret data to ANYONE who is logged in.
There is still more work to be done if you want to implement roles.
No authorization has been completed yet in this branch.
You can use req.decodedToken and some logic to do that.
Other branches in the nodeFire repository show how to do that. */

// This is the route for your secretData. The request gets here after it has been authenticated.
app.use("/privateData", privateData);
app.use("/ourDates", ourDates);
app.use("/cardDetail", cardDetail);

var portDecision = process.env.PORT || 5000;

app.listen(portDecision, function(){
  console.log("Listening on port: ", portDecision);
});
