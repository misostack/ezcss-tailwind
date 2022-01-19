"use strict";

const sass = require("gulp-sass")(require("sass"));
const { watch, series, src, dest } = require("gulp");

function buildStyles() {
  return src("./src/sass/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(dest("./src/styles"));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  watch("./src/sass/*.scss", series(buildStyles));
};
exports.build = series(buildStyles);
