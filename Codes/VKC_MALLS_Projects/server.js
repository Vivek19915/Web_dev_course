//import modules express body-parser cors swagger-ui-express swagger-jsdoc
let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
let swaggerUI = require("swagger-ui-express")
let swaggerJsDoc = require("swagger-jsdoc")
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origin Resource Sharing -> communication among various ports
app.use(cors())
//create port
let port = process.env.PORT || 8080
////////////////////////////////////////////////////////////////
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'VKC Malls Management API',
            version: "1.0.0",
            description: "Simple Product Management API"
        },
        servers: [
            {
                url: "http://localhost:8080"
            }
        ]
    },
    apis: ["./Routes/*.js"]
}


//Initialise swaggerJsDocs specs by passing options to it
const specs = swaggerJsDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
////////////////////////////////////////////////////////////////
//import apiroutes
const apiRoutes = require("./Routes/apiRoutes")
//use apiRoutes
app.use("/", apiRoutes)
//assign port no
app.listen(port, () => {
    console.log("Server listening port no:- ", port)
})
/*
    >node server
    http://localhost:8080/api-docs/ -> check in browser
*/
