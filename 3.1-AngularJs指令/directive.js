angular.module('myApp', [])
	.directive('hello', function(){
		return {
			restrict:'EACM', //必填
			replace : true,
			template:'<h1>hello world</h1>' //必填
		}
	})