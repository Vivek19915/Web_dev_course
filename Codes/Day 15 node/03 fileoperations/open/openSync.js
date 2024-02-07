// import fs module
let fs = require('fs')
let path = require('../path')
//opening files synchronously
fs.openSync(path,"r+")

//so when the file open succesfully only then console log will run
// otherwise it will show error --> try by chaning the path 
console.log("File open Successfully")

// modes:- 
//  r -> open file for reading 
//  r+ -> read + write
//  rs -> read synchronous
//  w -> writing (create file if doesn't exist, truncate if exist.)
//  w+-> read + write
//  a -> append
//  a+ -> read and append
