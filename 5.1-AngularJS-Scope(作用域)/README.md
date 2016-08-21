# AngularJS Scope(作用域)

> Scope(作用域) 是应用在 HTML (视图) 和 JavaScript (控制器)之间的纽带。
Scope 是一个对象，有可用的方法和属性。
Scope 可应用在视图和控制器上。

## 如何使用 Scope

当你在 AngularJS 创建控制器时，你可以将 $scope 对象当作一个参数传递

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
	<p>控制器中的属性对应了视图上的属性：</p>

	<div ng-controller="myCtrl">
		<h1>{{carname}}</h1>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="$scope.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', ['$scope', function($scope){
		$scope.carname = 'Volvo';
	}])
```

***Result***

```
控制器中的属性对应了视图上的属性：

Volvo
```

> 当在控制器中添加 $scope 对象时，视图 (HTML) 可以获取了这些属性。
视图中，你不需要添加 $scope 前缀, 只需要添加属性名即可，如： {{carname}}。

## Scope 概述

AngularJS 应用组成如下：

- View(视图), 即 HTML。
- Model(模型), 当前视图中可用的数据。
- Controller(控制器), 即 JavaScript 函数，可以添加或修改属性。

scope 是模型。
scope 是一个 JavaScript 对象，带有属性和方法，这些属性和方法可以在视图和控制器中使用。

**实例2**

***HTML***

如果你修改了视图，模型和控制器也会相应更新：

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
	<p>控制器中的属性对应了视图上的属性：</p>

	<div ng-controller="myCtrl">
		<input type="text" ng-model="name">
		你输入的名字是：{{name}}
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="$scope2.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', ['$scope', function($scope){
		$scope.name  = 'Volvo';
	}])
```

***Result***

```
控制器中的属性对应了视图上的属性：


Volvo
 你输入的名字是：Volvo
```

## Scope 作用范围

了解你当前使用的 scope 是非常重要的。
在以上两个实例中，只有一个作用域 scope，所以处理起来比较简单，但在大型项目中， HTML DOM 中有多个作用域，这时你就需要知道你使用的 scope 对应的作用域是哪一个。

**实例3**

当我们使用 ng-repeat 指令时，每个重复项都访问了当前的重复对象

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
		<ul>
			<li ng-repeat="i in names">{{i}}</li>
		</ul>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="$scope3.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', ['$scope', function($scope){
		$scope.names  = ['Volvo', 'chenzehui', 'chenminhao'];
	}])
```

***Result***

```
Volvo
chenzehui
chenminhao
```

> 每个 `<li>` 元素可以访问当前的重复对象，这里对应的是一个字符串， 并使用变量 x 表示。

## 根作用域

所有的应用都有一个 $rootScope，它可以作用在 ng-app 指令包含的所有 HTML 元素中。
$rootScope 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。