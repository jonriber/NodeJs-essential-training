const fs = require("fs"); //import fs module

// const text = fs.readFileSync("./assets/readme.md","UTF-8"); //using fs.read to read "readme.md"
fs.readFile("./assets/readme.md","UTF-8",(err,text) => {

    if (err) {
        console.log(`an error has occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    console.log(text);
});

// console.log(text);

