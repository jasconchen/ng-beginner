angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope', '$location'];

	function myCtrlFn($scope, $location){
		$scope.myUrl = $location.absUrl()
	}