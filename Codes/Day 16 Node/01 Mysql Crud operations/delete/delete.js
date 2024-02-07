//import express module
let express = require('express')
//create router instance
let router = express.Router()
//import database connection
let conn = require('../config/db_connection')
//get connection object
let connection = conn.getConnection()
//connect to database
connection.connect()
//create rest api
router.delete("/", (req, res) => {
    let p_id = req.body.p_id
    connection.query(`delete from products where p_id = ${p_id}`,
        (err, result) => {
            if (err)
                res.status(400).send({ 'delete': 'error ' + err })
            else {
                if (result.affectedRows != 0) {
                    console.log('Data deleted')
                    res.status(200).send({ 'delete': 'success' })
                }
                else {
                    console.log('NOT deleted')
                    res.status(200).send({ 'delete': 'failed' })
                }
            }
        })
})
//export router
module.exports = router
