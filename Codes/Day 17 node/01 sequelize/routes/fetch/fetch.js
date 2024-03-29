// import express module 
const express = require('express')

//creating router instance
const router  = express.Router()

// import db 
const db = require('../../models')

//get all records
router.get("/all",(req,res)=>{
    db.product.findAll().then(result=>{
        res.send(result);            //db query output will be in result
    })
})

//get single record by id
router.get("/find/:id", (req, res) => {
    db.product.findAll({
        where: {
            id: req.params.id
        }
    }).then(result => {
        if (result.length == 0)
            res.send('Record not found')
        else
            res.send(result)
    })
})
//export router
module.exports = router
