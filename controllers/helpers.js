const fs = require("fs");
const path = require("path");

module.exports.deleteFile = async (filePath) => {
    if(!filePath) return;
    console.log(path.join('public', filePath));
    await fs.unlinkSync(path.join('public', filePath));
    console.log("old file deleted successfully!");
}