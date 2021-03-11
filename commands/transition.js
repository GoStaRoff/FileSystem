const transition = () => {
  const isDirectory = require("../methods/isDirectory");
  const prompt = require("prompt-sync")();
  const config = require("config");
  const fs = require("fs");

  console.clear();
  console.log(config.get("menu"));
  console.log(
    "Оберіть індекс/назву папки або введіть 0 для повернення у попередню. (Enter для повернення у головне меню)"
      .green.bgBlack
  );

  let folders = fs.readdirSync(process.cwd());
  folders = folders.filter((file) => isDirectory(file) === true);
  if (folders.length === 0) console.log("Папка пуста".bgGreen.black);
  else
    folders.forEach((file, index) =>
      console.log(`${index + 1} --- ${file.blue}`)
    );
  let choice = prompt(process.cwd() + " > ");
  if (choice === "") return;
  let index = parseInt(choice);
  if (isNaN(index)) {
    if (!folders.includes(choice)) console.log("Папку не знайдено".bgRed.black);
    else {
      process.chdir(choice);
    }
  } else if (index === 0) {
    process.chdir("../");
  } else {
    folder = folders[index - 1];
    if (!folder) {
      console.log("Папку не знайдено".bgRed.black);
      prompt();
    } else {
      process.chdir(folder);
    }
  }
  transition();
};
module.exports = transition;
