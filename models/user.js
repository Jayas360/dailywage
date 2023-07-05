const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema( 
    {   
        user_name:{
            type: String,
            required:true
        },
        email:{
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
// function renameCreatorField() {
//     User.updateMany({}, { $rename: { "mobile" : "email" } }, { multi: true }, function(err, data) {
//         if (!err) { 
//             //success 
//         }
//     })
// }

// renameCreatorField(); 
module.exports = User;