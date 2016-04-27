// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var less = require('gulp-less');

var postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    lost = require('lost');

gulp.task('css', function () {
  gulp
      .src('./less/main.less')
      .pipe(less())
      .pipe(postcss([
        lost(),
        autoprefixer()
      ]))
      .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./less/**/*.less', ['css']);
});