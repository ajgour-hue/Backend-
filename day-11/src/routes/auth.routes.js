const express = require("express")



const userModel = require("../models/notes.model")

const authRouter = express.Router()

authRouter.post("/register" ,async (req,res)=>{
    const {email , name , password} = req.body

    const isUserAlreadExists = await userModel.findOne({email})
    if(isUserAlreadExists) {
        return res.status(400).json({
            message:"user already exists ."
        })
    }

    const user = await userModel.create({
        email , name , password
    })

    res.status(201).json({
        message:"user registered",
        user
    })
})



module.exports = authRouter 