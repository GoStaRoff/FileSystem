const main = () => {
  const fs = require("fs");
  const config = require("config");
  const prompt = require("prompt-sync")();
  const path = require("path");
  const colors = require("colors");
  const emitter = require("../emitter");

  console.clear();
  console.log(config.get("menu"));
  let choice = prompt(process.cwd() + " > ");
  switch (choice) {
    case "1":
    case "list":
      emitter.emit("list");
      break;
    case "2":
    case "transition":
      emitter.emit("transition");
      break;
    case "3":
    case "create":
      emitter.emit("create");
      break;
    case "4":
    case "check":
      emitter.emit("check");
      break;
    case "5":
    case "edit":
      emitter.emit("edit");
      break;
    case "6":
    case "rename":
      emitter.emit("rename");
      break;
    case "7":
    case "delete":
      emitter.emit("delete");
      break;
    case "8":
    case "info":
      emitter.emit("info");
      break;
    case "0":
    case "exit":
      emitter.emit("exit");
      break;
    default:
      console.log("Невідома команда".red);
      break;
  }
  prompt("Press enter to continue".green.bgWhite);
  main();
};
module.exports = main;
