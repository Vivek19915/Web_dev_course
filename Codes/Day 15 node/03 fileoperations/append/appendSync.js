//import fs module
let fs = require('fs')
let path = require('../path')
//append data asynchronously

let appendtext = ' Good Morning...! Vivek'

fs.appendFile(path, appendtext, (err) => {
    if (err)
        console.log('Error while appending data')
    else
        console.log('Append Success')

        
    console.log(fs.readFileSync(path, 'utf-8'))
})
