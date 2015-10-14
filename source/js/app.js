
define([
	'angular', 
	'./dependencyResolverFor',
	'./controllers/index',
	'./services/index',
	'./modules/dashboard/module'
], function(angular, dependencyResolverFor) {

	var app = angular.module('app', ['ngRoute', 
		'app.controllers', 
		'app.services', 
		'app.constants', 
		'app.dashboard'])

		.config(['$locationProvider', function($locationProvider) {
		
			$locationProvider.html5Mode(true);

		}]);

	return app;

});

