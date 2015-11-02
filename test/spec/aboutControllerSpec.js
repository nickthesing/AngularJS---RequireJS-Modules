define([
	'angular',
	'angularMocks',
	'modules/dashboard/dashboard',
	'modules/dashboard/controllers/aboutController'
], function (angular, mocks) {
	'use strict';

	describe('aboutController', function () {

		var $rootScope;
		var $scope;
		var controller;
		var vm;

		beforeEach(function() {
			module('app.dashboard');

			inject(function($injector) {
				$rootScope = $injector.get('$rootScope');
				$scope = $rootScope.$new();
				controller = $injector.get('$controller')('aboutController', {$scope: $scope});

				vm = controller;
			});
		});

		describe('Initialization aboutController', function() {
			it('should have a default title', function() {
				expect(vm.title).toBeDefined();
			});
			it('title should be "About us"', function() {
				expect(vm.title).toEqual('About Us');
			});
		}); 
	});
});