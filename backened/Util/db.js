const mongoose = require("mongoose")

async function dbConnect(){
    try {
        DB_URL=process.env.DB_URL
        DB_NAME=process.env.DB_NAME
        await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log("Database Connected")
       
        
    } catch (error) {
        throw error
        
    }

}
module.exports = dbConnect