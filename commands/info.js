const info = () => {
  const fs = require("fs");
  const prompt = require("prompt-sync")();
  const config = require("config");
  const isDirectory = require("../methods/isDirectory");
  let path = require("path");
  const colors = require("colors");
  const choosing = require("../methods/choosing");

  const command = (element) => {
    console.log(
      `Інформація про ${
        isDirectory(element) ? element.blue : element.green
      } :\n`
    );
    console.log(fs.statSync(path.join(process.cwd(), element)));
  };

  console.clear();
  console.log(config.get("menu"));
  console.log(
    `Оберіть файл для перегляду інформації про нього (Enter для виходу)`.green
  );

  let files = fs.readdirSync(process.cwd());
  files.sort(function (a, b) {
    return isDirectory(b) - isDirectory(a);
  });
  if (files.length === 0) console.log("Папка пуста".bgGreen.black);
  else
    files.forEach((file, index) =>
      console.log(
        `${index + 1} --- ${isDirectory(file) ? file.blue : file.green}`
      )
    );

  if (choosing(files, command)) return;
  prompt("Натисніть ENTER для продовження".green);
  info();
};
module.exports = info;
