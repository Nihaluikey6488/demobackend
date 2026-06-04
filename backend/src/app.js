import express from 'express'
import authRoutes from '../src/routes/auth.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
let app=express()
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use('/api/auth',authRoutes)

export default app