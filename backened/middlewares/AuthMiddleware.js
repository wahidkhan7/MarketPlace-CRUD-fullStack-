const jwt = require("jsonwebtoken")
async function verifyToken(req,res,next){

    let authHeader = req.header('Authorization')

    if(!authHeader){
        return res.status(400).json({message:"Token not found"})
    }

    let token = authHeader.split(" ")[1]
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRECT)
        console.log(decoded);
        req.user = decoded
        next()
        
        
    } catch (error) {
        res.status(400).json({message:"Invalid Token"})
        
    }

}

module.exports = verifyToken