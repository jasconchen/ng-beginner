angular.module('myApp', ['hexafyService'])
	.controller('myCtrl', myCtrlFn);

myCtrlFn.$injector = ['$scope', 'hexafy'];

function myCtrlFn($scope, hexafy) {
	$scope.clickButton = function() {
		console.log(typeof $scope.num);
		$scope.hex = hexafy.cb(parseInt($scope.num));
		console.log($scope.hex);
	}
}