const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type: 'string',
        required: true
    },
    name:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    }
});

const users = new mongoose.model("users",userSchema);

module.exports = users;