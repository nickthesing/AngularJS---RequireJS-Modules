
define([], function() {

	return {
		routes: {
			'/profile': { 
				templateUrl: '/views/pages/profile.html',
				dependencies: [
					'modules/profile/controllers/profileController'
				]
			},
			'/profile/edit': { 
				templateUrl: '/views/pages/profile-edit.html',
				dependencies: [
					'modules/profile/controllers/profileEditController'
				]
			}
		}
	}

});