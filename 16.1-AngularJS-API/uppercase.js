angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope) {
		$scope.x1 = 'John';
		$scope.x2 = angular.uppercase($scope.x1);
	}