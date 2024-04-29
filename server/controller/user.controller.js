import userModel from '../model/user.model.js';

export const getUserForSidebar = async (req, res) => {
    const loggedUserId = req.user?._id
    try {
        const userList = await userModel.find({isDeleted: false, _id: {$ne: loggedUserId}}).select({password: 0})
        return res.status(200).send({status: true, data: userList})
    } catch (error) {
        console.log("Error while getting user dor sidebar with message", error.message, {loggedUserId})
        return res.status(500).send({status: true, message:"Internal Server Error"})
    }
}