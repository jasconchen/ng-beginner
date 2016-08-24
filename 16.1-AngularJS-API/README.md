# AngularJS API

> API 意为 Application Programming Interface（应用程序编程接口）。

## AngularJS 全局 API

AngularJS 全局 API 用于执行常见任务的 JavaScript 函数集合，如：

- 比较对象
- 迭代对象
- 转换对象

全局 API 函数使用 angular 对象进行访问。
以下列出了一些通用的 API 函数：

| API                  | 描述                 							 |
| -------------------- |:-----------------------------------------------:|
| angular.lowercase()  | 转换字符串为小写       						 |
| angular.uppercase()  | 转换字符串为大写       						 | 
| angular.isString()   | 判断给定的对象是否为字符串，如果是返回 true。   |
| angular.isNumber()   | 判断给定的对象是否为数字，如果是返回 true。     |

## angular.lowercase()

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
		<p>{{x1}}</p>
		<p>{{x2}}</p>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="lowercase.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope) {
		$scope.x1 = 'JOHN';
		$scope.x2 = angular.lowercase($scope.x1);
	}
```

***Result***

```
JOHN

john
```

## angular.uppercase()

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
	<div ng-controller="myCtrl">
		<p>{{x1}}</p>
		<p>{{x2}}</p>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="uppercase.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope) {
		$scope.x1 = 'John';
		$scope.x2 = angular.uppercase($scope.x1);
	}
```

***Result***

```
John

JOHN
```

## angular.isString()

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
	<div ng-controller="myCtrl">
		<p>{{x1}}</p>
		<p>{{x2}}</p>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="isString.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope) {
		$scope.x1 = 'JOHN';
		$scope.x2 = angular.isString($scope.x1);
	}
```

***Result***

```
JOHN

true
```

## angular.isNumber()

**实例4**

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
		<p>{{x1}}</p>
		<p>{{x2}}</p>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="isNumber.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope) {
		$scope.x1 = 'JOHN';
		$scope.x2 = angular.isNumber($scope.x1);
	}
```

***Result***

```
JOHN

false
```