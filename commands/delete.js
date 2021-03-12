const deleteElement = () => {
  const fs = require("fs");
  const prompt = require("prompt-sync")();
  const config = require("config");
  const isDirectory = require("../methods/isDirectory");
  let path = require("path");
  const colors = require("colors");
  const choosing = require("../methods/choosing");

  const command = (element) => {
    let answer = prompt(
      `Ви дійсно хочете видалити ${
        isDirectory(element) ? element.blue : element.green
      }? (y/n) : `
    );
    if (answer === "") return;
    else if (answer === "y") {
      try {
        fs.rmSync(path.join(process.cwd(), element));
      } catch (error) {
        fs.rmdirSync(path.join(process.cwd(), element));
      }
      console.log("Видалення успішне");
    } else {
      deleteElement();
    }
  };

  console.clear();
  console.log(config.get("menu"));
  console.log(`Оберіть файл для його видалення (Enter для виходу)`.green);

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
  deleteElement();
};
module.exports = deleteElement;
