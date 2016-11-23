module.exports = function (options) {
  var browserSync = require('browser-sync').create();
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    open: false,
    notify: false
  });
  browserSync.watch(options.dist).on('change', browserSync.reload);
};
