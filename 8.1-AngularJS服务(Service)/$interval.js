angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope', '$interval'];

	function myCtrlFn($scope, $interval) {
		$scope.thetime = new Date().toLocaleTimeString();
		$interval(function(){
			$scope.thetime = new Date().toLocaleTimeString()
		}, 1000);
	}