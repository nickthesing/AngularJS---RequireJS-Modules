
define(['./module'], function(controllers) {
	
    'use strict';
    
    controllers.controller('baseController', baseController); 

    baseController.$inject = ['$scope'];

    function baseController($scope) {
		$scope.pageTitle = "AngularJS -- RequireJS - AMD Application - v";
    	$scope.subTitle = 'subtitle goes here';
    }
});