var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('default', function() {
  browserSync({
    server: {
      baseDir: '.',
    },
    files: ['index.html', 'bundle.js'],
  });
});
