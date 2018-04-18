const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs")
app.get("/",(req,res)=>{
  res.render("index");
});

app.listen(3000,()=>{
  console.log('server running at http://${hostname}:${port}/');
});
