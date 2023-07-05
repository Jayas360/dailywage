const Work = require('../models/work');

module.exports.create = async (req, res) => {
    try{
        const work = await Work.create(req.body);
        return res.status(200).send("work added successfully...");
    }catch(error){
        return res.status(500).send(error);
    }
}

module.exports.availableWork = async (req, res) => {
    try{
        const list = await Work.find();
        return res.status(200).send(list);
    }catch(error){
        return res.status(500).send(error);
    }
}

module.exports.workByCategory = async (req, res) => {
    try {
        const ctg = req.query.category;
        const list = await Work.find({category : ctg});
        return res.status(200).send(list);
    } catch (error) {
        return res.status(500).send(error);
    }
}