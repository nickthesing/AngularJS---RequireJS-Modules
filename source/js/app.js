
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

	.run(function($log, $rootScope) {

		$log.debug('application starting...');

		$rootScope.$on('$locationChangeStart', function(evt, next, prev) {
			
			if ( ! $rootScope.isStarted ) {

				$log.debug('application did an expected route change..');
				$rootScope.isStarted = true;
			}

			console.log('lfkdjsfldkj');
		});
	});
	return app;
});