// server ko statrt karna
// database s connect karnaeka


// cluster = storage + processer 

const app = require("./src/app")
const mongoose  = require("mongoose")

function connectToDb(){
    mongoose .connect("mongodb+srv://theajaygour:ajay1234@cluster0.pywps9b.mongodb.net/day-6").then(()=>{
        console.log("connected to the database");
    })
}

connectToDb()

app.listen(3000,()=>{
    console.log("server running");
})