const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));


//default page
app.get('/', function (req, res) {

  res.sendFile(__dirname + '/public/app/views/index.html');

});

//setting up a server
app.listen(3000, function (err) {

  if (err) {
    console.log('error in connection');
  }
  else {
    console.log('listening at port 3000');
  }
});