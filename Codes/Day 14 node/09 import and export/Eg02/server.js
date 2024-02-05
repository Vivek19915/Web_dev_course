// initialyse project ---> npm init -y 
// download express module ---> yarn add express --save 

// import express module 
let express = require('express')

// create rest api 
let app = express()

//create port 
let port = 8080

//import db_connections
let obj = require('./config/db_connection')

app.get("/oracle",(req,res)=>{
    res.send(obj.oracle())
})
app.get("/mongodb",(req,res)=>{
    res.send(obj.mongodb())
})
app.get("/mssql",(req,res)=>{
    res.send(obj.mssql())
})
app.get("/mysql",(req,res)=>{
    res.send(obj.mysql())
})

// assign port no 
app.listen(port,(req,res)=>{
    console.log("server started")
})