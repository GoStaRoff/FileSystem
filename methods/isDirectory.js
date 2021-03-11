const isDirectory = (dir) => {
    const path = require("path");
    const fs = require("fs");
    return fs.statSync(path.join(process.cwd(), dir)).isDirectory();
  };
module.exports = isDirectory;