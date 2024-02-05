// initialyse project ---> npm init -y 
// download express module ---> yarn add express --save 

// import express module 
let express = require('express')

// create rest api 
let app = express()

//create port 
let port = 8080

//import db_config
let obj = require("./config/db_config")
app.get("/",(req,res)=>{
    res.json(obj)
})

// assign port no 
app.listen(port,(req,res)=>{
    console.log("server started")
})