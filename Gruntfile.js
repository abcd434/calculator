/**
 * @param {IGrunt} grunt
 */
module.exports = function (grunt) {

    if(grunt.file.exists('../grunt-thinkingmedia')) {
        grunt.loadTasks('../grunt-thinkingmedia/tasks');
    } else {
        grunt.loadNpmTasks('grunt-thinkingmedia');
    }

    grunt.initConfig({
        config: {
            name: 'calculator'
        },
        index: {
            dev: {
                options: {
                    js: [
                        'bower/lodash/lodash.min.js',
                        'bower/jquery/dist/jquery.min.js',
                        'bower/angular/angular.js',
                        'bower/angular-animate/angular-animate.min.js',
                        'bower/angular-ui-router/release/angular-ui-router.min.js',
                        'bower/angular-assert/dist/angular-assert.js'
                    ],
                    css: [
                        'bower/normalize.css/normalize.css',
                        '.extra/thinkingmedia-ui/www/css/thinkingmedia-ui.css',
                        'css/App.css'
                    ],
                    include: {
                        cwd: 'www',
                        src: [
                            'src/**/*.js',
                            '!**/*.test.js'
                        ]
                    }
                },
                src: './www/_index.html',
                dest: './www/index.html'
            }
        }
    });
};
