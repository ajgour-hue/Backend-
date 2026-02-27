
const express = require("express");
const app = express();  //instance  of the server
 app.use(express.json())  // middler used to read value of body

// aim is to post , get , patch , delete , put

const notes = [];


app.post("/notes" , (req, res)=>{
    console.log(req.body);  // jo ouput postman se diya hai ya phir client ki request
    notes.push(req.body)
    res.send("node is created ") // response sended
})


app.get("/notes" , (req , res ) =>{
 res.send(notes)
})

// dlete k liye chaiye paramas (ek ko jab delete karna ho ) .. body (decription chaiye ho pura)
app.delete("/notes/:index" , (req , res)=>{
    delete notes[req.params.index]
  res.send("node delete as a succesfully")
})


// update
app.patch("/notes/:index" , (req,res)=>{   
     notes[req.params.index].description = req.body.description

    res.send("updation done")
})


// put
app.put("/notes/:index" , (req,res)=>{
   const index = req.params.index
   notes[index] = req.body
    res.send("updation done")

})

module.exports = app // this is expoting to next file in a folder