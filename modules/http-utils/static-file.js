const fs = require("fs");
const mimeTypes = require("./mime-types");

function staticFile(res, filepath, ext) {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile("./public" + filepath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end("Not found");
    }
    res.end(data);
  });
}

module.exports = staticFile;
