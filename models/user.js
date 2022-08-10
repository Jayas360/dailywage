const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema( 
    {   
        name:{
            type: String,
            required: true
        },
        mobile:{
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

const User = mongoose.model('User', usersSchema);
module.exports = User;