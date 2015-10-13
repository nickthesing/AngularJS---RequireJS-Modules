
define(['./module'], function(controllers) {
	
    'use strict';
    
    controllers.controller('testController', ['$scope', 'notificationService', function ($scope, notification) {

    	$scope.pageTitle = "AngularJS -- RequireJS - AMD Appplication - v" + notification.version;

    }]);
});