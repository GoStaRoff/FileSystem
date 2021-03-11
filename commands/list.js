const list = () => {
  const colors = require("colors");
  const fs = require("fs");
  const isDirectory = require("../methods/isDirectory")
  let files = fs.readdirSync(process.cwd());
  files.sort(function (a, b) {
    return isDirectory(b) - isDirectory(a);
  });
  files.forEach((file) =>
    isDirectory(file) ? console.log(file.blue) : console.log(file.green)
  );
};
module.exports = list;
