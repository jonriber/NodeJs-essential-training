const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt","UTF-8");
// const readStream = fs.createReadStream("")

// process.stdout.write("Hello");
// process.stdout.write("World");

// writeStream.write("hello");
// writeStream.write("World.!!!");

// process.stdin.on("data", data => {
//     writeStream.write(data);
// });

process.stdin.pipe(writeStream); //pipe!!

