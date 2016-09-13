module.exports = (gulp, plugins) => {
  return () => {
    return gulp.src('./assets/src/sass/!(_)*.s+(a|c)ss')
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./dist/css'));
  }
}
