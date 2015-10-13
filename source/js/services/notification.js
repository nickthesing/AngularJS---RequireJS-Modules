
define(['./module'], function(services) {

	'use strict';

	services.service('notificationService', [function() {

		return {
			msg: 'notification version',
			version: '0.1',
			status: 200,
			error: false
		}

	}]);
});