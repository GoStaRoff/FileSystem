const transition = () => {
  const isDirectory = require("../methods/isDirectory");
  const prompt = require("prompt-sync")();
  const config = require("config");
  const fs = require("fs");
  const choosing = require("../methods/choosing")

  console.clear();
  console.log(config.get("menu"));
  console.log(
    "Оберіть індекс/назву папки або введіть 0 для повернення у попередню. (Enter для повернення у головне меню)"
      .green.bgBlack
  );
  console.log(`0 --- ${"Попередній каталог".red}`)
  let folders = fs.readdirSync(process.cwd());
  folders = folders.filter((folder) => isDirectory(folder) === true);
  if (folders.length === 0) console.log("Папка пуста".bgGreen.black);
  else
    folders.forEach((folder, index) =>
      console.log(`${index + 1} --- ${folder.blue}`)
    );
  if (choosing(folders, process.chdir)) return;
  transition();
};
module.exports = transition;
