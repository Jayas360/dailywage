const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/dailywage`);

const db = mongoose.connection;

db.on('error', console.error.bind(console,
    'MongoDB connection error:'));

db.once('open', function(){
    console.log('Successfully connected to db');
});