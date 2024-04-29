import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoute from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'
import userRoute from './routes/user.route.js'
import mongoDbConnection from './db/mongoDbConnection.js'

dotenv.config()

const app = express()

app.use(express.json()) //parses the json payload
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/message', messageRoute)
app.use('/api/user', userRoute)

app.listen( process.env.PORT || 3000, () => {
    mongoDbConnection()
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
