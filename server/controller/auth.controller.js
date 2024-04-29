import {userLogin, userSignup} from '../service/user.service.js'
import generateUserToken from '../utils/generateUserToken.js'

export const signup = async (req, res) => {
    const {userName='', fullName='', password='', confirmPassword='', gender='', age} = req.body
    try {
        if(!userName.trim() || !fullName.trim() || !password.trim() || !gender.trim() || !age || !confirmPassword.trim()){
            console.log("userName, fullName, password, gender and age all fields are mandatory", {userName, fullName, password, gender, age})
            return res.status(400).send({status: false, message: "Missing required fields"})
        }
        if(password !== confirmPassword){
            console.log("Password is not matching", {password, confirmPassword})
            return res.status(400).send({status: false, message: "Password is not matching"})
        }
        const {code, status, message, isErrorForUser} = await userSignup({userName, fullName, password, gender, age})
        console.log({message, status, code})
        return res.status(code || 200).send({status, message, ...(isErrorForUser && {isErrorForUser})})
    } catch (error) {
        console.log(`Error while creating user with message: ${error.message}`, {userName, fullName, password, gender, age})
        return res.status(500).send({status: false, message: "Internal Server Error"})
    }
}
export const login = async (req, res) => {
    const {userName='', password=''} = req.body
    try {
        if(!userName.trim() || !password.trim()){
            console.log("username and password are required", {userName, password})
            return res.status(400).send({status: false, message: "Missing required fields"})
        }
        const {data, code, isErrorForUser, message, status} = await userLogin({userName, password})
        if(status){
            generateUserToken(data._id, res)
        }
        return res.status(code || 200).send({status, data, message, ...(isErrorForUser && {isErrorForUser})})

    } catch (error) {
        console.log(`Error while login user with message: ${error.message}`, {userName, password})
        return res.status(500).send({status: false, message: "Internal Server Error"})
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("userToken", "", {maxAge: 0})
        return res.status(200).send({status:true, message: "Logged Out Successfully"})
    } catch (error) {
        console.log("Error while logging out user", error.message)
        res.status(500).send({status:false, message: "Internal Server Error"})
    }
    
}