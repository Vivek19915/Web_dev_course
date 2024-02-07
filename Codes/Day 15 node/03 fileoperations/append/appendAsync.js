//import fs module
let fs = require('fs')
let path = require('../path')

let appenddata =  '\t!! Welcome Async !!'
//append data synchronously
fs.appendFileSync(path,appenddata)
console.log('Data appended\n', fs.readFileSync(path, 'utf-8'))
