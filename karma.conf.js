// Karma configuration
// Generated on Mon Nov 02 2015 14:58:45 GMT+0100 (W. Europe Standard Time)

module.exports = function(config) {
  config.set({

	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: '.',

	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['jasmine', 'requirejs', 'mocha'],

	// list of files / patterns to load in the browser
	files: [
	  {pattern: 'source/js/*.js', included: false},
	  {pattern: 'source/js/**/*.js', included: false},
	  {pattern: 'source/vendor/**/*.js', included: false},
	  {pattern: 'test/*.js', included: false},
	  {pattern: 'test/spec/*.js', included: false},

	  'test/spec/test-config.js',
	],


	// list of files to exclude
	exclude: [
		'source/js/bootstrap.js'
	],


	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
	},


	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['mocha', 'clear-screen'],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// level of logging
	// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	logLevel: config.LOG_INFO,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,


	// start these browsers
	// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
	browsers: ['Chrome'],


	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: true,

	// Concurrency level
	// how many browser should be started simultanous
	concurrency: Infinity
  })
}