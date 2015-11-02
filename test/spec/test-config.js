var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return (/Spec\.js$/).test(file);
});

requirejs.config({
    paths: {
		'angular': '../vendor/angular/angular',
		'angularMocks': '../vendor/angular-mocks/angular-mocks',
		'angular-route': '../vendor/angular-route/angular-route.min',
		'resolver': 'dependencyResolverFor',
    },

    baseUrl: '/base/source/js',

    shim: {
        'angular': {'exports': 'angular'},
        'angularMocks': {deps: ['angular'], 'exports': 'angular.mock'},
        'angular-route': {deps: ['angular']}
    },

    // Ask Require.js to load these files (all our tests).
    deps: tests,

    // Set test to start run once Require.js is done.
    callback: window.__karma__.start
});