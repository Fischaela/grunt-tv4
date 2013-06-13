/*
 * grunt-tv4
 * https://github.com/Bartvds/grunt-tv4
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		tv4: {
			base: {
				options: {
				},
				files: {
					'test/fixtures/object_props/schema.json': ['test/fixtures/object_props/pass.json', 'test/fixtures/object_props/fail.json']
				}
			}
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['tv4']);

	grunt.registerTask('default', ['jshint', 'test']);

};
