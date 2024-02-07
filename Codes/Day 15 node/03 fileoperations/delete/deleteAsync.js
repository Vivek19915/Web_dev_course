//importing fs module
let fs = require('fs')

//deleting file
fs.unlink(require('../path'), (err) => {
    if (err)
        console.log('Error while deleting file')
    else
        console.log('Delete success')
})
