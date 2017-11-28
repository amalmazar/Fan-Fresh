// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var exphbs = require("express-handlebars");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Set up the Express App to use the public folder
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Set Handlebars as the default templating engine
// =============================================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Routes
// =============================================================
// Basic route that sends the user to the index page
app.get("/", function(req, res) {
    res.render("index");
});

// Route that sends the user to the top artists page
app.get("/top", function(req, res) {
  res.render("top");
});

// Route that sends the user to the main search page (this is where they will go after they log in)
app.get("/home", function(req, res) {
  res.render("home");
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
