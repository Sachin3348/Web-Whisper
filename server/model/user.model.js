import mongoose from "mongoose";
import { GENDER_LIST } from "../utils/constant.js";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true
    },
    userName:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    age:Number,
    gender:{
        type: String,
        enum: GENDER_LIST
    },
    password: {
        type: String,
        minLength: 8
    },
    profilePic:{
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

userSchema.index = {userName: 1}
const User = mongoose.model('User', userSchema)
export default User