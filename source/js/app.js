
define([
	'angular', 
	'./js/dependencyResolverFor',
	'./js/controllers/index',
	'./js/services/index',
	'./js/filters/index',
	'./js/modules/dashboard/module'
], function(angular, dependencyResolverFor) {

	var app = angular.module('app', ['ngRoute', 
		'app.controllers', 
		'app.services', 
		'app.filters', 
		'app.constants', 
		'app.dashboard'])

		.config(['$locationProvider', function($locationProvider) {
		
			$locationProvider.html5Mode(true);

		}]);

	return app;

});

