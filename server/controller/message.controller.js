import { isValidObjectId } from "mongoose"
import ConversationModel from "../model/conversation.model.js"
import MessageModel from "../model/message.model.js"


export const sendMessage = async (req, res) => {
    const {message = ''} = req.body
    const receiverId = req.params?.id
    const senderId = req.user?._id
    try {
        if(!isValidObjectId(receiverId) || !message.trim()){
            console.log(`id and message are required and id must be valid objectId`, {receiverId, message})
            return res.status(400).send({status: false, message: "id and message are required and id must be valid id"})
        }
        
        let conversation = await ConversationModel.findOne({
                participants: {
                    $all: [receiverId, senderId]
                },
                isDeleted: false
        })

        if(!conversation){
            conversation = await ConversationModel.create({
                participants: [receiverId, senderId]
            })
        }

        const newMessage = new MessageModel({
            senderId,
            receiverId,
            message
        })

        conversation.messages.push(newMessage._id)

        //Socket IO logic will be here

        await Promise.all([newMessage.save(), conversation.save()])

        return res.status(201).send({status: true, data: newMessage})
    } catch (error) {
        console.log(`Error while sending message. errorMessage: ${error.message}`, {senderId, receiverId, message})
        return res.status(500).send({status: true, message:"Internal Server Error"})
    }
}