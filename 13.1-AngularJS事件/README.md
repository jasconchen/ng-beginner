# AngularJS 事件

> AngularJS 有自己的 HTML 事件指令。

## ng-click 指令

**ng-click** 指令定义了 AngularJS 点击事件。

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
	
	<div ng-controller="myCtrl">
		<button ng-click="ngClick()">点我！</button>
		<p>{{count}}</p>
	</div>
	
	<script src="../src/lib/angular.min.js"></script>
	<script src="ngClick.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.count = 0;
		$scope.ngClick = function(){
			$scope.count += 1;
		}
	}
```

***Result***

```
点我！
6
```

## 隐藏 HTML 元素

**ng-hide** 指令用于设置应用部分是否可见。
**ng-hide="true"** 设置 HTML 元素不可见。
**ng-hide="false"** 设置 HTML 元素可见。

**实例2**

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
	
	<div ng-controller="personCtrl">
		<button ng-click="toggle()">隐藏/显示</button>
		<p ng-hide="myVar">
			名：<input type="text" ng-model="firstname">
			姓名：<input type="text" ng-model="lastname">
			<br>
			Full Name:{{firstname + ', ' + lastname}}
		</p>
	</div>
	
	<script src="../src/lib/angular.min.js"></script>
	<script src="ngHide.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('personCtrl', personCtrlFn);

	personCtrlFn.$injector = ['$scope'];

	function personCtrlFn($scope){
		$scope.firstname = 'John';
		$scope.lastname = 'Doe';
		$scope.toggle = function(){
			$scope.myVar = !$scope.myVar;
		}
	}
```

***Result***

```
隐藏/显示
名：
John
姓名：
Doe
 
Full Name:John, Doe
```

## 显示 HTML 元素

**ng-show** 指令可用于设置应用中的一部分是否可见 。
**ng-show="false"** 可以设置 HTML 元素 不可见。
**ng-show="true"** 可以以设置 HTML 元素可见。
以下实例使用了 ng-show 指令:

**实例3**

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
	
	<div ng-controller="personCtrl">
		<button ng-click="toggle()">隐藏/显示</button>
		<p ng-hide="myVar">
			名：<input type="text" ng-model="firstname">
			姓名：<input type="text" ng-model="lastname">
			<br>
			Full Name:{{firstname + ', ' + lastname}}
		</p>
	</div>
	
	<script src="../src/lib/angular.min.js"></script>
	<script src="ngShow.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('personCtrl', personCtrlFn);

	personCtrlFn.$injector = ['$scope'];

	function personCtrlFn($scope){
		$scope.firstname = 'John';
		$scope.lastname = 'Doe';
		$scope.myVar = true;
		$scope.toggle = function(){
			$scope.myVar = !$scope.myVar;
		}
	}
```

***Result***

```
隐藏/显示
名：
John
姓名：
Doe
 
Full Name:John, Doe
```
