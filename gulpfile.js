var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var jsdoc = require('gulp-jsdoc3');

gulp.task('lint', function() {
  return gulp.src('./app/src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('doc', function (cb) {
  gulp.src('./app/src/**/*.js', {read: false})
    .pipe(jsdoc(cb));
});
