# AngularJS 指令

> AngularJS 通过被称为 指令 的新属性来扩展 HTML。
> AngularJS 通过内置的指令来为应用添加功能。
> AngularJS 允许你自定义指令。

## AngularJS 指令

- AngularJS 指令是扩展的 HTML 属性，带有前缀 ng-。
- ng-app 指令初始化一个 AngularJS 应用程序。
- ng-init 指令初始化应用程序数据。
- ng-model 指令把元素值（比如输入域的值）绑定到应用程序。
- 完整的指令内容可以参阅 [AngularJS 参考手册](http://www.runoob.com/angularjs/angularjs-reference.html)。

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

	<div ng-init="firstname='zehui'">
		<p>在输入框中尝试输入：</p>
		<p>姓名：<input type="text" ng-model="firstname"></p>
		<p>您输入的为：{{firstname}}</p>
	</div>

	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
在输入框中尝试输入：

姓名：
zehui

您输入的为：zehui
```

## 数据绑定

- 上面实例中的 {{ firstName }} 表达式是一个 AngularJS 数据绑定表达式。
- AngularJS 中的数据绑定，同步了 AngularJS 表达式与 AngularJS 数据。
- {{ firstName }} 是通过 ng-model="firstName" 进行同步。
- 在下一个实例中，两个文本域是通过两个 ng-model 指令同步的：

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

	<div ng-init="quantity=1;price=5">
		<h2>价格计算器</h2>
		<p>
			数量：<input type="number" ng-model="quantity">
		</p>
		<p>
			价格：<input type="number" ng-model="price">
		</p>
		<p><b>总价：</b>{{quantity * price}}</p>
	</div>

	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
价格计算器

数量：
1

价格：
5

总价：5
```

## 重复 HTML 元素

ng-repeat 指令会重复一个 HTML 元素

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
	<h1>ng-repeat 指令会重复一个 HTML 元素：</h1>
	<div ng-init="names1=['chenzehui', 'yangjing', 'chenminhao']">
		<p>使用 ng-repeat 来循环数组</p>
		<ul>
			<li ng-repeat="i in names1">
				{{i}}
			</li>
		</ul>
	</div>

	<h1>ng-repeat 指令会重复一个 HTML 元素：</h1>
	<div ng-init="names2=[
		{name: 'chenzehui', country: 'Norway'},
		{name: 'yangjing', country: 'Sweden'},
		{name: 'chenminhao', country: 'Denmark'},
	]">
		<p>循环对象：</p>
		<ul>
			<li ng-repeat="i in names2">
				{{i.name + ' ' + i.country}}
			</li>
		</ul>
	</div>				
	
	<script src="../src/lib/angular-1.3.0.js"></script>
</body>
</html>
```

***Result***

```
ng-repeat 指令会重复一个 HTML 元素：

使用 ng-repeat 来循环数组

chenzehui
yangjing
chenminhao

ng-repeat 指令会重复一个 HTML 元素：

循环对象：

chenzehui from Norway
yangjing from Sweden
chenminhao from Denmark
```

> AngularJS 完美支持数据库的 CRUD（增加Create、读取Read、更新Update、删除Delete）应用程序。
把实例中的对象想象成数据库中的记录。


**总结：**

***

**ng-app 指令**
**ng-app** 指令定义了 AngularJS 应用程序的 **根元素**。
**ng-app** 指令在网页加载完毕时会 **自动引导**（自动初始化）应用程序。
稍后您将学习到 **ng-app** 如何通过一个值（比如 ng-app="myModule"）连接到代码模块。

***

**ng-init 指令**
**ng-init** 指令为 AngularJS 应用程序定义了 **初始值**。
通常情况下，不使用 ng-init。您将使用一个控制器或模块来代替它。
稍后您将学习更多有关控制器和模块的知识。
***

**ng-model 指令**
**ng-model** 指令 **绑定 HTML 元素** 到应用程序数据。
**ng-model** 指令也可以：

- 为应用程序数据提供类型验证（number、email、required）。
- 为应用程序数据提供状态（invalid、dirty、touched、error）。
- 为 HTML 元素提供 CSS 类。
- 绑定 HTML 元素到 HTML 表单。

***

**ng-repeat 指令**
**ng-repeat** 指令对于集合中（数组中）的每个项会 **克隆一次 HTML 元素**。

***

## 创建自定义的指令

- 除了 AngularJS 内置的指令外，我们还可以创建自定义指令。
- 你可以使用 .directive 函数来添加自定义的指令。
- 要调用自定义指令，HTML 元素上需要添加自定义指令名。
- 使用驼峰法来命名一个指令， runoobDirective, 但在使用它时需要以 - 分割, runoob-directive

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
	<p>元素名 => E</p>
	<hello></hello>

	<p>属性 => A</p>
	<div hello></div>

	<p>类名 => C</p>
	<div class="hello"></div>

	<p>注释 => M</p>
	<!-- directive: hello -->
	
	<script src="../src/lib/angular-1.3.0.js"></script>
	<script src="directive.js"></script>
</body>
</html>
```

***Javascript***

```
angular.module('myApp', [])
	.directive('hello', function(){
		return {
			restrict:'EACM', //必填
			replace : true,
			template:'<h1>hello world</h1>' //必填
		}
	})
```

***Result***

```
元素名

hello world

属性

hello world

类名

hello world

注释

hello world
```

你可以通过以下方式来调用指令：

其中 **restrict** 值可以是以下几种:

- E 作为元素名使用
- A 作为属性使用
- C 作为类名使用
- M 作为注释使用

以下实例方式也能输出同样结果:

元素名 => E
```<hello></hello>```

属性 => A
```<div hello></div>```

类名 => C
```<div class="hello"></div>```

注释 => M
```<!-- directive: hello -->```

> 注意： 你必须设置 restrict 的值， 才能通过以上方式来调用指令。
> 注意： 我们需要在该注释实例添加 replace 属性， 否则结果是不可见的。

 **restrict** 常用值为 **EA** , 即可以通过 **元素名** 和 **属性名** 来调用指令。