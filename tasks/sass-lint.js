const lintRules = require('../.eslintrc')

module.exports = (gulp, plugins) => {
  return () => {
    gulp.src(['**/*.s+(a|c)ss', '!node_modules/**', '!./assets/vendor/**'])
      .pipe(plugins.sassLint({'configFile': lintRules.sass, 'fix': true, 'bundleExec': true}))
  }
}
