const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Age:{type:Number,required:true},
    City:{type:String,required:true},
    Profession:{type:String,required:true}
})

const User = mongoose.model('users',UserSchema)

module.exports = User;
