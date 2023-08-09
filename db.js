const mongoose = require("mongoose");

var mongoURL='mongodb+srv://Admin:admin123@cluster0.jbzmbrt.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=>{
    console.log("mongoose db connected successfull");   
})
db.on('error',()=>{
    console.log("mongoose db connected failed")   
})
module.exports=mongoose