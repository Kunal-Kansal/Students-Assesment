const express = require('express')
const app = express()
const bodyparser = require('./body-parser')
const User = require('./userSchema')

const Abc = User.create({
    Name:"abc",
    Email:"abc@gmail.com",
    Age:27,
    City:"xyz",
    Profession:"coder"
})

app.get('/',(req,res)=>{
    res.json(User)
})

module.exports = app