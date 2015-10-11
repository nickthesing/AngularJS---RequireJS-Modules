
define([], function() {

	return {
		defaultRoute: '/',

		routes: {
			'/': { 
				templateUrl: '/views/pages/home.html',
				dependencies: [
					'js/modules/dashboard/controllers/homeController'
				]
			},
			'/home': { 
				templateUrl: '/views/pages/home.html',
				dependencies: [
					'js/modules/dashboard/controllers/homeController'
				]
			},
			'/about': { 
				templateUrl: '/views/pages/about.html',
				dependencies: [
					'js/modules/dashboard/controllers/aboutController'
				]
			},
			'/login': { 
				templateUrl: '/views/pages/login.html',
				dependencies: [
					'js/modules/dashboard/controllers/loginController',
					'js/modules/dashboard/directives/custom-form'
				]
			}
		}
	}

});