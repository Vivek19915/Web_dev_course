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
router.put("/", (req, res) => {
    let p_id = req.body.p_id
    let p_name = req.body.p_name
    let p_cost = req.body.p_cost
    connection.query(`update products set p_name = '${p_name}', p_cost = ${p_cost} where p_id = ${p_id}`,
        (err, result) => {
            if (err)
                res.status(400).send({ 'update': 'error ' + err })
            else {
                if (result.affectedRows != 0) {
                    console.log('Data updated')
                    res.status(200).send({ 'update': 'success' })
                }
                else {
                    console.log('NOT updated')
                    res.status(200).send({ 'update': 'failed' })
                }
            }
        })
})
//export router
module.exports = router
