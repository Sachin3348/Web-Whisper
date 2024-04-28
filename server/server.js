import express from 'express'
import dotEnv from 'dotenv'
import authRoute from './routes/auth.route.js'

dotEnv.config()

const app = express()

app.use('/api/auth', authRoute)

app.listen( process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
