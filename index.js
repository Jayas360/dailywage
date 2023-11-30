const express = require('express');
const app = express();
const port  = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const jsonParser = bodyParser.json();
const path = require("path");

app.use(jsonParser);
app.use(express.urlencoded({extended: true}));
app.use(cors());

// app.use(upload.single("upload"));

app.use('/', require('./routes'));

app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => {
    console.log(`server running on port : ${port}`);
});

