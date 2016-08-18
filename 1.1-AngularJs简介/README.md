# AngularJS 简介


> *AngularJS* 是一个 JavaScript 框架。它可通过 `<script>` 标签添加到 HTML 页面。
> *AngularJS* 通过 指令 扩展了 HTML，且通过 表达式 绑定数据到 HTML。


## AngularJS 是一个 JavaScript 框架


AngularJS 是一个 JavaScript 框架。它是一个以 JavaScript 编写的库。
AngularJS 是以一个 JavaScript 文件形式发布的，可通过 `script` 标签添加到网页中：


```
<script src="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js"></script>
```

> ** 各个 angular.js 版本下载： https://github.com/angular/angular.js/releases **

## 什么是 AngularJS？

	AngularJS 使得开发现代的单一页面应用程序（SPAs：Single Page Applications）变得更加容易。

- AngularJS 把应用程序数据绑定到 HTML 元素。
- AngularJS 可以克隆和重复 HTML 元素。
- AngularJS 可以隐藏和显示 HTML 元素。
- AngularJS 可以在 HTML 元素"背后"添加代码。
- AngularJS 支持输入验证。

## AngularJS 指令

***HTML***

```
<!DOCTYPE html>
<html ng-app>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	<div ng-controller="HelloAngular">
		<p>{{greeting.text}}, Angular!</p>
	</div>

	<script src="../src/lib/angular-1.3.0.js"></script>
	<script src="helloworld.js"></script>
</body>
</html>
```

***JavaScript***

```
function HelloAngular($scope) {
	$scope.greeting = {
		text: 'Hello'
	}
}
```

***Result***

```
Hello, Angular!
```

## AngularJS 表达式

- AngularJS 表达式写在双大括号内：{{ expression }}。
- AngularJS 表达式把数据绑定到 HTML，这与 ng-bind 指令有异曲同工之妙。
- AngularJS 将在表达式书写的位置"输出"数据。
- AngularJS 表达式 很像 JavaScript 表达式：它们可以包含文字、运算符和变量。
- 实例 {{ 5 + 5 }} 或 {{ firstName + " " + lastName }}


**实例**

***HTML***

```
<!DOCTYPE html>
<html ng-app>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	<p>我的第一个表达式：{{5 + 5}}</p>

	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
我的第一个表达式：10
```

## AngularJS 应用

- AngularJS 模块（Module） 定义了 AngularJS 应用。
- AngularJS 控制器（Controller） 用于控制 AngularJS 应用。
- ng-app指令定义了应用, ng-controller 定义了控制器。


**实例**

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
			名：<input type="text" ng-model="fullname.firstName">
			姓：<input type="text" ng-model="fullname.lastName">
			<p>姓名：{{fullname.firstName + ' ' + fullname.lastName}}</p>
		</div>
		
		<script src="../src/lib/angular-1.3.0.js"></script>
		<script src="myApp.js"></script>
	</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', ['$scope', function($scope){
		$scope.fullname = {
			firstName: 'zeHui',
			lastName: 'chen'
		}
	}])
```

***Result***

```
名：
zeHui
 姓：
chen
姓名：zeHui chen
```