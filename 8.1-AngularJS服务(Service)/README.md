# AngularJS 服务(Service)

> AngularJS 中你可以创建自己的服务，或使用内建服务。

## 什么是服务？

在 AngularJS 中，服务是一个函数或对象，可在你的 AngularJS 应用中使用。
AngularJS 内建了30 多个服务。
有个 $location 服务，它可以返回当前页面的 URL 地址。

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
			<p>当前页面的url:</p>
			<p>{{myUrl}}</p>

			<p>该实例使用了内建的 $location 服务获取当前页面的 URL。</p>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="$location.js"></script>
	</body>
</html>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope', '$location'];

	function myCtrlFn($scope, $location){
		$scope.myUrl = $location.absUrl()
	}
```

***Result***

```
当前页面的url:

file:///D:/Documents/GitHub/ng-beginner/8.1-AngularJS%E6%9C%8D%E5%8A%A1(Service)/%E5%AE%9E%E4%BE%8B1-$location%E6%9C%8D%E5%8A%A1.html#/

该实例使用了内建的 $location 服务获取当前页面的 URL。
```

> 注意 $location 服务是作为一个参数传递到 controller 中。如果要使用它，需要在 controller 中定义。

## 为什么使用服务?

**$http** 是 AngularJS 应用中最常用的服务。服务向服务器发送请求，应用响应服务器传送过来的数据。
AngularJS 会一直监控应用，处理事件变化， AngularJS 使用 **$location** 服务比使用 **window.location** 对象更好。

**实例2**

使用 **$http** 服务向服务器请求数据:

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
			<p>欢迎信息:</p>
			<p>{{mywelcome}}</p>
			
			<p> $http 服务向服务器请求信息，返回的值放入变量 "myWelcome" 中。</p>
		</div>
		<script src="angular.min.js"></script>
		<script src="$http.js"></script>
	</body>
</html>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope', '$http'];

	function myCtrlFn($scope, $http) {
		$http.get('welcome.htm').then(function (res){
			$scope.mymywelcome = res.data;
		})
	}
```

***Data***

```
welcome.htm

欢迎访问菜鸟教程
```

***Result***

```
欢迎信息:

欢迎访问菜鸟教程

$http 服务向服务器请求信息，返回的值放入变量 "myWelcome" 中。
```

## $timeout 服务

AngularJS **$timeout** 服务对应了 JS **window.setTimeout** 函数。

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
			<p>2秒后显示信息:</p>
			<p>{{myheader}}</p>

			<p>$timeout 访问在规定的毫秒数后执行指定函数。</p>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="$timeout.js"></script>
	</body>
</html>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope', '$timeout'];

	function myCtrlFn($scope, $timeout) {
		$scope.myheader = 'Hello World!';
		$timeout(function(){
			$scope.time--;
			$scope.myheader = 'How are you today?';
		}, 2000);
	}
```

***Result***

```
2秒后显示信息:

How are you today?

$timeout 访问在规定的毫秒数后执行指定函数。
```

## $interval 服务

AngularJS **$interval** 服务对应了 JS **window.setInterval** 函数。

**实例4**

每秒显示信息:

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
			<p>现在时间是:</p>
			<p>{{thetime}}</p>

			<p>$interval 访问在指定的周期(以毫秒计)来调用函数或计算表达式。</p>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="$interval.js"></script>
	</body>
</html>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope', '$interval'];

	function myCtrlFn($scope, $interval) {
		$scope.thetime = new Date().toLocaleTimeString();
		$interval(function(){
			$scope.thetime = new Date().toLocaleTimeString()
		}, 1000);
	}
```

***Result***

```
现在时间是:

上午10:28:17

$interval 访问在指定的周期(以毫秒计)来调用函数或计算表达式。
```

## 创建自定义服务

你可以创建访问自定义服务，链接到你的模块中：

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
	</head>
	<body>
		<div ng-controller="myCtrl">
			<p><input type="text" ng-model="num"> 的16进制是 <button ng-click="clickButton()">转换</button></p>
			<p>{{hex}}</p>

			<p>自定义服务，用于转换16进制数</p>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="hexafy-server.js"></script>
		<script src="hexafy-ctrl.js"></script>
	</body>
</html>
</html>
```

***hexafy-server.js***

```
angular.module('hexafyService',[])
	.service('hexafy', hexafyFn);

	function hexafyFn(){
		this.cb = function(x){
			if(x) return x.toString(16);
		}
	}
```

***hexafy-ctrl.js***

```
angular.module('myApp', ['hexafyService'])
	.controller('myCtrl', myCtrlFn);

myCtrlFn.$injector = ['$scope', 'hexafy'];

function myCtrlFn($scope, hexafy) {
	$scope.clickButton = function() {
		console.log(typeof $scope.num);
		$scope.hex = hexafy.cb(parseInt($scope.num));
		console.log($scope.hex);
	}
}
```

***Result***

```

255 的16进制是 转换

ff

自定义服务，用于转换16进制数
```
