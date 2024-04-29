import jwt from 'jsonwebtoken'
import userModel from '../model/user.model.js'

export default async function(req, res, next) {
    try {

        const token = req.cookies.userToken

        if(!token){
            return res.status(401).send({status: false, message: "Unauthorized - No token provided."})
        }

        const decodedToken = jwt.verify(token, process.env.USER_SECRET_JWT_TOKEN)
        if(!decodedToken){
            return res.status(401).send({status: false, message: "Unauthorized - Invalid token."})
        }
            
        const user = await userModel.findOne({_id: decodedToken.userId, isDeleted: false})
        
        if(!user){
            return res.status(404).send({status: false, message: "User not found."})
        }

        req.user = user
        next()
    } catch (error) {
        return res.status(401).send({status: false, message: "Unauthorized - Invalid token."})
    }
}