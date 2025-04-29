const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    "name":{
        type:String,
        require:true
    },
    "mobile":{
        type:String,
        require:true,
        maxLength:10,
        unique:true
    },
    "email":{
        type:String,
        require:true,
        unique:true
    },
    "sic":{
        type:String,
        require:true,
        unique:true
    },
    "password":{
        type:String,
        require:true
    }
})
const User = mongoose.model("User",userSchema)
module.exports= User