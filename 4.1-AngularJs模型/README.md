# AngularJS ng-model 指令

> ng-model 指令用于绑定应用程序数据到 HTML 控制器(input, select, textarea)的值。

## ng-model 指令

ng-model 指令可以将输入域的值与 AngularJS 创建的变量绑定。

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
		名字：<input type="text" ng-model="name">
	</div>

	<script src="../src/lib/angular-1.3.0.js"></script>
	<script src="ng-model.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', function($scope){
		$scope.name = 'chenzehui';
	})
```

***Result***

```
名字：
chenzehui
```

## 双向绑定

双向绑定，在修改输入域的值时， AngularJS 属性的值也将修改

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
		名字：<input type="text" ng-model="name">
		<h3>你输入了：{{name}}</h3>
	</div>

	<script src="../src/lib/angular-1.3.0.js"></script>
	<script src="ng-model.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', function($scope){
		$scope.name = 'chenzehui';
	})
```

***Result***

```
名字：
chenzehuisadasda
你输入了：chenzehuisadasda
```

## 验证用户输入

双向绑定，在修改输入域的值时， AngularJS 属性的值也将修改

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
	<form name="myForm">
		Email:
		<input type="email" name="myAddress" ng-model="text">
		<span ng-show="myForm.myAddress.$error.email">不是一个合法的邮箱</span>
	</form>

	<script src="../src/lib/angular-1.3.0.js"></script>
	<script src="ng-model.js"></script>
</body>
</html>
```

***Result***

```
Email:  
4713031211qq1.com
 不是一个合法的邮箱
```

> 以上实例中，提示信息会在 ng-show 属性返回 true 的情况下显示。

## 应用状态

ng-model 指令可以为应用数据提供状态值(invalid, dirty, touched, error)

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
		<form name="myForm" ng-init="test='471303121@qq.com'">
			Email:
			<input type="email" name="myAddress" ng-model="test" required>
			<h3>状态</h3>
			<p>Valid: {{myForm.myAddress.$valid}} (如果输入的值是合法的则为 true)。</p>
			<p>Dirty: {{myForm.myAddress.$dirty}} (如果值改变则为 true)。</p>
			<p>Touched: {{myForm.myAddress.$touched}} (如果通过触屏点击则为 true)。</p>
		</form>
		<script src="../src/lib/angular.min.js"></script>
		<script src="ng-model.js"></script>
	</body>
</html>
```

***Result***

```
Email:  
471303121@qq.com
状态

Valid: true (如果输入的值是合法的则为 true)。

Dirty: false (如果值改变则为 true)。

Touched: true (如果通过触屏点击则为 true)。
```

> 1.5.x 版本需要 `angular.module('myApp', [])` 来启动angular应用

## CSS 类

ng-model 指令基于它们的状态为 HTML 元素提供了 CSS 类

**实例5**

***HTML***

```
<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title></title>
		<link rel="stylesheet" href="">
		<style type="text/css" media="screen">
			input.ng-invalid {
				background-color: lightblue;
			}
		</style>
	</head>
	<body>
		<form name="myForm">
			输入你的名字：
			<input type="text" name="myAddress" ng-model="text" required>
		</form>
		<script src="../src/lib/angular.min.js"></script>
		<script src="ng-model.js"></script>
	</body>
</html>
```

ng-model 指令根据表单域的状态添加/移除以下类：

- ng-empty
- ng-not-empty
- ng-touched
- ng-untouched
- ng-valid
- ng-invalid
- ng-dirty
- ng-pending
- ng-pristine