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
                expect($scope.pageTitle).toBeDefined();
            });

            it('should have a default subTitle', function() {
                expect($scope.subTitle).toBeDefined();
            });

            it('should behave...', function() {
                expect(1).toBe(2);
            });
        }); 
    });
});