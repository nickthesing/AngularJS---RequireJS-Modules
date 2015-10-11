
define([
	'angular', 
	'./config',
	'./modules/dashboard/module'
], function(angular) {
	
	return angular.module('app', ['ngRoute', 'app.constants', 'app.dashboard'])

		.config(['$locationProvider', function($locationProvider) {

			$locationProvider.html5Mode(true);

		}]);

});