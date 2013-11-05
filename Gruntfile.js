module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          'src/defaults.styl', 
          'src/utilities.styl', 
          'src/layouting.styl', 
          'src/typography.styl'
        ],
        dest: 'dist/karma.styl'
      }
    },
    copy: {
      dist: {
        files: {
          'dist/stubs.styl': 'src/stubs.styl'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'copy']);

};
