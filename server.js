var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
