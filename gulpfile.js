var gulp = require('gulp');
var gulpless = require('gulp-less');
var gulpkss = require('gulp-kss');
var gulpconcat = require('gulp-concat');
 
// Generate styleguide with templates
gulp.src(['css/*.css'])
    .pipe(gulpkss({
        overview: __dirname + '/styles/styleguide.md'
    }))
    .pipe(gulp.dest('styleguide/'));
 
// Concat and compile all your styles for correct rendering of the styleguide.
gulp.src('styles/main.less')
    .pipe(gulpless())
    .pipe(gulpconcat('public/style.css'))
    .pipe(gulp.dest('styleguide/'));