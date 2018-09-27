var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

gulp.task('minify', function() {
  gulp.src('../hello.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('js', function() {
  return gulp.src(['../*.js', '!../test.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('greet', function() {
  console.log('Hello world!');
});

gulp.task('watch', function() {
  var watcher = gulp.watch('../hello.js', function(e) {
    console.log(e);
  });
  watcher.on('ready', function() {
    console.log('ready');
  });
  watcher.on('nomatch', function() {
    console.log('nomatch');
  });
  watcher.on('end', function() {
    console.log('end');
  });
  setTimeout(function() {
    console.log(watcher);
  }, 2000);
});

gulp.task('default', function() {
  browserSync({
    server: {
      baseDir: '.',
    },
    files: ['index.html', 'style.css'],
  });
});
