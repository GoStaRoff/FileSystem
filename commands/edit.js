const edit = () => {
  const fs = require("fs");
  const prompt = require("prompt-sync")();
  const config = require("config");
  const isDirectory = require("../methods/isDirectory");
  const colors = require("colors");
  const choosing = require("../methods/choosing");
  let path = require("path");

  const command = (element) => {
    let text = fs
      .readFileSync(path.join(process.cwd(), element), "utf8")
      .split("\n");
    console.log(
      "Оберіть індекс строки яку потрібно відредагувати або 0 для створення нової, -1 для видалення (Enter для вибору нового файлу)\n"
        .green +
        text.forEach((el, index) => console.log(`${index + 1}   --->   ${el}`))
    );
    let choice = prompt(process.cwd() + " > ");
    if (choice === "") return;
    let index = parseInt(choice);
    if (isNaN(index) || index < -1) {
      console.log("Введіть коректний індекс строки".red);
      prompt();
      command(element);
    } else if (index === 0) {
      let newString = prompt("Нова строка : ");
      let indexPaste = parseInt(
        prompt("Індекс строки після якої буде вставленно нову : ")
      );
      if (isNaN(indexPaste) || indexPaste < 1) {
        console.log("Введіть коректний індекс".red);
        prompt();
        return;
      } else {
        text.splice(indexPaste, 0, newString);
      }
    } else if (index === -1) {
      let deleteString = parseInt(prompt("Індекс строки яку буде видалено : "));
      if (isNaN(deleteString) || deleteString < 1) {
        console.log("Введіть коректний індекс".red);
        prompt();
        return;
      } else {
        text.splice(deleteString - 1, 1);
      }
    } else {
      text[index - 1] = prompt("Нова строка : ");
      console.log(text[20]);
    }
    for (let i = 0; i < text.length; i++) {
      if (!text[i]) text[i] = "";
    }
    text.forEach((el, index) => console.log(`${index + 1}   --->   ${el}`));
    fs.writeFileSync(path.join(process.cwd(), element), text.join("\n"), (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync(path.join(process.cwd(), element), "utf8"));
      }
    });
    prompt("Редагування завершено успішно!".green);
  };

  console.clear();
  console.log(config.get("menu"));
  console.log(`Оберіть файл для редагування (Enter для виходу)`.green);

  let files = fs.readdirSync(process.cwd());
  files = files.filter((file) => isDirectory(file) === false);
  if (files.length === 0) console.log("Папка пуста".bgGreen.black);
  else
    files.forEach((file, index) =>
      console.log(`${index + 1} --- ${file.green}`)
    );
  if (choosing(files, command)) return;
  prompt("Натисніть ENTER для продовження".green);
  edit();
};
module.exports = edit;
