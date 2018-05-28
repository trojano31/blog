const
    gulp = require("gulp"),
    sass = require("gulp-sass"),
    server = require("gulp-server-livereload");

gulp.task("default", ['html', 'sass', 'watch', 'webserver']);


//watch
gulp.task('watch', function(){
   gulp.watch('./scss/**/*.scss', ['sass']);
   gulp.watch('./*.html', ['html']);
});


//compile
gulp.task('sass', function(){
   return gulp.src('./scss/**/*.scss')
       .pipe(sass.sync({
           precision: 8,
           outputStyle: 'expanded'
       }).on('error', sass.logError))
       .pipe(gulp.dest('./css'));
});

gulp.task('html', function(){
   return gulp.src('./**/*.html');
});


//server
gulp.task('webserver', function(){
   gulp.src('.')
       .pipe(server({
           livereload: true,
           open: true
       }));
});