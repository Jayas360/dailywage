const mongoose = require('mongoose');

const workSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true
        },

        duration: {
            type: Number,
            required : true
        },

        location: {
            type: String,
            required : true
        },

        wage : {
            type : Number,
            required : true
        }
    },
    {timestamps : true}
);

const Work = mongoose.model('Work', workSchema);

module.exports = Work;