
define([
	'./module'
], function(filters) {
	
	'use strict';
	
	filters.filter('from', fromFilter);

	function fromFilter() {
		return function(input) {
			return 'filter: ' + input; 
		};
	};
});