const fs = require("fs");

// fs.renameSync("./storage-files","./storage");

fs.readdirSync("./storage").forEach(fileName => { // deleting everything inside directory
    fs.unlinkSync(`./storage/${fileName}`);
});

fs.rmdir("./storage", err =>{ //remove directory
    if (err) {
        throw err;
    }
    console.log("./storage directory removed");
});