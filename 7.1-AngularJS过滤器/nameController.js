angular.module('myApp', [])
	.controller('namesCtrl', namesCtrlFn);

	namesCtrlFn.$injector = ['$scope'];

	function namesCtrlFn($scope) {
		$scope.names = [
			{name:'Jani',country:'Norway'},
			{name:'Hege',country:'Sweden'},
			{name:'Kai',country:'Denmark'}
		]
	}
