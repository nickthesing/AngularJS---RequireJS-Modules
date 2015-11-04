
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
					debug: jasmine.createSpy()
				});
			});

			inject(function(_$log_, _$rootScope_) {
				$log = _$log_;
				$rootScope = _$rootScope_;
			});
		});

		it('should start logging service', function() {

			expect($log.debug).toHaveBeenCalledWith('application starting...');

			expect($log.debug).toHaveBeenCalled();
		});

		it('should log only once', function() {

			$rootScope.$digest();

			$rootScope.$broadcast('$locationChangeStart');

			expect($log.debug).toHaveBeenCalledWith('application did an expected route change..');
		
			$rootScope.$broadcast('$locationChangeStart');

			expect($rootScope.isStarted).toBeTruthy();

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