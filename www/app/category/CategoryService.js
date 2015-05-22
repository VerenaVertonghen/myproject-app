angular.module('starter.CategoryService', []).factory('CategoryService', ['$http', '$q', '$base64', 'apiUrl',
    function($http, $q, $base64, apiUrl) {
        return {
            getCategories: getCategories
        };

        function getCategories($encodedLogin,$feeling) {
            console.log("into Service getCategories");
            console.log("apiUrl", apiUrl);
            console.log("encodedLogin",$encodedLogin);
            console.log("feeling",$feeling);
            
            var request = $http({
                method: "get",
                url: apiUrl + "/categories",
                headers: {
                    'Authorization': 'Basic ' + $encodedLogin
                }
            });
            return request;
        }
    }
]);