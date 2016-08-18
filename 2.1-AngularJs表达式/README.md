# AngularJs表达式

> AngularJs 使用 **表达式** 把数据绑定到 HTML

## AngularJs表达式

- AngularJS 表达式写在双大括号内：{{ expression }}。
- AngularJS 表达式把数据绑定到 HTML，这与 ng-bind 指令有异曲同工之妙。
- AngularJS 将在表达式书写的位置"输出"数据。
- AngularJS 表达式 很像 JavaScript 表达式：它们可以包含文字、运算符和变量。
- 实例 {{ 5 + 5 }} 或 {{ firstName + " " + lastName }}

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
	
	<p>我的第一个表达式：{{5+5}}</p>
	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
我的第一个表达式：10
```

## AngularJS 数字

AngularJS 数字就像 JavaScript 数字

**实例2**

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

	<h1>AngularJS 实例</h1>
	<div ng-init="quantity=1;cost=5">
		<p>总价：{{quantity*cost}}</p>
	</div>


	<h1>使用 ng-bind 的相同实例</h1>
	<div ng-init="quantity=1;cost=5">
		<p>总价：<span ng-bind="quantity*cost"></span></p>
	</div>
	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```	

***Result***

```
总价：5
```

> **使用 ng-init 不是很常见。您将在控制器一章中学习到一个更好的初始化数据的方式。**

## AngularJS 字符串

AngularJS 字符串就像 JavaScript 字符串

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

	<h1>AngularJS 实例</h1>
	<p ng-init="firstname='zehui';lastname='chen'">
		姓名：{{firstname + ' ' + lastname}}
	</p>


	<h1>使用 ng-bind 的相同实例</h1>
	<p ng-init="firstname='zehui';lastname='chen'">
		姓名：<span ng-bind="firstname + ' ' + lastname"></span>
	</p>
	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
姓名：zehui chen
```

## AngularJS 对象

AngularJS 对象就像 JavaScript 对象

**实例4**

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

	<h1>AngularJS 实例</h1>
	<p ng-init="person={firstname: 'zehui', lastname: 'chen'}">
		姓：{{person.lastname}}
	</p>


	<h1>使用 ng-bind 的相同实例</h1>
	<p ng-init="person={firstname: 'zehui', lastname: 'chen'}">
		姓：<span ng-bind="person.lastname"></span>
	</p>
	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
AngularJS 实例

姓：chen

使用 ng-bind 的相同实例

姓：chen
```

## AngularJS 数组

AngularJS 数组就像 JavaScript 数组

**实例5**

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

	<h1>AngularJS 实例</h1>
	<p ng-init="points=[1,15,19,2,40]">
		第三个值为 {{points[2]}}
	</p>


	<h1>使用 ng-bind 的相同实例</h1>
	<p ng-init="points=[1,15,19,2,40]">
		第三个值为 <span ng-bind="points[2]"></span>
	</p>
	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
AngularJS 实例

第三个值为 19

使用 ng-bind 的相同实例

第三个值为 19
```

* * * *
## AngularJS 表达式 与 JavaScript 表达式

- 类似于 JavaScript 表达式，AngularJS 表达式可以包含字母，操作符，变量。
- 与 JavaScript 表达式不同，AngularJS 表达式可以写在 HTML 中。
- 与 JavaScript 表达式不同，AngularJS 表达式不支持条件判断，循环及异常。
- 与 JavaScript 表达式不同，AngularJS 表达式支持过滤器。