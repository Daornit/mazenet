const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser")
const app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "website"
});
const query = "select * from posts";
con.connect(function(err) {
  if (err) console.log(err);
  else console.log("Connected!");
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs")
app.get("/",(req,res)=>{
  con.query(query, function (err, result, fields) {
    if (err) console.log(err);
    else {
      res.render("index",{posts:result});
      console.log(__dirname);
    }
  });

});
app.get('/admin',(req,res)=>{
  res.render('admin');
});
app.post('/admin',(req,res)=>{
  var title = req.body.title;
  var url = req.body.url;
  var text = req.body.description;
  var sql = `INSERT INTO posts (Title, img, description) VALUE ('${title}','${url}','${text}')`;
  con.query(sql, function (err, result) {
    if (err) console.log(err);
    else console.log("1 record inserted");
  });
  res.redirect('/');
});
app.get('/login',(req,res)=>{
  con.query('SELECT * FROM users', function (err, result, fields) {
    if (err) console.log(err);
    else {
      res.render("login",{users:result});
    }
  });
});
app.listen(3000,()=>{
  console.log(`server running`);
});
