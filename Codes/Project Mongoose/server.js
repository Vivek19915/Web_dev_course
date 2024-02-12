//import modules
const express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
let mongoose = require('mongoose')
//import url
let url = require('./url')
//creater rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
////////////////////////////////////////////////
//connect to mongodb
mongoose.connect(url).then(() => {
    console.log('Connection success')
}, () => {
    console.log('Connection Failed')
})
////////////////////////////////////////////////
//=================================================//
//import routes
const productRoutes = require('./routes/productRoutes')
//use routes
app.use("/", productRoutes)
//=================================================//
//create port
let port = 8080
//assign port no
app.listen(port, () => {
    console.log('Server listening port no :- ' + port)
})
