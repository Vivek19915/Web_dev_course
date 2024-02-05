//initialyse project ----> npm init -y
// download express module -----> yarn add express --save 

// import express module
let express = require('express')
//creating rest obj
let app = express();         //where app is REST obj

app.get("/login",(req,res)=>{
    // query is the predefined key in the req object 
    // query is the used to read get parameters 

    let uname = req.query.uname
    let upwd = req.query.upwd
    if(uname === 'admin' && upwd === 'admin'){
        // res.status(200).send({'login' : 'success'}) 
        res.send({'login' : 'success'})
    }
    else res.send({'login' : 'failed'})

})

let port = 8080
app.listen(port,()=>{
    console.log("Server started on port:-" ,port)
})


/* 
    Test URLS:-

    http://localhost:8080/login/?uname=admin&upwd=admin             

*/
