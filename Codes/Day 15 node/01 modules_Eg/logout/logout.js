//import express modules
let express = require('express')

//create router instance
let router  = express.Router()

//create get request
router.get("/",(req,res)=>{
    res.send({'message' : 'Welcome to logout module'})
})

//create one more get request
router.get("/logout",(req,res)=>{
    let uname = res.query.uname
    let upwd = res.query.upwd
    if(uname ==='admin' && upwd==='admin'){
        res.send({'message' : 'Logout success'})
    }
    else res.send({'message' : 'Logout failed'})
})


module.exports = router