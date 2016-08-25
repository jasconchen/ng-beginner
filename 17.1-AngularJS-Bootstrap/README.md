# AngularJS Bootstrap

> AngularJS 的首选样式表是 Twitter Bootstrap， Twitter Bootstrap 是目前最受欢迎的前端框架。

## Bootstrap

你可以在你的 AngularJS 应用中加入 Twitter Bootstrap，你可以在你的 `<head>` 元素中添加如下代码:	 

```
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
```

如果站点在国内，建议使用百度静态资源库的Bootstrap，代码如下：

```
<link rel="stylesheet" href="//apps.bdimg.com/libs/bootstrap/3.3.4/css/bootstrap.min.css">
```

以下是一个完整的 HTML 实例, 使用了 AngularJS 指令和 Bootstrap 类。

**实例1**

***HTML***

```
<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title></title>
		<link rel="stylesheet" href="../src/css/bootstrap.min.css">
	</head>
	<body>
		<div class="container" ng-controller="userCtrl">
			<h3>Users</h3>
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Edit</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
					<tbody>
						<tr ng-repeat="user in users">
							<td>
								<button class="btn" ng-click="editUser(user.id)">
									<span class="glyphicon glyphicon-pencil"></span> Edit
								</button>
							</td>
							<td>{{user.fName}}</td>
							<td>{{user.lName}}</td>
						</tr>
					</tbody>
				</thead>
			</table>
			<button class="btn btn-success" ng-click="editUser('new')">
			<span class="glyphicon glyphicon-user"></span> Create New User
			</button>
			<hr>
			<h3 ng-show="edit">Create New User:</h3>
			<h3 ng-hide="edit">Edit User:</h3>
			<form class="form-horizontal">
				<div class="form-group">
					<label class="col-sm-2 control-label">First Name:</label>
					<div class="col-sm-10">
						<input type="text" ng-model="fName" ng-disabled="!edit" placeholder="First Name">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">Last Name:</label>
					<div class="col-sm-10">
						<input type="text" ng-model="lName" ng-disabled="!edit" placeholder="Last Name">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">Password:</label>
					<div class="col-sm-10">
						<input type="password" ng-model="passw1" placeholder="Password">
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">Repeat:</label>
					<div class="col-sm-10">
						<input type="password" ng-model="passw2" placeholder="Repeat Password">
					</div>
				</div>
			</form>
			<hr>
			<button class="btn btn-success" ng-disabled="error || incomplete">
				<span class="glyphicon glyphicon-save"></span>  Save Changes
			</button>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="myUsers.js"></script>
	</body>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('userCtrl', userCtrlFn);

	userCtrlFn.$injector = ['$scope'];

	function userCtrlFn($scope){
		$scope.fName = '';
		$scope.lName = '';
		$scope.passw1 = '';
		$scope.passw2 = '';
		$scope.users = [
			{id:1,fName:'Hege',lName:'Pege'},
			{id:2,fName:'Kim',lName:'Pim'},
			{id:3,fName:'Sal',lName:'Smith'},
			{id:4,fName:'Jack',lName:'Jones'},
			{id:5,fName:'John',lName:'Doe'},
			{id:6,fName:'Peter',lName:'Pan'}
		];

		$scope.edit = true;
		$scope.error = false;
		$scope.incomplete = false;

		$scope.editUser = function(id){
			if (id == 'new') {
				$scope.edit = true;
				$scope.incomplete = true;
				$scope.fName = '';
				$scope.lName = '';
			}else {
				$scope.edit = false;
				$scope.fName = $scope.users[id-1].fName;
				$scope.lName = $scope.users[id-1].lName;
			}
		};
		$scope.$watch('passw1', function(){
			$scope.test();
		});
		$scope.$watch('passw2', function(){
			$scope.test();
		});
		$scope.$watch('fName', function(){
			$scope.test();
		});
		$scope.$watch('lName', function(){
			$scope.test();
		});

		$scope.test = function(){
			if ($scope.passw1 !== $scope.passw2) {
				$scope.error = true;
			}else {
				$scope.error = false;
			}
			$scope.incomplete = false;
			if ($scope.edit && (!$scope.fName.length || !$scope.lName.length || !$scope.passw1.length || !$scope.passw2.length)) {
				$scope.incomplete = true;
			}
		};
	}
```

***

## JavaScript 代码解析

| Scope 属性         | 用途                 						|
| ------------------ |:--------------------------------------------:|
| $scope.fName  	 | 模型变量 (用户名)       					    |
| $scope.lName  	 | 模型变量 (用户姓)       					    |
| $scope.passw1  	 | 模型变量 (用户密码 1)       					|
| $scope.passw2  	 | 模型变量 (用户密码 2)       					|
| $scope.users  	 | 模型变量 (用户的数组)       				    |
| $scope.edit  	 	 | 当用户点击创建用户时设置为true。        	    |
| $scope.error  	 | 如果 passw1 不等于 passw2 设置为 true       	|
| $scope.incomplete  | 如果每个字段都为空(length = 0)设置为 true	|
| $scope.editUser    | 设置模型变量       						 	|
| $scope.watch  	 | 监控模型变量       						 	|
| $scope.test  		 | 验证模型变量的错误和完整性       			|