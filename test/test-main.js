var allTestFiles = [];
var TEST_REGEXP = /(Spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
	if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}

require.config({
	baseUrl: '/base/js',

	deps: allTestFiles,

	callback: window.__karma__.start,

	paths: {
		angular: '/base/vendor/angular/angular',
		angularMocks: '/base/vendor/angular-mocks/angular-mocks'
	},
		
	shim: {
		angular: { exports: 'angular' },
		angularMocks: { deps: ['angular'] }
	}
});