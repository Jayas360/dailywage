const express = require('express');
const app = express();
const port  = 3000;
const db = require('./config/mongoose');

app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`server running on port : ${port}`);
});

