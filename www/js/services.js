angular.module('starter.services', [])
	.factory('CategoryService', ['$http','$q','$base64', 'apiUrl','admin','user',
	function($http,$q,$base64,apiUrl,admin,user){

		return{ 
			getCategories:getCategories
		};

		
		function getCategories(){
			console.log("into Service getCategories");
			console.log("user",user);
			console.log("apiUrl",apiUrl);

	        var request = $http({
	            method: "get",
	            url: apiUrl+"/categories",
	            headers: {
	            	'Authorization': 'Basic '+ $base64.encode(user)
		        }
	        });

	        return request;
	    }

	}])
	.factory('StateService', ['$http','$q','$base64', 'apiUrl','admin','user',
	function($http,$q,$base64,apiUrl,admin,user){

		return{ 
			getStates:getStates
		};

		
		function getStates(){
			console.log("into Service getStates");
			console.log("user",user);
			console.log("apiUrl",apiUrl);

	        var request = $http({
	            method: "get",
	            url: apiUrl+"/states",
	            headers: {
	            	'Authorization': 'Basic '+ $base64.encode(user)
		        }
	        });

	        return request;
	    }

	}])
	.factory('UserService', ['$http','$q','$base64', 'apiUrl','admin','user',
	function($http,$q,$base64,apiUrl,admin,user){

		return{ 
			getUser:getUser
		};

		
		function getUser($email,$password){
			console.log("into Service getUser");
			console.log("user",user);
			console.log("apiUrl",apiUrl);
			console.log("$email",$email);
			console.log("$password",$password);

	        var request = $http({
	            method: "get",
	            url: apiUrl+"/myprofile",
	            headers: {
	            	'Authorization': 'Basic '+ $base64.encode($email+":"+$password)
		        }
	        });

	        return request;
	    }

	}])
	;