// import express module
let express = require('express')
let app = express()


/*
// eg01 middleware
const myMiddleware = (req,res,next)=>{
    console.log('I am middleware')
    next()        //used to switch to api again --> if you comment the next it will not swiych to api and remain in myMiddlware function
}

//use middleware
app.use(myMiddleware)

//create rest api
app.get("/",(req,res)=>{
    console.log('I will execute after middleware')
})



// eg02 middleware
const myMiddleware = (req,res,next)=>{
    let uname = req.query.uname
    let upwd = req.query.upwd
    if(uname ==='admin' && upwd ==='admin'){
        //do the processig part before authentication
        console.log("i am middleware")
        next()
    }
    else res.send({'message' : 'Authentication failed'})
}

app.use(myMiddleware)
app.get("/",(req,res)=>{
    res.send({'message':'Authentication success'})
})
*/



// eg03 middleware
let myfun = require("./my_fun")
//use middleware
app.use(myfun({uname:'admin' , upwd:'admin'}))

//creating rets api
app.get("/" , (req,res)=>{
    res.send({'message':'Authentication success'})
})
app.listen(8080)