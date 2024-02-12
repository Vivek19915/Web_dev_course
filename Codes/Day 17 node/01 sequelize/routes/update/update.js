//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import db
const db = require("../../models")
const { json } = require('sequelize')



//update a record
router.put("/", (req, res) => {
    let obj = {
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_cost: req.body.p_cost
    }
    // updating obj values where id == req.body.id 
    db.product.update(obj, { where: { id: req.body.id } })
        .then((result) => {                     //result will have the output of the above query
            if (result == 0)
                res.send({ 'record': 'not found' })
            else
                res.send({ 'record': 'upadated' })
        })
})
//export router
module.exports = router



// for update like this pass id in body raw json 
// {
//     "id":3,
//     "p_id": 555,
//     "p_name":"p_six_updated_seven",
//     "p_cost": 7777
// }