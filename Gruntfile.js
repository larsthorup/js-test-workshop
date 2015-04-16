module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['lint', 'test']);
    grunt.registerTask('all', ['clean', 'lint', 'test']);

    // continuous integration
    grunt.registerTask('ci', ['lint', 'test']);


    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');
    gruntConfig.clean = {
        output: ['output']
    };


    // lint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    gruntConfig.jshint = {
        all: [
            'Gruntfile.js',
            'src/js/**/*.js',
            'test/js/**/*.js'
        ],
      options: {
        jshintrc: '.jshintrc',
      }
    };
    grunt.registerTask('lint', 'jshint');


    // karma
    grunt.loadNpmTasks('grunt-karma');
    gruntConfig.karma = {
        options: {
            frameworks: ['jasmine'],
            files: ['src/lib/**/*.js', 'src/js/**/*.js', 'src/css/**/*.css', 'test/lib/**/*.js', 'test/js/**/*.test.js'],
            coverageReporter: {
                reporters: [
                    {type: 'lcov'},
                    {type: 'html'},
                    {type: 'cobertura'},
                    {type: 'text-summary'}
                ],
                dir: 'output/coverage'
            },
            junitReporter: {
                outputFile: 'output/test/test-results.xml'
            },
            logLevel: grunt.option('verbose') ? 'DEBUG' : 'INFO'
        },
        phantomjs: {
            preprocessors: {
                'src/js/**/*.js': ['coverage']
            },
            reporters: ['progress', 'coverage', 'junit'],
            browsers: ['PhantomJS'],
            singleRun: true
        },
        firefox: {
            browsers: ['Firefox'],
            reporters: ['progress'],
            autoWatch: true
        },
        chrome: {
            browsers: ['Chrome'],
            reporters: ['progress'],
            autoWatch: true
        }
    };
    grunt.registerTask('test', 'karma:phantomjs');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    gruntConfig.watch = {
        scripts: {
            files: ['src/**/*.*', 'test/**/*.*'],
            tasks: ['lint', 'test']
        }
    };

    // grunt
    grunt.initConfig(gruntConfig);
};
