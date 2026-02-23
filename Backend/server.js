// server ko start karna 
// db ko connect karna

const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()
app.listen(3000,()=>{
    console.log("server is now running");
    })
    