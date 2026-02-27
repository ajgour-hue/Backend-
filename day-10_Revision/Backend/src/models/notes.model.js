const mongoose = require("mongoose")

// schema model

const noteSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        age:Number,
    }
)

const noteModel = mongoose.model("UserData" , noteSchema)

module.exports = noteModel