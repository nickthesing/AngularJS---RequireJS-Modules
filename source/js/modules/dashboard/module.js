
define([
	'angular', 
	'./routes',
	'../../dependencyResolverFor',
	'angular-route',
	'../../config',
	'../../services/version'
],

function(angular, config, dependencyResolverFor) {

	var app = angular.module('app.dashboard', ['ngRoute', 'app.services'])

		.config([
			'$routeProvider',
	        '$locationProvider',
	        '$controllerProvider',
	        '$compileProvider',
	        '$filterProvider',
	        '$provide',

		function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

			app.controller = $controllerProvider.register;
	        app.directive  = $compileProvider.directive;
	        app.filter     = $filterProvider.register;
	        app.factory    = $provide.factory;
	        app.service    = $provide.service;

			if ( config )  {
                angular.forEach(config.routes, function(route, path) {
                    $routeProvider.when(path, {
                    	templateUrl: route.templateUrl, 
                    	resolve: dependencyResolverFor(route.dependencies)
                    });
                });
            }

            if( config.defaultRoute ) {
                $routeProvider.otherwise({redirectTo:config.defaultRoute});
            }

		}]);
	
	return app;

});