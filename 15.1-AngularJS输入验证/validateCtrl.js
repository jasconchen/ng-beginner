angular.module('myApp', [])
	.controller('validateCtrl', validateCtrlFn);

	validateCtrlFn.$injector = ['$scope'];

	function validateCtrlFn($scope) {
		$scope.user ='John Doe';
		$scope.email = 'john.doe@gmail.com';
	}