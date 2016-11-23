module.exports = function (options) {
  var wiredep = require('wiredep').stream;
  return this.gulp.src(options.src)
    .pipe(this.newer(options.src))
    .pipe(wiredep())
    .pipe(this.gulp.dest(options.dist));
};
