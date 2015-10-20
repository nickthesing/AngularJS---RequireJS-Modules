
define([
	'../dashboard'
], function(app) {

	app.directive('customForm', function() {

		return {
			replace: true,
			restrict: 'E',
			transclude: true,
			templateUrl: 'views/partials/form.html',
			link: function(scope, elements, atts) {}		
		}

	});

});