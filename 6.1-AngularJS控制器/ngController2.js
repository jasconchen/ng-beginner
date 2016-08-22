angular.module('myApp', [])
	.controller('personCtrl', personCtrlFn);

	personCtrlFn.$injector = ['$scope'];

	function personCtrlFn($scope) {
		$scope.firstname = 'John';
		$scope.lastname = 'Doe';
		$scope.fullname = function(){
			return $scope.firstname + ' ' + $scope.lastname;
		}
	}