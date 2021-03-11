const colors = require("colors");
const config = require("config");
const main = require("./pages/main");
const prompt = require("prompt-sync")();

console.clear();
console.log(config.get("hello").bgCyan.black);
process.stdin.setEncoding('utf-8')

prompt();
main();
