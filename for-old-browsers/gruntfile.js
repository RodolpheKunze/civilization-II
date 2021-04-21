module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed',
        },
        files: [
          {
            expand: true,
            cwd: 'src/assets/scss',
            src: '**/*.scss',
            dest: 'dist/assets/css',
            ext: '.css',
          },
        ],
      },
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['assets/**', 'index.html'],
            dest: 'dist/',
          },
        ],
      },
    },

    watch: {
      livereload: {
        options: { livereload: true },
        files: ['src/index.html', 'src/assets/scss/*.scss', 'src/assets/js/main.js'],
        tasks: ['sass', 'copy'],
      },
    },

    // criar o server
    connect: {
      server: {
        options: {
          hostname: '*',
          port: 9001,
          base: 'dist/',
          livereload: true,
        },
      },
    },

    //  Abre o navegador com o server recém criado
    open: {
      all: {
        // Define a url com a porta configurada acima
        path: 'http://localhost:<%= connect.server.options.port%>/index.html',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // # grunt build
  grunt.registerTask('build', ['sass', 'copy']);

  // # grunt serve
  grunt.registerTask('serve', ['sass', 'copy', 'connect', 'open', 'watch']);
};
