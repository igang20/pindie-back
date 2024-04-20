const staticFile = require("../modules/http-utils/static-file");
const { getData, endpoints } = require("../modules/api");
const { config, makeRatingFile } = require("../modules/raiting");

async function mainRouteController(res, publicUrl, extname) {
  console.log(publicUrl);
  const data = await getData(endpoints.games);
  await makeRatingFile(config.PATH_TO_RATING_FILE, data);
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;
