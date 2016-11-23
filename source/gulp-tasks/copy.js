module.exports = function (options) {
  this.gulp.src(options.srcFonts)
    .pipe(this.newer(options.distFonts))
    .pipe(this.gulp.dest(options.distFonts));
  return this.gulp.src(options.srcFavicon)
    .pipe(this.newer(options.distFavicon))
    .pipe(this.gulp.dest(options.distFavicon));
};
