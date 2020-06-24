const cp = require("child_process");

// cp.exec("open https://www.google.com");

cp.exec("dir",(err,data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

