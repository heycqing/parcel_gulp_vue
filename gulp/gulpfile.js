var gulp = require('gulp');
var imgsmin = require('gulp-imagemin')
var htmlmin = require('gulp-minify-html')
var jsmin = require('gulp-uglify')
var cssmin = require('gulp-minify-css')

// 压缩图片，我这里压缩来一张png, 原来大小是106kb,压缩之后是62kb,可以在目录中可以看到
gulp.task('imgmin',function(){
    console.log('images minify');
    gulp.src('../static/imgs/*')
    .pipe(imgsmin())
    .pipe(gulp.dest('../build/imgs'))
    
})

// 压缩html文件
gulp.task('htmlmin',function(){
    console.log('html minify');
    gulp.src('../*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('../build/html'));
})

// 压缩js
gulp.task('jsmin',function(){
    console.log('js minify');
    gulp.src('../js/*.js')
    .pipe(jsmin())
    .pipe(gulp.dest('../build/js'))
})

// 压缩css,这里我特意开了一个css的目录，但是我经常用的是sass；
 gulp.task('css_min',function(){
     console.log('css minify');
     gulp.src('../css/*.css')
     .pipe(cssmin())
     .pipe(gulp.dest('../build/css'))
 })
// 默认任务
gulp.task('default',['imgmin','htmlmin','jsmin','css_min']);