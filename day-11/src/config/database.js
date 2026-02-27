const mongoose = require("mongoose")

function connecToDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected To DB");
         })
}
module.exports = connecToDB