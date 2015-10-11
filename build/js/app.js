
define([
	'angular', 
	'./config',
	'./modules/dashboard/module'
], function(angular) {
	
	return angular.module('app', ['app.constants', 'app.dashboard']);

});