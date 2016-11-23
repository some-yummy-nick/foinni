module.exports = function (options) {
  var pngquant = require('imagemin-pngquant');
  return this.gulp.src(options.src)
    .pipe(this.newer(options.dist))
    .pipe(this.cache(this.imagemin({
      interlaced: true,
      progressive: true,
      use: [pngquant()]
    })))
    .pipe(this.gulp.dest(options.dist));
};
