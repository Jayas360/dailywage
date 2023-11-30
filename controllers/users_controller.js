const User = require('../models/user');
const Personal = require('../models/personal');
const Availability = require("../models/availability");


module.exports.users = async (req, res) => {
    try {
        const usersList = await User.find();
        return res.status(200).send(usersList);
    } catch (error) {
        return res.status(500).send(error);
    }
}  

module.exports.create = async (req, res) => {
    //res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
    // console.log(req);
    if(req.body.password == req.body.password){
        try {
            const user = await User.findOne({email: req.body.email});
            //console.log(user);
            if(!user){
                await User.create(req.body); 
                return res.status(201).send("user created successfully!");
            }else{
                return res.status(422).send("user already exist!");
            }
        }catch (error) {
            return res.status(500).send(error);
        }
    }else{
        return res.status(400).send("password did not match with confirm password!");
    }
}

module.exports.signIn = async (req, res) => {
    try {
        // console.log(req.body);
        const user = await User.findOne({email: req.body.email});
        if(user){
            if(user.password == req.body.password){
                return res.status(200).send("User matched successfully!");
            }else{
                return res.status(202).send("Password did not match!");
            }           
        }else{
            return res.status(202).send("email did not match");
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports.createPersonal = async (req, res) => {
    const loc = req.file.destination.split("/")[1] + '/' + req.file.filename;
    const data = {...req.body, "upload" : loc};
    // console.log(data);

    console.log(data);
    try {
        await Personal.create(data);
        return res.status(201).send("Details added successfully...");
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports.personal = async (req, res) => {
    const email = req.params.email;
    // console.log(email);
    try {
        const data = await Personal.findOne({"email" : email});
        return res.status(200).send(data);
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports.makeAvailable = async (req, res) => {
    try {
        const id = req.params.id;
        await Availability.create({user : id});
        return res.status(200).send("user is available");
    } catch (error) {
        return res.status(500).send(error);
    }
    
}

module.exports.makeUnavailable = async (req, res) => {
    try {
        const id = req.params.id;
        await Availability.deleteOne({user : id});
        return res.status(200).send("user is unavailable");
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports.availableList = async (req, res) => {
    try {
        const availableList = await Availability.find().populate('user');
        return res.status(200).send(availableList);
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports.checkAvailability  = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await Availability.findOne({user : id});
        let isAvailable = false;
        if(user){
            isAvailable = true;
        }
        return res.status(200).send({isAvailable});
    } catch (error) {
        return res.status(500).send(error);
    }
}