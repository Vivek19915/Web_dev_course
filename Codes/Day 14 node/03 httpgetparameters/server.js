let http = require('http')
let url = require('url')
// Creating an HTTP server: 


let server = http.createServer((req , res)=>{
    //url will be in req
    let obj = url.parse(req.url,true).query            //It extracts the GET parameters from the request URL  
    let uname = obj.username
    let upwd = obj.password
    
    // set MIME type
    res.writeHead(200,{'content-type' : 'text/html'})
    if(uname === 'admin'  && upwd === 'admin'){
        res.write("<h1> Login Success</h1>")
    }
    else  res.write("<h1> Login failed</h1>")
    res.end()                        //stoping the response coming from our http server
})

// assign port number to server 
server.listen(8080)
console.log("Server listening port no 8080")

// url http://localhost:8080/?uname=admin&upwd=admin
//HHTP GET PARAMETERS KE CASE ME AESI HI LINKHOGI