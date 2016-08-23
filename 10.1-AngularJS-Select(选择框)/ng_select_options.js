angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.sites = [
		    {site : "Google", url : "http://www.google.com"},
		    {site : "Runoob", url : "http://www.runoob.com"},
		    {site : "Taobao", url : "http://www.taobao.com"}
		];
	}