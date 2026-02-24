
const express = require("express");
const app = express();
app.use(express.json()) // middler

// app.get("/" , (req , res )=>{
//     console.log("hello");

// })

const notes = [];

// server par resouce post k through
app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body)
    res.send('notes created succesfully !!')
})

// server s front par showing
app.get("/notes" , (req,res)=>{
     res.send(notes)
})

app.listen(3000, () => {
    console.log("Server is in running state");
})

