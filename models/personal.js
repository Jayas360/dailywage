const mongoose = require('mongoose');

const personalSchema = new mongoose.Schema({
    first_name : {
        type: String,
        required : true 
    },
    last_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    dob : {
        type : Date,
        required: true
    },
    state : {
        type : String,
        required : true
    },
    interest : {
        type : String,
        required : true
    },
    pin : {
        type : Number,
        required : true,
    },
    upload : {
        type : String
    },
    subject : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Personal = mongoose.model('Personal', personalSchema);

module.exports = Personal;