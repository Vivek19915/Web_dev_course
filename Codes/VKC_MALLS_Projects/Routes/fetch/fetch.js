//import modules
const express = require('express')
let mongodb = require('mongodb')
//import url
let url = require('../url')
//create mongoclient
let mcl = mongodb.MongoClient
//create router instance
let router = express.Router()
//import token
let token = require('../token/token')


//Product fetch
router.get("/",(req,res)=>{
    //connect to mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)console.log('Error in connection:- ',err)
        else{
            let db = conn.db('vkcmalls')                                       
            db.collection('products').find().toArray((err,array)=>{
                if(err)console.log("Error:- ",err)
                else {
                    console.log('Data sent')
                    res.send(array)
                    conn.close()
                }
            })
        }
    })
})


//fetch users details
router.get("/UsersDetails",(req,res)=>{
    //connect to mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)console.log('Error in connection:- ',err)
        else{
            let db = conn.db('vkcmalls')                                       
            db.collection('users').find().toArray((err,array)=>{
                if(err)console.log("Error:- ",err)
                else {
                    console.log('Data sent')
                    res.send(array)
                    conn.close()
                }
            })
        }
    })
})



//Login Authentication
router.post("/auth",(req,res)=>{

    let username = req.body.u_name
    let userpass = req.body.u_pwd
    
    let obj = {"u_name":username , "u_pwd":userpass}  

    //connect to mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)console.log('Error in connection:- ',err)
        else{
            let db = conn.db('vkcmalls')                                       
            db.collection('users').find(obj).toArray((err,array)=>{
                console.log(array)
                if (array.length != 0) {  
                    let my_token = token(obj, JSON.stringify(new Date()))
                    //updating token to database
                    obj = {
                        "u_token":my_token
                    }
                    
                    let u_id = array[0].u_id;
                    console.log("-----------",u_id,obj)
                    db.collection('users').updateOne({ u_id }, { $set: obj }, (err, result) => {        
                        if (err)
                            res.status(404).send({ 'update': 'error' })
                        else {
                            if (result.matchedCount != 0) {
                                console.log("Data updated ")
                                res.send({ 'auth': 'success', token: my_token })
                            }
                            conn.close()
                        }
                    })
                    
                }
                else
                    res.send({ 'auth': 'failed' })
            })
        }
    })
})




//fetch for cart
router.get("/cartFetch",(req,res)=>{

    let u_id=req.body.u_id
    //connect to mongodb
    mcl.connect(url,(err,conn)=>{
        if(err)console.log('Error in connection:- ',err)
        else{
            let db = conn.db('vkcmalls')                                      
            db.collection('cart').find({u_id}).toArray((err,array)=>{
                if(err)console.log("Error:- ",err)
                else {
                    console.log('Data sent')
                    res.send(array)
                    conn.close()
                }
            })
        }
    })
})




//export router
module.exports = router
