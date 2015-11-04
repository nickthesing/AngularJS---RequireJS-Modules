
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

	.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
		$locationProvider.html5Mode(true);

		$routeProvider.otherwise({redirectTo: '/home'});
	}])

	.run(function($log) {
		$log.warn('application starting...');
	});

	return app;

});