module.exports = function(grunt) {

    // All configuration goes here
    grunt.initConfig({

        jekyll: {
            build : {
                dest: '_site'
            }
        },

        sass: {
            dist: {
                files: {
                    'css/main.css': 'css/main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['css/**/*.scss', '_sass/**/*.scss'],
                tasks: ['sass']
            },
            jekyll: {
                files: ['_layouts/*.html', '_includes/*.md', 'css/main.css'],
                tasks: ['jekyll']
            }
        },

        browser_sync: {
            files: {
                src : ['_site/css/*.css']
            },
            options: {
                watchTask: true,
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
                },
                server: {
                    baseDir: '_site'
                }
            }
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Custom tasks
    grunt.registerTask('build', ['sass', 'jekyll']);
    grunt.registerTask('default', ['build', 'browser_sync', 'watch']);
};