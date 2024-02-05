//initialyse project ----> npm init -y
// download express module -----> yarn add express --save 

// import express module
let express = require('express')
//creating rest obj
let app = express();         //where app is REST obj

//creating get request
app.get("/",(req,res)=>{
    // res.json({'message':'first get request'})      you can use both json and send 
    res.send({'message':'first get request'})
})

//second get request
app.get("/fetch",(req,res)=>{
    res.send({'message':'second get request'})
})


//creating post request
app.post("/",(req,res)=>{
    res.send({'message':'first post request'})
})

//second post request
app.post("/login",(req,res)=>{
    res.send({'message':'second post request'})
})


let port = 8080
app.listen(port,()=>{
    console.log("Server started")
})


/* 
    Test URLS:-
    http://localhost:8080                   First Get
    http://localhost:8080/fetch             Second get
    http://localhost:8080                   First Post
    http://localhost:8080/login             Second Post

*/
