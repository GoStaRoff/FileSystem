const main = () => {
  const fs = require("fs");
  const config = require("config");
  const prompt = require("prompt-sync")();
  const colors = require("colors");

  console.clear();
  console.log(config.get("menu"));

  
};
module.exports = main;
