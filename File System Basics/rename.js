//fs methods to work with file systems
const fs = require("fs");

fs.renameSync("./assets/colors.json","./assets/colorData.jason"); //rename file

fs.rename("./assets/notes.md","./storage-files/notes.md", err => { //move file
    if (err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync("./assets/alex.txt"); //delete file after 4 seconds
}, 4000);