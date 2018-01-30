var gulp = require('gulp');
var imgsmin = require('gulp-imagemin')
var htmlmin = require('gulp-minify-html')
var jsmin = require('gulp-uglify')

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

gulp.task('jsmin',function(){
    console.log('js minify');
    gulp.src('../js/*.js')
    .pipe(jsmin())
    .pipe(gulp.dest('../build/js'))
})

gulp.task('default',['imgmin','htmlmin','jsmin']);