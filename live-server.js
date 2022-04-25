var liveServer = require("live-server");
 
var params = {
    port: 8080,
    host: "0.0.0.0",
    open: false,
    file: "index.html",
    logLevel: 0,
};

liveServer.start(params);

console.log("\x1b[32m", "Live server successfully started at https://localhost:8080/");
console.log("\x1b[0m", "") // reset terminal colour
