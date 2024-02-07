//import modules
let express = require('express')
let mysql = require('mysql2')
//create rest object
let app = express()
//create database properties
let db_properties = {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "nodedb",
    "connectionLimit": 100                
}
//create pool
let pool = mysql.createPool(db_properties)
//create restapi
app.get("/", (req, res) => {
    pool.getConnection((err, connection) => {
        if (err)
            console.log('Error in connection')
        else {
            connection.query(`select * from products`, (err, recordsArray) => {
                if (err)
                    connection.log('Error in db query:- ' + err)
                else
                    res.send(recordsArray)
                //release the connection
                connection.release()
            })
        }
    })
})
//assign port no
app.listen(8080)
console.log("Server listening port no 8080")
