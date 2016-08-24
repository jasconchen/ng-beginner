# AngularJS 输入验证

> AngularJS 表单和控件可以验证输入的数据。

## 输入验证

在前面的几个章节中，你已经学到关于 AngularJS 表单和控件的知识。
AngularJS 表单和控件可以提供验证功能，并对用户输入的非法数据进行警告。

**客户端的验证不能确保用户输入数据的安全，所以服务端的数据验证也是必须的。**

应用代码

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
	<h2>Validation Example</h2>

	<form name="myForm" ng-controller="validateCtrl">
		<p>用户名：<br>
			<input type="text" name="user" ng-model="user" required>
			<span style="color: red;" ng-show="myForm.user.$dirty && myForm.user.$invalid">
				<span ng-show="myForm.user.$error.required">用户名是必须的。</span>
			</span>
		</p>
		<p>邮箱：<br>
			<input type="email" name="email" ng-model="email" required>
			<span style="color: red;" ng-show="myForm.email.$dirty && myForm.email.$invalid">
				<span ng-show="myForm.email.$error.required">邮箱是必须的。</span>
  				<span ng-show="myForm.email.$error.email">非法的邮箱。</span>
			</span>
			
		</p>
		<p>
			<input type="submit" ng-disabled="myForm.user.$dirty && myForm.user.$invalid || myForm.email.$dirty && myForm.email.$invalid">
		</p>
	</form>

	<script src="../src/lib/angular.min.js"></script>
	<script src="validateCtrl.js"></script>
</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('validateCtrl', validateCtrlFn);

	validateCtrlFn.$injector = ['$scope'];

	function validateCtrlFn($scope) {
		$scope.user ='John Doe';
		$scope.email = 'john.doe@gmail.com';
	}
```

***Result***

```
Validation Example

用户名：

John Doe

邮箱：

john.doe@gmail.com

提交
```

**HTML 表单属性 novalidate 用于禁用浏览器默认的验证。**

## 实例解析

AngularJS **ng-model** 指令用于绑定输入元素到模型中。
模型对象有两个属性： **user** 和 **email**。
我们使用了 **ng-show** 指令， color:red 在邮件是 **$dirty** 或 **$invalid** 才显示。

| 属性        | 描述                 |
| ----------- |:--------------------:|
| $dirty      | 表单有填写记录       |
| $valid      | 字段内容合法的       | 
| $invalid    | 字段内容是非法的     |
| $pristine   | 表单没有填写记录     |