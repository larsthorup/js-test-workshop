/*global module, require*/
module.exports = function (grunt) {
    'use strict';

    var gruntConfig = {
        pkg: grunt.file.readJSON('package.json')
    };

    // convenience
    grunt.registerTask('default', ['lint', 'test']);
    grunt.registerTask('all', ['clean', 'lint', 'test', 'cover']);

    // continuous integration
    grunt.registerTask('ci', ['lint', 'cover']);


    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');
    gruntConfig.clean = {
        output: ['output']
    };


    // lint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    gruntConfig.jshint = {
        options: { bitwise: true, camelcase: true, curly: true, eqeqeq: true, forin: true, immed: true,
            indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, plusplus: true,
            quotmark: true, regexp: true, undef: true, unused: true, strict: true, trailing: true,
            maxparams: 3, maxdepth: 2, maxstatements: 50},
        all: [
            'Gruntfile.js',
            'src/js/**/*.js',
            'test/js/**/*.js'
        ]
    };
    grunt.registerTask('lint', 'jshint');


    // test
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    gruntConfig.jasmine = {
        src: {
            src: [
                'src/js/**/*.js'
            ],
            options: {
                specs: 'test/js/**/*.test.js',
                vendor: 'src/lib/**/*.js',
                junit: {
                    path: 'output/testresults'
                }
            }
        }
    };
    grunt.registerTask('test', 'jasmine:src');

    // watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    gruntConfig.watch = {
        scripts: {
            files: ['src/**/*.*', 'test/**/*.*'],
            tasks: ['lint', 'test']
        }
    };


    // cover
    gruntConfig.jasmine.istanbul = {
        src: gruntConfig.jasmine.src.src,
        options: {
            specs: gruntConfig.jasmine.src.options.specs,
            vendor: gruntConfig.jasmine.src.options.vendor,
            template: require('grunt-template-jasmine-istanbul'),
            templateOptions: {
                coverage: 'output/cover/coverage.json',
                report: [
                    {type: 'lcov', options: {dir: 'output/cover'}},
                    {type: 'html', options: {dir: 'output/cover'}},
                    {type: 'cobertura', options: {dir: 'output/cover/cobertura'}},
                    {type: 'text-summary'}
                ]
            }
        }
    };
    grunt.registerTask('cover', 'jasmine:istanbul');

    // grunt
    grunt.initConfig(gruntConfig);
};