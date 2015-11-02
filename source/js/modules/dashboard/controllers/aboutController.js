
define([
	'../dashboard'
], function(module) {

	module.controller('aboutController', aboutController);

	function aboutController() {
		var vm = this;
		vm.title = "About Us";
	}
});