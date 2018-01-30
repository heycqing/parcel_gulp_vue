var gulp = require('gulp');
var imgsmin = require('gulp-imagemin')
var htmlmin = require('gulp-minify-html')

gulp.task('imgmin',function(){
    console.log('images minify');
    gulp.src('../static/imgs/*')
    .pipe(imgsmin())
    .pipe(gulp.dest('../build/imgs'))
    
})

gulp.task('htmlmin',function(){
    console.log('html minify');
    gulp.src('../*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('../build/html'));
})

gulp.task('default',['imgmin','htmlmin']);