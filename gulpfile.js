const
    gulp = require("gulp"),
    sass = require("gulp-sass"),
    server = require("gulp-server-livereload");

gulp.task("default", ['html', 'sass', 'watch', 'webserver']);


//watch
gulp.task('watch', function(){
   gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
   gulp.watch('./src/**/*.html', ['html']);
});


//compile
gulp.task('sass', function(){
   return gulp.src('./src/assets/scss/**/*.scss')
       .pipe(sass.sync({
           precision: 8
       }).on('error', sass.logError))
       .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function(){
   return gulp.src('./src/**/*.html')
       .pipe(gulp.dest('./dist'));
});


//server
gulp.task('webserver', function(){
   gulp.src('./dist')
       .pipe(server({
           livereload: true,
           open: true
       }));
});