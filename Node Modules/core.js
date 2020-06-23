// core module = came with NodeJs
const path = require("path");
const util= require('util'); //load before use it
const v8 = require("v8");

// const dirUploads = path.join(__dirname,'www','files','uploads');

// console.log(dirUploads)

// util.log(path.basename(__filename));

// util.log("^The name of the current File");

util.log(v8.getHeapStatistics());
console.log("get Heap Statistics.")