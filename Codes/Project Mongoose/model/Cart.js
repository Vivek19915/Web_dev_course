//import mongoose
const mongoose = require('mongoose')
//create schema
const cartSchema = new mongoose.Schema({
    p_id: Number,
    p_cost: Number,
    qty: Number,
    p_img: String,
    u_name: String
})
module.exports = mongoose.model("Cart", cartSchema)
