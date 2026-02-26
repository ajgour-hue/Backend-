
const express = require("express")
const app = express()
const noteModel = require("./models/notes.model.js")
app.use(express.json())

// post
// req.body = data.

app.post("/notes" , async(req , res)=>{
    const{title , description} = req.body
 const note = await noteModel.create({
    title,description
   })

   res.status(201).json({
    message:"Note Created",
    note
   })
})


app.get("/notes" , async (req,res)=>{
    const notes =  await noteModel.find()

    res.status(200).json({
        message:"Notes Fetched",
        notes 
    })
})


app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);

    await noteModel.findByIdAndDelete(id);

    res.status(200).json({
        message: "deleted"
    });
});

module.exports=app