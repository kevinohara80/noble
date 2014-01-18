module.exports = function(grunt) {
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      },
      build: {
        src: ['src/js/app/*.js']
      }
    },

    uglify: {
      options: {},
      build: {
        src: ['tmp/js/app.js'],
        dest: 'tmp/js/app.min.js'
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      build: {
        src: [
          'src/js/vendor/jquery-1.10.2.js',
          'src/js/vendor/angular.min.js',
          'src/js/app/app.js'
        ],
        dest: 'tmp/js/app.js'
      }
    },

    copy: {
      options: {
        expand: true,
        cwd: 'tmp/js/',
      },
      build: {
        src: '**/*min.js',
        dest: 'public/js/'
      }, 
      dev: {
        src: '**/*.js',
        dest: 'public/js/'
      }
    },

    clean: {
      options: {},
      build: {
        src: ['tmp']
      }
    },

    watch: {
      options: {},
      build: {
        files: ['src/**/*.js'],
        tasks: ['default']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'copy:dev', 'clean']);
  grunt.registerTask('build', ['clean:build', 'jshint:build', 'concat:build', 'uglify:build', 'copy:dev', 'clean'])

};