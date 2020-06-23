const events = require("events"); // import module events

const emitter = new events.EventEmitter(); //instantiate

emitter.on("customEvent",(message,user)=>{
    console.log(`${user}:${message}`);
});

// emitter.emit("customEvent","Hello world","Computer");
// emitter.emit("customEvent","That´s pretty cool huh?","Alex");

process.stdin.on("data", data =>{

    const input = data.toString().trim();
    if (input ==="exit") {
        emitter.emit("customEvent","Good By!","process");
        process.exit();
    }
    emitter.emit("customEvent",input,"terminal");
});