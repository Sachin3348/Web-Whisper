import mongoose from 'mongoose'

export default async function connectToMongoDB () {
    try {
        await mongoose.connect(process.env.MONGODB_STRING)
        console.log('connected to mongoDB')
    } catch (error) {
        console.log(`error while connecting to MongoDB`, error.message)
    }
}