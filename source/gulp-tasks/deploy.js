module.exports = function (options) {
  return this.gulp.src(options.src)
    .pipe(this.ghPages());
};
