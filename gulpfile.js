var gulp = require('gulp');
 
const webp = require('gulp-webp');

const gulpAvif = require('gulp-avif');

const svgo = require('gulp-svgo');

gulp.task('avif', ()=>{
    return gulp.src('i/*.{png,jpg}')
        .pipe(gulpAvif())
        .pipe(gulp.dest('i'));
});

gulp.task('webp', function () {
    return gulp.src('i/*.jpg')    
        .pipe(webp())
        .pipe(gulp.dest('i'))   
});

gulp.task('svgo', () => { 
    return gulp.src('i/*.svg')
        .pipe(svgo())
        .pipe(gulp.dest('i'));
});