angular.module('myApp', [])
	.controller('myCtrl', myCtrlFunc);

	myCtrlFunc.$injector = ['$scope', '$rootSocpe'];

	function myCtrlFunc($scope, $rootScope){
		$scope.names = ['Emil', 'Tobias', 'Linus'];
		$rootScope.lastname = 'Refsnes'
	}