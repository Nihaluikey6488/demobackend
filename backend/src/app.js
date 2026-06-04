import express from 'express'
import authRoutes from '../src/routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
let app=express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use('/api/auth',authRoutes)

export default app