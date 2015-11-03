
define([
	'angular',
	'angularMocks',
	'app',
], function (angular, mocks) {
	'use strict';

	describe('Testing some Angular Services / Factories', function() {
		
		var values, factory;

		beforeEach(function() {
			module('app.services');

			inject(function($injector) {
				values = $injector.get('appValues');
				factory = $injector.get('versionService');
			})
		});

		it('should have some values', function() {
			expect(values.versions).toEqual([
    			{id: 1, version: '0.1.1'},
    			{id: 2, version: '0.1.2'},
    			{id: 3, version: '0.1.3'}
    		]);
		});

		describe('Version Factory', function() {
			it('should trow an error if there are no values', function() {
				values = null;

				// expect(function() {
				// 	factory.getValues();
				// }).toThrow();

				// values.versions = [
	   //  			{id: 1, version: '0.1.1'},
	   //  			{id: 2, version: '0.1.2'},
	   //  			{id: 3, version: '0.1.3'}
	   //  		]
			});

			it('should return default values', function() {
				var values = factory.getValues();
				expect(values.length).toBe(3);
			});
			
		});

		// it('should return an object with specific keys', function() {
		// 	expect(versionServiceMock['msg']).toBeDefined();
		// 	expect(versionServiceMock['version']).toBeDefined();
		// 	expect(versionServiceMock['status']).toBeDefined();
		// 	expect(versionServiceMock['error']).toBeDefined();
		// });

		// it('should return the correct application version', function() {
		// 	expect(versionServiceMock['version']).toEqual('0.1.1');
		// });

	});
});