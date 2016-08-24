angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.count = 0;
		$scope.ngClick = function(){
			$scope.count += 1;
		}
	}
	