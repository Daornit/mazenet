const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs")
app.get("/",(req,res)=>{
  res.render("index");
  console.log(__dirname);
});
app.get('/content',(req,res)=>{
  res.render('content');
});

app.listen(3000,()=>{
  console.log(`server running`);
});
