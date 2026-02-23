const express = require("express")
const app = express()
const noteModel = require("./model/notes.model")
const cors = require('cors')
app.use(cors())
app.use(express.json())


// post 
// req.body = data
app.post("/notes" , async (req ,res)=>{
    const {title , description ,age} = req.body
    const note = await noteModel.create({
        title,description,age
    })
 res.status(201).json({
    message:"note created sucessfully ."
})
 console.log(req.body)
})

// get - fetch
app.get("/notes" ,async (req,res)=>{

    const notes = await noteModel.find()
    res.status(200).json({
        message : "NOTE  FETCHED",
        notes
    })
})

// delete
// api/notes/:id = req.params.id
app.delete("/api/notes/:id" , async(req,res)=>{
    const id = req.params.id
    const note =await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "deleted"
    });
})

// patch data send in the form of objects
app.patch("/api/notes/:id", async (req,res)=>{
    const id = req.params.id
    const {description} = req.body
    await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message: "note updated "
    })
})

module.exports=app

