var gulp = require('gulp');
var amdOptimize = require('amd-optimize');
var uglify   = require("gulp-uglify");
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var es = require('event-stream');

var errorHandler; 


gulp.task('copy', function() {

    return es.concat(
        // copy index
        gulp.src(['source/index.html'])
            .pipe(gulp.dest('build')),

        gulp.src(['source/views/**/*.html'])
         .pipe(gulp.dest('build/views')),

        // copy config-require
        gulp.src(['source/js/require-config.js'])
            .pipe(plumber(errorHandler))
            .pipe(uglify())
            .pipe(gulp.dest('build/js')),

        gulp.src(['source/js/**/*.js', '!source/js/*.js'])
            .pipe(uglify())
            .pipe(gulp.dest('build/js')),      

        // copy vendor scripts
        gulp.src(['source/vendor/**/*', '!source/vendor/requirejs/require.js'])
            .pipe(gulp.dest('build/vendor')),

        gulp.src(['source/vendor/requirejs/require.js'])
      .pipe(plumber(errorHandler))
      .pipe(uglify())
      .pipe(gulp.dest('build/vendor/requirejs'))
    );
});

gulp.task('js', function() {
 var insert = require('gulp-insert');
    var ngAnnotate = require('gulp-ng-annotate');

    var config = require('./source/js/require-config.js');
    config.baseUrl = 'source';

     gulp.src(['source/js/*.js'])
        .pipe(plumber(errorHandler))
        .pipe(amdOptimize('js/bootstrap', config))
        .pipe(concat('bootstrap.js'))
        .pipe(insert.append(';require(["js/bootstrap"]);'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'))
});

gulp.task('default', ['js', 'copy'], function() {});

// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {baseDir: "./source"},
//         port: 9002,
//         logLevel: "debug"
//     });
// });

// gulp.task('js', function() {
	  
//   	return gulp.src('app/js/*.js')
//         .pipe(plumber({errorHandler: onError}))
//         .pipe(amdOptimize('bootstrap', {
//         	configFile: 'app/js/require-config.js',
//         	paths : {
//     			 'angular': 'bower_components/angular/angular.min',
//     			 'angular-route': 'bower_components/angular-route/angular-route.min'
//     			},
// 			findNestedDependencies: true
//         }))
//         .pipe(concat('main-bundle.js'))
//    	//	.pipe(uglify())
//     	.pipe(gulp.dest("build"))

// });

// gulp.task('copy', function() {
//   return gulp
//     .src('app/js/modules/**/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('build/modules/'))
// });

// // Watch task
// gulp.task('default', ['browserSync'], function() {
// 	gulp.watch('app/js/**/*.js', ['js']);
// });