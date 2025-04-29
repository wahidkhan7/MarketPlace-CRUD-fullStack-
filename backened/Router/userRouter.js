const express = require("express")
const {allUser,addUser,login,getUserbyID,updateUser,deleteUser,getdetails} = require("./../Controller/userController.js")

const userRouter = express.Router()

userRouter.get("/",allUser)
userRouter.post("/",addUser)
userRouter.post("/login",login)
userRouter.get("/:id",getUserbyID)
userRouter.put("/:id",updateUser)
userRouter.delete("/:id",deleteUser)
userRouter.get("/search/:key",getdetails)

module.exports = userRouter