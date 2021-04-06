const choosing = (elements, command) => {
  const prompt = require("prompt-sync")();
  const colors = require("colors");

  let choice = prompt(process.cwd() + " > ");
  if (choice === "") return true;
  let index = parseInt(choice);
  if (isNaN(index)) {
    if (!elements.includes(choice))
      console.log("Файл/папку не знайдено".bgRed.black);
    else {
      command(choice);
    }
  } else if (index === 0 && command === process.chdir) {
    command("../");
  } else {
    element = elements[index - 1];
    if (!element) {
      console.log("Файл/папку не знайдено".bgRed.black);
      command === process.chdir ? prompt() : "";
    } else {
      command(element);
    }
  }
};

module.exports = choosing;
