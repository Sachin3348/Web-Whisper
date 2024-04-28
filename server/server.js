import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
import mongoDbConnection from './db/mongoDbConnection.js'

dotenv.config()

const app = express()

app.use(express.json()) //parses the json payload
app.use('/api/auth', authRoute)

app.listen( process.env.PORT || 3000, () => {
    mongoDbConnection()
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
