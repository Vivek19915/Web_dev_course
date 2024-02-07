// importing fs module
let fs = require('fs')
//deleting data from file async onwards index 5
fs.truncate(require('../path'), 5, (err) => {
    if (err)
        console.log('Error while deleting data')
    else
        console.log("Delete success")
})
