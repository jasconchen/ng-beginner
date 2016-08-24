# AngularJS HTML DOM

> AngularJS 为 HTML DOM 元素的属性提供了绑定应用数据的指令。

## ng-disabled 指令

**ng-disabled** 指令直接绑定应用程序数据到 HTML 的 disabled 属性。

**实例1**

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
	
	<div ng-init="switch=true">
		<p><button ng-disabled="switch">按钮</button></p>
		<p><input type="checkbox" ng-disabled="switch"></p>
		<p>{{switch}}</p>
	</div>
	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
按钮

true
```

实例讲解：
**ng-disabled** 指令绑定应用程序数据 "mySwitch" 到 HTML 的 disabled 属性。
**ng-model** 指令绑定 "mySwitch" 到 HTML input checkbox 元素的内容（value）。
如果 **switch** 为 **true**, 按钮将不可用。

## ng-show 指令

**ng-show** 指令隐藏或显示一个 HTML 元素。

**实例2**

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
	
	<div>
		<p ng-show="true">我是可见的</p>
		<p ng-show="false">我是不可见的</p>
	</div>
	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
我是可见的
```

ng-show 指令根据 value 的值来显示（隐藏）HTML 元素。
你可以使用表达式来计算布尔值（ true 或 false）。

## ng-hide 指令

**ng-hide** 指令用于隐藏或显示 HTML 元素。

**实例3**

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
	
	<div>
		<p ng-hide="true">我是不可见的</p>
		<p ng-hide="false">我是可见的</p>
	</div>
	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
我是可见的
```