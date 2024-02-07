// importing fs module
let fs = require('fs')
//deleting data from file sync onwards index 5
fs.truncateSync(require('../path'), 5)