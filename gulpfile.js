//plug-in
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');

//CSS圧縮
gulp.task('minify-css', function() {
  return gulp.src("css/*.css")
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('default',['minify-css']);
