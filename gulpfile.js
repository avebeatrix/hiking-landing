var gulp = require('gulp');
 
const gulpAvif = require('gulp-avif');
gulp.task('avif', ()=>{
    return gulp.src('i/*.{png,jpg}')
        .pipe(gulpAvif())
        .pipe(gulp.dest('i'));
});

const webp = require('gulp-webp');
gulp.task('webp', function () {
    return gulp.src('i/*.jpg')    
        .pipe(webp())
        .pipe(gulp.dest('i'))   
});

const svgo = require('gulp-svgo');
gulp.task('svgo', () => { 
    return gulp.src('i/*.svg')
        .pipe(svgo())
        .pipe(gulp.dest('i'));
});

const mediaQueriesSplitter = require('gulp-media-queries-splitter');
gulp.task('split-css', () => {
    return gulp.src('css/styles.css')
        .pipe(mediaQueriesSplitter([            
            // Include only CSS rules without screen size based media queries
            {media: 'none', filename: 'mobile.css'},            
 
            // Include CSS rules for bigger screen sizes (mostly used on desktop)
            {media: {min: '768px'}, filename: 'desktop.css'},
        ]))
        .pipe(gulp.dest('css'))
});