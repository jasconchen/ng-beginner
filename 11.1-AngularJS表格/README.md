# AngularJS 表格

> ng-repeat 指令可以完美的显示表格。

## 在表格中显示数据

使用 angular 显示表格是非常简单的：

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
		<div ng-controller="customersCtrl">
			<table>
				<tr ng-repeat="i in names">
					<td>{{i.Name}}</td>
					<td>{{i.Country}}</td>
				</tr>
			</table>
		</div>
		<script src="angular.min.js"></script>
		<script src="table.js"></script>
	</body>
</html>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('customersCtrl', customersCtrlFn);

	customersCtrlFn.$injector = ['$scope', '$http'];

	function customersCtrlFn($scope, $http) {
		$http.get('data/data.json')
				.success(function(res){
					$scope.names = res.records;
				})
	}
```

***Result***

```
Alfreds Futterkiste	Germany
Berglunds snabbköp	Sweden
Centro comercial Moctezuma	Mexico
Ernst Handel	Austria
FISSA Fabrica Inter. Salchichas S.A.	Spain
Galería del gastrónomo	Spain
Island Trading	UK
Königlich Essen	Germany
Laughing Bacchus Wine Cellars	Canada
Magazzini Alimentari Riuniti	Italy
North/South	UK
Paris spécialités	France
Rattlesnake Canyon Grocery	USA
Simons bistro	Denmark
The Big Cheese	USA
Vaffeljernet	Denmark
Wolski Zajazd	Poland
```

## 使用 orderBy 过滤器

排序显示，可以使用 orderBy 过滤器: 

**实例2**

***HTML***

```
<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title></title>
		<link rel="stylesheet" href="table.css">
	</head>
	<body>
		<div ng-controller="customersCtrl">
			<table>
				<tr ng-repeat="i in names | orderBy:'Country'">
					<td>{{i.Name}}</td>
					<td>{{i.Country}}</td>
				</tr>
			</table>
		</div>
		<script src="angular.min.js"></script>
		<script src="table.js"></script>
	</body>
</html>
</html>
```

***CSS***

```
table, th , td {
  border: 1px solid grey;
  border-collapse: collapse;
  padding: 5px;
}
table tr:nth-child(odd) {
  background-color: #f1f1f1;
}
table tr:nth-child(even) {
  background-color: #ffffff;
}
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('customersCtrl', customersCtrlFn);

	customersCtrlFn.$injector = ['$scope', '$http'];

	function customersCtrlFn($scope, $http) {
		$http.get('data/data.json')
				.success(function(res){
					$scope.names = res.records;
				})
	}
```

***Result***

```

Ernst Handel	Austria
Laughing Bacchus Wine Cellars	Canada
Simons bistro	Denmark
Vaffeljernet	Denmark
Paris spécialités	France
Alfreds Futterkiste	Germany
Königlich Essen	Germany
Magazzini Alimentari Riuniti	Italy
Centro comercial Moctezuma	Mexico
Wolski Zajazd	Poland
FISSA Fabrica Inter. Salchichas S.A.	Spain
Galería del gastrónomo	Spain
Berglunds snabbköp	Sweden
Island Trading	UK
North/South	UK
Rattlesnake Canyon Grocery	USA
The Big Cheese	USA
```

## 使用 uppercase 过滤器

**实例3**

***HTML***

```
<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title></title>
		<link rel="stylesheet" href="table.css">
	</head>
	<body>
		<div ng-controller="customersCtrl">
			<h3>uppercase 过滤器将字符串格式化为大写：</h3>
			<table>
				<tr ng-repeat="i in names">
					<td>{{i.Name}}</td>
					<td>{{i.Country | uppercase:'Country'}}</td>
				</tr>
			</table>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="table.js"></script>
	</body>
</html>
</html>
```

***CSS***

```
table, th , td {
  border: 1px solid grey;
  border-collapse: collapse;
  padding: 5px;
}
table tr:nth-child(odd) {
  background-color: #f1f1f1;
}
table tr:nth-child(even) {
  background-color: #ffffff;
}
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('customersCtrl', customersCtrlFn);

	customersCtrlFn.$injector = ['$scope', '$http'];

	function customersCtrlFn($scope, $http) {
		$http.get('data/data.json')
				.success(function(res){
					$scope.names = res.records;
				})
	}
```

***Result***

```
uppercase 过滤器将字符串格式化为大写：

Alfreds Futterkiste	GERMANY
Berglunds snabbköp	SWEDEN
Centro comercial Moctezuma	MEXICO
Ernst Handel	AUSTRIA
FISSA Fabrica Inter. Salchichas S.A.	SPAIN
Galería del gastrónomo	SPAIN
Island Trading	UK
Königlich Essen	GERMANY
Laughing Bacchus Wine Cellars	CANADA
Magazzini Alimentari Riuniti	ITALY
North/South	UK
Paris spécialités	FRANCE
Rattlesnake Canyon Grocery	USA
Simons bistro	DENMARK
The Big Cheese	USA
Vaffeljernet	DENMARK
Wolski Zajazd	POLAND
```

## 显示序号 ($index)

表格显示序号可以在 `<td>` 中添加 $index: 

**实例4**

***HTML***

```
<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title></title>
		<link rel="stylesheet" href="table.css">
	</head>
	<body>
		<div ng-controller="customersCtrl">
			<table>
				<tr ng-repeat="i in names">
					<td>{{$index + 1}}</td>
					<td>{{i.Name}}</td>
					<td>{{i.Country | uppercase:'Country'}}</td>
				</tr>
			</table>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="table.js"></script>
	</body>
</html>
</html>
```

***CSS***

```
table, th , td {
  border: 1px solid grey;
  border-collapse: collapse;
  padding: 5px;
}
table tr:nth-child(odd) {
  background-color: #f1f1f1;
}
table tr:nth-child(even) {
  background-color: #ffffff;
}
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('customersCtrl', customersCtrlFn);

	customersCtrlFn.$injector = ['$scope', '$http'];

	function customersCtrlFn($scope, $http) {
		$http.get('data/data.json')
				.success(function(res){
					$scope.names = res.records;
				})
	}
```

***Result***

```
1	Alfreds Futterkiste	GERMANY
2	Berglunds snabbköp	SWEDEN
3	Centro comercial Moctezuma	MEXICO
4	Ernst Handel	AUSTRIA
5	FISSA Fabrica Inter. Salchichas S.A.	SPAIN
6	Galería del gastrónomo	SPAIN
7	Island Trading	UK
8	Königlich Essen	GERMANY
9	Laughing Bacchus Wine Cellars	CANADA
10	Magazzini Alimentari Riuniti	ITALY
11	North/South	UK
12	Paris spécialités	FRANCE
13	Rattlesnake Canyon Grocery	USA
14	Simons bistro	DENMARK
15	The Big Cheese	USA
16	Vaffeljernet	DENMARK
17	Wolski Zajazd	POLAND
```

## 使用 $even 和 $odd

**实例5**

***HTML***

```
<!DOCTYPE html>
<html ng-app="myApp">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title></title>
		<link rel="stylesheet" href="table.css">
	</head>
	<body>
		<div ng-controller="customersCtrl">
			<table>
				<tr ng-repeat="i in names">
					<td ng-if="$odd" style="background-color: #f1f1f1;">{{i.Name}}</td>
					<td ng-if="$even">{{i.Name}}</td>
					<td ng-if="$odd" style="background-color: #f1f1f1;">{{i.Country}}</td>
					<td ng-if="$even">{{i.Country}}</td>
				</tr>
			</table>
		</div>
		<script src="../src/lib/angular.min.js"></script>
		<script src="table.js"></script>
	</body>
</html>
</html>
```

***CSS***

```
table, th , td {
  border: 1px solid grey;
  border-collapse: collapse;
  padding: 5px;
}
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('customersCtrl', customersCtrlFn);

	customersCtrlFn.$injector = ['$scope', '$http'];

	function customersCtrlFn($scope, $http) {
		$http.get('data/data.json')
				.success(function(res){
					$scope.names = res.records;
				})
	}
```

***Result***

```
Alfreds Futterkiste	Germany
Berglunds snabbköp	Sweden
Centro comercial Moctezuma	Mexico
Ernst Handel	Austria
FISSA Fabrica Inter. Salchichas S.A.	Spain
Galería del gastrónomo	Spain
Island Trading	UK
Königlich Essen	Germany
Laughing Bacchus Wine Cellars	Canada
Magazzini Alimentari Riuniti	Italy
North/South	UK
Paris spécialités	France
Rattlesnake Canyon Grocery	USA
Simons bistro	Denmark
The Big Cheese	USA
Vaffeljernet	Denmark
Wolski Zajazd	Poland
```