const colors = require("colors");
const config = require("config");
const prompt = require("prompt-sync")();
const emitter = require("./emitter")

console.clear();
console.log(config.get("hello").bgCyan.black);
prompt();
emitter.emit("main");
