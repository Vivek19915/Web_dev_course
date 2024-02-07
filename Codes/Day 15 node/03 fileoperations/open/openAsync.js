// import fs module
let fs = require('fs')
let path = require('../path')
//opening files Asynchronously
fs.open(path,"w",(err)=>{
    if(err)console.log("Error while opening files")
    else {
        //now write data in the file
        fs.writeFileSync(require('../path'),'Hello... data written by r+!')
        console.log("File open Successfully")
    }
})



// modes:- 
//  r -> open file for reading 
//  r+ -> read + write
//  rs -> read synchronous
//  w -> writing (create file if doesn't exist, truncate if exist.)
//  w+-> read + write
//  a -> append
//  a+ -> read and append
