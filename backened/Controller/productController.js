const Listing = require("../Model/productModel.js")

async function addList(req,res){
    try {
        let list = req.body
        let fileName = req.file.filename
        list.imageName = fileName

        list.owner = req.user.id
       
        console.log(list);
        
        list =await Listing.create(list)
        res.status(201).send(list)
        
    } catch (error) {
        console.log(error);
        
        res.status(400).send(error.message) 
    }
}

async function allList(req,res){
    try {
        let lists = await Listing.find().populate("owner")
        let modList = lists.map( event => (
            {
                ...event.toObject(),
                imageName : " http://localhost:3000/uploads/"+event.imageName
            }
        ))
        res.status(200).send(modList)
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}


async function getListbyID(req,res){
    try {
        let {id} = req.params
        let list = await Listing.findOne({_id:id}).populate("owner","-password")
        let modList = 
            {
                ...list.toObject(),
                imageName : "http://localhost:3000/uploads/"+list.imageName
            }
        if(list)
       {
        res.status(200).send(modList)
       }
       else{
        res.status(404).send("user not found")
       }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function uppdateImage(req,res){
    try {
        let {id} = req.params
        let fileName = req.file.filename
       let list = await Listing.findByIdAndUpdate({_id:id},{imageName:fileName},{new:true}).populate("owner")
       let modList = 
       {
           ...list.toObject(),
           imageName : "http://localhost:3000/uploads/"+list.imageName
       }
   if(list)
  {
   res.status(200).send(modList)
  }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function updateList(req,res){
    try {
        let {id} = req.params
        let newList = req.body
        
       let list = await Listing.findOneAndUpdate({_id:id},newList,{new:true}).populate("owner")
       let modList = 
       {
           ...list.toObject(),
           imageName : "http://localhost:3000/uploads/"+list.imageName
       }
       if(list)
        {
         res.status(200).send(modList)
         }
       else{
        res.status(404).send("product not found")
       }
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}

async function deleteList(req,res){
    try {
        let {id} = req.params
        let list = await Listing.findOneAndDelete({_id:id})
        if(list){
            res.status(200).send(list)
        }
        else{
            res.status(400).send("cannot find product")
        }
        
    } catch (error) {
     res.status(400).send(error.message)   
    }
}
async function searchItem(req,res){
    try {
        let {searchTerm} = req.params
        if(!searchTerm)
        {
            res.status(400).send("Search Item is required")
        }
        const results = await Listing.find({itemName: { $regex: searchTerm, $options: "i" },}).populate("owner","-password")
        if(results){
            let modList = results.map( res => (
                {
                    ...res.toObject(),
                    imageName : " http://localhost:3000/uploads/"+res.imageName
                }
            ))
            res.status(200).send(modList)
        }
        else{
            res.status(404).send("cannot find item")
        }
      
        
    } catch (error) {
        res.status(400).send(error.message)   
    }
}
module.exports= {addList,allList,getListbyID,uppdateImage,deleteList,updateList,searchItem}