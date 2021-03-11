const ev = require("events");
const myEmitter = new ev.EventEmitter();

myEmitter.on("main", require("./pages/main"));
myEmitter.on("list", require("./commands/list"));
myEmitter.on("transition", require("./commands/transition"));
myEmitter.on("create", require("./commands/create"));
myEmitter.on("check", require("./commands/check"));
myEmitter.on("edit", require("./commands/edit"));
myEmitter.on("rename", require("./commands/rename"));
myEmitter.on("delete", require("./commands/delete"));
myEmitter.on("info", require("./commands/info"));
myEmitter.on("exit", require("./commands/exit"));

module.exports = myEmitter;
