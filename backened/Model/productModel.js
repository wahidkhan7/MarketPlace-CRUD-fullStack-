const mongoose = require("mongoose")
const ListingSchema = new mongoose.Schema({
    "itemName":{
        type:String,
        require:true
    },
    "category":{
        type:String,
        enum:[ 'Book', 'Engineering Equipment', 'Stationery', 'Electronics', 'SportsEquipment', 'Clothing'],
        require:true

    } ,
    "description":{
        type:String,
        require:true

    }, 
    "condition":{
        type:String,
        enum:['New','Good','Poor'],
        require:true


    },
    "price":{
        type:String,
        require:true

    },
    "imageName":{
        type: String,
        require: true
    },
 
    "owner":{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true

    } 
},{
    timestamps: true
 })
const Listing = mongoose.model('Listing',ListingSchema)
module.exports = Listing