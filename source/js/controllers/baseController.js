
define(['./module'], function(controllers) {
	
    'use strict';
    
    controllers.controller('baseController', baseController); 

    function baseController() {
    	var vm = this;

		vm.pageTitle = "AngularJS -- RequireJS - AMD Application - v";
    	vm.subTitle = 'subtitle goes here';
    }
});