// server create karna and 
// server ko config karna

const express = require("express");



const app  = express()  //chahe to yhi call means start kar sakte hai server ko lekin hum dusri file m karna chatte hai 
app.use(express.json())

const notes = [
    // {
    //     title: "test title 1", 
    //     description : " test description 1"
    // }
] 

app.post("/notes" , (req , res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.send("notes created")
    
})

app.get("/notes" , (req , res)=>{
    res.send(notes)
})
// deletenotes 
// params = > //delete/notes/0
app.delete("/notes/:index", (req , res)=>{
    // console.log(req.params);
    delete notes[req.params.index]
    res.send("node deleted as a succesfully")
    
})

// updation partial to use hoga patch
app.patch("/notes/:index" , (req , res)=>{

    notes[req.params.index].description = req.body.description
    res.send("node is to up date ")

})

module.exports = app;