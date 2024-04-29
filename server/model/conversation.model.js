import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId

const conversationSchema = new mongoose.Schema({
    participants:[{
        type: objectId,
        ref: "User"
    }],
    messages:[{
        type: objectId,
        ref: "Message",
        default: []
    }],
    isDeleted: {
        type: Boolean,
        default: false
    }
},{timestamps: true})

const ConversationModel = mongoose.model("Conversation", conversationSchema)

export default ConversationModel
