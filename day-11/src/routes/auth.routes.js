const express = require("express")

const jwt = require("jsonwebtoken")

const userModel = require("../models/notes.model")

const authRouter = express.Router()

const bcrypt = require("bcrypt");

const crypto = require("crypto")

authRouter.post("/register", async (req, res) => {
    const { email, name, password } = req.body

    const isUserAlreadExists = await userModel.findOne({ email })
    if (isUserAlreadExists) {
        return res.status(400).json({
            message: "user already exists ."
        })
    }


    // HASHING OF THE PAASSWORD 
    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        email, name,  password : hash
    })

    // token creation
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token )

    res.status(201).json({
        message: "user registered",
        user,
        token
    })
})


// checking cokies
authRouter.post("/protected" , (req,res)=>{
 console.log(req.cookies);
 
})

// lgin credentails
authRouter.post("/login" , async(req , res)=>{
    const {email , password} = req.body

    const user = await userModel.findOne({email})

    if(!user) {
        return res.status(404).json({
            message:' user does nor found with this email address'
        })
    }

     const isPasswordMatched = user.password ===  crypto.createHash("md5").update(password).digest("hex")

     if(!isPasswordMatched){
          return res.status(404).json({
            message:' invalid  password '
        })
     }


     const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt_token", token )

    res.status(201).json({
        message: "user loggerd in . . ",
        user,
        
    }) 
})

module.exports = authRouter 
