# AngularJS 过滤器

> 过滤器可以使用一个管道字符（|）添加到表达式和指令中。

## AngularJS 过滤器

AngularJS 过滤器可用于转换数据：

| 过滤器        | 描述                     |
| ------------- |:------------------------:|
| currency      | 格式化数字为货币格式。   |
| filter        | 从数组项中选择一个子集。 | 
| lowercase     | 格式化字符串为小写。     |
| uppercase     | 格式化字符串为大写。     |
| orderBy       | 根据某个表达式排列数组。 | 

## 表达式中添加过滤器

过滤器可以通过一个管道字符（|）和一个过滤器添加到表达式中。
(（下面的两个实例，我们将使用前面章节中提到的 person 控制器）)

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

	<h3>uppercase 过滤器将字符串格式化为大写：</h3>
	<div ng-controller="personCtrl">
		<p>姓名为：{{lastname | uppercase}}</p>
	</div>


	<h3>lowercase 过滤器将字符串格式化为小写：</h3>
	<div ng-controller="personCtrl">
		<p>姓名为：{{lastname | lowercase }}</p>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="personController.js"></script>
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
			return $scope.firstname + ' ' + $scope.lastname;
		}
	};
```

***Result***

```
uppercase 过滤器将字符串格式化为大写：

姓名为：DOE

lowercase 过滤器将字符串格式化为小写：

姓名为：doe
```

## currency 过滤器

currency 过滤器将数字格式化为货币格式：

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

	<div ng-controller="costCtrl">
		<input type="text" ng-model="quantity">
		<input type="text" ng-model="price">
		<p>总价 = {{(quantity * price) | currency }}</p>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="costController.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('costCtrl', costCtrlFn);

	costCtrlFn.$injector = ['$scope'];

	function costCtrlFn($scope) {
		$scope.quantity = 1;
		$scope.price = 9.99;
	}
```

***Result***

```
1
9.99
总价 = $9.99
```

## 向指令添加过滤器

过滤器可以通过一个管道字符（|）和一个过滤器添加到指令中。
orderBy 过滤器根据表达式排列数组：

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
			<li ng-repeat="i in names | orderBy:'country'">
				{{i.name + ', ' + i.country}}
			</li>
		</ul>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="nameController.js"></script>
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
Kai, Denmark
Jani, Norway
Hege, Sweden
```

## 过滤输入

输入过滤器可以通过一个管道字符（|）和一个过滤器添加到指令中，该过滤器后跟一个冒号和一个模型名称。
**filter** 过滤器从数组中选择一个子集：

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

	<div ng-controller="namesCtrl">
		<p><input type="text" ng-model="test"></p>
		<ul>
			<li ng-repeat="i in names | filter:test | orderBy:'country'">
				{{(i.name | uppercase) + ', ' + i.country}}
			</li>
		</ul>
	</div>

	<script src="../src/lib/angular.min.js"></script>
	<script src="nameController.js"></script>
</body>
</html>
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

j

JANI, Norway
```