const jwt = require("jsonwebtoken")
const User = require("./../Model/userModel.js")

// async function generateToken(id,email){
//     return jwt.sign({id,email},process.env.JWT_SECRECT)
// }


async function allUser(req,res){
    try {
        let users = await User.find()
        res.status(200).send(users)
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}
async function addUser(req,res){
    try {
        let newUser = req.body
        let user = await  User.create(newUser)
        res.status(201).send(user)
        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
}
async function getUserbyID(req,res) {
    try {
        let {id} = req.params
        let user = await User.findOne({_id:id})
        if(user)
        {
           res.status(200).send(user)
        }
        else
        {
            res.status(404).send("user not Found")
        }
    } catch (error) {
        res.status(400).send(error.message)
        
    }
    
}
async function updateUser(req,res) {
    try {
        let {id}= req.params
        let user = req.body
    
        let updateduser = await User.findOneAndUpdate({_id:id},user)
        if(updateUser){
            res.status(201).send(updateduser)
        }
        else{
            res.status(404).send('cannot find user')
        }

        
    } catch (error) {
        res.status(400).send(error.message)
        
    }
    
}
async function deleteUser(req,res)
{
    try {
        let {id} = req.params
       let user = await User.findOneAndDelete({_id:id})
       if(user){
        res.status(200).send(user)
       }
       else{
        res.status(400).send("cannot find user")
       }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getdetails(req,res){
    try {
        let {key} = req.params
        console.log(key);
        
        let user = await User.findOne({$or:[{mobile:key},{sic:key},{email:key},{name:key}]})
        if(user){
            res.status(200).send(user)
           }
           else{
            res.status(400).send("cannot find user")
           }
        
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function login(req,res){
    let {email,password} = req.body
    try {
        
        let user = await User.findOne({email})
    
        if(user){
            if(user.password==password){
    
                let token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRECT)
    
                res.status(200).send({
                    name:user.name,
                    token:token
                })
                // res.status(200).json({
                //     name:user.name,
                //     token: generateToken(user._id,user.email)
                // })
            }
        }
        else {
            res.status(400).send("Invalid username or password")
        }
    } catch (error) {
        res.status(400).send("Invalid credentials")
        
    }



}
module.exports={allUser,addUser,getUserbyID,updateUser,deleteUser,getdetails,login}