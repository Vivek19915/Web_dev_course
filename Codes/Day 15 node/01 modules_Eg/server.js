// import modules 
let express = require('express')
let login = require('./login/login')   //self modules importing
let logout = require('./logout/logout')   //self modules importing

//create rets object 
let app = express()

//use modules
app.use('/login',login)         // to go to login module
app.use('/logout',logout)       // to go to logout module
//asign port
let port = 8080
app.listen(port)
console.log('Server started at port: ',port)


/*
http://localhost:8080/login
http://localhost:8080/login/login/admin/admin
http://localhost:8080/logout
http://localhost:8080/logout/logout/?uname=admin&upwd=admin


*/