var gulp = require('gulp');
var imgsmin = require('gulp-imagemin')


gulp.task('imgmin',function(){
    console.log('images minfy');
    gulp.src('../static/imgs/*')
    .pipe(imgsmin())
    .pipe(gulp.dest('../build/imgs'))
    
})

gulp.task('default',['imgmin'])