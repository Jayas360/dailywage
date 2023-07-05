const multer = require("multer");

const multerStorage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'public/files');
    },
    filename : (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        const suffix = Date.now()+ '-' + Math.round(Math.random()*1e9);
        cb(null, file.fieldname+suffix+ '.' + ext);
    }
});

const multerFilter = (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    if(ext === "jpeg" || ext === "jpg"){
        cb(null, true);
    }else{
        cb(new Error("Not a jpg or jpeg file"), false);
    }
}

const uploads = multer({
    storage : multerStorage,
    fileFilter : multerFilter
});

module.exports = uploads;