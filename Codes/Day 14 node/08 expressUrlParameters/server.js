let express = require('express')
let port = 8080

let app = express();

app.get("/login/:uname/:upwd",(req,res)=>{
    // params is the predefined key used to read parameters from url 
    let uname = req.params.uname
    let upwd = req.params.upwd

    console.log("Parameters are : ",uname,upwd)

    if(uname === 'admin' && upwd === 'admin'){
        res.send({'login' : 'success'})
    }
    else if(uname === 'vivek' && upwd === 'kumar'){
        res.send({'login' : 'success'})
    }
    else res.send({'login' : 'failed'})

})

app.listen(port,()=>{
    console.log("Server running on port:-  ", port)
})


// testing url 
// http://localhost:8080/login/admin/admin 
// http://localhost:8080/login/vivek/kumar 
// http://localhost:8080/login/admin/kumar 