const app = require('./app');
const { db } = require('./userSchema');
const port = 3000
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/tablej', {useNewUrlParser : true});

const con = mongoose.connection;
con.on("connected",()=>{
    console.log("mongobd connected")
})
module.exports = con

app.listen(port,()=>{console.log(`app is running on port ${port}`)})