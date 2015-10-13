
define([],

function() {

	return function(dependencies) {

		var definition = {
			resolver: ['$q', '$rootScope', function($q, $rootScope) {

				var defer = $q.defer();

				require(dependencies, function() {
                 	$rootScope.$apply(function() {
                        deferred.resolve();
                   	});
				});

				return defer.promise;

			}]
		}

		return definition;

	}
});