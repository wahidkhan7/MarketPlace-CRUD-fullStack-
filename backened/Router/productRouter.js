
const express = require("express")  

const {addList,allList,getListbyID,uppdateImage,deleteList,updateList,searchItem} = require("../Controller/productController.js")
const upload= require("../middlewares/fileUpload.middleware.js")
const verifyToken = require("../middlewares/AuthMiddleware.js")

const listRouter = express.Router()

 listRouter.get("/", allList)
 listRouter.post("/",verifyToken,upload.single('imageName'),addList)
 listRouter.get("/:id",getListbyID)
 listRouter.delete("/:id",verifyToken,deleteList)
 listRouter.put("/image/:id",verifyToken,upload.single("imageName"),uppdateImage)
 listRouter.put("/:id",verifyToken,updateList)
 listRouter.get("/search/:searchTerm",searchItem)


module.exports = listRouter
