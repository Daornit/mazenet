const express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'Lab1'
});
const app = express();
var query = "select * from Staff";
var data;
connection.query(query,(error,results)=>{
  if(error){
    throw error;
   }else {
     data=results;
   }
});
app.get('/',(req,res)=>{
  res.send(data[1]);
});
app.listen(5000,(req,res)=>{
  console.log("server is good");
});
