const express = require("express")
const bodyParser = require("body-parser")
const app = express()
let items = ["Buy food", "Cook food"];
let workList = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static("public"))
app.get("/", function(req, res){
  const today = new Date();
  let options = {
    weekday: 'long',
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {listTitle: day, itemList: items});
})

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", itemList: workList });
})

app.get("/about", function(req, res){
  res.render("about");
})

app.post("/", function(req,res){
  console.log(req.body);
  let item = req.body.newItem;
  if (req.body.list === "Work List"){
    workList.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
})



app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
