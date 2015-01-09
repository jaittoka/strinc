module.exports = (grunt) ->
  grunt.initConfig 
    coffee:
      compile:
        src: 'src/strinc.coffee'
        dest: 'lib/strinc.js'

  grunt.registerTask 'default', 'coffee'
  grunt.loadNpmTasks 'grunt-contrib-coffee'