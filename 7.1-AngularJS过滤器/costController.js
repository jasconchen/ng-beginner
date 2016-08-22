angular.module('myApp', [])
	.controller('costCtrl', costCtrlFn);

	costCtrlFn.$injector = ['$scope'];

	function costCtrlFn($scope) {
		$scope.quantity = 1;
		$scope.price = 9.99;
	}