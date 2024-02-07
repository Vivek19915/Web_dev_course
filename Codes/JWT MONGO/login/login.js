//import express module
let express = require('express')
//create router instance
let router = express.Router()

//create mongoclient
let mcl = mongodb.MongoClient

//import token
let token = require('../token/token')

//create rest api
router.post("/",(req,res)=>{

    let uname = req.body.uname
    let upwd = req.body.upwd

    //connect to mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)console.log('Error in connection:- ',err)
        else{
            let db = conn.db('nodedb')                                       //connection nodedb
            db.collection('products').find().toArray((err,array)=>{
                
            })
        }
    })
})









//export router
module.exports = router
