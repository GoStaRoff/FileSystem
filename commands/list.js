const list = () => {
  const path = require("path");
  const colors = require("colors");
  const fs = require("fs");
  
  let files = fs.readdirSync(process.cwd());
  console.log(files.bgCyan);
  for (let i = 0; i < files.length; i++) {
    if (fs.statSync(path.join(process.cwd(), files[i])).isDirectory()) {
      console.log(files[i].blue);
    } else {
      console.log(files[i].green);
    }
  }
};

module.exports = list;
