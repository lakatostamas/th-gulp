'use strict'

const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()

gulp.task('sass', require('./tasks/sass')(gulp, plugins))
gulp.task('sass-lint', require('./tasks/sass-lint')(gulp, plugins))

gulp.task('watch', function () {
  gulp.watch('./assets/src/sass/*.scss', ['sass-lint', 'sass'])
})

gulp.task('default', ['sass'])
