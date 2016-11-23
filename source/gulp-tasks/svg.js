module.exports = function (options) {
  var path = require('path');
  return this.gulp.src(options.src)
    .pipe(this.svgmin(function (file) {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      };
    }))
    .pipe(this.svgstore())
    .pipe(this.gulp.dest(options.dist));
};
