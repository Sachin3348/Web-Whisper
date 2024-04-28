import mongoose from "mongoose";

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
        enum: ["Male", "Female", 'Other']
    },
    password: {
        type: String,
        minLength: 8
    },
    profilePic:{
        type: String,
        default: ''
    }
}, {timestamps: true})

export default User = mongoose.model('User', userSchema)