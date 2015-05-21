module.exports = function(grunt) {
    'use strict';

    var config = grunt.config;

    /** =========================================
     * Javascript
     ===========================================*/

    /** -----------------------------------------
     * Browserify
     -------------------------------------------*/

    config.set( 'browserify.all', {
        files: {
            '<%= directories.project %>/javascript/main.js': ['<%= directories.project %>/javascript/src/init.js']
        }
    });

    /** -----------------------------------------
     * Uglify
     -------------------------------------------*/

    config.set('uglify.all', {
        options: {
            preserveComments: 'some'
        },
        src: '<%= directories.project %>/javascript/main.js',
        dest: '<%= directories.project %>/javascript/main.min.js'
    });

    /** -----------------------------------------
     * JsHint
     -------------------------------------------*/

    config.set('jshint.all', {
        all: ['<%= directories.project %>/javascript/src/*.js', '<%= directories.project %>/javascript/src/**/*.js']
    });

    /** =========================================
     * Watch
     ===========================================*/

    config.set('watch.javascript', {
        files: ['<%= directories.project %>/javascript/src/*.js', '<%= directories.project %>/javascript/src/**/*.js'],
        tasks: ['browserify'],
        options: {
            interrupt: true,
            spawn: false
        }
    });

};