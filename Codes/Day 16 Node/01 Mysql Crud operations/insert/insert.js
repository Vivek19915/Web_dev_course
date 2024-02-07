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
router.post("/", (req, res) => {
    let p_id = req.body.p_id
    let p_name = req.body.p_name
    let p_cost = req.body.p_cost
    connection.query(`insert into products values (${p_id}, '${p_name}', ${p_cost})`,
        (err, result) => {
            if (err)
                res.status(400).send({ 'insert': 'error ' + err })
            else {
                if (result.affectedRows != 0) {
                    console.log('Data inserted')
                    res.status(200).send({ 'insert': 'success' })
                }
                else {
                    console.log('NOT inserted')
                    res.status(200).send({ 'insert': 'failed' })
                }
            }
        })
})
//export router
module.exports = router
