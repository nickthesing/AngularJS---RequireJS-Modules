if (typeof define !== 'function') {
  // to be able to require file from node
  var define = require('amdefine')(module);
}

define({

	baseUrl: '.',

	paths: {
		'angular': 'vendor/angular/angular',
		'angular-route': 'vendor/angular-route/angular-route.min'
	},

	shim: {
		'angular': {
			exports: 'angular'
		},

		'angular-route': {
			deps: ['angular']
		}
	}

});