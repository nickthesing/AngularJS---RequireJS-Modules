
define([],

function() {

	return function(dependencies) {

		var definition = {
			resolver: ['$q', '$rootScope', function($q, $rootScope) {

				var defer = $q.defer();

				require(dependencies, function() {
                    defer.resolve();
				});

				return defer.promise;

			}]
		}

		return definition;

	}
});