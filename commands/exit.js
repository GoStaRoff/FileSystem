const exit = () => {
  const prompt = require("prompt-sync")();
  const config = require("config");
  console.clear();
  console.log(config.get("bye"));
  prompt();
  process.exit();
};
module.exports = exit;
