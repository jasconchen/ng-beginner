angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope) {
		$scope.x1 = 'JOHN';
		$scope.x2 = angular.isNumber($scope.x1);
	}