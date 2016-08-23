angular.module('myApp', [])
	.controller('customersCtrl', customersCtrlFn);

	customersCtrlFn.$injector = ['$scope', '$http'];

	function customersCtrlFn($scope, $http){
		$http.get('data/data.json')
				.success(function(res){
					console.log(res.records);
					$scope.names = res.records;
				})
	}	