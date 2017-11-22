// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require('http');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Set up the Express App to use the public folder
app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================
// Basic route that sends the user to the index page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
// Route that sends the user to the top page
app.get("/top", function(req, res) {
  res.sendFile(path.join(__dirname, "views/top.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
