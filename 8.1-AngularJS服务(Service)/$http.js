angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope', '$http'];

	function myCtrlFn($scope, $http) {
		$http.get('welcome.htm').then(function (res){
			$scope.mymywelcome = res.data;
		})
	}