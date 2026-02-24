const express = require("express");
const app = express() ;
app.use(express.json()) //middleware


const notes = [];


// user n data req.body k under daal diya hai ab data server par h 
app.post("/notes" , (req , res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.send('note created ');
})


// user data ko dekhna chata h 
app.get("/notes" , (req, res) => {
    res.send(notes)
})



app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
}); 