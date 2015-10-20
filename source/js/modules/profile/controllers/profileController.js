
define(['../profile'], function(module) {

	module.controller('profileController', ['$scope', function($scope) {

		$scope.profile = {
			name: 'John Doe',
			email: 'johndoe@work.com',
			github: 'github.com/johndoe'
		}

		

	}]);

});