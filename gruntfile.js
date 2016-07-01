module.exports = function(grunt) {
    grunt.initConfig({
        concat : {
            dist : {
                src : ['components/scripts/*.js'],
                dest : 'builds/development/js/script.js'
            }
        },
        sass : {
            dist : {
                options : {
                    style : 'expanded'
                },
                files : [{
                    src : 'components/sass/style.scss',
                    dest : 'builds/development/css/style.css'
                }]
            }
        },   // sass
        watch : {
            options : {
                spawn: false,
                livereload: true
            },
            scripts : {
                files : ['builds/development/**/*.html',
                    'components/scripts/**/*.js',
                    'components/sass/**/*'],
                tasks : ['concat', 'sass']
            }
        },   // watch
        connect : {
            server : {
                options: {
                    hostname: 'localhost',
                    port: 3000,
                    base: 'builds/development',
                    livereload: true
                }
            }
        }
    }); // initConfig

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // default task
    grunt.registerTask('default', ['concat', 'sass', 'connect', 'watch']);
};  // wrapper function
