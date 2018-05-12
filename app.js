const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser")
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs")
app.get("/",(req,res)=>{
      res.render("index",{});
  });
app.listen(3000,()=>{
  console.log(`server running`);
});
