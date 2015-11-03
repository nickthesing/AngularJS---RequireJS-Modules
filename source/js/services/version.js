
define(['./module'], function(services) {

	'use strict';

	services.factory('versionService', versionService);

	versionService.$inject = ['appValues'];

	function versionService(appValues) {
		return {
			msg: 'application version',
			version: '0.1.1',
			status: 200,
			error: false,
			getValues: function() {
				return appValues.versions;
			}
		}
	}
});