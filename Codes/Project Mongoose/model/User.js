//import mongoose
const mongoose = require('mongoose')
//create schema
const userSchema = new mongoose.Schema({
    u_id: Number,
    u_name: String,
    u_pwd: String,
    u_email: String,
    u_address: String,
    u_token: String,

})
module.exports = mongoose.model("User", userSchema)
