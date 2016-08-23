angular.module('hexafyService',[])
	.service('hexafy', hexafyFn);

	function hexafyFn(){
		this.cb = function(x){
			if(x) return x.toString(16);
		}
	}

