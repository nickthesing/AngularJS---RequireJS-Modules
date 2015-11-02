define([
	'angular',
	'angularMocks',
	'app'
], function (angular, mocks) {
	'use strict';

	describe('baseController', function () {

		var $rootScope;
		var $scope;
		var controller;
		var vm;

		beforeEach(function() {
			module('app');

			inject(function($injector) {
				$rootScope = $injector.get('$rootScope');
				$scope = $rootScope.$new();
				controller = $injector.get('$controller')('baseController', {$scope: $scope});
			});
		});

		describe('Initialization baseController', function() {
			it('should have a default pageTitle', function() {
				expect(controller.pageTitle).toBeDefined();
			});

			it('should have a default subTitle', function() {
				expect(controller.subTitle).toBeDefined();
			});

			it('should fail for testing purpose', function() {
				expect(2).toBe(2);
			});
		}); 
	});
});