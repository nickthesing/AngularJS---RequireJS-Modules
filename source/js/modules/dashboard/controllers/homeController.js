
define([
	'../dashboard'
], function(module) {

	module.controller('homeController', ['$scope', 'versionService', function($scope, versionService) {

		$scope.title = "Homepage v" + versionService.version;

	}]);

});