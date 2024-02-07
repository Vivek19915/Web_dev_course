//inialyse project
//>npm init -y
//download multer and express modules
//>yarn add express multer --save
//import modules
let express = require('express')
let multer = require('multer')
//create rest object
let app = express()
//create storage
let storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads/')                                                      //imp --> in uploads folder it will upload the image 
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg")
    }
})
// let upload = multer({ storage }).single('profileImage')
let upload = multer({ storage }).array('profileImage', 2)
app.post("/profile", (req, res) => {
    upload(req, res, (err) => {
        if (err)
            res.json({ 'upload': 'err ' + err })
        else
            res.json({ 'upload': 'success' })
    })
})
//assign port no
app.listen(8080)
console.log('Server listening port no 8080')
/*
Create folder namely uploads in current path
test url http://localhost:8080/profile
    post request
    body -> form data -> key file   hover left part then down arrow will be visible
*/
