const {target, fullPath:{index}} = require('./settings')

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-shell')

  grunt.initConfig({
    shell: {
      clean: {
        command: [`rm -f ./${target}/*`].join('&&')
      },
      makeHtml: {
        command: [`cp ${index} ./${target}/`].join('&&')
      },
      webpack: {
        command: ['npx webpack'].join('&&')
      }
    }
  })

  grunt.registerTask('clean', ['shell:clean'])
  grunt.registerTask('makeHtml', ['shell:makeHtml'])
  grunt.registerTask('bundling', ['shell:webpack'])
  grunt.registerTask('build', ['clean', 'makeHtml', 'bundling'])
}