angular.module('myApp', [])
	.controller('myCtrl', ['$scope', function($scope){
		$scope.fullname = {
			firstName: 'zeHui',
			lastName: 'chen'
		}
	}])