const mongoose = require("mongoose");
const personal = require("./personal");

const availableSchema = new mongoose.Schema(
    {
        user: {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Personal',
            required : true
        }
    }, {
        timestamps : true
    }
);

const Availability = mongoose.model("Availability", availableSchema);

module.exports = Availability;