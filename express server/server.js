const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at:.........");
});

app.get("/about", function(req, res){
  res.send("some info");
});

app.get("/me", function(req, res){
  res.send("<ul><li>coffee</li><li>cat</li></ul>");
})

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
