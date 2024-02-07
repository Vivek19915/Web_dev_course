//import express module
let express = require('express')
//create router instance
let router = express.Router()
//import db_connection
let conn = require('../config/db_connection')
//get connection object
let connection = conn.getConnection()
//connect to database
connection.connect()
//import token
let token = require('../token/token')
//create rest api
//post method in login as you have to send token details to the user also for the current session
router.post("/", (req, res) => {
    let uname = req.body.uname
    let upwd = req.body.upwd
    //compare with database
    connection.query(`select * from login_details where uname = '${uname}' and upwd = '${upwd}'`,   //here in db you have to create login_details table in nodedb database in mysql
        (err, recordsArray) => {
            if (recordsArray.length != 0) {    //means user is present in the database so now we can send token to user 
                let obj = { uname, upwd }
                let my_token = token(obj, JSON.stringify(new Date()))
                res.send({ 'auth': 'success', token: my_token })
            }
            else
                res.send({ 'auth': 'failed' })
        })
})
//export router
module.exports = router
