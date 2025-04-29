const express = require("express")
const dbConnect= require("./Util/db.js")
const userRouter= require("./Router/userRouter.js")
const listRouter = require("./Router/productRouter.js")
const cors = require("cors")
const path = require('path')
require('dotenv').config();


const PORT = process.env.PORT || 8000

const app = express()

app.use("/uploads", express.static(path.join(__dirname, 'uploads')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/",(req,res)=>{
    res.send("Welcome to the Campus and Event management")
})

app.use(cors())
app.use("/users",userRouter)
app.use("/list",listRouter)

app.listen(PORT, function(){
    console.log("Server is listining at",PORT);
    dbConnect();
    
})