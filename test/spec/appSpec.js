
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
});