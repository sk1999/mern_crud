const mongoose = require("mongoose");

const DB = "mongodb+srv://shreyaskannan23:zxNuZTgstbyZhPxJ@cluster0.cr6n0we.mongodb.net/test"


mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));