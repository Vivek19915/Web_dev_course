//import express module
let express = require('express')
//create router instance
let router = express.Router()
let mongodb = require('mongodb')
let url = require("../url")
//create mongoclient
let mcl = mongodb.MongoClient

//import token
let token = require('../token/token')

//create rest api
router.post("/",(req,res)=>{

    let username = req.body.uname
    let upwd = req.body.upwd
    console.log("<-----",username,upwd,"---->")

    //connect to mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)console.log('Error in connection:- ',err)
        else{
            let db = conn.db('nodedb')                                       //connection nodedb
            db.collection('login_details').find(
                {"uname":username , "upwd":upwd}                             //this comparision of uname and upwd is the most imp part
                // note when key and value both are same 
                // EG-> {"uname":uname , "upwd":upwd}   ---> {uname,upwd}
            ).toArray((err,array)=>{
                console.log(array)
                if (array.length != 0) {  
                    let obj = { username, upwd }
                    let my_token = token(obj, JSON.stringify(new Date()))
                    res.send({ 'auth': 'success', token: my_token })
                }
                else
                    res.send({ 'auth': 'failed' })
            })
        }
    })
})









//export router
module.exports = router
