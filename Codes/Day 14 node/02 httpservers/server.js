//importing http module
let http = require('http')
let server = http.createServer((req,res)=>{
    // set MIMIE type 
    res.writeHead(200,{'content-type' : 'text/html'})
    res.write('<h1> Welcome to http Server</h1>')
    res.end();
})

// assign port number to server 
server.listen(8080)
console.log("Server listening port no 8080")


/*
start server 
> node server
url http://localhost:8080
*/

