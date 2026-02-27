
const express = require("express")
const mongoose = require("mongoose")
const noteModel = require("./models/notes.model")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json()) 
app.use(express.static("./public"))

app.post("/notes",async(req,res)=>{
    const{title , description ,age} = req.body
    const note = await noteModel.create({
        title,description,age
    })
    res.status(201).json({
        message:"note is created succesfully"
    })
})


app.get("/api/notes", async(req,res)=>{
   const notes = await noteModel.find() 

     res.status(200).json({
        message:"Notes Fetched",
        notes
    })

})

app.delete("/api/notes/:id" ,async (req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)

      res.status(200).json({
        message: "deleted"
    });
})


app.patch("/api/notes/:id", async(req,res)=>{
       const id = req.params.id
    const {description} = req.body
   await noteModel.findByIdAndUpdate(id ,{description})    
     res.status(200).json({
        message: "note updated "
    })
})




app.use('*name',(req ,res)=>{
    // res.send("this is wild card ")

    res.sendFile(path.join(__dirname, "..","/public/index.html"))
})

module.exports = app