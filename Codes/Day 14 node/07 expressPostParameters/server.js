//initialyse project ----> npm init -y
// download express module and body-parser -----> yarn add express body-parser --save 

// import express module
let express = require('express')
let bodyparser = require('body-parser')

let app = express()
let port = 8080


//set JSON as MIME type
app.use(bodyparser.json)

// front end encoding data 
app.use(bodyparser.urlencoded({extended : false}))

//create rest api
// app.post("/login",(req,res)=>{
//     //client paramters are stored in body part of request
    
// })

app.post("/login",(req,res)=>{
    let uname = req.body.uname
    let upwd = req.body.upwd

    if(uname === 'admin' && upwd === 'admin'){
        res.send({'login' : 'success'})
    }
    else res.send({'login' : 'failed'})

})

app.listen(port,()=>{
    console.log("server on port:- ",port)
})


/*
    Start server
    >node server
    Test Rest api in postman with url
    http://localhost:8080/login
    in postman
        1.  req     -> post
            body    -> raw
                    -> text <-> json
                    {"uname":"admin","upwd":"admin"}

        2.  req     -> post
            body    -> x-www...
                    -> key and values
                   
*/
