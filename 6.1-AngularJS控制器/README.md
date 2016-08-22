# AngularJS 控制器

> AngularJS 控制器 控制 AngularJS 应用程序的数据。
 AngularJS 控制器是常规的 JavaScript 对象。

## AngularJS 控制器

AngularJS 应用程序被控制器控制。
ng-controller 指令定义了应用程序控制器。
控制器是 JavaScript 对象，由标准的 JavaScript 对象的构造函数 创建。

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
		姓：<input type="text" ng-model="firstname">
		名：<input type="text" ng-model="lastname">
		<br>
		姓名：{{firstname +' '+lastname}}
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="ngController.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.firstname = 'John';
		$scope.lastname = 'Doe';
	}
```

***Result***

```
姓：
John
名：
Doe
 
姓名：John Doe
```

应用解析：

- AngularJS 应用程序由 **ng-app** 定义。应用程序在 `<div>` 内运行。
- **ng-controller="myCtrl"** 属性是一个 AngularJS 指令。用于定义一个控制器。
- **myCtrl** 函数是一个 JavaScript 函数。
- AngularJS 使用 **$scope** 对象来调用控制器。
- 在 AngularJS 中， **$scope** 是一个应用象(属于应用变量和函数)。
- 控制器的 **$scope** （相当于作用域、控制范围）用来保存AngularJS Model(模型)的对象。
- 控制器在作用域中创建了两个属性 (**firstName** 和 **lastName**)。
- **ng-model** 指令绑定输入域到控制器的属性（firstName 和 lastName）。

## 控制器方法

上面的实例演示了一个带有 lastName 和 firstName 这两个属性的控制器对象。
控制器也可以有方法（变量和函数）：

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
		姓：<input type="text" ng-model="firstname">
		名：<input type="text" ng-model="lastname">
		<br>
		姓名：{{ fullname() }}
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="ngController2.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('personCtrl', personCtrlFn);

	personCtrlFn.$injector = ['$scope'];

	function personCtrlFn($scope) {
		$scope.firstname = 'John';
		$scope.lastname = 'Doe';
		$scope.fullname = function(){
			return $scope.firstname +' '+ $scope.lastname;
		}
	}
```

***Result***

```
姓：
John
名：
Doe
 
姓名：John Doe
```

## 其他实例

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
	<div ng-controller="namesCtrl">
		<ul>
			<li ng-repeat="i in names">
				{{i.name + ', ' + i.country }}
			</li>
		</ul>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="namesController.js"></script>
</body>
</html>
```

***JavaScript***

```
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
```

***Result***

```
Jani, Norway
Hege, Sweden
Kai, Denmark
```