
define(['angular'], function (angular) {
	
    'use strict';

    return angular.module('app.services', [])

    	.value('appValues', {
    		versions: [
    			{id: 1, version: '0.1.1'},
    			{id: 2, version: '0.1.2'},
    			{id: 3, version: '0.1.3'}
    		]
    	});
});