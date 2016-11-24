'use strict';

var gulp = require('gulp'),
  del = require('del'),
  task = require('gulp-lazy-task')('./source/gulp-tasks');

task('html', {
  src:'./source/*.html',
  dist: './dist/'
});

task('style', {
  src:'./source/styles/style.scss',
  dist: 'dist/styles/'
});

task('image', {
  src:'./source/img/*.*',
  dist: 'dist/img'
});

task('sync', {
  dist: 'dist/**/*.*'
});

task('svg', {
  src:'source/img/svg/*.svg',
  dist: 'source/img/'
});

task('bower', {
  src:'./source/*.html',
  dist: './source/'
});

task('copy', {
  srcFonts: './source/fonts/**/*.*',
  distFonts:'dist/fonts/',
  srcFavicon:'./source/img/favicon/*.*',
  distFavicon:'dist/img/favicon/'
});

task('deploy', {
  src: 'dist/**/*.*'
});

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('watch', function () {
  gulp.watch('source/**/*.html', gulp.series('html'));
  gulp.watch('source/**/*.scss', gulp.series('style'));
  gulp.watch('bower.json', gulp.series('bower'));
  gulp.watch('source/img/**/*.+(jpg|png)', gulp.series('image'));
});
gulp.task('build', gulp.series('clean', gulp.parallel(gulp.series('bower', 'html'), 'style', 'image', 'copy')));
gulp.task('default', gulp.parallel(gulp.series('bower', 'html'), 'style', 'image', 'copy', 'sync', 'watch'));