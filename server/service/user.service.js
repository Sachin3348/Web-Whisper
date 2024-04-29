import bcrypt from 'bcryptjs'
import userModel from "../model/user.model.js";
import { BOY_PROFILE_PIC, GIRL_PROFILE_PIC } from "../utils/constant.js";

export const userSignup = async ({userName, fullName, password, gender, age}) => {
    const isUserNameExists = await userModel.findOne({userName})
    if(isUserNameExists){
        return { status: false, message: "User name already exists, Please enter different username", isErrorForUser: true, code: 400}
    }

    const salt = await bcrypt.genSalt(11)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await userModel.create({
      userName,
      fullName,
      password: hashedPassword,
      gender,
      age,
      profilePic: gender === "female" ? `${GIRL_PROFILE_PIC}?username=${userName}` : `${BOY_PROFILE_PIC}?username=${userName}`
    });
    return {status: true, message: "User created", code: 201}
}

export const userLogin = async ({userName, password}) => {
    const user = await userModel.findOne({userName, isDeleted: false})

    const isPasswordCorrect = await bcrypt.compare(password, user?.password || '')
    if(!user || !isPasswordCorrect){
        return {status: false, message: "Invalid username or password", code: 400, isErrorForUser: true}
    }
    return {
        status: true,
        data: {
            _id: user._id,
            userName: user.userName,
            fullName: user.fullName,
            profilePic: user.profilePic
        }
    }
}

