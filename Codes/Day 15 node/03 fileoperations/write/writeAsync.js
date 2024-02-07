//import fs module
let fs = require('fs')
let path = require('../path')
let writableata = "hi"
//write data asynchronously
fs.writeFile(path,writableata , (err) => {
    if (err)
        console.log('Error while writing data')
    else
        console.log('Data write success')
})
