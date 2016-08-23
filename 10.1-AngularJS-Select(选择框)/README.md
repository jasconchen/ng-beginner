# AngularJS Select(选择框)

>　AngularJS 可以使用数组或对象创建一个下拉列表选项。

## 使用 ng-options 创建选择框

在 AngularJS 中我们可以使用 ng-option 指令来创建一个下拉列表，列表项通过对象和数组循环输出，如下实例:

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
			<select ng-model="selectedName" ng-options="i for i in names">
			</select>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="ng-options.js"></script>
	</body>
</html>
</html>
```

***Javascript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.names = ['Google', 'Runoob', 'Taobao'];
	}
```

***Result***

```
<select ng-model="selectedName" ng-options="i for i in names" class="ng-pristine ng-valid ng-empty ng-touched">
	<option value="?" selected="selected"></option>
	<option label="Google" value="string:Google">Google</option>
	<option label="Runoob" value="string:Runoob">Runoob</option>
	<option label="Taobao" value="string:Taobao">Taobao</option>
</select>
```

## ng-options 与 ng-repeat

我们也可以使用ng-repeat 指令来创建下拉列表：

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
			<select>
				<option ng-repeat="i in names">{{i}}</option>
			</select>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="ng-options.js"></script>
	</body>
</html>
</html>
```

***Javascript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.names = ['Google', 'Runoob', 'Taobao'];
	}
```

***Result***

```
<select>
	<!-- ngRepeat: i in names --><option ng-repeat="i in names" class="ng-binding ng-scope" value="Google">Google</option><!-- end ngRepeat: i in names -->
	<option ng-repeat="i in names" class="ng-binding ng-scope" value="Runoob">Runoob</option><!-- end ngRepeat: i in names -->
	<option ng-repeat="i in names" class="ng-binding ng-scope" value="Taobao">Taobao</option><!-- end ngRepeat: i in names -->
</select>
```

> ng-repeat 指令是通过数组来循环 HTML 代码来创建下拉列表，但 ng-options 指令更适合创建下拉列表，它有以下优势：
使用 ng-options 的选项的一个对象， ng-repeat 是一个字符串。

## 应该用哪个更好?

假设我们使用以下对象:

```
$scope.sites = [
    {site : "Google", url : "http://www.google.com"},
    {site : "Runoob", url : "http://www.runoob.com"},
    {site : "Taobao", url : "http://www.taobao.com"}
];
```

ng-repeat 有局限性，选择的值是一个字符串:

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
			<p>选择网站:</p>
			<select ng-model="selectedSite">
				<option ng-repeat="i in sites" value="{{i.url}}">{{i.site}}</option>
			</select>
			<h3>你选择的是: {{selectedSite}}</h3>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="ng_select_repeat.js"></script>
	</body>
</html>
</html>
```

***Javascript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.sites = [
		    {site : "Google", url : "http://www.google.com"},
		    {site : "Runoob", url : "http://www.runoob.com"},
		    {site : "Taobao", url : "http://www.taobao.com"}
		];
	}
```

***Result***

```
选择网站:

Taobao

你选择的是: http://www.taobao.com
```

使用 ng-options 指令，选择的值是一个对象：

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
			<p>选择网站:</p>
			<select ng-model="selectedSite" ng-options="i.site for i in sites">
			</select>

			<h3>你选择的是:{{selectedSite.site}}</h3>
			<h3>网址为:{{selectedSite.url}}</h3>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="ng_select_options.js"></script>
	</body>
</html>
</html>
```

***Javascript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.sites = [
		    {site : "Google", url : "http://www.google.com"},
		    {site : "Runoob", url : "http://www.runoob.com"},
		    {site : "Taobao", url : "http://www.taobao.com"}
		];
	}
```

***Result***

```
选择网站:

Google

你选择的是:Google

网址为:http://www.google.com
```

当选择值是一个对象时，我们就可以获取更多信息，应用也更灵活。

## 数据源为对象

前面实例我们使用了数组作为数据源，以下我们将数据对象作为数据源。

```
$scope.sites = {
    site01 : "Google",
    site02 : "Runoob",
    site03 : "Taobao"
};
```

**实例5**

使用对象作为数据源, **i** 为键(key), **j** 为值(value):

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
			<p>选择网站:</p>
			<select ng-model="selectedSite" ng-options="i for (i,j) in sites">
			</select>

			<h3>你选择的是:{{selectedSite}}</h3>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="ng_select_object.js"></script>
	</body>
</html>
</html>
```

***Javascript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.sites = {
		    site01 : "Google",
		    site02 : "Runoob",
		    site03 : "Taobao"
		};
	}
```

***Result***

```
选择网站:

site01

你选择的是:Google
```

选择的值在 key-value 对的 value 中, 这是它是一个对象:

```
$scope.cars = {
	car01 : {brand : "Ford", model : "Mustang", color : "red"},
	car02 : {brand : "Fiat", model : "500", color : "white"},
	car03 : {brand : "Volvo", model : "XC90", color : "black"}
};
```

**实例6**

在下拉菜单也可以不使用 key-value 对中的 key , 直接使用对象的属性：

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
			<p>选择网站:</p>
			<select ng-model="selectedSite" ng-options="i for (i,j) in sites">
			</select>

			<h3>你选择的是:{{selectedSite}}</h3>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="ng_select_object.js"></script>
	</body>
</html>
</html>
```

***Javascript***

```
angular.module('myApp', [])
	.controller('myCtrl', myCtrlFn);

	myCtrlFn.$injector = ['$scope'];

	function myCtrlFn($scope){
		$scope.cars = {
			car01 : {brand : "Ford", model : "Mustang", color : "red"},
			car02 : {brand : "Fiat", model : "500", color : "white"},
			car03 : {brand : "Volvo", model : "XC90", color : "black"}
		};
	}
```

***Result***

```
选择一辆车:

Ford

你选择的是:Ford

型号为:Mustang

颜色为:red
```