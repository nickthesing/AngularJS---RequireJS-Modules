
define(['./module'], function(controllers) {
	
    'use strict';
    
    controllers.controller('baseController', ['$scope', 'versionService', function ($scope, versionService) {

    	$scope.pageTitle = "AngularJS -- RequireJS - AMD Appplication - v" + versionService.version;

    }]);
});