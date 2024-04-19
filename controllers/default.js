const path = require("path");
const staticFile = require("../modules/http-utils/static-file");
const mimeTypes = require("../modules/http-utils/mime-types");

async function defaultRouteController(res, url) {
  const extname = String(path.extname(url)).toLowerCase();
  if (extname in mimeTypes) {
    staticFile(res, url, extname);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}

module.exports = defaultRouteController;
