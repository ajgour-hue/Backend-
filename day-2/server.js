
const express = require("express");
const app = express()   // server ka instance create krna


// creating server 
app.get('/' ,  (req , res) => {
    res.send('hello from server');
})

app.get('/about' ,  (req , res) => {
    res.send('hello from abou ..  l k');
})

app.listen(4000);