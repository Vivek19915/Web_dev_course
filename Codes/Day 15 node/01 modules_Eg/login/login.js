//import express modules
let express = require('express')

//create router instance
let router  = express.Router()

//create get request
router.get("/",(req,res)=>{
    res.send({'message' : 'Welcome to login module'})
})

//create one more get request
router.get("/login",(req,res)=>{
    res.send({'message' : 'Welcome to login module again'})
})


//create one more get request
router.get("/login/:uname/:upwd",(req,res)=>{
    let uname = req.params.uname
    let upwd = req.params.upwd

    if(uname === 'admin'  && upwd==='admin'){
        res.json({'message' : 'Login success'})
    }
    else res.json({'message' : 'Login failed'})
})

module.exports = router