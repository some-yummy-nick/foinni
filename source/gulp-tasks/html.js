var NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = function (options) {
  return this.gulp.src(options.src)
    .pipe(this.newer(options.src))
    .pipe(this.useref())
    .pipe(this.rigger())
    .pipe(this.if(NODE_ENV === 'production',
      this.htmlmin({
          collapseWhitespace: true
        }
      )))
    .pipe(this.gulp.dest(options.dist));
};
