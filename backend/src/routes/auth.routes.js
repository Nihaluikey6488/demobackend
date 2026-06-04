import express from 'express'
import { registerController } from '../controllers/auth.controller.js'
let router =express.Router()

router.post('/register',registerController)
router.get('/',(req,res)=>{
    res.send("Nihal bhai server connected hai")
})
export default router