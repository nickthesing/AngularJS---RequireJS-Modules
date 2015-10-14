
define(['./module'], function(services) {

	'use strict';

	services.service('versionService', [function() {

		return {
			msg: 'application version',
			version: '0.1',
			status: 200,
			error: false
		}

	}]);
});