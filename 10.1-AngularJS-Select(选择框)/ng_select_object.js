angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.sites = {
		    site01 : "Google",
		    site02 : "Runoob",
		    site03 : "Taobao"
		};
	}