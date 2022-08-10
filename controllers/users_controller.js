const User = require('../models/user');

module.exports.users = async (req, res) => {
    try {
        const usersList = await User.find();
        return res.status(200).send(usersList);
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports.create = async (req, res) => {
    if(req.body.password == req.body.confirm_password){
        try {
            const user = await User.findOne({mobile: req.body.mobile});
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
        const user = await User.findOne({mobile: req.body.mobile});
        if(user){
            if(user.password == req.body.password){
                return res.status(200).send("User matched successfully!");
            }else{
                return res.status(404).send("Password did not match!");
            }           
        }else{
            return res.status(404).send("Mobile did not match");
        }
    } catch (error) {
        return res.status(500).send(error);
    }
}