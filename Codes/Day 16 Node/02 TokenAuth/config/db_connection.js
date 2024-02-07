//import mysql module
let mysql = require('mysql2')
//import database properties
let dbproperties = require('./db_properties')
//export the connection
module.exports = {
    getConnection: () => {
        return mysql.createConnection(dbproperties)
    }
}
