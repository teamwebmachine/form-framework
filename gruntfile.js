module.exports = function(grunt) {

  var JSscripts = [
  'assets/vendor/jquery/dist/jquery.js',
  //'assets/vendor/jquery-ui/jquery-ui.js',
  'assets/vendor/bootstrap/dist/js/bootstrap.js',
  'assets/vendor/form.validation/dist/js/bootstrapValidator.js',
  'assets/vendor/bootstrap-multiselect/dist/js/bootstrap-multiselect.js',
  'assets/js/validationRules.js',
  'assets/js/main.js',

  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dev: {
        files: {
          'dist/main.css': [
            'assets/less/main.less'
          ]
        },
        options: {
          compress: false,
          sourceMap: false,
          sourceMapFilename: 'assets/css/main.css.map',
          sourceMapRootpath: '/app/themes/roots/'
        }
      }
    },
    cssmin: {
        css: {
            src: 'dist/main.css',
            dest: 'dist/main.min.css'
        }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [JSscripts],
        dest: 'dist/main.js',
      },
    },
    uglify: {
        scripts: {
            src: 'dist/main.js',
            dest: 'dist/main.min.js'
        }
    },
    watch: {
      css: {
        files: [
          'assets/less/*.less',
          'assets/less/components/*.less'
        ],
        tasks: ['less:dev','cssmin:css']
      },
      js: {
        files: [JSscripts],
        tasks: ['concat','uglify:scripts']
      },
      all: {
        files: 'gruntfile.js',
        tasks: ['less:dev','cssmin:css','concat','uglify:scripts']
      }
    }
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  // Default task(s).
  grunt.registerTask('default', ['less:dev','cssmin:css','concat','uglify:scripts']);
  grunt.registerTask('styles', ['less:dev','cssmin:css']);
  grunt.registerTask('scripts', ['concat','uglify:scripts']);
};