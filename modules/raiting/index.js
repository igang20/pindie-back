const config = require("./config");
const makeRatingFile = require("./rating-file");
const { createRating, updateRating } = require("./calculating");

module.exports = { config, makeRatingFile, createRating, updateRating };
