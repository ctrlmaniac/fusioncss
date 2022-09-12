"use strict";

const { series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return gulp
    .src("./src/scss/master.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch("./src/**/*.scss", ["sass"]);
};

exports.default = series(buildStyles);
