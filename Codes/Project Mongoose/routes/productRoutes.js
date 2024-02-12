//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import all Api
const productApi = require('../apis/productApis')
const userApi = require('../apis/userApis')
const cartApi = require('../apis/cartApis')

//fetch all records
router.get("/fetchProduct", productApi.products_all)
//insert a record
router.post("/insertProduct", productApi.insert_product)
//update a record
router.put("/updateProduct", productApi.update_product)
//delete a record
router.delete("/deleteProduct", productApi.delete_product)
//export router
module.exports = router
