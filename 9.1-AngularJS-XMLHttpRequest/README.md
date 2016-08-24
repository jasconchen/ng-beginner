# AngularJS XMLHttpRequest

> **$http** 是 AngularJS 中的一个核心服务，用于读取远程服务器的数据。

```
以下实例均需要在服务器上运行，文件名记得需要英文
```

## 读取 JSON 文件

以下是存储在web服务器上的 JSON 文件：

```
{
"records":
[
{
"Name" : "Alfreds Futterkiste",
"City" : "Berlin",
"Country" : "Germany"
},
{
"Name" : "Berglunds snabbköp",
"City" : "Luleå",
"Country" : "Sweden"
},
{
"Name" : "Centro comercial Moctezuma",
"City" : "México D.F.",
"Country" : "Mexico"
},
{
"Name" : "Ernst Handel",
"City" : "Graz",
"Country" : "Austria"
},
{
"Name" : "FISSA Fabrica Inter. Salchichas S.A.",
"City" : "Madrid",
"Country" : "Spain"
},
{
"Name" : "Galería del gastrónomo",
"City" : "Barcelona",
"Country" : "Spain"
},
{
"Name" : "Island Trading",
"City" : "Cowes",
"Country" : "UK"
},
{
"Name" : "Königlich Essen",
"City" : "Brandenburg",
"Country" : "Germany"
},
{
"Name" : "Laughing Bacchus Wine Cellars",
"City" : "Vancouver",
"Country" : "Canada"
},
{
"Name" : "Magazzini Alimentari Riuniti",
"City" : "Bergamo",
"Country" : "Italy"
},
{
"Name" : "North/South",
"City" : "London",
"Country" : "UK"
},
{
"Name" : "Paris spécialités",
"City" : "Paris",
"Country" : "France"
},
{
"Name" : "Rattlesnake Canyon Grocery",
"City" : "Albuquerque",
"Country" : "USA"
},
{
"Name" : "Simons bistro",
"City" : "København",
"Country" : "Denmark"
},
{
"Name" : "The Big Cheese",
"City" : "Portland",
"Country" : "USA"
},
{
"Name" : "Vaffeljernet",
"City" : "Århus",
"Country" : "Denmark"
},
{
"Name" : "Wolski Zajazd",
"City" : "Warszawa",
"Country" : "Poland"
}
]
}
```

## AngularJS $http

AngularJS $http 是一个用于读取web服务器上数据的服务。
$http.get(url) 是用于读取服务器数据的函数。

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
			<ul>
				<li ng-repeat="i in names">
					{{i.Name +', '+ i.Country}}
				</li>
			</ul>
		</div>
		<script src="angular.min.js"></script>
		<script src="customersCtrl.js"></script>
	</body>
</html>
</html>
```

***JavaScript***

```
angular.module('myApp', [])
	.controller('customersCtrl', customersCtrlFn);

	customersCtrlFn.$injector = ['$scope', '$http'];

	function customersCtrlFn($scope, $http){
		$http.get('data/data.json')
				.success(function(res){
					console.log(res.records);
					$scope.names = res.records;
				})
	}	
```

***Result***

```
Alfreds Futterkiste, Germany
Berglunds snabbköp, Sweden
Centro comercial Moctezuma, Mexico
Ernst Handel, Austria
FISSA Fabrica Inter. Salchichas S.A., Spain
Galería del gastrónomo, Spain
Island Trading, UK
Königlich Essen, Germany
Laughing Bacchus Wine Cellars, Canada
Magazzini Alimentari Riuniti, Italy
North/South, UK
Paris spécialités, France
Rattlesnake Canyon Grocery, USA
Simons bistro, Denmark
The Big Cheese, USA
Vaffeljernet, Denmark
Wolski Zajazd, Poland
```