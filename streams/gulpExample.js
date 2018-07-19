
gulp.task('log', function () {
  gulp.src('src/*.coffee')
      .pipe(log("coffee"))
      .pipe(coffee())
      .pipe(log("concat"))
      .pipe(concat('all.min.js'))
      .pipe(log("uglify"))
      .pipe(uglify())
      .pipe(log("dest"))
      .pipe(gulp.dest('dist'));
});