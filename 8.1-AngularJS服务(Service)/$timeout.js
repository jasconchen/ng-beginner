angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope', '$timeout'];

	function myCtrlFn($scope, $timeout) {
		$scope.myheader = 'Hello World!';
		$timeout(function(){
			$scope.time--;
			$scope.myheader = 'How are you today?';
		}, 2000);
	}