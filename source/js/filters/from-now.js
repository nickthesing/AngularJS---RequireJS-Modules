

define(['./module'], function(filters) {
	
    'use strict';
    
    filters.filter('from', [
        function () {
            return function(input) {
                return 'filter: ' + input; 
            };
        }
    ]);

    
});