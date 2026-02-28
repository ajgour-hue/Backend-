const express = require("express")
const app = express()
const userModel = require("./models/notes.model")
const authRouter = require("./routes/auth.routes")
const cookieParser = require("cookie-parser")
app.use(cookieParser()) 
app.use(express.json())
app.use("/api/auth" , authRouter)
module.exports = app;
