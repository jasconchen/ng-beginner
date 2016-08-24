# AngularJS 表单

>　AngularJS 表单是输入控件的集合。

## HTML 控件

以下 HTML input 元素被称为 HTML 控件:

- input 元素
- select 元素
- button 元素
- textarea 元素

## HTML 表单

HTML 表单通常与 HTML 控件同时存在。

**实例1**

***HTML***

```
<!DOCTYPE html>
<html ng-app="myApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	
	<div ng-controller="formCtrl">
		<form>
			<p>First Name:</p>
			<input type="text" ng-model="user.firstname">
			<p>Last Name:</p>
			<input type="text" ng-model="user.lastname">
			<p><button ng-click="reset()">RESET</button></p>
		</form>

		<p>form = {{user}}</p>
		<p>master = {{master}}</p>
	</div>	
	
	<script src="../src/lib/angular.min.js"></script>
	<script src="formCtrl.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('formCtrl', formCtrlFn);

	formCtrlFn.$injector = ['$scope'];

	function formCtrlFn($scope){
		$scope.master = {firstname: 'John', lastname: 'Doe'};
		$scope.reset = function(){
			$scope.user = angular.copy($scope.master);
		}
		$scope.reset();
	}
```

***Result***

```
First Name:

John

Last Name:

Doe

RESET

form = {"firstname":"John","lastname":"Doe"}

master = {"firstname":"John","lastname":"Doe"}
```

## 实例解析

- **ng-app** 指令定义了 AngularJS 应用。
- **ng-controller** 指令定义了应用控制器。
- **ng-model** 指令绑定了两个 input 元素到模型的 **user** 对象。
- **formCtrl** 函数设置了 **master** 对象的初始值，并定义了 **reset()** 方法。
- **reset()** 方法设置了 **user** 对象等于 **master** 对象。
- **ng-click** 指令调用了 **reset()** 方法，且在点击按钮时调用。
- novalidate 属性在应用中不是必须的，但是你需要在 AngularJS 表单中使用，用于重写标准的 HTML5 验证。