import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId
const messageSchema = new mongoose.Schema({
    senderId: {
        type: objectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: objectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

const MessageModel = mongoose.model("Message", messageSchema)

export default MessageModel