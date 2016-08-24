angular.module('myApp', [])
	.controller('formCtrl', formCtrlFn);

	formCtrlFn.$injector = ['$scope'];

	function formCtrlFn($scope){
		$scope.master = {firstname: 'John', lastname: 'Doe'};
		$scope.reset = function(){
			$scope.user = angular.copy($scope.master);
		}
		$scope.reset();
	}