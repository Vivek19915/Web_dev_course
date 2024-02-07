// import fs module
let fs = require("fs")
 
//reading data synchronously --> 3 ways
// let data = fs.readFileSync("../static/sample.txt" , 'utf-8') 
// console.log(data)


// let data = fs.readFileSync("../static/sample.txt")
// console.log(data.toString())


let path = require("../path")
let data = fs.readFileSync(path)
console.log(data.toString())

