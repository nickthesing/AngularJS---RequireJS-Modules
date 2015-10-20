
define([], function() {

	return {
		defaultRoute: '/',

		routes: {
			'/': { 
				templateUrl: '/views/pages/home.html',
				dependencies: [
					'modules/dashboard/controllers/homeController',
					'modules/dashboard/controllers/dashboardController'
				]
			},
			'/home': { 
				templateUrl: '/views/pages/home.html',
				dependencies: [
					'modules/dashboard/controllers/homeController'
				]
			},
			'/about': { 
				templateUrl: '/views/pages/about.html',
				dependencies: [
					'modules/dashboard/controllers/aboutController'
				]
			},
			'/login': { 
				templateUrl: '/views/pages/login.html',
				dependencies: [
					'modules/dashboard/controllers/loginController',
					'modules/dashboard/directives/custom-form'
				]
			}
		}
	}

});