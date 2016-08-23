angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.names = ['Google', 'Runoob', 'Taobao'];
	}