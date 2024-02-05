let http = require('http')
let qs = require('querystring')

//create server
let server = http.createServer((req,res)=>{
    //set MIME type
    res.writeHead(200,{'content-type' : 'text/html'})
    let body = ''

    //listening post parameters
    req.on("data",(result)=>{
        body = body+result
    })
    console.log(req)


    //end callback to node 
    req.on("end",()=>{
       
        let obj = qs.parse(body)
        let uname = obj.username
        let upwd = obj.password

        if(uname === 'admin'  && upwd === 'admin'){
            res.write("<h1 style='color:green'> Login Success</h1>")
        }
        else  res.write("<h1 style='color:red'> Login failed</h1>")
        res.end()
    })

})


server.listen(8080)
console.log("Server listening port no 8080")
