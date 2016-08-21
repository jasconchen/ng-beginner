angular.module('myApp', [])
	.controller('myCtrl', ['$scope', function($scope){
		$scope.names  = ['Volvo', 'chenzehui', 'chenminhao'];
	}])