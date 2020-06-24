const fs = require("fs");

const readStream = fs.createReadStream()

console.log("Type Something...");
process.stdin.on("data",data => {
    console.log(`I read ${data.length-1} characters of text`);
});