angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.cars = {
			car01 : {brand : "Ford", model : "Mustang", color : "red"},
			car02 : {brand : "Fiat", model : "500", color : "white"},
			car03 : {brand : "Volvo", model : "XC90", color : "black"}
		};
	}