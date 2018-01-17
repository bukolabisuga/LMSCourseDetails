var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('main', function() {
    gulp.src('css/main.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
    gulp.watch('css/main.css', ['main']);
});