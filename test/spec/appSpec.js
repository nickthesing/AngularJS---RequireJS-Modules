
define([
	'angular',
	'app'
], function() {

	describe('Application startup', function() {
		
		var $locationProvider;

		beforeEach(function() {
			module(function(_$locationProvider_) {
				$locationProvider = _$locationProvider_;
				spyOn($locationProvider, 'html5Mode');
			});
			module('app');
			inject();
		});

		it('should set html5 mode', function() {
			expect($locationProvider.html5Mode)
				.toHaveBeenCalledWith(true);
		});
	});

	describe('Application logger start', function() {
		
		var $log, $route, $location, $rootScope;

		beforeEach(function() {
			module('app', function($provide) {
				$provide.value('$log', {
					warn: jasmine.createSpy()
				});
			});

			inject(function(_$log_) {
				$log = _$log_;
			});
		});

		it('should start logging service', function() {
			expect($log.warn).toHaveBeenCalled();
		});

		it('should test routeProvider', function() {
			inject(function($route, $location, $rootScope, $httpBackend) {

				$httpBackend.expectGET('/views/pages/home.html').respond(200);

			  	expect($route.current).toBeUndefined();

			   	$location.path('/otherwise');
			   	$rootScope.$digest();

			  	expect($location.path()).toBe('/home');

			});
		
		}); 
	});
});