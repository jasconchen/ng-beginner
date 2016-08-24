angular.module('myApp', [])
	.controller('personCtrl', personCtrlFn);

	personCtrlFn.$injector = ['$scope'];

	function personCtrlFn($scope){
		$scope.firstname = 'John';
		$scope.lastname = 'Doe';
		$scope.myVar = true;
		$scope.toggle = function(){
			$scope.myVar = !$scope.myVar;
		}
	}