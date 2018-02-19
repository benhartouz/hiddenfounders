module.exports = function(grunt) {

    grunt.initConfig({
        sass: {                              // Task
          dist: {                            // Target
            options: {                       // Target options
              style: 'expanded'
            },
            files: {                         // Dictionary of files
              'src/css/main.css': 'dev/scss/style.scss',       // 'destination': 'source'
            }
          }
        },
        watch : {
          scripts : {
            files : ["**/**/*.scss"],
            tasks: ['sass']
          }
        }
      });
     
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');
     
      grunt.registerTask('default', ['watch']);
  };
 