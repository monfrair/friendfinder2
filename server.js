var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// needs to be called before the routes in order to work
app.use(express.static(__dirname + './public'));

//app.get('/', function (req, res) {
//    res.render('home', {
//        pageTitle: 'Home Page',
//        welcomeMessage: 'Welcome to the jungle',
//
//    });
//});

//Router
require("./routes/apiRoutes.js") (app);
require("./routes/htmlRoutes.js") (app);

//Listening to the port that was set up
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

