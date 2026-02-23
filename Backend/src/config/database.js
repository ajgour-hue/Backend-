const mongoose = require("mongoose")

function connetToDB(){
    mongoose.connect("mongodb+srv://ajay:h3oVe34fHnvunGab@cluster0.d1ny8lk.mongodb.net/day-10")
    .then(()=>{
 console.log("connected to DB");
    })
}

module.exports = connetToDB