const create = () => {
  const fs = require("fs");
  const prompt = require("prompt-sync")();
  const config = require("config");
  let path = require("path");
  const colors = require("colors");
  console.clear();
  console.log(config.get("menu"));
  console.log(
    `Введіть назву з роширенням для створення файлу (${
      "example.js".green
    }) або без для папки (${"example".blue}) (Enter для виходу)`
  );

  let name = prompt();
  if (name === "") return;
  else if (name.includes(".")) {
    if (!fs.existsSync(path.join(process.cwd(), name))) {
      fs.open(path.join(process.cwd(), name), 'a', (err) => {
        err ? console.log(err) : console.log('Файл  ' + name + ' створено');
    });
    } else {
      console.log("Файл  " + name.green + " уже існує");
    }
  } else {
    if (!fs.existsSync(path.join(process.cwd(), name))) {
      fs.mkdir(path.join(process.cwd(), name), (err) => {
        err ? console.log(err) : console.log('Директорія ' + name + ' створена');
    });
    } else {
      console.log("Директорія " + name.blue + " уже існує");
    }
  }
  prompt("Натисніть ENTER для продовження".green);
  create();
};
module.exports = create;
