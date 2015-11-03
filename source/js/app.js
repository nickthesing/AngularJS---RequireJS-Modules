
define([
	'angular',
	'resolver',
	'controllers/index',
	'services/index',
	'filters/index',
	'modules/dashboard/dashboard',
	'modules/profile/profile',
], function(angular, dependencyResolverFor) {

	var app = angular.module('app', ['ngRoute', 
		'app.controllers',
		'app.services',
		'app.filters',
		'app.constants',
		'app.dashboard',
		'app.profile'
	])

	.config(['$locationProvider', function($locationProvider) {
	
		$locationProvider.html5Mode(true);

	}])

	.run(function($log) {
		$log.warn('application starting...');
	});

	return app;

});

