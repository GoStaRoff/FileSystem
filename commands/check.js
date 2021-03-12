const check = () => {
  const fs = require("fs");
  const prompt = require("prompt-sync")();
  const config = require("config");
  const isDirectory = require("../methods/isDirectory");
  let path = require("path");
  const colors = require("colors");
  const choosing = require("../methods/choosing")

  const command = (element) => console.log(fs.readFileSync(path.join(process.cwd(), element), "utf8"));

  console.clear();
  console.log(config.get("menu"));
  console.log(`Оберіть файл для перегляду вмісту (Enter для виходу)`.green);

  let files = fs.readdirSync(process.cwd());
  files = files.filter((file) => isDirectory(file) === false);
  if (files.length === 0) console.log("Папка пуста".bgGreen.black);
  else
    files.forEach((file, index) =>
      console.log(`${index + 1} --- ${file.green}`)
    );
    if (choosing(files, command)) return;
  prompt("Натисніть ENTER для продовження".green);
  check();
};
module.exports = check;
