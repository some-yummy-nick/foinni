'use strict';
var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

  gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: './'
    },
    open: false,
    notify: false
  });
    browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

// gulp.task('watch', function () {
//   gulp.watch('dist/**/*.*', gulp.series(reload));
// });

gulp.task('default', gulp.parallel('browserSync'));